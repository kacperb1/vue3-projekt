<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>