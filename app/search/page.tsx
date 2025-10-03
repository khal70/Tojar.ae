'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StoreLayout from '@/components/ui/StoreLayout'

export default function SearchPage() {
  const params = useSearchParams()
  const query = params.get('query')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    const search = async () => {
      if (!query) return
      const { data } = await supabase
        .from('products')
        .select('*')
        .ilike('name', `%${query}%`)
      if (data) setResults(data)
    }
    search()
  }, [query])

  return (
    <StoreLayout>
      <h1 className="text-xl font-semibold mb-4">Search Results</h1>
      <div className="grid grid-cols-2 gap-4">
        {results.map(p => (
          <div key={p.id} className="border p-2 rounded">
            <p className="font-medium">{p.name}</p>
            <p className="text-sm">${p.price}</p>
          </div>
        ))}
      </div>
    </StoreLayout>
  )
}
