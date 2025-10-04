import { rmSync } from "node:fs"
import { resolve } from "node:path"

const nextDir = resolve(process.cwd(), ".next")

try {
  rmSync(nextDir, { recursive: true, force: true })
  console.log(`🧹 Removed Next.js build cache at ${nextDir}`)
} catch (error) {
  console.error(`Failed to remove Next.js build cache at ${nextDir}`)
  console.error(error)
  process.exitCode = 1
}
