import type { Metadata } from "next"
import type { ReactNode } from "react"

import AdminSidebar from "@/components/admin/Sidebar"

export const metadata: Metadata = {
  title: {
    default: "Admin | Tojar",
    template: "%s | Tojar Admin"
  },
  description: "Management console for overseeing orders, catalog, and site content."
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900/5 text-gray-900">
      <a
        href="#admin-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow"
      >
        Skip to content
      </a>

      <div className="flex min-h-screen">
        <AdminSidebar />

        <main id="admin-content" className="flex-1 overflow-y-auto bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10">{children}</div>
        </main>
      </div>
    </div>
  )
}
