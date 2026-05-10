export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[MW 1] global: 01-analytics.global ', { to: to.path, from: from.path })
})
