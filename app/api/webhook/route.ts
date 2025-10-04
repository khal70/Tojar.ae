import type Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"

import { resend } from "@/lib/email"
import { getSupabaseServerClient } from "@/lib/supabase-server"
import { getStripeClient, getStripeWebhookSecret } from "@/lib/stripe"

export async function POST(req: NextRequest) {
  const stripe = getStripeClient()
  const webhookSecret = getStripeWebhookSecret()

  if (!stripe || !webhookSecret) {
    console.error("Stripe webhook attempted without valid configuration.")
    return new NextResponse("Stripe is not configured", { status: 500 })
  }

  const rawBody = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook error:", err)
    return new NextResponse("Webhook error", { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    await handleCheckoutSessionCompleted(event)
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutSessionCompleted(event: Stripe.Event) {
  const session = event.data.object as Stripe.Checkout.Session

  const supabase = getSupabaseServerClient()

  if (!supabase) {
    console.error("Supabase is not configured. Skipping order persistence for checkout session.")
    return
  }

  const customerEmail = typeof session.customer_email === "string" ? session.customer_email : null
  const amountTotal = typeof session.amount_total === "number" ? session.amount_total / 100 : null
  const paymentMethod = Array.isArray(session.payment_method_types)
    ? session.payment_method_types[0] ?? null
    : null

  const { data: order, error } = await supabase
    .from("orders")
    .insert([
      {
        user_id: session.client_reference_id ?? null,
        user_email: customerEmail,
        total: amountTotal,
        status: "paid",
        payment_method: paymentMethod,
      },
    ])
    .select()
    .maybeSingle()

  if (error) {
    console.error("Failed to insert Stripe checkout session into Supabase", error.message)
    return
  }

  if (!process.env.RESEND_API_KEY || !order) {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not configured. Skipping transactional emails.")
    }
    return
  }

  const totalDisplay = amountTotal !== null ? amountTotal.toFixed(2) : "0.00"

  const emailPromises = [
    resend.emails.send({
      from: "Tojar <orders@tojar.ae>",
      to: ["admin@tojar.ae"],
      subject: "🛒 New Order Placed",
      html: `<p>Order #${order.id} placed for $${totalDisplay}.</p>`,
    }),
  ]

  if (customerEmail) {
    emailPromises.push(
      resend.emails.send({
        from: "Tojar <orders@tojar.ae>",
        to: [customerEmail],
        subject: "✅ Your Tojar Order is Confirmed",
        html: `<h2>Thank you for your order!</h2><p>Order ID: ${order.id}<br>Total: $${totalDisplay}</p>`,
      })
    )
  }

  await Promise.allSettled(emailPromises)
}
