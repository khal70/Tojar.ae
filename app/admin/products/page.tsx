'use client'
import AdminLayout from '@/components/ui/AdminLayout'
import Card from '@/components/ui/Card'

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Smartphone', price: 599 },
    { id: 2, name: 'T-Shirt', price: 29 }
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
      <Card>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="py-2">{p.id}</td>
                <td>{p.name}</td>
                <td>${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  )
}
