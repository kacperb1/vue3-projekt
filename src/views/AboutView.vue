<template>
  <Layout>
    <div>
      <InputField id="example" label="Example" placeholder="Enter text here" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';
import InputField from '../components/InputField.vue'

const handleClearInput = () => {
  console.log('Input cleared')
}
</script>
