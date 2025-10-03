import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const metrics = [
  { label: "Total Revenue", value: formatCurrency(128500) },
  { label: "Orders", value: "412" },
  { label: "New Customers", value: "58" }
]

export default function DashboardPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-gray-600">High-level overview of performance across the marketplace.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label} className="text-center">
            <p className="text-xs uppercase tracking-wide text-gray-500">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold text-gray-900">{metric.value}</p>
          </Card>
        ))}
      </div>
    </AdminLayout>
  )
}
