import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0' // Cambia '127.0.0.1' por '0.0.0.0' para escuchar en todas las interfaces de red
  }
});
