#!/usr/bin/env node
import { spawn } from 'node:child_process'

const run = (command, args, extraEnv = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      env: { ...process.env, ...extraEnv },
      shell: process.platform === 'win32',
    })

    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`))
      }
    })
  })

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'

try {
  await run(npmCmd, ['run', 'build'], { NEXT_PRIVATE_STANDALONE: '1' })
  await run(npmCmd, ['run', 'package:standalone'])
  console.log('✅ Standalone deployment bundle ready at dist/standalone')
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
