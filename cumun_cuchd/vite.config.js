import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace with your actual ngrok host
const allowedNgrokHost = '5bb2-2401-4900-1f32-2907-20ff-9a-ce73-2c53.ngrok-free.app';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // important: allows external access
    allowedHosts: [allowedNgrokHost], // whitelist the ngrok URL
  },
})
