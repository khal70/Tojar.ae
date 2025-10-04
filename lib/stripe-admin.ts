import { stripe } from "./stripe"

export type StripeWebhookSummary = {
  id: string
  url: string
  status: string
  enabledEvents: string[]
}

export type StripeAlert = {
  title: string
  detail: string
  severity: "info" | "success" | "warning"
}

export type StripePayoutSettings = {
  bankName: string | null
  last4: string | null
  status: string | null
  interval: string | null
  delayDays: number | null
  currency: string | null
}

export type StripeSettings = {
  accountName: string | null
  captureMethod: string | null
  defaultCurrency: string | null
  webhooks: StripeWebhookSummary[]
  payouts: StripePayoutSettings | null
  alerts: StripeAlert[]
}

const FALLBACK_SETTINGS: StripeSettings = {
  accountName: null,
  captureMethod: null,
  defaultCurrency: null,
  webhooks: [],
  payouts: null,
  alerts: [
    {
      title: "Connect Stripe",
      detail: "Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET environment variables to load live gateway settings.",
      severity: "info",
    },
  ],
}

export async function fetchStripeSettings(): Promise<StripeSettings> {
  try {
    const [account, webhookEndpoints] = await Promise.all([
      stripe.accounts.retrieve(),
      stripe.webhookEndpoints.list({ limit: 10 }),
    ])

    const captureMethod = account.settings?.card_payments?.capture_method ?? null
    const defaultCurrency = account.default_currency ?? null
    const accountName =
      account.settings?.dashboard?.display_name ?? account.business_profile?.name ?? account.id ?? null

    const webhooks: StripeWebhookSummary[] = (webhookEndpoints.data ?? []).map((endpoint) => ({
      id: endpoint.id,
      url: endpoint.url,
      status: endpoint.status ?? "disabled",
      enabledEvents: Array.isArray(endpoint.enabled_events)
        ? endpoint.enabled_events.map((event) => (typeof event === "string" ? event : "*"))
        : [],
    }))

    let payouts: StripePayoutSettings | null = null
    if (account.id) {
      const externalAccounts = await stripe.accounts.listExternalAccounts(account.id, {
        object: "bank_account",
        limit: 1,
      })

      const bankAccount = externalAccounts.data?.[0]
      if (bankAccount && bankAccount.object === "bank_account") {
        payouts = {
          bankName: bankAccount.bank_name ?? null,
          last4: bankAccount.last4 ?? null,
          status: bankAccount.status ?? null,
          interval: account.settings?.payouts?.schedule?.interval ?? null,
          delayDays: account.settings?.payouts?.schedule?.delay_days ?? null,
          currency: bankAccount.currency ?? account.default_currency ?? null,
        }
      }
    }

    const alerts: StripeAlert[] = []
    if (account.requirements?.disabled_reason) {
      alerts.push({
        title: "Account requires attention",
        detail: account.requirements.disabled_reason.replace(/_/g, " "),
        severity: "warning",
      })
    }

    if (account.future_requirements?.current_deadline) {
      alerts.push({
        title: "Upcoming verification deadline",
        detail: `Submit required documents before ${account.future_requirements.current_deadline}.`,
        severity: "info",
      })
    }

    if (alerts.length === 0 && account.details_submitted) {
      alerts.push({
        title: "Stripe connected",
        detail: "Gateway configuration fetched successfully.",
        severity: "success",
      })
    }

    return {
      accountName,
      captureMethod,
      defaultCurrency,
      webhooks,
      payouts,
      alerts,
    }
  } catch (error) {
    console.error("Failed to load Stripe settings", error)
    return FALLBACK_SETTINGS
  }
}
