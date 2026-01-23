<script setup lang="ts">
/**
 * Default Layout
 * Modern minimal design with grain texture overlay
 *
 * Features:
 * - Fixed header with navigation
 * - Subtle grain texture overlay
 * - Clean, minimal structure
 */

import AppHeader from '~/components/Header/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-text-primary transition-colors duration-300 grain-overlay">
    <!-- Fixed Header -->
    <AppHeader />

    <!-- Main Content (with top padding for fixed header) -->
    <main class="pt-16 lg:pt-18">
      <slot />
    </main>
  </div>
</template>
