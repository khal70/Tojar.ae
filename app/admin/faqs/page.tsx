"use client"
import { useEffect, useState } from "react"
import AdminLayout from "@/components/ui/AdminLayout"
import { supabase } from "@/lib/supabase"

export default function FaqsPage() {
  const [faqs, setFaqs] = useState<any[]>([])

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await supabase.from("faqs").select("*")
      if (error) {
        console.error("Error fetching FAQs:", error.message)
      } else {
        setFaqs(data || [])
      }
    }
    fetchFaqs()
  }, [])

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded p-4 bg-white shadow">
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
        {faqs.length === 0 && <p className="text-gray-500">No FAQs found.</p>}
      </div>
    </AdminLayout>
  )
}
