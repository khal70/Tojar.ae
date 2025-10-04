import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import PaymentsSettingsView from "@/components/admin/PaymentsSettingsView"

export default function PaymentSettingsPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <PaymentsSettingsView />
    </Suspense>
  )
}
