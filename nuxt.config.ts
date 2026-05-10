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
        },
    },

    app: {
        // SEO/Meta 기본값 (모든 페이지에 적용)
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxt 찍먹',
            titleTemplate: '%s | Nuxt 찍먹',
            meta: [
                { name: 'description', content: 'Nuxt 찍먹 프로젝트 - 학습용' },
                { property: 'og:site_name', content: 'Nuxt 찍먹' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
        // Transition (페이지 전환 애니메이션)
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    modules: [
        '@nuxt/a11y',
        '@nuxt/image',
        '@nuxt/ui',
        '@atoms-studio/nuxt-swiftsearch',
        '@bubblesortt/nuxt-es-toolkit',
        '@comark/nuxt',
        '@dargmuesli/nuxt-cookie-control',
    ],
})
