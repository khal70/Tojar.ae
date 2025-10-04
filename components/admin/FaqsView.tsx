import Card from "@/components/ui/Card"
import { fetchAdminFaqs } from "@/lib/admin-data"

export default async function FaqsView() {
  const faqs = await fetchAdminFaqs()

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">FAQs</h1>
        <p className="text-sm text-gray-600">Frequently asked questions shown on the storefront help centre.</p>
      </header>

      <div className="space-y-4">
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <Card key={faq.id}>
              <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
              <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
            </Card>
          ))
        ) : (
          <Card className="text-sm text-gray-600">
            No FAQs found. Create one from the Supabase dashboard to see it appear here.
          </Card>
        )}
      </div>
    </section>
  )
}
