"use client"

import Image from "next/image"
import Link from "next/link"

import Logo from "@/public/images/logo-green.png"

const navigation = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/orders/detail", label: "Order Detail" },
  { href: "/admin/payments/settings", label: "Payment Gateway" },
  { href: "/admin/tax", label: "Tax Settings" },
  { href: "/admin/staff", label: "Staff Users" },
  { href: "/admin/promotions", label: "Promotions" },
  { href: "/admin/promotions/codes", label: "Promo Codes" },
  { href: "/admin/banners", label: "Banners" },
  { href: "/admin/faqs", label: "FAQs" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/customers/detail", label: "Customer Detail" }
]

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <Link href="/" className="flex items-center space-x-2 mb-8">
        <Image src={Logo} alt="Tojar Admin" width={32} height={32} />
        <span className="text-xl font-semibold">Tojar Admin</span>
      </Link>
      <nav className="space-y-3">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm font-medium text-gray-200 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
