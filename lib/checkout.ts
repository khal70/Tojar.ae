import { isDeepStrictEqual } from "node:util"

export type CheckoutCartItem = {
  id: string | null
  name: string
  quantity: number
  unitAmount: number
}

const MIN_QUANTITY = 1
const MAX_QUANTITY = 999

function toStringOrNull(value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value)
  }

  return null
}

function normaliseQuantity(value: unknown): number {
  const numeric = Number(value)

  if (!Number.isFinite(numeric)) {
    return MIN_QUANTITY
  }

  const rounded = Math.round(numeric)
  return Math.min(Math.max(rounded, MIN_QUANTITY), MAX_QUANTITY)
}

function toUnitAmountCents(value: unknown): number | null {
  const numeric = Number(value)

  if (!Number.isFinite(numeric)) {
    return null
  }

  const cents = Math.round(numeric * 100)
  return cents > 0 ? cents : null
}

export function normaliseCartItems(input: unknown): CheckoutCartItem[] {
  if (!Array.isArray(input)) {
    return []
  }

  const items: CheckoutCartItem[] = []

  for (const raw of input) {
    if (raw === null || typeof raw !== "object") {
      continue
    }

    const record = raw as Record<string, unknown>
    const unitAmount = toUnitAmountCents(record.price ?? record.unitAmount ?? record.amount)

    if (unitAmount === null) {
      continue
    }

    const quantity = normaliseQuantity(record.quantity)
    const name = toStringOrNull(record.name) ?? "Item"
    const id = toStringOrNull(record.id) ?? toStringOrNull(record.sku)

    items.push({
      id,
      name,
      quantity,
      unitAmount,
    })
  }

  return items
}

export function calculateCartTotal(items: CheckoutCartItem[]): number {
  return items.reduce((total, item) => total + item.unitAmount * item.quantity, 0)
}

export function countCartQuantity(items: CheckoutCartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0)
}

export function hasMeaningfulCartChange(
  previous: CheckoutCartItem[] | undefined,
  next: CheckoutCartItem[] | undefined
): boolean {
  if (!previous && next) {
    return true
  }

  if (!previous && !next) {
    return false
  }

  if (!next) {
    return false
  }

  return !isDeepStrictEqual(previous, next)
}
