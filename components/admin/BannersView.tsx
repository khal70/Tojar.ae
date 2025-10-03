import Card from "@/components/ui/Card"

const banners = [
  {
    id: 1,
    title: "Summer Sale",
    placement: "Homepage hero",
    status: "Active",
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    title: "New Arrivals",
    placement: "Homepage carousel",
    status: "Scheduled",
    lastUpdated: "1 hour ago",
  },
  {
    id: 3,
    title: "Electronics Week",
    placement: "Category spotlight",
    status: "Draft",
    lastUpdated: "Just now",
  },
]

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Scheduled: "bg-blue-100 text-blue-700",
  Draft: "bg-gray-200 text-gray-600",
}

export default function BannersView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Banners</h1>
        <p className="text-sm text-gray-600">
          Manage hero banners that promote offers and seasonal campaigns across the storefront.
        </p>
      </header>

      <Card>
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
            {banners.map((banner) => (
              <tr key={banner.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{banner.title}</td>
                <td className="py-3 text-gray-600">{banner.placement}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[banner.status] ?? statusStyles.Draft}`}
                  >
                    {banner.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{banner.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
