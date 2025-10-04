import Link from "next/link"

import Card from "@/components/ui/Card"
import { fetchAdminOrders } from "@/lib/admin-data"
import { formatCurrency } from "@/lib/formatters"

const statusStyles: Record<string, string> = {
  paid: "bg-emerald-100 text-emerald-700",
  fulfilled: "bg-emerald-100 text-emerald-700",
  processing: "bg-blue-100 text-blue-700",
  "awaiting payment": "bg-amber-100 text-amber-700",
  pending: "bg-amber-100 text-amber-700",
  preparing: "bg-blue-100 text-blue-700",
  cancelled: "bg-rose-100 text-rose-700",
  refunded: "bg-rose-100 text-rose-700",
}

function formatDate(value: string | null, options?: Intl.DateTimeFormatOptions) {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return new Intl.DateTimeFormat("en-GB", options).format(date)
}

function normaliseStatus(status: string) {
  return status.toLowerCase()
}

export default async function OrdersView() {
  const orders = await fetchAdminOrders()
  const totals = orders.map((order) => order.total ?? 0).filter((value) => Number.isFinite(value))
  const revenue = totals.reduce((sum, amount) => sum + amount, 0)
  const averageValue = totals.length ? revenue / totals.length : 0
  const fulfilledCount = orders.filter((order) => {
    const status = normaliseStatus(order.status)
    return ["paid", "fulfilled", "completed", "complete"].some((keyword) =>
      status.includes(keyword)
    )
  }).length
  const fulfilmentRate = orders.length ? Math.round((fulfilledCount / orders.length) * 100) : null

  const orderStats = [
    {
      label: "Orders synced",
      value: orders.length.toLocaleString(),
      change: orders.length ? "Loaded from Supabase" : "Awaiting data",
    },
    {
      label: "Revenue",
      value: formatCurrency(revenue),
      change: totals.length ? `Across ${totals.length} payments` : "Awaiting data",
    },
    {
      label: "Average order value",
      value: totals.length ? formatCurrency(averageValue) : "—",
      change: totals.length ? "Based on live orders" : "Awaiting data",
    },
    {
      label: "Fulfilment success",
      value: fulfilmentRate !== null ? `${fulfilmentRate}%` : "—",
      change: orders.length ? "Paid & fulfilled vs total" : "Awaiting data",
    },
  ]

  const latestOrders = orders.slice(0, 12)

  const timeline = latestOrders.slice(0, 3).map((order) => ({
    id: order.id,
    time: formatDate(order.createdAt, { hour: "2-digit", minute: "2-digit" }),
    title: `Order ${order.id}`,
    description: `${order.customer} • ${order.status}`,
  }))

  const fulfilmentQueue = latestOrders
    .filter((order) => {
      const status = normaliseStatus(order.status)
      return ["processing", "pending", "awaiting", "preparing"].some((keyword) =>
        status.includes(keyword)
      )
    })
    .map((order) => ({
      id: order.id,
      courier: order.paymentMethod ?? "—",
      eta: order.createdAt ? formatDate(order.createdAt, { day: "2-digit", month: "short" }) : "—",
      stage: order.status,
    }))
    .slice(0, 5)

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <p className="text-sm text-gray-600">
          Track order momentum, payment state, and fulfilment progress across the marketplace.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {orderStats.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p className="text-xs font-medium text-emerald-600">{stat.change}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Recent orders</h2>
            <p className="text-sm text-gray-600">Latest transactions and their current fulfilment states.</p>
          </div>
          <Link
            href="/admin/orders/detail"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            View example detail
          </Link>
        </header>

        {latestOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="py-3 pr-4">Order</th>
                  <th scope="col" className="py-3 pr-4">Customer</th>
                  <th scope="col" className="py-3 pr-4">Placed</th>
                  <th scope="col" className="py-3 pr-4">Total</th>
                  <th scope="col" className="py-3 pr-4">Status</th>
                  <th scope="col" className="py-3">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {latestOrders.map((order) => {
                  const statusKey = normaliseStatus(order.status)
                  return (
                    <tr key={order.id} className="align-middle">
                      <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{order.id}</td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-700">{order.customer}</td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-500">
                        {formatDate(order.createdAt, { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-900">
                        {order.total !== null ? formatCurrency(order.total) : "—"}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            statusStyles[statusKey] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-3 text-gray-500">{order.paymentMethod ?? "—"}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
            No orders found in Supabase yet. Create test orders to populate this dashboard.
          </p>
        )}
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Fulfilment queue</h2>
          {fulfilmentQueue.length > 0 ? (
            <ul className="space-y-3 text-sm text-gray-700">
              {fulfilmentQueue.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-gray-900">{entry.id}</p>
                    <p className="text-xs text-gray-500">{entry.stage}</p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <p>{entry.courier}</p>
                    <p>{entry.eta}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
              There are no in-flight orders awaiting fulfilment right now.
            </p>
          )}
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Latest activity</h2>
          {timeline.length > 0 ? (
            <ul className="space-y-3 text-sm text-gray-700">
              {timeline.map((event) => (
                <li key={event.id} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{event.time}</p>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
              When new orders arrive they will appear in this feed.
            </p>
          )}
        </Card>
      </div>
    </section>
  )
}
