"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const customers = [
  { id: 1, name: "Fatima Al Hosani", email: "fatima@tojar.ae", orders: 12 },
  { id: 2, name: "Omar Al Ali", email: "omar@tojar.ae", orders: 4 }
]

export default function CustomersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Customers</h1>
          <p className="text-gray-600 text-sm">View shopper activity and engagement levels.</p>
        </header>

        <Card>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Orders</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{customer.name}</td>
                  <td className="py-3">{customer.email}</td>
                  <td className="py-3">{customer.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AdminLayout>
  )
}
