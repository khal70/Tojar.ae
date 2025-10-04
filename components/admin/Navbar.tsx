"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type AdminNavbarProps = {
  isSidebarCollapsed: boolean
  onToggleSidebar: () => void
  user: {
    name: string | null
    email: string | null
  }
}

function getInitials(name: string | null, fallback: string | null) {
  if (name) {
    const segments = name.split(" ").filter(Boolean)
    if (segments.length === 1) {
      return segments[0].slice(0, 2).toUpperCase()
    }
    return segments
      .slice(0, 2)
      .map((part) => part[0] ?? "")
      .join("")
      .toUpperCase()
  }

  if (fallback) {
    return fallback.slice(0, 2).toUpperCase()
  }

  return "AD"
}

export default function AdminNavbar({
  isSidebarCollapsed,
  onToggleSidebar,
  user
}: AdminNavbarProps) {
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(false)

  const initials = getInitials(user.name, user.email)
  const displayName = user.name ?? user.email ?? "Admin user"

  const handleSignOut = async () => {
    if (isSigningOut) return

    setIsSigningOut(true)

    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } finally {
      router.replace("/auth/login")
      router.refresh()
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-pressed={isSidebarCollapsed}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            <span className="sr-only">Toggle sidebar</span>
            <svg
              aria-hidden
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isSidebarCollapsed ? (
                <path d="M5 4h14v16H5zM10 8l-2 4 2 4M14 8l2 4-2 4" />
              ) : (
                <path d="M4 4h16v16H4zM9 8l-2 4 2 4M15 8l2 4-2 4" />
              )}
            </svg>
          </button>

          <div className="hidden text-sm text-gray-500 sm:block">
            <p className="font-semibold text-gray-900">Tojar admin console</p>
            <p>Monitor commerce, content, and configuration</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">{displayName}</p>
            {user.email && (
              <p className="text-xs text-gray-500">{user.email}</p>
            )}
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold uppercase text-white">
            {initials}
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSigningOut ? "Signing out…" : "Sign out"}
          </button>
        </div>
      </div>
    </header>
  )
}
