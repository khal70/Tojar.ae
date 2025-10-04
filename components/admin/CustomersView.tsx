import Card from "@/components/ui/Card"
import SupabaseConfigAlert from "@/components/admin/SupabaseConfigAlert"
import { fetchAdminCustomers } from "@/lib/admin-data"
import { formatCurrency } from "@/lib/formatters"

function formatDate(value: string | null) {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

export default async function CustomersView() {
  const customers = await fetchAdminCustomers()
  const totalLifetimeValue = customers.reduce((sum, customer) => sum + customer.lifetimeValue, 0)
  const averageLifetimeValue = customers.length ? totalLifetimeValue / customers.length : 0

  const summary = [
    {
      label: "Total customers",
      value: customers.length.toLocaleString(),
      helper: "Supabase customers or derived from orders",
    },
    {
      label: "Lifetime value",
      value: formatCurrency(totalLifetimeValue),
      helper: "Combined revenue attributed to customers",
    },
    {
      label: "Average spend",
      value: customers.length ? formatCurrency(averageLifetimeValue) : "—",
      helper: customers.length ? "Average lifetime value per customer" : "Awaiting data",
    },
  ]

  const displayCustomers = customers.slice(0, 50)

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Customers</h1>
        <p className="text-sm text-gray-600">Review shopper activity, engagement, and lifetime value at a glance.</p>
      </header>

      <SupabaseConfigAlert message="Customer insights populate once Supabase environment variables are configured." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.label} className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{item.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p className="text-xs text-gray-500">{item.helper}</p>
          </Card>
        ))}
      </div>

      <Card>
        {displayCustomers.length > 0 ? (
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
                <th scope="col" className="py-2">
                  Last order
                </th>
              </tr>
            </thead>
            <tbody>
              {displayCustomers.map((customer) => (
                <tr key={customer.id} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{customer.name}</td>
                  <td className="py-3 text-gray-600">{customer.email}</td>
                  <td className="py-3 text-gray-600">{customer.ordersCount.toLocaleString()}</td>
                  <td className="py-3 text-gray-500">
                    {customer.lifetimeValue ? formatCurrency(customer.lifetimeValue) : "—"}
                  </td>
                  <td className="py-3 text-gray-500">{formatDate(customer.lastOrderAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="rounded-md border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-600">
            No customers found yet. Seed Supabase with shopper accounts or orders to populate this table.
          </div>
        )}
      </Card>
    </section>
  )
}
