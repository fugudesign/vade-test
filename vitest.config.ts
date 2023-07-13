import { configDefaults, defineConfig } from 'vitest/config'

import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      },
      coverage: {
        provider: 'istanbul' // or 'v8'
      }
    }
  })
)
