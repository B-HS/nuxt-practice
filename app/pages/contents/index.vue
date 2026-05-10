<template>
    <div>
        <p>Contents Page</p>
        <NuxtLink to="/contents/video">Video Page</NuxtLink>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Contents',
    description: '컨텐츠 목록',
})
</script>
