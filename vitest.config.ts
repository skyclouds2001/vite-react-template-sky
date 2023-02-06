import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [react(), legacy()],
  css: {
    postcss: 'postcss.config.js',
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  test: {
    root: '.',
    environment: 'jsdom',
    include: ['tests/{unit,components}/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    reporters: ['default', 'html'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
  },
})
