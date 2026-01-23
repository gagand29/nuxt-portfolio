<script setup lang="ts">
/**
 * GlassCard Component
 * Reusable glass card with configurable options
 *
 * Features:
 * - Backdrop blur
 * - Subtle border
 * - Optional hover state
 * - Configurable padding
 */

interface Props {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  hover: true,
  padding: 'md',
  as: 'div',
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <component
    :is="props.as"
    :class="[
      'rounded-2xl transition-all duration-300',
      'backdrop-blur-xl bg-surface border border-border shadow-card',
      props.hover && 'hover:bg-surface-hover hover:border-border-hover hover:shadow-card-hover hover:translate-y-[-2px]',
      paddingClasses[props.padding],
    ]"
  >
    <slot />
  </component>
</template>
