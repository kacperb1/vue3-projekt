<template>
  <Layout>
    <h1 class="text-4xl text-center font-outfit font-500 mb-8">Pixabay Bildersuche</h1>
    <div class="mx-8">
      <PictureSearch />
    </div>
    <ScrollButton></ScrollButton>
    <ScrollButton :position="'left'" :scrollThreshold="2000"></ScrollButton>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import ScrollButton from '@/components/ScrollButton.vue';
import PictureSearch from '@/components/PictureSearch.vue';
</script>