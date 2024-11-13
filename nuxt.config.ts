// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Wojtek's Portfolio", // Verwende doppelte Anführungszeichen oder einfache Anführungszeichen
      meta: [
        { name: 'description', content: 'Modern & Minimalistic JS Portfolio' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Weitere Meta-Tags hier hinzufügen
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Weitere Links hier hinzufügen
      ],
    },
  },
});