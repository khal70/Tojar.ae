import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let cachedClient: SupabaseClient | null | undefined

export function getSupabaseServerClient(): SupabaseClient | null {
  if (cachedClient !== undefined) {
    return cachedClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const key = serviceRoleKey || anonKey

  if (!supabaseUrl || !key) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Supabase environment variables are missing. Admin data will not be available until they are configured."
      )
    }

    cachedClient = null
    return cachedClient
  }

  cachedClient = createClient(supabaseUrl, key, {
    auth: { persistSession: false }
  })

  return cachedClient
}
