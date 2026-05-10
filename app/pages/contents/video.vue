<template>
    <div>
        <h2>Video Page</h2>
        <button @click="count++">현재 카운트: {{ count }}</button>
        <p>title 이 카운트에 따라 reactive 하게 바뀝니다 (브라우저 탭 확인)</p>
    </div>
</template>

<script setup lang="ts">
const count = ref(0)

// reactive head - getter 함수로 넘기면 값 바뀔 때마다 head 도 업데이트됨
useHead({
    title: () => `Video (${count.value})`,
})

useSeoMeta({
    description: () => `비디오 페이지 - ${count.value}번 클릭됨`,
})
</script>
