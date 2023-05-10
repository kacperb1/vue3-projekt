<template>
  <label :for="id"
    class="relative block overflow-hidden bg-white rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
    <input :type="type" :id="id" :placeholder="placeholder" v-model="inputValue"
      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
    <span
      class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
      {{ label }}
    </span>
    <button v-if="inputValue" @click="clearInput" class="absolute right-3 top-3">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>

  </label>
</template>
  
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  id: string;
  label?: string;
  [key: string]: any
}

const props = defineProps<InputFieldProps>()

const type = props.type || 'text';
const placeholder = props.placeholder || '';
const label = props.label || '';
const id = props.id;

const emits = defineEmits(['clearInput'])

const inputValue = ref('')

function clearInput() {
  inputValue.value = ''
}
</script> 