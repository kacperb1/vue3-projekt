<template>
  <div>
    <h1>This is an Input Field</h1>
    <InputField type="text" placeholder="Placeholder" label="Label" />
  </div>
</template>


<script setup lang="ts">
import InputField from '../components/InputField.vue'

const components = { InputField };
</script>
