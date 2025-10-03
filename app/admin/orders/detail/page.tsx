import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const order = {
  id: 101,
  customer: "user@example.com",
  status: "Paid",
  total: 628,
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
        <header className="space-y-1">
          <h1 className="text-3xl font-semibold">Order #{order.id}</h1>
          <p className="text-sm text-gray-600">Placed on {order.placedAt}</p>
        </header>

        <Card>
          <h2 className="text-lg font-semibold">Customer</h2>
          <dl className="mt-4 space-y-3 text-sm">
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
              <dd>{formatCurrency(order.total)}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Items</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {order.items.map((item) => (
              <li key={item.name} className="flex justify-between">
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span>{formatCurrency(item.price)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Shipping</h2>
          <p className="mt-4 text-sm text-gray-700">{order.shippingAddress}</p>
        </Card>
      </div>
    </AdminLayout>
  )
}
