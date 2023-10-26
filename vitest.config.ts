import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [react(), legacy(), mock(), svgLoader()],
  test: {
    root: '.',
    include: ['**/?(*.){test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,fleet,vscode,git}/**', '**/{vite,vitest}.config.*'],
    watch: false,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    coverage: {
      provider: 'v8',
      enabled: true,
    },
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, 'src'),
    },
    cache: {},
  },
})
