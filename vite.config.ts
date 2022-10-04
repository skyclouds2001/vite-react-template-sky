import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint(), legacy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
})
