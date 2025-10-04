import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

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
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{customer.name}</h1>
        <p className="text-sm text-gray-600">Comprehensive view of a customer's activity.</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Profile</h2>
          <dl className="mt-4 space-y-3 text-sm">
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
              <dd>{formatCurrency(customer.totalSpent)}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Addresses</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {customer.addresses.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
