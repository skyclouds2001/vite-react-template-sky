import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    eslint({
      cache: true,
      cacheLocation: 'node_modules/.vite/.eslintcache',
    }),
    stylelint({
      cache: true,
      cacheLocation: 'node_modules/.vite/.stylelintcache',
    }),
  ],
  css: {
    postcss: 'postcss.config.js',
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src/'),
    },
  },
})
