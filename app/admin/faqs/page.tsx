import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import FaqsView from "@/components/admin/FaqsView"

export default function FaqsPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <FaqsView />
    </Suspense>
  )
}
