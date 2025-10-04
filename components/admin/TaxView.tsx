"use client"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const taxRates = [
  {
    region: "United Arab Emirates",
    type: "VAT",
    rate: "5%",
    registration: "TRN 1002345678",
    filing: "Quarterly",
    status: "Active"
  },
  {
    region: "Saudi Arabia",
    type: "VAT",
    rate: "15%",
    registration: "Pending",
    filing: "Threshold monitoring",
    status: "Monitoring"
  }
]

const complianceTasks = [
  {
    title: "Prepare Q2 VAT return",
    description: "Collect invoices and reconcile Stripe transactions before filing.",
    due: "28 July 2024"
  },
  {
    title: "Update tax codes",
    description: "Review category level overrides for electronics and cosmetics.",
    due: "31 May 2024"
  }
]

const auditTrail = [
  {
    event: "VAT registration",
    detail: "TRN verified with FTA portal",
    timestamp: "02 Jan 2024"
  },
  {
    event: "Return submitted",
    detail: "Q1 2024 VAT return filed and paid",
    timestamp: "28 Apr 2024"
  },
  {
    event: "Threshold alert",
    detail: "KSA turnover approaching registration threshold",
    timestamp: "15 May 2024"
  }
]

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Monitoring: "bg-amber-100 text-amber-700"
}

export default function TaxView() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Tax settings</h1>
        <p className="text-sm text-gray-600">
          Overview of VAT registrations, filing cadence, and compliance tasks across operating regions.
        </p>
      </header>

      <Card className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-900">Registered jurisdictions</h2>
          <p className="text-sm text-gray-600">Monitor registration state and filing frequency.</p>
        </header>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="py-3 pr-4">Region</th>
                <th scope="col" className="py-3 pr-4">Tax type</th>
                <th scope="col" className="py-3 pr-4">Rate</th>
                <th scope="col" className="py-3 pr-4">Registration</th>
                <th scope="col" className="py-3 pr-4">Filing cadence</th>
                <th scope="col" className="py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {taxRates.map((tax) => (
                <tr key={tax.region}>
                  <td className="whitespace-nowrap py-3 pr-4 font-medium text-gray-900">{tax.region}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{tax.type}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{tax.rate}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-600">{tax.registration}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-gray-500">{tax.filing}</td>
                  <td className="whitespace-nowrap py-3 pr-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[tax.status] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tax.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Compliance checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {complianceTasks.map((task) => (
              <li key={task.title} className="rounded-md border border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <span className="text-xs uppercase tracking-wide text-gray-500">Due {task.due}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{task.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Threshold snapshot</h2>
          <dl className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">KSA turnover YTD</dt>
              <dd>{formatCurrency(277_500)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">KSA registration trigger</dt>
              <dd>{formatCurrency(375_000)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-900">Expected registration date</dt>
              <dd>August 2024</dd>
            </div>
          </dl>
        </Card>
      </div>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Audit trail</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {auditTrail.map((entry) => (
            <li key={entry.event} className="rounded-md border border-gray-200 px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">{entry.event}</p>
                <span className="text-xs text-gray-500">{entry.timestamp}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
