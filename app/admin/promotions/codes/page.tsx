import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import PromotionsView from "@/components/admin/PromotionsView"

export default function PromoCodesPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <PromotionsView />
    </Suspense>
  )
}
