export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[MW 4] named: logger ', { to: to.path, from: from.path })
})
