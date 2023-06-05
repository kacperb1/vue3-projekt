<template>
    <Layout>
    <h1>Knopf Komponente</h1>
      <Button>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-2"/>
        <span>Suchen</span>
      </Button>
      <div class="border-t border-black my-4"></div>
      <h1>Eingabefeld Komponente</h1>
      <Input label="Pixabay durchsuchen"/>
      <div class="border-t border-black my-4"></div>
      <h1>Knopf und Eingabefeld kombiniert in eine Suchleiste</h1>
      <SearchBar />
      <div class="border-t border-black my-4"></div>
      <h1>Suchleiste + Ergebnisse</h1>
      <PictureSearch />
    </Layout>
  </template>
  
  <script setup lang="ts">
  import Layout from '@/layouts/Layout.vue';
  import Input from '@/components/BasicComponents/Input.vue';
  import Button from '@/components/BasicComponents/Button.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import PictureSearch from '@/components/PictureSearch.vue';
  </script>
  