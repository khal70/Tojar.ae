import Card from "@/components/ui/Card"

const customers = [
  {
    id: 1,
    name: "Fatima Al Hosani",
    email: "fatima@tojar.ae",
    orders: 12,
    lifetimeValue: "AED 5,480",
  },
  {
    id: 2,
    name: "Omar Al Ali",
    email: "omar@tojar.ae",
    orders: 4,
    lifetimeValue: "AED 1,240",
  },
  {
    id: 3,
    name: "Layla Al Marri",
    email: "layla@tojar.ae",
    orders: 8,
    lifetimeValue: "AED 2,980",
  },
]

export default function CustomersView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Customers</h1>
        <p className="text-sm text-gray-600">Review shopper activity, engagement, and lifetime value at a glance.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">
                Name
              </th>
              <th scope="col" className="py-2">
                Email
              </th>
              <th scope="col" className="py-2">
                Orders
              </th>
              <th scope="col" className="py-2">
                Lifetime value
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{customer.name}</td>
                <td className="py-3 text-gray-600">{customer.email}</td>
                <td className="py-3 text-gray-600">{customer.orders}</td>
                <td className="py-3 text-gray-500">{customer.lifetimeValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
