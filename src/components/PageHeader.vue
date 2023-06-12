<template>

      <header ref="header" class="fixed top-0 w-full z-50 bg-opacity-75 backdrop-filter backdrop-blur-lg transition-all duration-500 ease-in-out" :class="{'shadow-lg': scrolled, 'bg-white': scrolled, 'bg-transparent': !scrolled, 'h-24': !scrolled, 'h-16': scrolled}">
        <div class="container mx-auto px-6 flex items-center justify-between h-full">
          <div>
            <a class="text-deep-purple-accent-400 text-2xl font-outfit font-600 lg:text-4xl" href="#">
              Test
            </a>
          </div>
          <div class="flex items-center">
                <nav>
                    <RouterLink to="/" class="mx-2">Bildersuche</RouterLink>
                    <RouterLink to="/playground" class="mx-2">Playground</RouterLink>
                </nav>
            </div>
      </div>
    </header>
    <div :style="`padding-top: ${headerHeight}px`">
      <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

let scrolled = ref(false);
let header = ref<HTMLElement | null>(null);
let headerHeight = ref(0);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateHeaderHeight);
  updateHeaderHeight();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateHeaderHeight);
});

watchEffect(() => {
  updateHeaderHeight();
});

function updateHeaderHeight() {
  if (header.value) {
    headerHeight.value = header.value.offsetHeight;
  }
}
</script>

<style scoped>
.container {
  max-width: 1024px;
}
</style>