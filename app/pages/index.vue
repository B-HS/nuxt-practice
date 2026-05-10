<template>
    <div>
        <p>{{ appConfig.appName }}</p>
        <p>전파되었는가? {{ appConfig.theme.primary }}</p>
        <Counter />
        <img src="~/assets/yaburi.jpg" alt="Yaburi image" />
        <img src="/flags/usflag.jpg" alt="Yaburi image" />
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: [
        'auth',
        'logger',
        (to, from) => {
            console.log('[MW 5] anonymous(inline) middleware ', { to: to.path, from: from.path })
        },
    ],
})

// useSeoMeta - SEO 태그 한방에 (가장 권장되는 방식)
useSeoMeta({
    title: 'Home',
    ogTitle: 'Home | Nuxt 찍먹',
    description: '메인 페이지 - 미들웨어 / SEO / 트랜지션 실습',
    ogDescription: '메인 페이지',
    ogImage: '/flags/usflag.jpg',
    twitterCard: 'summary_large_image',
})

// useHead - 더 자유로운 head 조작
useHead({
    meta: [{ name: 'keywords', content: 'nuxt, vue, study' }],
})

console.log('[PAGE] index.vue setup 시작')

const appConfig = useAppConfig()
console.log('[PAGE] AppConfig 사용', appConfig.appName)

console.log('[PAGE] index.vue setup 끝')
</script>
