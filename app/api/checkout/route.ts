import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import { getStripeClient } from "@/lib/stripe"
import {
  calculateCartTotal,
  countCartQuantity,
  normaliseCartItems,
} from "@/lib/checkout"

export async function POST(req: Request) {
  const stripe = getStripeClient()

  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    )
  }

  const payload = await req.json().catch(() => ({ cartItems: [] }))
  const cartItems = normaliseCartItems(payload?.cartItems)

  if (cartItems.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 })
  }

  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.unitAmount,
    },
    quantity: item.quantity,
  }))

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
  const orderId = randomUUID()
  const cartTotalCents = calculateCartTotal(cartItems)
  const cartQuantity = countCartQuantity(cartItems)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/orders`,
      cancel_url: `${baseUrl}/cart`,
      metadata: {
        orderId,
        cartTotalCents: String(cartTotalCents),
        cartQuantity: String(cartQuantity),
      },
    })

    if (typeof session.url !== "string") {
      return NextResponse.json(
        { error: "Unable to start checkout. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Failed to create Stripe checkout session", error)
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    )
  }
}
