<template>
  <div>
    <form @submit.prevent="searchImages" class="flex items-center mb-4">
      <label :for="'search'" class="relative block overflow-hidden bg-white rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 flex-grow">
        <input type="text" id="search" placeholder="Search images..." v-model="searchTerm" class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
        <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          Bildersuche
        </span>
        <button v-if="searchTerm" @click.prevent="clearSearch" type="button" class="absolute right-3 top-3">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </label>
      <button type="submit" class="ml-3 text-white bg-purple-500 hover:bg-purple-600 rounded px-4 py-2 transition-colors duration-200 ease-in-out">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </form>
      <div v-if="isLoading" class="flex items-center justify-center space-x-2 text-center text-gray-500 text-lg">
        <div role="status" class="flex items-center">
          <svg aria-hidden="true" class="w-8 h-8 mr-2 text-blue-600 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#673ab7"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#673ab7"/>
          </svg>
          <span class="sr-only">Lädt...</span>
        </div>
        <div>Ergebnisse werden geladen...</div>
      </div>
      <div v-else-if="searchPerformed && !images.length" class="text-center text-gray-500 text-lg">
        Keine Ergebnisse gefunden :/
      </div>
      <div v-else-if="images.length" class="grid grid-cols-3 gap-4">
        <div v-for="image in images" :key="image.id" class="overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
          <img :src="image.webformatURL" :alt="image.tags" class="object-cover w-full h-64" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface Image {
    id: string;
    webformatURL: string;
    tags: string;
  }
  
  let searchTerm = ref('');
  let images = ref<Image[]>([]);
  let searchPerformed = ref(false);
  let isLoading = ref(false);
  
  const searchImages = async () => {
    isLoading.value = true;
    searchPerformed.value = true;
    const response = await fetch(`https://pixabay.com/api/?key=36671687-d220e5d6d3ff0c7e36774a4f7&q=${searchTerm.value}&image_type=photo&per_page=40`);
    const data = await response.json();
    images.value = data.hits;
    isLoading.value = false;
  }
  
  const clearSearch = () => {
    searchTerm.value = '';
    images.value = [];
    searchPerformed.value = false;
  }
  </script>
  