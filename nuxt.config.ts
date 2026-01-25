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
        class: 'dark', // Default to dark mode to prevent flash
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Frontend-heavy full-stack engineer building scalable product systems. Vue, React, TypeScript, Cloud Infrastructure.'
        },
        { name: 'theme-color', content: '#0A0F1A' }, // Updated to new dark bg
        { name: 'color-scheme', content: 'dark light' },
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
      // Inline script to set theme before paint (prevents flash)
      script: [
        {
          children: `
            (function() {
              var stored = localStorage.getItem('color-mode');
              var theme = stored;
              if (!theme) {
                var hour = new Date().getHours();
                theme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
              }
              if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
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
