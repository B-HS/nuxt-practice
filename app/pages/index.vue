<template>
    {{ appConfig.appName }}
    <p>전파되었는가? {{ appConfig.theme.primary }}</p>
    <Counter />
    <img src="~/assets/yaburi.jpg" alt="Yaburi image" />
    <img src="/flags/usflag.jpg" alt="Yaburi image" />
</template>
<script setup lang="ts">
import Counter from './components/Counter.vue'

const appConfig = useAppConfig()
console.log('AppConfig', appConfig)
</script>
