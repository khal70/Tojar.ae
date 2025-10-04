import { NextRequest, NextResponse } from "next/server"
import { stripe, stripeWebhookSecret } from "@/lib/stripe"
import { createClient } from "@supabase/supabase-js"
import { resend } from "@/lib/email"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  if (!stripeWebhookSecret) {
    return new NextResponse("Stripe webhook secret is not configured", {
      status: 500
    })
  }

  const rawBody = await req.text()
  const sig = req.headers.get("stripe-signature")

  if (!sig) {
    return new NextResponse("Missing stripe-signature header", { status: 400 })
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, stripeWebhookSecret)
  } catch (err) {
    console.error("Webhook error:", err)
    return new NextResponse("Webhook error", { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const user_email = session.customer_email || 'unknown@tojar.ae'
    const total = session.amount_total / 100

    // Insert order in DB
    const { data: order, error } = await supabase
      .from('orders')
      .insert([{ user_id: null, total, status: 'paid' }])
      .select()
      .single()

    // Send email to admin
    await resend.emails.send({
      from: 'Tojar <orders@tojar.ae>',
      to: ['admin@tojar.ae'],
      subject: '🛒 New Order Placed',
      html: `<p>Order #${order.id} placed for $${total}.</p>`
    })

    // Send confirmation to customer
    await resend.emails.send({
      from: 'Tojar <orders@tojar.ae>',
      to: [user_email],
      subject: '✅ Your Tojar Order is Confirmed',
      html: `<h2>Thank you for your order!</h2><p>Order ID: ${order.id}<br>Total: $${total}</p>`
    })

    console.log('Emails sent for order:', order.id)
  }

  return NextResponse.json({ received: true })
}
