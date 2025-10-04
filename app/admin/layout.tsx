import type { Metadata } from "next"
import type { ReactNode } from "react"

import AdminLayoutShell from "@/components/ui/AdminLayout"

export const metadata: Metadata = {
  title: {
    default: "Admin | Tojar",
    template: "%s | Tojar Admin"
  },
  description: "Management console for overseeing orders, catalog, and site content."
}

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <AdminLayoutShell>{children}</AdminLayoutShell>
}
