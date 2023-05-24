<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="randomImage">
      <img :src="randomImage.webformatURL" alt="Random Image from Pixabay" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  interface PixabayImage {
    webformatURL: string;
  }
  
  const loading = ref(true)
  const randomImage = ref<PixabayImage | null>(null)
  
  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=36671687-d220e5d6d3ff0c7e36774a4f7&per_page=200`
      )
      const images = response.data.hits
      randomImage.value = images[Math.floor(Math.random() * images.length)]
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(fetchRandomImage)
  </script>
  