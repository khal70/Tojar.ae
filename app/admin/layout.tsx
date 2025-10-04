import type { Metadata } from "next"
import type { ReactNode } from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@supabase/supabase-js"

import AdminSidebar from "@/components/admin/Sidebar"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Supabase server credentials are required to protect the admin layout."
  )
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
})

const loginRedirect = "/auth/login?redirectTo=%2Fadmin%2Fdashboard"

async function requireAdminSession() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("sb-access-token")?.value

  if (!accessToken) {
    redirect(loginRedirect)
  }

  const { data, error } = await supabaseAdmin.auth.getUser(accessToken)

  if (error || !data?.user) {
    redirect(loginRedirect)
  }
}

export const metadata: Metadata = {
  title: {
    default: "Admin | Tojar",
    template: "%s | Tojar Admin"
  },
  description: "Management console for overseeing orders, catalog, and site content."
}

export default async function AdminLayout({
  children
}: {
  children: ReactNode
}) {
  await requireAdminSession()

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
