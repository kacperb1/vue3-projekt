<template>
  <label class="relative block overflow-hidden bg-white rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 flex-grow" >
    <input type="text" :value="value" @input="handleInput" @focus="focus = true" @blur="focus = false" class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
    <span :class="`absolute left-3 transition-all transform ${focus || value ? 'text-xs text-gray-700 top-1' : 'text-sm text-gray-500 top-3'}`">
      {{ label }}
    </span>
    <button v-if="value" @click="clearValue" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </button>
  </label>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from 'vue';

const props = withDefaults(defineProps<{
  label: string;
  value: string;
}>(), {
  label: '',
  value: '',
});

const focus = ref(false);

const emit = defineEmits(['update'])

function handleInput(event: Event) {
  emit('update', (event.target as HTMLInputElement).value)
}

function clearValue() {
  emit('update', '')
}
</script>
