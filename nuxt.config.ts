// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  builder: 'vite', // 👈 энэ мөрийг нэм

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    recipientEmail: process.env.RECIPIENT_EMAIL,
  },

  app: {
    head: {
      title: 'Бат-Эрдэнэ - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Бат-Эрдэнэ - Portfolio Website' }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false,

  experimental: {
    payloadExtraction: false
  },
  typescript: {
    strict: true
  },
  nitro: {
    compressPublicAssets: true
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  devtools: { enabled: true }
})
