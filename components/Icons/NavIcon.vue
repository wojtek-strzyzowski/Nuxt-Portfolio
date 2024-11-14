<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <a :href="link" class="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
    <component :is="icon" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
    <span class="hidden md:inline text-gray-700 dark:text-gray-300">{{ name }}</span>
  </a>
</template>

<style scoped>
</style>