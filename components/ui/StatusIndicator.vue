<script setup lang="ts">
/**
 * StatusIndicator Component
 * Animated availability badge
 *
 * Features:
 * - Pulsing dot
 * - "Available for work" text
 * - Clean, minimal design
 */

interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Available for work',
})
</script>

<template>
  <div class="status-badge">
    <span class="status-dot" />
    <span>{{ text }}</span>
  </div>
</template>
