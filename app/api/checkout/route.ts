import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  const body = await req.json()
  const { cartItems } = body

  const lineItems = cartItems.map((item: any) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: process.env.NEXT_PUBLIC_BASE_URL + '/orders',
    cancel_url: process.env.NEXT_PUBLIC_BASE_URL + '/cart',
    metadata: {
      orderId: 'placeholder'
    }
  })

  return NextResponse.json({ url: session.url })
}
