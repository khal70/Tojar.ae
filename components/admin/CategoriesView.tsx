import Card from "@/components/ui/Card"

const categories = [
  { id: 1, name: "Electronics", products: 124, lastUpdated: "Today" },
  { id: 2, name: "Home & Living", products: 87, lastUpdated: "Yesterday" },
  { id: 3, name: "Beauty", products: 64, lastUpdated: "3 days ago" },
  { id: 4, name: "Kids", products: 52, lastUpdated: "1 week ago" },
]

export default function CategoriesView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Categories</h1>
        <p className="text-sm text-gray-600">Organise the marketplace catalogue into intuitive browsing groups.</p>
      </header>

      <Card>
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
                <td className="py-3 text-gray-600">{category.products}</td>
                <td className="py-3 text-gray-500">{category.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
