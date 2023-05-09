<template>
  <div class="home-page">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">Click me!</button>
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

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

button {
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2c9e6f;
}
</style>
