import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import OrdersView from "@/components/admin/OrdersView"

export default function OrdersPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <OrdersView />
    </Suspense>
  )
}
