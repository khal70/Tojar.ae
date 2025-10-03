import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const payouts = [
  { id: "P-8723", vendor: "Urban Outfitters", amount: 2850, status: "Paid", date: "2024-04-30" },
  { id: "P-8724", vendor: "Al Ain Souk", amount: 1640, status: "Processing", date: "2024-05-01" },
  { id: "P-8725", vendor: "Desert Bloom", amount: 920, status: "Pending", date: "2024-05-02" },
]

const statusStyles: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
}

export default function PaymentsView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Payments</h1>
        <p className="text-sm text-gray-600">
          Track payouts to marketplace vendors and keep tabs on settlement statuses.
        </p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">
                Payout ID
              </th>
              <th scope="col" className="py-2">
                Vendor
              </th>
              <th scope="col" className="py-2">
                Amount
              </th>
              <th scope="col" className="py-2">
                Status
              </th>
              <th scope="col" className="py-2">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{payout.id}</td>
                <td className="py-3 text-gray-600">{payout.vendor}</td>
                <td className="py-3 text-gray-600">{formatCurrency(payout.amount)}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[payout.status] ?? statusStyles.Pending
                    }`}
                  >
                    {payout.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{payout.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
