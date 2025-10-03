"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const taxRates = [
  { region: "UAE", rate: 5 },
  { region: "KSA", rate: 15 },
  { region: "Kuwait", rate: 0 }
]

export default function TaxSettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Tax Settings</h1>
          <p className="text-gray-600 text-sm">
            Configure VAT and regional taxes for your marketplaces.
          </p>
        </header>

        <Card>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="py-2">Region</th>
                <th className="py-2">Rate</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taxRates.map((tax) => (
                <tr key={tax.region} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{tax.region}</td>
                  <td className="py-3">{tax.rate}%</td>
                  <td className="py-3">
                    <button className="rounded border border-gray-300 px-3 py-1 text-xs font-medium hover:bg-gray-50">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AdminLayout>
  )
}
