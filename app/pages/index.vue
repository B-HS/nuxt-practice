<template>
  {{ appConfig.appName }}
  <p>전파되었는가? {{ appConfig.theme.primary }}</p>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
console.log("AppConfig", appConfig);
</script>
