<template>
  <div class="home-page text-center py-5">
    <h1 class="text-2x1 font-bold mb-4">{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage" class="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 mt-4 transition-colors duration-300">Click me!</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = 'Welcome to the Home Page';
const message = ref('This is a simple Vue 3 component using TypeScript and Composition API.');

function changeMessage() {
  message.value = 'You have clicked the button!';
}
</script>