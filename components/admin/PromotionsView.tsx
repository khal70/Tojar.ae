import Card from "@/components/ui/Card"

const promoCodes = [
  { code: "WELCOME10", discount: "10%", status: "Active", uses: 124 },
  { code: "FREESHIP", discount: "Free Shipping", status: "Draft", uses: 48 },
  { code: "RAMADAN25", discount: "25%", status: "Expired", uses: 310 },
]

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Expired: "bg-gray-200 text-gray-600",
}

export default function PromotionsView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Promotion Codes</h1>
        <p className="text-sm text-gray-600">Track and manage discount codes available to shoppers.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">
                Code
              </th>
              <th scope="col" className="py-2">
                Discount
              </th>
              <th scope="col" className="py-2">
                Status
              </th>
              <th scope="col" className="py-2">
                Total Uses
              </th>
            </tr>
          </thead>
          <tbody>
            {promoCodes.map((promo) => (
              <tr key={promo.code} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{promo.code}</td>
                <td className="py-3 text-gray-600">{promo.discount}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[promo.status] ?? statusStyles.Draft}`}
                  >
                    {promo.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{promo.uses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
