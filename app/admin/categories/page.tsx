"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const categories = [
  { id: 1, name: "Electronics", products: 128 },
  { id: 2, name: "Fashion", products: 86 }
]

export default function CategoriesPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Categories</h1>
          <p className="text-gray-600 text-sm">Group products into collections to simplify browsing.</p>
        </header>

        <Card>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Products</th>
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
      </div>
    </AdminLayout>
  )
}
