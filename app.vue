<script setup lang="ts">
/**
 * App.vue - Root component for the Nuxt application
 * Initializes color mode and sets up global head configuration
 *
 * Theme Strategy:
 * - Light mode is default for professional appearance
 * - Dark mode available via toggle in header
 * - Preference persisted in localStorage
 */

// Initialize color mode on app mount
const { colorMode } = useColorMode()

// Page meta configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Gagan Doddanna` : 'Gagan Doddanna - Frontend Engineer'
  },
  // Prevent flash of wrong theme by setting initial class
  htmlAttrs: {
    class: computed(() => colorMode.value === 'dark' ? 'dark' : ''),
  },
})
</script>

<template>
  <!-- NuxtLayout automatically uses layouts/default.vue -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* App-level styles handled in main.css */
</style>
