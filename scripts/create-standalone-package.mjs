#!/usr/bin/env node
import { cp, mkdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const standaloneDir = path.join(root, '.next', 'standalone')
const staticDir = path.join(root, '.next', 'static')
const publicDir = path.join(root, 'public')
const outDir = path.join(root, 'dist', 'standalone')

if (!existsSync(standaloneDir)) {
  console.error('Standalone output not found. Run `npm run deploy:standalone` (or build with NEXT_PRIVATE_STANDALONE=1) first.')
  process.exitCode = 1
  process.exit()
}

await rm(outDir, { recursive: true, force: true })
await mkdir(outDir, { recursive: true })

await cp(standaloneDir, outDir, { recursive: true })

if (existsSync(staticDir)) {
  await mkdir(path.join(outDir, '.next'), { recursive: true })
  await cp(staticDir, path.join(outDir, '.next', 'static'), { recursive: true })
}

if (existsSync(publicDir)) {
  await cp(publicDir, path.join(outDir, 'public'), { recursive: true })
}

console.log('✅ Standalone bundle ready in dist/standalone')
console.log('   Upload the folder contents to your server and run `node server.js`.')
