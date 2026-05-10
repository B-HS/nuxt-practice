<template>
    <header>
        <h1>{{ appConfig.appName }}</h1>
        <nav>
            <NuxtLink to="/">Home</NuxtLink> |
            <NuxtLink to="/about">About</NuxtLink> |
            <NuxtLink to="/contents">Contents</NuxtLink>
        </nav>
    </header>
    <NuxtPage />
</template>

<script setup lang="ts">
console.log('Hello World')
const runningConfig = useRuntimeConfig()
const appConfig = useAppConfig()

console.log(runningConfig.public.appName)
console.log('Original value', appConfig.theme.primary)

appConfig.theme.primary = '#AAA'

console.log('Modified value', appConfig.theme.primary)
</script>

<!-- Transition CSS — pageTransition: { name: 'page' } 와 매칭 -->
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s ease;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.layout-enter-active,
.layout-leave-active {
    transition: opacity 0.3s;
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
}
</style>
