<template></template>

<script setup lang="ts">
console.log("Hello World");
const runningConfig = useRuntimeConfig();

console.log(runningConfig.public.appName);
</script>
