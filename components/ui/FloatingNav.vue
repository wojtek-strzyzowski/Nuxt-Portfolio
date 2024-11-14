<script setup>
import { ref } from 'vue';
import { IconHome, IconUser, IconMessage } from '@tabler/icons-vue'; // Korrekte Importe

// Navigation Items
const navItems = ref([
  { name: 'Home', link: '#home', icon: IconHome },
  { name: 'About', link: '#about', icon: IconUser },
  { name: 'Contact', link: '#contact', icon: IconMessage },
]);
</script>

<template>
  <nav class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow-lg flex space-x-4 z-50">
    <NavIcon
      v-for="(item, index) in navItems"
      :key="index"
      :link="item.link"
      :icon="item.icon"
      :name="item.name"
    />
  </nav>
</template>

<style scoped>
</style>