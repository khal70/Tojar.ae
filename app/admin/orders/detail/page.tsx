"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const order = {
  id: 101,
  customer: "user@example.com",
  status: "Paid",
  total: 128.0,
  placedAt: "2024-05-19 14:23",
  items: [
    { name: "Smartphone", quantity: 1, price: 599 },
    { name: "Protective Case", quantity: 1, price: 29 }
  ],
  shippingAddress: "123 Palm Street, Dubai, UAE"
}

export default function OrderDetailPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Order #{order.id}</h1>
          <p className="text-gray-600">Placed on {order.placedAt}</p>
        </header>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Customer</h2>
          <dl className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-700">Email</dt>
              <dd>{order.customer}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-700">Status</dt>
              <dd>{order.status}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-700">Total</dt>
              <dd>${order.total.toFixed(2)}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Items</h2>
          <ul className="space-y-2">
            {order.items.map((item) => (
              <li key={item.name} className="flex justify-between text-sm">
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-2">Shipping</h2>
          <p className="text-sm text-gray-700">{order.shippingAddress}</p>
        </Card>
      </div>
    </AdminLayout>
  )
}
