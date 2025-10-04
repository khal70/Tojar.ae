import { NextResponse } from "next/server"

import { getStripeClient } from "@/lib/stripe"

export async function POST(req: Request) {
  const stripe = getStripeClient()

  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    )
  }

  const body = await req.json()
  const { cartItems } = body

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 })
  }

  const lineItems = cartItems.map((item: any) => {
    const quantity = Number(item?.quantity ?? 1)
    const price = Number(item?.price ?? 0)
    const name = typeof item?.name === "string" ? item.name : "Item"

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name,
        },
        unit_amount: Math.round(Math.max(price, 0) * 100),
      },
      quantity: Number.isFinite(quantity) && quantity > 0 ? quantity : 1,
    }
  })

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/orders`,
      cancel_url: `${baseUrl}/cart`,
      metadata: {
        orderId: "placeholder",
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Failed to create Stripe checkout session", error)
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    )
  }
}
