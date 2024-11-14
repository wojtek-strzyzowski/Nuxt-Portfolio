<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { IconHome, IconUser, IconMessage } from '@tabler/icons-vue';

// Define the navbar items with icons and links
const navItems = ref([
  { name: 'Home', link: '#home', icon: IconHome },
  { name: 'About', link: '#about', icon: IconUser },
  { name: 'Contact', link: '#contact', icon: IconMessage },
]);

// State to control the visibility of the navbar
const isVisible = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav v-if="isVisible" class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-950 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow-lg flex space-x-4 z-50 transition-opacity duration-500">
    <a v-for="item in navItems" :key="item.name" :href="item.link" class="flex items-center space-x-2 text-white dark:text-white hover:text-blue-500">
      <component :is="item.icon" class="w-5 h-5"/>
      <span class="hidden md:block">{{ item.name }}</span>
    </a>
  </nav>
</template>