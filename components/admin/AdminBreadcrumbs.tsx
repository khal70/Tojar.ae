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

function titleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ")
}

function isNumericSegment(segment: string) {
  return /^\d+$/.test(segment)
}

function isLikelyIdentifier(segment: string) {
  const cleaned = segment.replace(/-/g, "")
  if (cleaned.length < 6) {
    return false
  }

  return /^[0-9a-f]+$/i.test(cleaned)
}

function formatIdentifier(segment: string) {
  const cleaned = segment.replace(/-/g, "")
  if (cleaned.length <= 8) {
    return cleaned.toUpperCase()
  }

  return `${cleaned.slice(0, 8).toUpperCase()}…`
}

function getLabel(segment: string, index: number, segments: string[]) {
  if (labelMap[segment]) {
    return labelMap[segment]
  }

  if (isNumericSegment(segment)) {
    return `#${segment}`
  }

  if (isLikelyIdentifier(segment)) {
    return formatIdentifier(segment)
  }

  if (segment === "page" && index === segments.length - 1) {
    return "Page"
  }

  return titleCase(segment.replace(/-/g, " "))
}

export default function AdminBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    return { label: getLabel(segment, index, segments), href }
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
