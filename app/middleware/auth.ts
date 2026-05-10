export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[MW 3] named: auth ', { to: to.path, from: from.path })
})
