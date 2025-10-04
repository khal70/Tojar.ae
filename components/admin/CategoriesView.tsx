import Card from "@/components/ui/Card"
import SupabaseConfigAlert from "@/components/admin/SupabaseConfigAlert"
import { fetchAdminCategories } from "@/lib/admin-data"

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

export default async function CategoriesView() {
  const categories = await fetchAdminCategories()
  const totalProducts = categories.reduce((sum, category) => sum + (category.productsCount ?? 0), 0)

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Categories</h1>
        <p className="text-sm text-gray-600">Organise the marketplace catalogue into intuitive browsing groups.</p>
      </header>

      <SupabaseConfigAlert message="Connect Supabase to populate real category data." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Categories</p>
          <p className="text-2xl font-semibold text-gray-900">{categories.length.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Synced from the Supabase categories table.</p>
        </Card>
        <Card className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Products assigned</p>
          <p className="text-2xl font-semibold text-gray-900">{totalProducts.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Total product count across fetched categories.</p>
        </Card>
      </div>

      <Card>
        {categories.length > 0 ? (
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-2">
                  Name
                </th>
                <th scope="col" className="py-2">
                  Products
                </th>
                <th scope="col" className="py-2">
                  Last updated
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{category.name}</td>
                  <td className="py-3 text-gray-600">{category.productsCount ?? "—"}</td>
                  <td className="py-3 text-gray-500">{formatDate(category.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="rounded-md border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-600">
            No categories available. Add entries in Supabase to populate this overview.
          </div>
        )}
      </Card>
    </section>
  )
}
