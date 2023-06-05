<template>
    <transition name="fade">
      <Button v-if="isVisible" class="fixed bottom-4 right-4 shadow-lg" @click="scrollToTop">
        <font-awesome-icon :icon="['fas', 'arrow-up']" class="mr-2" />
        <span>Nach oben</span>
      </Button>
    </transition>
  </template>
  
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Button from './BasicComponents/Button.vue'
  
  const isVisible = ref(false)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  let observer: MutationObserver
  
  onMounted(() => {
    const config = { childList: true, subtree: true }
  
    observer = new MutationObserver(() => {
      isVisible.value = window.pageYOffset > 200
    })
  
    observer.observe(document, config)
  
    window.addEventListener('scroll', () => {
      isVisible.value = window.pageYOffset > 200
    })
  })
  
  onUnmounted(() => {
    observer.disconnect()
  
    window.removeEventListener('scroll', () => {
      isVisible.value = window.pageYOffset > 200
    })
  })
  </script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>