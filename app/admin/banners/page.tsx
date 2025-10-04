import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import BannersView from "@/components/admin/BannersView"

export default function BannersPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <BannersView />
    </Suspense>
  )
}
