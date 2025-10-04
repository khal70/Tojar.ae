"use client"

import { useState } from "react"

import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import { supabase } from "@/lib/supabase"

type Feedback = {
  type: "success" | "error"
  message: string
}

const automationTips = [
  {
    title: "Schedule start and end dates",
    description: "Ensure campaigns begin and end automatically to avoid manual intervention."
  },
  {
    title: "Stack with banner placements",
    description: "Pair high-performing promotions with homepage heroes to increase visibility."
  },
  {
    title: "Monitor redemption",
    description: "Export redemptions weekly to analyse average order uplift per campaign."
  }
]

export default function PromotionsPage() {
  const [name, setName] = useState("")
  const [discount, setDiscount] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSaving(true)
    setFeedback(null)

    const discountValue = Number.parseFloat(discount)

    if (!name.trim()) {
      setFeedback({ type: "error", message: "Enter a promotion name before saving." })
      setIsSaving(false)
      return
    }

    if (Number.isNaN(discountValue)) {
      setFeedback({ type: "error", message: "Provide a valid discount percentage." })
      setIsSaving(false)
      return
    }

    const { error } = await supabase
      .from("promotions")
      .insert([{ name: name.trim(), discount_percent: discountValue }])

    if (error) {
      setFeedback({ type: "error", message: "We couldn't save the promotion. Try again shortly." })
    } else {
      setFeedback({ type: "success", message: "Promotion saved successfully." })
      setName("")
      setDiscount("")
    }

    setIsSaving(false)
  }

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Promotions</h1>
        <p className="text-sm text-gray-600">
          Launch and monitor campaign incentives that boost conversion across the marketplace.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="Promotion name"
              name="name"
              placeholder="E.g. Summer kickoff"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              label="Discount (%)"
              name="discount"
              type="number"
              min="0"
              max="100"
              step="0.5"
              placeholder="20"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              hint="Percent discounts apply to eligible products defined in the promotion rules."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving…" : "Save promotion"}
              </Button>
              {feedback ? (
                <p
                  className={`text-sm font-medium ${
                    feedback.type === "success" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {feedback.message}
                </p>
              ) : null}
            </div>
          </form>
        </Card>

        <Card className="space-y-4 border-emerald-200 bg-emerald-50/60">
          <h2 className="text-lg font-semibold text-emerald-900">Automation tips</h2>
          <ul className="space-y-3 text-sm text-emerald-800">
            {automationTips.map((tip) => (
              <li key={tip.title} className="rounded-md border border-emerald-200 bg-white/60 px-4 py-3">
                <p className="font-medium text-emerald-900">{tip.title}</p>
                <p className="text-xs text-emerald-700">{tip.description}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
