"use client"

import type { ReactNode } from "react"
import { useState } from "react"

import AdminBreadcrumbs from "@/components/admin/AdminBreadcrumbs"
import AdminNavbar from "@/components/admin/Navbar"
import AdminSidebar from "@/components/admin/Sidebar"

type AdminShellProps = {
  children: ReactNode
  user: {
    name: string | null
    email: string | null
  }
}

export default function AdminShell({ children, user }: AdminShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900/5 text-gray-900">
      <a
        href="#admin-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow"
      >
        Skip to content
      </a>

      <div className="flex min-h-screen">
        <AdminSidebar collapsed={isSidebarCollapsed} />

        <div className="flex min-h-screen flex-1 flex-col">
          <AdminNavbar
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleSidebar={() => setIsSidebarCollapsed((value) => !value)}
            user={user}
          />

          <main id="admin-content" className="flex-1 overflow-y-auto bg-gray-50">
            <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10">
              <div className="mb-6">
                <AdminBreadcrumbs />
              </div>

              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
