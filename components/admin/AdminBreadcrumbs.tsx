"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const labelMap: Record<string, string> = {
  admin: "Admin",
  dashboard: "Dashboard",
  orders: "Orders",
  detail: "Detail",
  customers: "Customers",
  banners: "Banners",
  categories: "Categories",
  faqs: "FAQs",
  promotions: "Promotions",
  codes: "Codes",
  payments: "Payments",
  settings: "Settings",
  tax: "Tax",
  staff: "Staff",
  products: "Products"
}

function getLabel(segment: string) {
  return labelMap[segment] ?? segment.replace(/-/g, " ")
}

export default function AdminBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    return { label: getLabel(segment), href }
  })

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-gray-900">{crumb.label}</span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="transition hover:text-gray-900"
                  >
                    {crumb.label}
                  </Link>
                  <span aria-hidden>›</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
