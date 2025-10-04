import { describe, expect, it } from "vitest"

import {
  calculateCartTotal,
  countCartQuantity,
  normaliseCartItems,
} from "@/lib/checkout"

describe("normaliseCartItems", () => {
  it("filters out invalid entries", () => {
    const result = normaliseCartItems([
      { id: "sku_1", name: "Valid", price: 12.34, quantity: 2 },
      { id: "sku_2", name: "Free", price: 0, quantity: 3 },
      { id: "sku_3", name: "NaN", price: Number.NaN, quantity: 1 },
      null,
      "string",
    ])

    expect(result).toEqual([
      { id: "sku_1", name: "Valid", quantity: 2, unitAmount: 1234 },
    ])
  })

  it("falls back to sensible defaults", () => {
    const result = normaliseCartItems([
      { price: 9.99 },
    ])

    expect(result).toEqual([
      { id: null, name: "Item", quantity: 1, unitAmount: 999 },
    ])
  })
})

describe("cart helpers", () => {
  const items = normaliseCartItems([
    { id: "a", name: "One", price: 10, quantity: 2 },
    { id: "b", name: "Two", price: 5.5, quantity: 1 },
  ])

  it("sums the total in cents", () => {
    expect(calculateCartTotal(items)).toBe(2550)
  })

  it("counts the total quantity", () => {
    expect(countCartQuantity(items)).toBe(3)
  })
})
