import { test, expect } from '@playwright/test'

test('admin dashboard loads', async ({ page }) => {
  await page.goto('/admin/dashboard')
  await expect(page.locator('text=Dashboard')).toBeVisible()
})

test('admin promotions form renders', async ({ page }) => {
  await page.goto('/admin/promotions')
  await expect(page.locator('text=Manage Promotions')).toBeVisible()
  await expect(page.locator('input[name="name"]')).toBeVisible()
})
