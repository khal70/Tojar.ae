import Card from "@/components/ui/Card"

const taxRules = [
  { region: "UAE", rate: "5% VAT", note: "Applied to all domestic orders." },
  { region: "Saudi Arabia", rate: "15% VAT", note: "Includes Riyadh warehouse shipments." },
  { region: "Kuwait", rate: "0%", note: "Zero-rated for cross-border deliveries." },
]

export default function TaxView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Tax Settings</h1>
        <p className="text-sm text-gray-600">Control how VAT and regional taxes are applied at checkout.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">
                Region
              </th>
              <th scope="col" className="py-2">
                Rate
              </th>
              <th scope="col" className="py-2">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {taxRules.map((rule) => (
              <tr key={rule.region} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{rule.region}</td>
                <td className="py-3 text-gray-600">{rule.rate}</td>
                <td className="py-3 text-gray-500">{rule.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
