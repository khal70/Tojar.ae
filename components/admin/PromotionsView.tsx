import Card from "@/components/ui/Card"
import SupabaseConfigAlert from "@/components/admin/SupabaseConfigAlert"
import { fetchAdminPromotions } from "@/lib/admin-data"
import { formatCurrency } from "@/lib/formatters"

const statusStyles: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  scheduled: "bg-blue-100 text-blue-700",
  draft: "bg-gray-200 text-gray-600",
  inactive: "bg-gray-200 text-gray-600",
}

function normaliseStatus(status: string) {
  return status.toLowerCase()
}

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

function formatDiscount(percent: number | null, amount: number | null) {
  if (percent !== null) {
    return `${percent}%`
  }
  if (amount !== null) {
    return formatCurrency(amount)
  }
  return "—"
}

export default async function PromotionsView() {
  const promotions = await fetchAdminPromotions()
  const activePromotions = promotions.filter((promo) => normaliseStatus(promo.status).includes("active"))
  const totalRedemptions = promotions.reduce((sum, promo) => sum + (promo.redemptions ?? 0), 0)
  const upcomingExpiries = promotions.filter((promo) => {
    if (!promo.endsAt) return false
    const expiry = new Date(promo.endsAt)
    if (Number.isNaN(expiry.getTime())) return false
    const now = new Date()
    const diff = expiry.getTime() - now.getTime()
    const sevenDays = 1000 * 60 * 60 * 24 * 7
    return diff >= 0 && diff <= sevenDays
  }).length

  const metrics = [
    {
      label: "Active codes",
      value: activePromotions.length.toLocaleString(),
      helper: "Currently live promotions",
    },
    {
      label: "Total campaigns",
      value: promotions.length.toLocaleString(),
      helper: "Fetched from Supabase",
    },
    {
      label: "Redemptions",
      value: totalRedemptions.toLocaleString(),
      helper: "Sum of redemption counts",
    },
    {
      label: "Expiring soon",
      value: upcomingExpiries.toLocaleString(),
      helper: "Within the next 7 days",
    },
  ]

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Promotion codes</h1>
        <p className="text-sm text-gray-600">
          Manage incentive campaigns, redemption performance, and automation triggers for customer segments.
        </p>
      </header>

      <SupabaseConfigAlert message="Promotion campaigns will surface once Supabase credentials are provided." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{metric.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.helper}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-900">Campaign performance</h2>
          <p className="text-sm text-gray-600">High performing codes and their current lifecycle stage.</p>
        </header>
        {promotions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="py-3 pr-4">Code</th>
                  <th scope="col" className="py-3 pr-4">Campaign</th>
                  <th scope="col" className="py-3 pr-4">Discount</th>
                  <th scope="col" className="py-3 pr-4">Redemptions</th>
                  <th scope="col" className="py-3 pr-4">Status</th>
                  <th scope="col" className="py-3">Ends</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {promotions.map((promo) => {
                  const statusKey = normaliseStatus(promo.status)
                  return (
                    <tr key={promo.id}>
                      <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{promo.code}</td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-700">{promo.name}</td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-600">
                        {formatDiscount(promo.discountPercent, promo.discountAmount)}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{promo.redemptions ?? "—"}</td>
                      <td className="whitespace-nowrap py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            statusStyles[statusKey] ?? statusStyles.inactive
                          }`}
                        >
                          {promo.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-3 text-gray-500">{formatDate(promo.endsAt)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
            No promotion codes found. Seed the Supabase <code className="font-mono">promotions</code> table to view campaigns.
          </p>
        )}
      </Card>
    </section>
  )
}
