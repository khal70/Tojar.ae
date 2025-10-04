import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import CustomersView from "@/components/admin/CustomersView"

export default function CustomersPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <CustomersView />
    </Suspense>
  )
}
