"use client"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const metrics = [
  { label: "Active codes", value: "8", helper: "Across marketplace campaigns" },
  { label: "Redemption rate", value: "34%", helper: "+6 pts vs last month" },
  { label: "Revenue influenced", value: formatCurrency(96_400), helper: "Past 30 days" },
  { label: "Discount cost", value: formatCurrency(12_180), helper: "Past 30 days" }
]

const promoCodes = [
  {
    code: "RAMADAN25",
    name: "Ramadan generosity",
    status: "Active",
    redemptions: 182,
    discount: "25%",
    ends: "31 May 2024"
  },
  {
    code: "WELCOME50",
    name: "New shopper welcome",
    status: "Scheduled",
    redemptions: 0,
    discount: formatCurrency(50),
    ends: "1 Jun 2024"
  },
  {
    code: "EIDDELIGHTS",
    name: "Eid bundles",
    status: "Draft",
    redemptions: 0,
    discount: "Buy 2 get 1",
    ends: "—"
  }
]

const automation = [
  {
    title: "Loyalty tier upsell",
    detail: "Automatically send 15% code to Gold members when cart exceeds AED 500.",
    status: "Enabled"
  },
  {
    title: "Abandoned cart recovery",
    detail: "Trigger AED 25 coupon after 12 hours of inactivity.",
    status: "Monitoring"
  }
]

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Scheduled: "bg-blue-100 text-blue-700",
  Draft: "bg-gray-200 text-gray-600"
}

export default function PromotionsView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Promotion codes</h1>
        <p className="text-sm text-gray-600">
          Manage incentive campaigns, redemption performance, and automation triggers for customer segments.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{metric.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.helper}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-900">Campaign performance</h2>
          <p className="text-sm text-gray-600">High performing codes and their current lifecycle stage.</p>
        </header>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-3 pr-4">Code</th>
                <th scope="col" className="py-3 pr-4">Campaign</th>
                <th scope="col" className="py-3 pr-4">Discount</th>
                <th scope="col" className="py-3 pr-4">Redemptions</th>
                <th scope="col" className="py-3">Status</th>
                <th scope="col" className="py-3">Ends</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {promoCodes.map((promo) => (
                <tr key={promo.code}>
                  <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{promo.code}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-700">{promo.name}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{promo.discount}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{promo.redemptions}</td>
                  <td className="whitespace-nowrap py-3 pr-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[promo.status] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {promo.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 text-gray-500">{promo.ends}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Automation playbooks</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {automation.map((rule) => (
              <li key={rule.title} className="rounded-md border border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{rule.title}</p>
                  <span className="text-xs uppercase tracking-wide text-emerald-600">{rule.status}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{rule.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Budget snapshot</h2>
          <dl className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Remaining budget</dt>
              <dd>{formatCurrency(18_400)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Spend this month</dt>
              <dd>{formatCurrency(12_180)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Average discount per order</dt>
              <dd>{formatCurrency(18)}</dd>
            </div>
          </dl>
        </Card>
      </div>
    </section>
  )
}
