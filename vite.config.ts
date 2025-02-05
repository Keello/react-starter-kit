import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@modules': '/src/modules',
      '@components': '/src/components',
      '@ui': '/src/ui',
      '@api': '/src/api',
      '@services': '/src/services',
      '@hooks': '/src/ui',
    },
  },
})
