import Link from "next/link"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const orders = [
  { id: 101, user: "user@example.com", total: 628, status: "Paid" },
  { id: 102, user: "guest@example.com", total: 49.99, status: "Pending" }
]

export default function OrdersPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <p className="text-sm text-gray-600">Review the latest marketplace activity.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">ID</th>
              <th scope="col" className="py-2">User</th>
              <th scope="col" className="py-2">Total</th>
              <th scope="col" className="py-2">Status</th>
              <th scope="col" className="py-2 text-right">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">#{order.id}</td>
                <td className="py-3">{order.user}</td>
                <td className="py-3">{formatCurrency(order.total)}</td>
                <td className="py-3">{order.status}</td>
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
    </AdminLayout>
  )
}
