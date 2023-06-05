<template>
  <div class="flex space-x-4">
    <Input label="Pixabay durchsuchen" 
           :value="localSearchTerm" 
           @update="handleInput"
           @keyup.enter="handleClick" />
    <Button @click="handleClick" :disabled="!localSearchTerm">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-2"/>
      <span>Suchen</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import Input from './BasicComponents/Input.vue'
import Button from './BasicComponents/Button.vue'

let localSearchTerm = ref('')

const emit = defineEmits(['update', 'search'])

function handleInput(value: string) {
  localSearchTerm.value = value
}

const handleClick = () => {
  if(localSearchTerm.value) {
    emit('search', localSearchTerm.value)
  }
}
</script>
