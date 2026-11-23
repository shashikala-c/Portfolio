import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiProxy = {
  '/api': 'http://127.0.0.1:4174',
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    proxy: apiProxy,
  },
  preview: {
    host: '127.0.0.1',
    proxy: apiProxy,
  },
})
