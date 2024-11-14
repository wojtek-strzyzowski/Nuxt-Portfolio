<script setup lang="ts">
import { ref, onMounted, nextTick, defineProps, defineEmits } from "vue";
import { gsap } from "gsap";

// Props, um den Text und die Verzögerung zu übergeben
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

// Event-Emitter für die Fertigstellung der Animation
const emit = defineEmits(['animationComplete']);

// Flag für die Client-Seite
const isClient = ref(false);

// Array von Wörtern aus dem übergebenen Text erstellen
const wordsArray = ref(props.words.split(" "));

// Animation beim Laden der Komponente starten
onMounted(async () => {
  isClient.value = true;
  await nextTick(); // Sicherstellen, dass das DOM vollständig geladen ist
  const wordElements = document.querySelectorAll('.word');
  gsap.to(wordElements, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.2,
    duration: 3,
    ease: "bounce.out",
    delay: props.delay,
    onComplete: () => {
      emit('animationComplete');
    }
  });
});
</script>

<template>
  <!-- Render nur auf der Client-Seite mit v-if -->
  <div v-if="isClient" class="font-bold mt-4 text-center">
    <div class="text-white">
      <!-- Jeder Textabschnitt erhält die Klasse "word" -->
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
/* Zusätzliche CSS falls benötigt */
</style>
