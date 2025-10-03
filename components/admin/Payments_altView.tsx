import Card from "@/components/ui/Card"

const gateways = [
  {
    name: "Stripe",
    enabled: true,
    currency: "AED",
    description: "Accepts Visa, Mastercard, Apple Pay, and Google Pay.",
  },
  {
    name: "PayPal",
    enabled: false,
    currency: "USD",
    description: "Popular with international shoppers. Settlement in USD.",
  },
  {
    name: "Tabby",
    enabled: true,
    currency: "AED",
    description: "Offer buy-now-pay-later instalments at checkout.",
  },
]

export default function PaymentsAltView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Payment Gateway Settings</h1>
        <p className="text-sm text-gray-600">
          Enable or disable providers and keep gateway credentials up-to-date.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {gateways.map((gateway) => (
          <Card key={gateway.name} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{gateway.name}</h2>
                <p className="text-sm text-gray-600">Primary currency: {gateway.currency}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  gateway.enabled ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                }`}
              >
                {gateway.enabled ? "Enabled" : "Disabled"}
              </span>
            </div>

            <p className="text-sm text-gray-600">{gateway.description}</p>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                Configure
              </button>
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                View credentials
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
