import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [react(), eslint(), legacy(), stylelint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
})
