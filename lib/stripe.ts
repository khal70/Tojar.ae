import Stripe from "stripe"

let stripeClient: Stripe | null | undefined
let cachedWebhookSecret: string | null | undefined

export function getStripeClient(): Stripe | null {
  if (stripeClient !== undefined) {
    return stripeClient
  }

  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "STRIPE_SECRET_KEY is not configured. Stripe functionality will be disabled until a key is provided."
      )
    }

    stripeClient = null
    return stripeClient
  }

  const apiVersion =
    (process.env.STRIPE_API_VERSION as Stripe.LatestApiVersion | undefined) ||
    (Stripe.API_VERSION as Stripe.LatestApiVersion)

  stripeClient = new Stripe(secretKey, { apiVersion })

  return stripeClient
}

export function getStripeWebhookSecret(): string | null {
  if (cachedWebhookSecret !== undefined) {
    return cachedWebhookSecret
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET ?? null

  if (!secret && process.env.NODE_ENV !== "production") {
    console.warn(
      "STRIPE_WEBHOOK_SECRET is not configured. Stripe webhook verification will be skipped until it is set."
    )
  }

  cachedWebhookSecret = secret
  return cachedWebhookSecret
}
