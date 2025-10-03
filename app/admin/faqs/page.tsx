"use client"

import { useEffect, useState } from "react"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"
import { supabase } from "@/lib/supabase"

type Faq = {
  id: number
  question: string
  answer: string
}

export default function FaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([])

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await supabase.from<Faq>("faqs").select("*")
      if (error) {
        console.error("Error fetching FAQs:", error.message)
      } else {
        setFaqs(data ?? [])
      }
    }

    fetchFaqs()
  }, [])

  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">FAQs</h1>
        <p className="text-sm text-gray-600">Frequently asked questions shown on the storefront help centre.</p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <Card key={faq.id}>
            <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
            <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
          </Card>
        ))}

        {faqs.length === 0 && (
          <Card className="text-sm text-gray-600">
            No FAQs found. Create one from the Supabase dashboard to see it appear here.
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
