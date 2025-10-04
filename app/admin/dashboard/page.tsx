import Link from "next/link"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const metrics = [
  { label: "Total revenue", value: formatCurrency(128_500), helper: "+12.4% vs. last month" },
  { label: "Orders", value: "412", helper: "Avg. delivery time 1.8 days" },
  { label: "New customers", value: "58", helper: "Retention 64%" }
]

const quickActions = [
  {
    title: "Approve refunds",
    description: "2 requests awaiting review in the orders queue.",
    href: "/admin/orders"
  },
  {
    title: "Schedule Eid banner",
    description: "Draft hero creative is ready to launch on 26 May.",
    href: "/admin/banners"
  },
  {
    title: "Enable Mada payments",
    description: "Complete compliance checklist to activate the method.",
    href: "/admin/payments/settings"
  }
]

const topCategories = [
  { name: "Beauty", share: "24% of revenue", growth: "+5.3%" },
  { name: "Home", share: "18% of revenue", growth: "+3.8%" },
  { name: "Fashion", share: "17% of revenue", growth: "−1.2%" }
]

const operationalAlerts = [
  {
    title: "Payout pending",
    detail: "Stripe settlement for AED 48,220 scheduled for 22 May.",
    severity: "info"
  },
  {
    title: "Return spike",
    detail: "10% increase in apparel returns vs. baseline — investigate sizing guidance.",
    severity: "warning"
  }
]

const severityStyles: Record<string, string> = {
  info: "bg-sky-100 text-sky-700",
  warning: "bg-amber-100 text-amber-700"
}

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Admin dashboard</h1>
        <p className="text-sm text-gray-600">
          Track marketplace performance, key growth levers, and operational follow-ups.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-gray-500">{metric.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            <p className="text-xs font-medium text-emerald-600">{metric.helper}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Quick actions</h2>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Stay ahead</span>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            {quickActions.map((action) => (
              <li key={action.title}>
                <Link
                  href={action.href}
                  className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{action.title}</p>
                    <p className="text-xs text-gray-500">{action.description}</p>
                  </div>
                  <span aria-hidden className="text-xl text-emerald-500">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Top categories</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {topCategories.map((category) => (
              <li key={category.name} className="rounded-md border border-gray-200 px-4 py-3">
                <p className="font-medium text-gray-900">{category.name}</p>
                <p className="text-xs text-gray-500">{category.share}</p>
                <p className="text-xs font-medium text-emerald-600">{category.growth}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Operational alerts</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {operationalAlerts.map((alert) => (
              <li key={alert.title} className="rounded-md border border-gray-200 px-4 py-3">
                <span
                  className={`mb-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                    severityStyles[alert.severity] ?? "bg-gray-200 text-gray-600"
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

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Fulfilment SLA</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center justify-between">
              <span>On-time deliveries</span>
              <span className="font-semibold text-emerald-600">94%</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Average dispatch</span>
              <span className="font-semibold text-gray-900">18 hours</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Return rate</span>
              <span className="font-semibold text-gray-900">3.4%</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
