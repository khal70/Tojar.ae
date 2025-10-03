import { test, expect } from '@playwright/test'

test('cart page loads and shows empty state', async ({ page }) => {
  await page.goto('/cart')
  await expect(page.locator('text=Cart')).toBeVisible()
  await expect(page.locator('text=Your cart is empty.')).toBeVisible()
})
