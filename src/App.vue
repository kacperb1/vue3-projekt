<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <!-- **** Header **** -->
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Überschrift
      </h1>
      <div>
        <nav>
          <RouterLink to="/" class="text-header-gradient">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>


  <!-- **** Footer **** -->
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