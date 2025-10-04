"use client"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const captureModes = [
  {
    name: "Automatic capture",
    description: "Charge cards immediately once the payment intent succeeds.",
    enabled: true
  },
  {
    name: "Manual capture",
    description: "Authorise first and capture within 7 days for high-value orders.",
    enabled: false
  }
]

const webhookEndpoints = [
  {
    url: "https://api.tojar.ae/payments/webhook",
    environment: "Production",
    events: "payment_intent.succeeded, payout.paid",
    status: "Healthy"
  },
  {
    url: "https://staging.tojar.ae/payments/webhook",
    environment: "Staging",
    events: "*",
    status: "Healthy"
  }
]

const alerts = [
  {
    title: "Settlement threshold",
    detail: `Payouts below ${formatCurrency(1_000)} are delayed until the threshold is reached.`,
    severity: "info"
  },
  {
    title: "New payment method available",
    detail: "Stripe has enabled Mada for UAE — review requirements to activate.",
    severity: "success"
  }
]

const severityStyles: Record<string, string> = {
  info: "bg-sky-100 text-sky-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700"
}

export default function PaymentsSettingsView() {
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
          <span className="text-xs uppercase tracking-wide text-emerald-600">Recommended</span>
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
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-3 pr-4">URL</th>
                <th scope="col" className="py-3 pr-4">Environment</th>
                <th scope="col" className="py-3 pr-4">Listening for</th>
                <th scope="col" className="py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {webhookEndpoints.map((endpoint) => (
                <tr key={endpoint.url}>
                  <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{endpoint.url}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{endpoint.environment}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-500">{endpoint.events}</td>
                  <td className="whitespace-nowrap py-3 text-emerald-600">{endpoint.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Settlement preferences</h2>
        <dl className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <dt className="font-medium text-gray-900">Bank account</dt>
            <dd>Mashreq Business •••• 1024</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-medium text-gray-900">Payout schedule</dt>
            <dd>Daily, 2-day rolling window</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-medium text-gray-900">Minimum payout</dt>
            <dd>{formatCurrency(1_000)}</dd>
          </div>
        </dl>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">System alerts</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {alerts.map((alert) => (
            <li key={alert.title} className="rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
              <span
                className={`mb-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                  severityStyles[alert.severity] ?? "bg-gray-100 text-gray-600"
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
