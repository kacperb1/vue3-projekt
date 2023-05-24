<template>
  <Layout>
    <div>
      <ImageSearch />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import ImageSearch from '@/components/ImageSearch.vue'

const handleClearInput = () => {
  console.log('Input cleared')
}
</script>
