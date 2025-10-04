import { getSupabaseServerClient } from "@/lib/supabase-server"

export type AdminOrder = {
  id: string
  customer: string
  createdAt: string | null
  total: number | null
  status: string
  paymentMethod: string | null
}

export type AdminCustomer = {
  id: string
  name: string
  email: string
  ordersCount: number
  lifetimeValue: number
  lastOrderAt: string | null
}

export type AdminPromotion = {
  id: string
  code: string
  name: string
  discountPercent: number | null
  discountAmount: number | null
  redemptions: number | null
  status: string
  endsAt: string | null
}

export type AdminBanner = {
  id: string
  title: string
  placement: string
  status: string
  updatedAt: string | null
}

export type AdminCategory = {
  id: string
  name: string
  productsCount: number | null
  updatedAt: string | null
}

export type AdminFaq = {
  id: string
  question: string
  answer: string
}

function getSupabaseClient() {
  return getSupabaseServerClient()
}

function parseNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : null
  }

  return null
}

function ensureString(value: unknown, fallback = "—") {
  if (typeof value === "string" && value.trim().length > 0) {
    return value
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value)
  }

  return fallback
}

function optionalString(value: unknown): string | null {
  if (typeof value === "string" && value.trim().length > 0) {
    return value
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value)
  }

  return null
}

async function fetchOrderRows() {
  const client = getSupabaseClient()
  if (!client) {
    return [] as any[]
  }

  const { data, error } = await client
    .from("orders")
    .select(
      "id, user_email, customer_email, customer_name, total, status, payment_method, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(50)

  if (error) {
    console.error("Failed to load orders from Supabase", error.message)
    return [] as any[]
  }

  return data ?? []
}

export async function fetchAdminOrders(): Promise<AdminOrder[]> {
  const rows = await fetchOrderRows()

  return rows.map((row) => {
    const total = parseNumber(row.total)
    const status = ensureString(row.status, "Unknown")

    return {
      id: ensureString(row.id, "—"),
      customer:
        ensureString(row.customer_name || row.user_email || row.customer_email, "—"),
      createdAt: typeof row.created_at === "string" ? row.created_at : null,
      total,
      status,
      paymentMethod: optionalString(row.payment_method),
    }
  })
}

export async function fetchAdminCustomers(): Promise<AdminCustomer[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  const { data, error } = await client
    .from("customers")
    .select("id, name, full_name, email, orders_count, lifetime_value, total_spent, last_order_at")
    .order("last_order_at", { ascending: false })
    .limit(100)

  if (!error && data) {
    return data.map((row) => {
      const record = row as Record<string, unknown>
      const ordersCount =
        parseNumber(record["orders_count"]) ?? parseNumber(record["total_orders"]) ?? 0
      const lifetimeValue =
        parseNumber(record["lifetime_value"]) ?? parseNumber(record["total_spent"]) ?? 0

      return {
        id: ensureString(record["id"], ensureString(record["email"], "—")),
        name: ensureString(
          record["name"] || record["full_name"] || record["email"],
          "Unknown customer"
        ),
        email: ensureString(record["email"], "—"),
        ordersCount: ordersCount ?? 0,
        lifetimeValue: lifetimeValue ?? 0,
        lastOrderAt:
          typeof record["last_order_at"] === "string" && record["last_order_at"].length > 0
            ? (record["last_order_at"] as string)
            : null,
      }
    })
  }

  // Fallback by aggregating orders table if customers table is unavailable
  const orders = await fetchOrderRows()
  const grouped = new Map<string, { name: string; totals: number[]; dates: string[] }>()

  for (const order of orders) {
    const email = ensureString(order.user_email || order.customer_email, "—")
    if (email === "—") {
      continue
    }

    const name = ensureString(order.customer_name, email)
    const total = parseNumber(order.total)
    const createdAt = typeof order.created_at === "string" ? order.created_at : undefined

    const entry = grouped.get(email) ?? { name, totals: [], dates: [] }
    if (total !== null) {
      entry.totals.push(total)
    }
    if (createdAt) {
      entry.dates.push(createdAt)
    }

    grouped.set(email, entry)
  }

  return Array.from(grouped.entries()).map(([email, details], index) => {
    const totalSpend = details.totals.reduce((sum, amount) => sum + amount, 0)
    const ordersCount = details.totals.length
    const lastOrderAt = details.dates.sort().at(-1) ?? null

    return {
      id: `${index}-${email}`,
      name: details.name,
      email,
      ordersCount,
      lifetimeValue: totalSpend,
      lastOrderAt,
    }
  })
}

export async function fetchAdminPromotions(): Promise<AdminPromotion[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  const { data, error } = await client
    .from("promotions")
    .select(
      "id, code, name, title, discount, discount_percent, discount_amount, active, status, redemptions, ends_at, expiry_date"
    )
    .order("ends_at", { ascending: false })

  if (error) {
    console.error("Failed to load promotions from Supabase", error.message)
    return []
  }

  return (data ?? []).map((row) => {
    const discountPercent = parseNumber(row.discount_percent)
    const discountAmount =
      parseNumber(row.discount_amount) ?? (discountPercent === null ? parseNumber(row.discount) : null)

    const code = ensureString(row.code, ensureString(row.name || row.title, "—"))
    const name = ensureString(row.name || row.title || row.code, "Untitled promotion")

    return {
      id: ensureString(row.id, code),
      code,
      name,
      discountPercent,
      discountAmount,
      redemptions: parseNumber(row.redemptions),
      status: ensureString(row.status, row.active === false ? "Inactive" : "Active"),
      endsAt: optionalString(row.ends_at || row.expiry_date),
    }
  })
}

export async function fetchAdminBanners(): Promise<AdminBanner[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  const { data, error } = await client
    .from("banners")
    .select("id, title, name, placement, position, active, status, updated_at, created_at")
    .order("updated_at", { ascending: false })

  if (error) {
    console.error("Failed to load banners from Supabase", error.message)
    return []
  }

  return (data ?? []).map((row) => ({
    id: ensureString(row.id, ensureString(row.title || row.name, "—")),
    title: ensureString(row.title || row.name, "Untitled banner"),
    placement: ensureString(row.placement || row.position, "—"),
    status: ensureString(row.status, row.active === false ? "Inactive" : "Active"),
    updatedAt: optionalString(row.updated_at || row.created_at),
  }))
}

export async function fetchAdminCategories(): Promise<AdminCategory[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  const { data, error } = await client
    .from("categories")
    .select("id, name, title, products_count, product_count, updated_at, created_at")
    .order("updated_at", { ascending: false })

  if (error) {
    console.error("Failed to load categories from Supabase", error.message)
    return []
  }

  return (data ?? []).map((row) => ({
    id: ensureString(row.id, ensureString(row.name || row.title, "—")),
    name: ensureString(row.name || row.title, "Untitled category"),
    productsCount:
      parseNumber(row.products_count) ??
      parseNumber(row.product_count) ??
      null,
    updatedAt: optionalString(row.updated_at || row.created_at),
  }))
}

export async function fetchAdminFaqs(): Promise<AdminFaq[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  const { data, error } = await client.from("faqs").select("id, question, answer").order("id")

  if (error) {
    console.error("Failed to load FAQs from Supabase", error.message)
    return []
  }

  return (data ?? []).map((row) => ({
    id: ensureString(row.id, "—"),
    question: ensureString(row.question, "Untitled question"),
    answer: ensureString(row.answer, "—"),
  }))
}
