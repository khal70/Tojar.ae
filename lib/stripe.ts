import Stripe from "stripe"

const secretKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY must be configured")
}

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET must be configured")
}

export const stripe = new Stripe(secretKey, {
  apiVersion: "2025-09-30.clover"
})

export const stripeWebhookSecret = webhookSecret
