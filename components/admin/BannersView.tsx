import Card from "@/components/ui/Card"
import { fetchAdminBanners } from "@/lib/admin-data"

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  scheduled: "bg-blue-100 text-blue-700",
  draft: "bg-gray-200 text-gray-600",
  inactive: "bg-gray-200 text-gray-600",
}

function normaliseStatus(status: string) {
  return status.toLowerCase()
}

function formatRelative(value: string | null) {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

export default async function BannersView() {
  const banners = await fetchAdminBanners()

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Banners</h1>
        <p className="text-sm text-gray-600">
          Manage hero banners that promote offers and seasonal campaigns across the storefront.
        </p>
      </header>

      <Card>
        {banners.length > 0 ? (
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-2">
                  Title
                </th>
                <th scope="col" className="py-2">
                  Placement
                </th>
                <th scope="col" className="py-2">
                  Status
                </th>
                <th scope="col" className="py-2">
                  Last updated
                </th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => {
                const statusKey = normaliseStatus(banner.status)
                return (
                  <tr key={banner.id} className="border-t border-gray-200">
                    <td className="py-3 font-medium text-gray-800">{banner.title}</td>
                    <td className="py-3 text-gray-600">{banner.placement}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          statusStyles[statusKey] ?? statusStyles.inactive
                        }`}
                      >
                        {banner.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{formatRelative(banner.updatedAt)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <div className="rounded-md border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-600">
            No banners found. Add rows to the Supabase <code className="font-mono">banners</code> table to manage storefront promos.
          </div>
        )}
      </Card>
    </section>
  )
}
