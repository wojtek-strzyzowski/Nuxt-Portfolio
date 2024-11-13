<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { gsap } from "gsap";

// Props to pass in the text and delay
const props = defineProps({
  words: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
});

// Emit event when animation is complete
const emit = defineEmits(['animationComplete']);

// Split text into an array of words
const wordsArray = ref(props.words.split(" "));

onMounted(() => {
  // Access all word elements by using querySelectorAll
  const wordElements = document.querySelectorAll('.word');

  gsap.to(wordElements, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.3,
    duration: 3,
    ease: "bounce.out", // Change the ease function here
    delay: props.delay,
    onComplete: () => {
      emit('animationComplete');
    }
  });
});
</script>

<template>
  <div class="font-bold mt-4 text-center">
    <div class="text-white">
      <!-- Adding a class "word" to each word span -->
      <span
        v-for="(word, index) in wordsArray"
        :key="index"
        class="word transition-opacity duration-500"
        style="opacity: 0; filter: blur(10px);"
      >
        {{ word }}&nbsp;
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Additional CSS if necessary */
</style>