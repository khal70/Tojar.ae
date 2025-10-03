import Link from "next/link"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const quickLinks = [
  { href: "/admin/products", label: "Manage Products" },
  { href: "/admin/categories", label: "Manage Categories" },
  { href: "/admin/banners", label: "Manage Banners" },
  { href: "/admin/promotions", label: "Manage Promotions" },
  { href: "/admin/faqs", label: "Manage FAQs" },
  { href: "/admin/orders", label: "View Orders" },
  { href: "/admin/customers", label: "View Customers" }
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Welcome to Tojar Admin</h1>
        <p className="text-sm text-gray-600">Quick links to frequently accessed areas of the control panel.</p>
      </header>

      <Card>
        <ul className="grid gap-3 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="block rounded-md border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </AdminLayout>
  )
}
