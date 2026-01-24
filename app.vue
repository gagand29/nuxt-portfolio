<script setup lang="ts">
/**
 * App Root
 * Minimal setup with color mode
 */

const { colorMode, toggleColorMode } = useColorMode()

useHead({
  titleTemplate: (title) => title ? `${title} — Gagan Doddanna` : 'Gagan Doddanna — Product Engineer',
  htmlAttrs: {
    class: computed(() => colorMode.value === 'dark' ? 'dark' : ''),
  },
})

// Provide toggle function globally
provide('toggleColorMode', toggleColorMode)
</script>

<template>
  <NuxtPage />
</template>
