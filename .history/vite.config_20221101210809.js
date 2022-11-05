import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

process.env.VUE_APP_EMAILJS_PUBLIC_KEY = 'yZv-CfD9qbrno7p7_'
process.env.VUE_APP_EMAILJS_TEMPLATE_ID = 'template_k64otq9'
process.env.VUE_APP_EMAILJS_SERVICE_ID = 'service_b48qd0j'

export default defineConfig({
  plugins: [vue()]
})
