import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const categories = [
  { id: 1, name: "Electronics", products: 124 },
  { id: 2, name: "Home & Living", products: 87 },
  { id: 3, name: "Beauty", products: 64 }
]

export default function CategoriesPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Categories</h1>
        <p className="text-sm text-gray-600">Organise the catalogue into intuitive browsing groups.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">Name</th>
              <th scope="col" className="py-2">Products</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{category.name}</td>
                <td className="py-3">{category.products}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  )
}
