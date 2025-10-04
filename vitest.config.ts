import { fileURLToPath } from "node:url"
import { resolve } from "node:path"

import { defineConfig } from "vitest/config"

const projectRoot = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(projectRoot),
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.ts"],
    exclude: ["node_modules/**", "playwright/**"]
  }
})
