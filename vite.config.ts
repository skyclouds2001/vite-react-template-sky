import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import visualizer from 'rollup-plugin-visualizer'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    mock(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css,scss}',
      },
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    open: true,
  },
})
