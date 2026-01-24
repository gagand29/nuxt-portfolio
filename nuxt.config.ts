// Nuxt Configuration
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],

  css: ['@/assets/styles/main.css'],

  app: {
    head: {
      title: 'Gagan Doddanna — Product Engineer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Frontend-heavy full-stack engineer building scalable product systems. Vue, React, TypeScript, Cloud Infrastructure.'
        },
        { name: 'theme-color', content: '#0B1220' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Gagan Doddanna — Product Engineer' },
        { property: 'og:description', content: 'I build scalable product systems, not just interfaces.' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
      ],
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
