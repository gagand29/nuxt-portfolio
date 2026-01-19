// Nuxt Configuration
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Nuxt 4 compatibility settings
  compatibilityDate: '2024-11-01',

  // Enable Nuxt DevTools for development
  devtools: { enabled: true },

  // Modules
  modules: ['@unocss/nuxt'],

  // CSS Files
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/animations.css',
  ],

  // App Configuration
  app: {
    // HTML Head configuration
    head: {
      title: 'Gagan Doddanna - Frontend Engineer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Frontend Engineer specializing in Vue.js, React, and scalable architectures with 2+ years of production experience.'
        },
        { name: 'theme-color', content: '#000000' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Gagan Doddanna - Frontend Engineer' },
        {
          property: 'og:description',
          content: 'Frontend Engineer specializing in Vue.js, React, and scalable architectures.'
        },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gagan Doddanna - Frontend Engineer' },
        {
          name: 'twitter:description',
          content: 'Frontend Engineer specializing in Vue.js, React, and scalable architectures.'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Google Fonts - Inter
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
      ],
    },
  },

  // Enable smooth scroll behavior
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
