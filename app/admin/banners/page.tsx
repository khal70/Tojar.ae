"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const banners = [
  { id: 1, title: "Summer Sale", status: "Active" },
  { id: 2, title: "New Arrivals", status: "Scheduled" }
]

export default function BannersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Banners</h1>
          <p className="text-gray-600 text-sm">Manage hero banners currently live on the storefront.</p>
        </header>

        <Card>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="py-2">Title</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{banner.title}</td>
                  <td className="py-3">{banner.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AdminLayout>
  )
}
