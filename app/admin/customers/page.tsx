import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const customers = [
  { id: 1, name: "Fatima Al Hosani", email: "fatima@tojar.ae", orders: 12 },
  { id: 2, name: "Omar Al Ali", email: "omar@tojar.ae", orders: 4 }
]

export default function CustomersPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Customers</h1>
        <p className="text-sm text-gray-600">View shopper activity and engagement levels.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">Name</th>
              <th scope="col" className="py-2">Email</th>
              <th scope="col" className="py-2">Orders</th>
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
    </AdminLayout>
  )
}
