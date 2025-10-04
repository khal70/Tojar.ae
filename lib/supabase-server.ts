import { createClient, type SupabaseClient } from "@supabase/supabase-js"

type SupabaseEnv = {
  supabaseUrl: string | null
  anonKey: string | null
  serviceRoleKey: string | null
}

const PLACEHOLDER_SNIPPETS = [
  "your-project.supabase.co",
  "your-anon-key",
  "your-service-role-key",
]

let cachedClient: SupabaseClient | null | undefined
let hasWarnedMissingSupabaseConfig = false

function sanitiseSupabaseValue(value: string | null | undefined): string | null {
  if (typeof value !== "string") {
    return null
  }

  const trimmed = value.trim()

  if (!trimmed) {
    return null
  }

  const isPlaceholder = PLACEHOLDER_SNIPPETS.some((snippet) => trimmed.includes(snippet))

  return isPlaceholder ? null : trimmed
}

function readSupabaseEnv(): SupabaseEnv {
  return {
    supabaseUrl: sanitiseSupabaseValue(process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonKey: sanitiseSupabaseValue(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    serviceRoleKey: sanitiseSupabaseValue(process.env.SUPABASE_SERVICE_ROLE_KEY),
  }
}

export function getSupabaseAuthConfig(): { supabaseUrl: string; anonKey: string } | null {
  const { supabaseUrl, anonKey } = readSupabaseEnv()

  if (!supabaseUrl || !anonKey) {
    return null
  }

  return { supabaseUrl, anonKey }
}

export function getSupabaseServerClient(): SupabaseClient | null {
  if (cachedClient !== undefined) {
    return cachedClient
  }

  const { supabaseUrl, anonKey, serviceRoleKey } = readSupabaseEnv()
  const key = serviceRoleKey ?? anonKey

  if (!supabaseUrl || !key) {
    if (!hasWarnedMissingSupabaseConfig && process.env.NODE_ENV !== "production") {
      console.warn(
        "Supabase environment variables are missing or still set to placeholder values. Admin data will be unavailable until they are updated."
      )
      hasWarnedMissingSupabaseConfig = true
    }

    cachedClient = null
    return cachedClient
  }

  cachedClient = createClient(supabaseUrl, key, {
    auth: { persistSession: false },
  })

  return cachedClient
}

// Exposed for tests so they can reset memoized state between runs.
export function __resetSupabaseServerClientCacheForTests() {
  cachedClient = undefined
  hasWarnedMissingSupabaseConfig = false
}
