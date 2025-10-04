import type { Metadata } from "next"
import type { ReactNode } from "react"
import type { User } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminShell from "@/components/admin/AdminShell"
import { getSupabaseServerClient } from "@/lib/supabase-server"

const loginRedirect = "/auth/login?redirectTo=%2Fadmin%2Fdashboard"

async function requireAdminSession(): Promise<User> {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("sb-access-token")?.value

  if (!accessToken) {
    redirect(loginRedirect)
  }

  const supabase = getSupabaseServerClient()

  if (!supabase) {
    console.error("Supabase client could not be initialised. Redirecting to login.")
    redirect(loginRedirect)
  }

  const { data, error } = await supabase.auth.getUser(accessToken)

  if (error || !data?.user) {
    if (error) {
      console.warn("Failed to validate Supabase access token", error.message)
    }
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
