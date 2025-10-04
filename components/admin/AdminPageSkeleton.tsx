export default function AdminPageSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4).keys()].map((key) => (
          <div key={key} className="h-24 animate-pulse rounded-lg bg-white shadow-sm ring-1 ring-gray-100" />
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
        <div className="h-56 animate-pulse rounded-lg bg-white shadow-sm ring-1 ring-gray-100" />
      </div>
    </div>
  )
}
