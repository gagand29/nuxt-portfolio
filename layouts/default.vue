<script setup lang="ts">
/**
 * Default Layout
 * Provides consistent structure with Header for all pages
 *
 * Features:
 * - Fixed header with navigation
 * - Main content area with proper padding for header
 * - Animated gradient background (dark mode only)
 */

// Import header component
import AppHeader from '~/components/Header/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-text-primary transition-colors duration-300">
    <!-- Animated gradient background (visible in dark mode only) -->
    <div class="animated-gradient-bg" />

    <!-- Fixed Header -->
    <AppHeader />

    <!-- Main Content (with top padding for fixed header) -->
    <main class="pt-16 lg:pt-18">
      <slot />
    </main>
  </div>
</template>
