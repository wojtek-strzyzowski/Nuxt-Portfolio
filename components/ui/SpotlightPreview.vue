<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import TextGenerateEffect from './TextGenerateEffect.vue';
import BorderMagicButton from '../buttons/BorderMagic.vue';

const showButton = ref(false);

function handleAnimationComplete() {
  showButton.value = true;
  nextTick(() => {
    gsap.fromTo(
      '.border-magic-button',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.6 }
    );
  });
}
</script>

<template>
  <div class="h-[40rem] w-full rounded-md flex items-center justify-center relative overflow-hidden">
    <!-- Spotlight-Bereich -->
    <div class="absolute -top-40 left-0 md:left-60 md:-top-20 bg-blue-300 opacity-50 rounded-full animate-spotlight w-96 h-96"></div>
    <!-- Textinhalt -->
    <div class="p-4 max-w-7xl mx-auto relative z-10 w-full text-center text-blue-300">
      <h1 class="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" @animationComplete="handleAnimationComplete" />
      </h1>
      <p class="mt-4 font-normal text-sm md:text-lg text-neutral-300 max-w-lg mx-auto">
        <TextGenerateEffect words="Hi, I`m Wojtek, a Junior Fullstack Web Dev based in Zürich" @animationComplete="handleAnimationComplete" />
      </p>
      <div class="flex items-center justify-center mt-4">
        <BorderMagicButton v-if="showButton" class="border-magic-button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>