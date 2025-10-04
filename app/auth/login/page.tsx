import { Suspense } from "react"

import { LoginForm } from "@/components/auth/LoginForm"

function LoginFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
      <div className="h-[28rem] w-full max-w-md animate-pulse rounded-2xl bg-white/10" />
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
        <LoginForm />
      </main>
    </Suspense>
  )
}
