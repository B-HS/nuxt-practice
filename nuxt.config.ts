// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    api: {
      secret: process.env.NUXT_API_SECRET || 'SECRET NOT FOUNDED',
    },
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'APP NOT FOUNDED',
    }
  },

  

  modules: [
    '@nuxt/a11y',
    '@nuxt/image',
    '@nuxt/ui',
    '@atoms-studio/nuxt-swiftsearch',
    '@bubblesortt/nuxt-es-toolkit',
    '@comark/nuxt',
    '@dargmuesli/nuxt-cookie-control'
  ]
})