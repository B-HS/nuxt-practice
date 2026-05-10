export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[MW 2] global: 02-setup.global ', { to: to.path, from: from.path })
})
