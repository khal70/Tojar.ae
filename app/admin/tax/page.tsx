import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const taxRules = [
  { region: "UAE", rate: "5% VAT" },
  { region: "Saudi Arabia", rate: "15% VAT" }
]

export default function TaxSettingsPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Tax Settings</h1>
        <p className="text-sm text-gray-600">Control how VAT and regional taxes are applied at checkout.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">Region</th>
              <th scope="col" className="py-2">Rate</th>
            </tr>
          </thead>
          <tbody>
            {taxRules.map((rule) => (
              <tr key={rule.region} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{rule.region}</td>
                <td className="py-3">{rule.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  )
}
