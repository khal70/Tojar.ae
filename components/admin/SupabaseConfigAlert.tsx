import { getSupabaseAuthConfig } from "@/lib/supabase-server"

type SupabaseConfigAlertProps = {
  className?: string
  message?: string
}

export default function SupabaseConfigAlert({
  className,
  message,
}: SupabaseConfigAlertProps) {
  const isConfigured = getSupabaseAuthConfig() !== null

  if (isConfigured) {
    return null
  }

  const containerClass = [
    "rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={containerClass} role="status" aria-live="polite">
      <p className="font-semibold">Supabase connection inactive</p>
      <p className="mt-1 text-sm text-amber-700">
        {message ??
          "Add the Supabase environment variables to enable live admin data. Showing static placeholders until then."}
      </p>
    </div>
  )
}
