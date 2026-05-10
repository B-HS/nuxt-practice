<template>
  <header>
    <h1>{{ appConfig.appName }}</h1>
  </header>
  <NuxtPage />
</template>

<script setup lang="ts">
console.log("Hello World");
const runningConfig = useRuntimeConfig();
const appConfig = useAppConfig();

console.log(runningConfig.public.appName);
console.log("Original value", appConfig.theme.primary);

appConfig.theme.primary = "#AAA";

console.log("Modified value", appConfig.theme.primary);
</script>
