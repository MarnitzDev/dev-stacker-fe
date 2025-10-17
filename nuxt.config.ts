// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-graphql-request',
  ],
  css: [
    '@/assets/css/imports.css',
    '@/assets/scss/main.scss'
  ],

  graphql: {
    clients: {
      default: {
        endpoint: 'http://localhost:3000/api/graphql',
      },
    },
  },
})