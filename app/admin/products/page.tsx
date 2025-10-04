import Link from "next/link"

import Card from "@/components/ui/Card"
import { formatCurrency } from "@/lib/formatters"

const productStats = [
  { label: "Live products", value: "148" },
  { label: "Drafts", value: "12" },
  { label: "Low inventory", value: "6" },
  { label: "Out of stock", value: "3" }
]

const products = [
  {
    sku: "SKU-48392",
    name: "Oud diffuser",
    category: "Home",
    price: 189,
    inventory: 24,
    status: "Live"
  },
  {
    sku: "SKU-47321",
    name: "Silk abaya",
    category: "Fashion",
    price: 420,
    inventory: 4,
    status: "Low stock"
  },
  {
    sku: "SKU-46880",
    name: "Date truffle gift box",
    category: "Gourmet",
    price: 155,
    inventory: 0,
    status: "Out of stock"
  },
  {
    sku: "SKU-47812",
    name: "Pearl stud earrings",
    category: "Jewellery",
    price: 265,
    inventory: 18,
    status: "Live"
  }
]

const inventoryAlerts = [
  {
    name: "Silk abaya",
    sku: "SKU-47321",
    inventory: 4,
    reorderPoint: 8
  },
  {
    name: "Date truffle gift box",
    sku: "SKU-46880",
    inventory: 0,
    reorderPoint: 10
  }
]

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-700",
  "Low stock": "bg-amber-100 text-amber-700",
  "Out of stock": "bg-rose-100 text-rose-700"
}

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="text-sm text-gray-600">
          Review catalogue health, highlight low inventory, and curate merchandising updates.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {productStats.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <header className="flex flex-col gap-3 border-b border-gray-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Catalogue</h2>
            <p className="text-sm text-gray-600">Monitor price points, stock, and readiness at a glance.</p>
          </div>
          <Link
            href="/admin/products?download=1"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-emerald-400 hover:text-emerald-600"
          >
            Export list
          </Link>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-3">
                  SKU
                </th>
                <th scope="col" className="px-4 py-3">
                  Product
                </th>
                <th scope="col" className="px-4 py-3">
                  Category
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Inventory
                </th>
                <th scope="col" className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.sku}>
                  <td className="px-4 py-3 font-medium text-gray-900">{product.sku}</td>
                  <td className="px-4 py-3 text-gray-700">{product.name}</td>
                  <td className="px-4 py-3 text-gray-500">{product.category}</td>
                  <td className="px-4 py-3 text-gray-900">{formatCurrency(product.price)}</td>
                  <td className="px-4 py-3 text-gray-500">{product.inventory}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[product.status] ?? "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {product.status}
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
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Low inventory alerts</h2>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Action required</span>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            {inventoryAlerts.map((alert) => (
              <li key={alert.sku} className="rounded-md border border-gray-200 px-4 py-3">
                <p className="font-medium text-gray-900">{alert.name}</p>
                <p className="text-xs text-gray-500">SKU: {alert.sku}</p>
                <p className="text-xs text-gray-500">
                  {alert.inventory} in stock · Reorder at {alert.reorderPoint}
                </p>
              </li>
            ))}

            {inventoryAlerts.length === 0 && (
              <li className="rounded-md border border-dashed border-gray-300 px-4 py-8 text-center text-sm text-gray-500">
                Inventory levels are healthy across the catalogue.
              </li>
            )}
          </ul>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Publishing checklist</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-emerald-500" aria-hidden />
              <span>Upload Arabic and English descriptions for new arrivals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-emerald-500" aria-hidden />
              <span>Attach lifestyle imagery to highlight premium collections.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-emerald-500" aria-hidden />
              <span>Assign promotional badges for campaigns running this week.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
