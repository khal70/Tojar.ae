import AdminLayout from "@/components/ui/AdminLayout"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-2">
        <li><Link className="text-blue-600 hover:underline" href="/admin/products">Manage Products</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/categories">Manage Categories</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/banners">Manage Banners</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/promotions">Manage Promotions</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/faqs">Manage FAQs</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/orders">View Orders</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/customers">View Customers</Link></li>
      </ul>
    </AdminLayout>
  )
}
