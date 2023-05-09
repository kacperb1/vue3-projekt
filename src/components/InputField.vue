<template>
    <div>
        <label>{{ label }}</label>
        <div>
            <input v-model="inputValue" :type="type" :placeholder="placeholder">
            <button v-if="inputValue" @click="clearInput"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

interface InputFieldProps {
    type?: string;
    placeholder?: string;
    label?: string;
    [key: string]: any
}

const props = defineProps<InputFieldProps>()

const type = props.type || 'text';
const placeholder = props.placeholder || '';
const label = props.label || '';

const emits = defineEmits(['clearInput'])

const inputValue = ref('')

function clearInput() {
    inputValue.value = ''
}

</script>