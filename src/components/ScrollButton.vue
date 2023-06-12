<template>
    <div v-show="isButtonVisible" class="fixed bottom-4 cursor-pointer z-50" :class="cssClasses" @click="scrollToTop">
      <Button class="shadow-md">
        <slot>        
          <font-awesome-icon :icon="['fas', 'arrow-up']" class="mr-2" />
          <span>Nach oben</span>
        </slot>
      </Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, defineProps, computed } from 'vue';
  import Button from './BasicComponents/Button.vue';
  
  const props = defineProps({
    position: {
      type: String,
      default: 'right'
    },
    scrollThreshold: {
      type: Number,
      default: 250
    }
  });
  
  const cssClasses = computed(()=>({
      [`${props.position}`]: true
  }
  ))

  const isButtonVisible = ref(false);

  const checkScroll = () => {
  isButtonVisible.value = window.pageYOffset > props.scrollThreshold;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
  .left {
    @apply left-4;
  }

  .right {
    @apply right-4;
  }
</style>
