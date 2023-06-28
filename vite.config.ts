import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import mkcert from 'vite-plugin-mkcert'
import svgLoader from 'vite-svg-loader'
import visualizer from 'rollup-plugin-visualizer'
import inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    mock(),
    mkcert(),
    svgLoader(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx,vue}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{vue,css,sass,scss,less,styl,stylus}',
      },
    }),
    visualizer({
      filename: 'report.html',
      title: 'report',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    inspect(),
  ],
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src/'),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: true,
    open: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    https: true,
    open: true,
  },
})
