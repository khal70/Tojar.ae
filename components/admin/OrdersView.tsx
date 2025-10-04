"use client"

import Link from "next/link"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const orderStats = [
  { label: "Total orders", value: "1,248", change: "+12% vs April" },
  { label: "Revenue", value: formatCurrency(248_320), change: "+8% vs April" },
  { label: "Average order value", value: formatCurrency(198), change: "−3% vs target" },
  { label: "Fulfilment SLA", value: "94%", change: "within 2 day promise" }
]

const orders = [
  {
    id: "#10328",
    customer: "Fatima Al Hosani",
    placed: "20 May 2024",
    total: 628,
    status: "Paid",
    payment: "Card"
  },
  {
    id: "#10327",
    customer: "Mohammed Al Nuaimi",
    placed: "20 May 2024",
    total: 184,
    status: "Preparing",
    payment: "Cash on delivery"
  },
  {
    id: "#10326",
    customer: "Layla Al Marri",
    placed: "19 May 2024",
    total: 912,
    status: "Fulfilled",
    payment: "Card"
  },
  {
    id: "#10325",
    customer: "Ahmed Al Haddad",
    placed: "19 May 2024",
    total: 72,
    status: "Awaiting payment",
    payment: "Bank transfer"
  }
]

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Preparing: "bg-blue-100 text-blue-700",
  Fulfilled: "bg-slate-100 text-slate-700",
  "Awaiting payment": "bg-amber-100 text-amber-700",
  Cancelled: "bg-rose-100 text-rose-700"
}

const timeline = [
  {
    time: "09:14",
    title: "Payment captured",
    description: "Order #10328 was paid with Visa ending 4455"
  },
  {
    time: "08:03",
    title: "Shipment created",
    description: "Aramex label generated for order #10327"
  },
  {
    time: "Yesterday",
    title: "Return initiated",
    description: "Customer requested return for order #10312"
  }
]

const fulfilmentQueue = [
  { id: "#10327", courier: "Aramex", eta: "24 May", stage: "Label printed" },
  { id: "#10318", courier: "Fetchr", eta: "23 May", stage: "Out for delivery" },
  { id: "#10311", courier: "DHL", eta: "22 May", stage: "Delivered" }
]

export default function OrdersView() {
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
              {orders.map((order) => (
                <tr key={order.id} className="align-middle">
                  <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{order.id}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-700">{order.customer}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-500">{order.placed}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-900">
                    {formatCurrency(order.total)}
                  </td>
                  <td className="whitespace-nowrap py-3 pr-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[order.status] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 text-gray-500">{order.payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Fulfilment queue</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {fulfilmentQueue.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">{entry.id}</p>
                  <p className="text-xs text-gray-500">Courier: {entry.courier}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">ETA {entry.eta}</p>
                  <p className="text-xs text-gray-500">{entry.stage}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Operations timeline</h2>
          <ol className="space-y-4 text-sm text-gray-700">
            {timeline.map((event) => (
              <li key={event.title} className="border-l border-gray-200 pl-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{event.time}</p>
                <p className="font-medium text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </section>
  )
}
