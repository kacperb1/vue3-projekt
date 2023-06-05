<template>
  <div class="min-h-screen">
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <slot></slot>
        </div>
      </div>
    </main>
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import ScrollToTop from '@/components/ScrollToTopButton.vue' 
</script>
