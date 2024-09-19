import { type Plugin, defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    pwa({
      registerType: 'autoUpdate',
      manifest: false,
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        useFlatConfig: true,
      },
      // stylelint: {
      //   lintCommand: 'stylelint "./src/**/*.{css}"',
      // },
    }),
    visualizer() as unknown as Plugin,
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
  json: {
    namedExports: false,
    stringify: true,
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
