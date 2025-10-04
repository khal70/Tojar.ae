"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import Logo from "@/public/images/logo-green.png"

type NavigationItem = {
  href: string
  label: string
}

type NavigationSection = {
  title: string
  items: NavigationItem[]
}

const navigation: NavigationSection[] = [
  {
    title: "Overview",
    items: [{ href: "/admin/dashboard", label: "Dashboard" }]
  },
  {
    title: "Commerce",
    items: [
      { href: "/admin/orders", label: "Orders" },
      { href: "/admin/customers", label: "Customers" },
      { href: "/admin/products", label: "Products" },
      { href: "/admin/promotions", label: "Promotions" },
      { href: "/admin/promotions/codes", label: "Promotion Codes" }
    ]
  },
  {
    title: "Content",
    items: [
      { href: "/admin/categories", label: "Categories" },
      { href: "/admin/banners", label: "Banners" },
      { href: "/admin/faqs", label: "FAQs" }
    ]
  },
  {
    title: "Configuration",
    items: [
      { href: "/admin/payments/settings", label: "Payment Gateway" },
      { href: "/admin/tax", label: "Tax Settings" },
      { href: "/admin/staff", label: "Staff Users" }
    ]
  }
]

function isActive(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === "/admin"
  }

  if (pathname === href) {
    return true
  }

  return pathname.startsWith(`${href}/`)
}

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(false)

  async function handleSignOut() {
    if (isSigningOut) return

    setIsSigningOut(true)

    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } finally {
      router.replace("/auth/login")
      router.refresh()
    }
  }

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-gray-900 text-gray-100">
      <div className="flex items-center gap-3 border-b border-gray-800 px-6 py-5">
        <Image src={Logo} alt="Tojar Admin" width={32} height={32} className="rounded" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Admin</p>
          <p className="text-lg font-semibold text-white">Tojar</p>
        </div>
      </div>

      <nav aria-label="Admin sections" className="flex-1 space-y-6 px-6 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{section.title}</p>
            <ul className="space-y-1.5">
              {section.items.map((item) => {
                const active = isActive(pathname, item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-gray-800 px-6 py-5">
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="w-full rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSigningOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </aside>
  )
}
