<template>
  <div>
    <SearchBar @search="fetchImages" />
    <div v-if="loading" class="flex mt-8 items-center justify-center space-x-2 text-center text-gray-500 text-lg">
      <font-awesome-icon :icon="['fas', 'fan']" spin style="color: #673ab7;" />
      <span>Die Ergebnisse werden abgerufen...</span>
    </div>
    <div v-else-if="images.length > 0 && allImagesLoaded">
      <div class="images-container">
        <img v-for="image in images" :key="image.id" :src="image.webformatURL" :alt="image.tags" />
      </div>
    </div>
    <div v-else-if="searchInitiated" class="text-center mt-8 text-gray-500 text-lg">
      Keine Ergebnisse für den Suchbegriff <i>{{ searchTerm }}</i> :/
    </div>
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'
  import SearchBar from './SearchBar.vue'
  import type { Image } from '@/types/Image' 
  
  const API_KEY = '36671687-d220e5d6d3ff0c7e36774a4f7'  
  const PIXABAY_API = `https://pixabay.com/api/?key=${API_KEY}&per_page=50&image_type=photo`
  
  let searchTerm = ref('')
  let images = ref<Image[]>([])
  let loading = ref(false)
  let allImagesLoaded = ref(false)
  let searchInitiated = ref(false)
  
  async function fetchImages(searchTermValue: string) {
    loading.value = true
    searchTerm.value = searchTermValue
    const response = await fetch(`${PIXABAY_API}&q=${encodeURIComponent(searchTermValue)}`)
    const data = await response.json()
    images.value = data.hits

    const loadPromises = images.value.map((image) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = image.webformatURL
        img.onload = resolve
      })
    })

    await Promise.all(loadPromises)

    allImagesLoaded.value = true
    loading.value = false
    searchInitiated.value = true
  }
</script>

<style scoped>
.images-container {
  column-count: 3;
  column-gap: 1rem;
  margin-top: 1rem;
}

.images-container img {
  width: 100%;
  display: inline-block;
  margin-bottom: 1rem;
}
</style>