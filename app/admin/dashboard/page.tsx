"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const metrics = [
  { label: "Total Revenue", value: "AED 128,500" },
  { label: "Orders", value: "412" },
  { label: "New Customers", value: "58" }
]

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm">
            High-level overview of performance across the marketplace.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} className="text-center">
              <p className="text-sm uppercase tracking-wide text-gray-500">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">{metric.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
