import type { Metadata } from "next"
import type { ReactNode } from "react"
import type { User } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@supabase/supabase-js"

import AdminShell from "@/components/admin/AdminShell"

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

async function requireAdminSession(): Promise<User> {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("sb-access-token")?.value

  if (!accessToken) {
    redirect(loginRedirect)
  }

  const { data, error } = await supabaseAdmin.auth.getUser(accessToken)

  if (error || !data?.user) {
    redirect(loginRedirect)
  }

  return data.user
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
  const user = await requireAdminSession()

  const displayName = [
    typeof user?.user_metadata?.full_name === "string" ? user.user_metadata.full_name : null,
    typeof user?.user_metadata?.name === "string" ? user.user_metadata.name : null
  ].find(Boolean)

  const adminUser = {
    name: displayName ?? null,
    email: user?.email ?? null
  }

  return <AdminShell user={adminUser}>{children}</AdminShell>
}
