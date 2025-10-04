import Card from "@/components/ui/Card"
import { fetchStripeSettings } from "@/lib/stripe-admin"

const severityStyles: Record<string, string> = {
  info: "bg-sky-100 text-sky-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
}

function formatCaptureLabel(mode: string | null) {
  switch (mode) {
    case "automatic":
      return "Automatic capture"
    case "manual":
      return "Manual capture"
    default:
      return "Automatic capture"
  }
}

function formatInterval(interval: string | null, delayDays: number | null) {
  if (!interval) return "—"
  if (interval === "manual") return "Manual payouts"
  if (interval === "daily" && delayDays) {
    return `Daily, ${delayDays}-day rolling window`
  }
  return interval.charAt(0).toUpperCase() + interval.slice(1)
}

export default async function PaymentsSettingsView() {
  const stripeSettings = await fetchStripeSettings()

  const captureModes = [
    {
      name: "Automatic capture",
      description: "Charge cards immediately once the payment intent succeeds.",
      enabled: stripeSettings.captureMethod !== "manual",
    },
    {
      name: "Manual capture",
      description: "Authorise first and capture within seven days for high-value orders.",
      enabled: stripeSettings.captureMethod === "manual",
    },
  ]

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Payment gateway settings</h1>
        <p className="text-sm text-gray-600">
          Configure capture behaviour, webhook redundancy, and settlement preferences for the marketplace.
        </p>
      </header>

      <Card className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Capture behaviour</h2>
            <p className="text-sm text-gray-600">Choose how authorised payments are captured.</p>
          </div>
          <span className="text-xs uppercase tracking-wide text-emerald-600">
            {formatCaptureLabel(stripeSettings.captureMethod)}
          </span>
        </div>

        <ul className="space-y-3 text-sm text-gray-700">
          {captureModes.map((mode) => (
            <li
              key={mode.name}
              className="flex items-start gap-3 rounded-md border border-gray-200 px-4 py-3"
            >
              <span
                className={`mt-1 inline-flex size-3 rounded-full ${
                  mode.enabled ? "bg-emerald-500" : "bg-gray-300"
                }`}
                aria-hidden
              />
              <div>
                <p className="font-medium text-gray-900">{mode.name}</p>
                <p className="text-xs text-gray-500">{mode.description}</p>
                {mode.enabled && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">Active</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Webhook endpoints</h2>
        {stripeSettings.webhooks.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="py-3 pr-4">URL</th>
                  <th scope="col" className="py-3 pr-4">Status</th>
                  <th scope="col" className="py-3">Listening for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stripeSettings.webhooks.map((endpoint) => (
                  <tr key={endpoint.id}>
                    <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{endpoint.url}</td>
                    <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{endpoint.status}</td>
                    <td className="whitespace-nowrap py-3 text-gray-500">
                      {endpoint.enabledEvents.join(", ") || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
            No Stripe webhook endpoints detected. Add one in the Stripe dashboard to receive payment lifecycle events.
          </p>
        )}
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Settlement preferences</h2>
        {stripeSettings.payouts ? (
          <dl className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Bank account</dt>
              <dd>
                {stripeSettings.payouts.bankName ?? "Bank account"} •••• {stripeSettings.payouts.last4 ?? "—"}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Payout schedule</dt>
              <dd>{formatInterval(stripeSettings.payouts.interval, stripeSettings.payouts.delayDays)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Payout currency</dt>
              <dd className="uppercase">{stripeSettings.payouts.currency ?? stripeSettings.defaultCurrency ?? "—"}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-gray-600">
            Connect a Stripe bank account to surface settlement details here.
          </p>
        )}
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">System alerts</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {stripeSettings.alerts.map((alert) => (
            <li key={alert.title} className="rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
              <span
                className={`mb-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                  severityStyles[alert.severity]
                }`}
              >
                {alert.severity}
              </span>
              <p className="font-medium text-gray-900">{alert.title}</p>
              <p className="text-xs text-gray-600">{alert.detail}</p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
