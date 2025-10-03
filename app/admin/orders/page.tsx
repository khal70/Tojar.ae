'use client'
import AdminLayout from '@/components/ui/AdminLayout'
import Card from '@/components/ui/Card'

export default function OrdersPage() {
  const orders = [
    { id: 101, user: 'user@example.com', total: 128.00, status: 'paid' },
    { id: 102, user: 'guest@example.com', total: 49.99, status: 'pending' }
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <Card>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="py-2">{o.id}</td>
                <td>{o.user}</td>
                <td>${o.total}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  )
}
