import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
})

// Webhook secret for validating incoming events
export const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
