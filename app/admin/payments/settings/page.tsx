"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const gateways = [
  { name: "Stripe", enabled: true, currency: "AED" },
  { name: "PayPal", enabled: false, currency: "USD" }
]

export default function PaymentSettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Payment Gateway Settings</h1>
          <p className="text-gray-600 text-sm">
            Manage which payment providers are available to customers.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          {gateways.map((gateway) => (
            <Card key={gateway.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{gateway.name}</h2>
                  <p className="text-sm text-gray-600">Primary currency: {gateway.currency}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    gateway.enabled ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {gateway.enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
              <button className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
                Configure
              </button>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
