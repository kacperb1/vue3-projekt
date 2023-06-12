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
</style>