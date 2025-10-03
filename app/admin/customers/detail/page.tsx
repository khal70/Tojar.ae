"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const customer = {
  name: "Fatima Al Hosani",
  email: "fatima@tojar.ae",
  phone: "+971 50 123 4567",
  totalOrders: 12,
  totalSpent: 2894.5,
  addresses: [
    "Villa 12, Palm Jumeirah, Dubai",
    "Office 402, Business Bay, Dubai"
  ]
}

export default function CustomerDetailPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">{customer.name}</h1>
          <p className="text-gray-600 text-sm">Comprehensive view of a customer's activity.</p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-700">Email</dt>
                <dd>{customer.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-700">Phone</dt>
                <dd>{customer.phone}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-700">Total Orders</dt>
                <dd>{customer.totalOrders}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-700">Total Spent</dt>
                <dd>${customer.totalSpent.toFixed(2)}</dd>
              </div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Addresses</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {customer.addresses.map((address) => (
                <li key={address}>{address}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
