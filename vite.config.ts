import path from 'node:path'
import { type Plugin, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import { checker } from 'vite-plugin-checker'

const env = loadEnv(process.env.NODE_ENV ?? 'development', '.')

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
      '~': path.resolve(__dirname, '.'),
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
    host: env.VITE_DEV_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_DEV_SERVER_PORT) ?? 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: env.VITE_PREVIEW_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_PREVIEW_SERVER_PORT) ?? 4173,
    strictPort: true,
    open: true,
  },
})
