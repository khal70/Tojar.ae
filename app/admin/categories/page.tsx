import { Suspense } from "react"

import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton"
import CategoriesView from "@/components/admin/CategoriesView"

export default function CategoriesPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <CategoriesView />
    </Suspense>
  )
}
