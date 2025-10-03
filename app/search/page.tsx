"use client"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <div>
      <p>Showing results for: <strong>{query}</strong></p>
      <p>(Replace this with real search results later)</p>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <Suspense fallback={<p>Loading search...</p>}>
        <SearchContent />
      </Suspense>
    </div>
  )
}
