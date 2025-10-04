"use client"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const payoutSchedule = [
  { label: "Next payout", value: "24 May 2024", description: formatCurrency(4_820) },
  { label: "Last payout", value: "17 May 2024", description: formatCurrency(4_105) },
  { label: "Average settlement", value: formatCurrency(3_980), description: "Across the past 4 weeks" }
]

const paymentMethods = [
  { method: "Visa / Mastercard", share: "62%", fee: "2.9% + AED 1.00", status: "Enabled" },
  { method: "Apple Pay", share: "18%", fee: "2.5%", status: "Enabled" },
  { method: "Tabby", share: "11%", fee: "5%", status: "Enabled" },
  { method: "Cash on delivery", share: "9%", fee: "AED 10", status: "Limited" }
]

const activities = [
  {
    title: "Dispute won",
    detail: "AED 420 retained for order #10291",
    timestamp: "19 May 2024 • Stripe"
  },
  {
    title: "New webhook delivery",
    detail: "checkout.session.completed for order #10324",
    timestamp: "19 May 2024 • 08:32"
  },
  {
    title: "Payout initiated",
    detail: "Transfer to Mashreq Business Account",
    timestamp: "17 May 2024 • 17:05"
  }
]

const checklist = [
  { label: "Realtime fraud monitoring", status: "Enabled via Stripe Radar" },
  { label: "Automatic currency conversion", status: "Enabled" },
  { label: "Webhook redundancy", status: "Active with 2 endpoints" }
]

export default function PaymentsView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Payments overview</h1>
        <p className="text-sm text-gray-600">
          Monitor the health of the payment stack, settlement cadence, and provider configuration.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Stripe UAE</h2>
              <p className="text-sm text-gray-600">Primary gateway connected to Mashreq Business banking.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Connected
            </span>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {payoutSchedule.map((item) => (
              <div key={item.label} className="rounded-md bg-gray-50 px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</dt>
                <dd className="text-sm font-medium text-gray-900">{item.value}</dd>
                <dd className="text-xs text-gray-500">{item.description}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Automation checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {checklist.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-emerald-500" aria-hidden />
                <div>
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-900">Accepted payment methods</h2>
          <p className="text-sm text-gray-600">Share of checkout volume across payment rails.</p>
        </header>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-3 pr-4">Method</th>
                <th scope="col" className="py-3 pr-4">Share of volume</th>
                <th scope="col" className="py-3 pr-4">Fees</th>
                <th scope="col" className="py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paymentMethods.map((method) => (
                <tr key={method.method}>
                  <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{method.method}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{method.share}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{method.fee}</td>
                  <td className="whitespace-nowrap py-3 text-gray-500">{method.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent payment activity</h2>
        <ul className="space-y-4 text-sm text-gray-700">
          {activities.map((activity) => (
            <li key={activity.title} className="rounded-md border border-gray-200 px-4 py-3">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.detail}</p>
              <p className="text-xs text-gray-500">{activity.timestamp}</p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
