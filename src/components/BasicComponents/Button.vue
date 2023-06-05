  <template>
    <button class="ml-3 text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 rounded px-4 py-2 transition-colors duration-200 ease-in-out" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
    import { defineEmits } from 'vue'
  
    const emit = defineEmits(['click'])
  
    function handleClick() {
        emit('click')
    }
  </script>