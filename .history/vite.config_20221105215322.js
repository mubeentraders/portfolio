import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

process.env.VITE_EMAILJS_PUBLIC_KEY = 'yZv-CfD9qbrno7p7_'
process.env.VITE_EMAILJS_TEMPLATE_ID = 'template_k64otq9'
process.env.VITE_EMAILJS_SERVICE_ID = 'service_b48qd0j'

export default defineConfig({
  base: '/portfolio',
  plugins: [vue()]
})
