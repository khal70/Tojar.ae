import Stripe from "stripe"

// Use dummy keys if environment variables are not set
const secretKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummy"
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "whsec_dummy"

export const stripe = new Stripe(secretKey, {
  apiVersion: "2025-09-30.clover",
})

// Webhook secret for validating incoming events
export const stripeWebhookSecret = webhookSecret
