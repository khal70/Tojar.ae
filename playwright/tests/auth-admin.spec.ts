import { test, expect } from '@playwright/test'

test('redirects unauthenticated users from admin pages', async ({ page }) => {
  await page.goto('/admin/dashboard')
  // Example assumes redirect to /auth/login
  await expect(page).toHaveURL(/.*auth\/login/)
})
