<template>
    <button @click="() => increaseValues('plus')">갑 증가</button>

    <button @click="() => increaseValues('minus')">갑 감소</button>

    <p>
        {{ countStatus.value }}
    </p>

    <p>{{ countStatus.pressPlusCount }}회 증가 눌렸으며 {{ countStatus.pressMinusCount }}회 감소 눌렸습니다.</p>
</template>

<script setup lang="ts">
const countStatus = reactive({
    value: 0,
    pressPlusCount: 0,
    pressMinusCount: 0,
})
const increaseValues = (dir: 'plus' | 'minus') => {
    if (dir === 'plus') {
        countStatus.pressPlusCount++
        countStatus.value++
    } else {
        countStatus.pressMinusCount++
        countStatus.value--
    }
}
</script>
