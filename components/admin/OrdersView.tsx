import Link from "next/link"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const orders = [
  { id: 101, user: "user@example.com", total: 628, status: "Paid", placedAt: "2024-05-02" },
  { id: 102, user: "guest@example.com", total: 49.99, status: "Pending", placedAt: "2024-05-01" },
  { id: 103, user: "fatima@tojar.ae", total: 189.5, status: "Refunded", placedAt: "2024-04-29" },
]

const statusStyles: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Refunded: "bg-red-100 text-red-700",
}

export default function OrdersView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <p className="text-sm text-gray-600">Review the latest marketplace activity and resolve fulfilment quickly.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">
                ID
              </th>
              <th scope="col" className="py-2">
                Customer
              </th>
              <th scope="col" className="py-2">
                Total
              </th>
              <th scope="col" className="py-2">
                Status
              </th>
              <th scope="col" className="py-2">
                Placed
              </th>
              <th scope="col" className="py-2 text-right">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">#{order.id}</td>
                <td className="py-3 text-gray-600">{order.user}</td>
                <td className="py-3 text-gray-600">{formatCurrency(order.total)}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status] ?? statusStyles.Pending}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{order.placedAt}</td>
                <td className="py-3 text-right">
                  <Link className="text-sm font-medium text-blue-600 hover:text-blue-500" href="/admin/orders/detail">
                    View order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
