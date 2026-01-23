<script setup lang="ts">
/**
 * SocialLinks Component
 * Reusable social links with icons
 *
 * Features:
 * - Icon buttons with labels
 * - Hover animations
 * - Configurable links array
 */

interface SocialLink {
  icon: string
  url: string
  label: string
}

interface Props {
  links?: SocialLink[]
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  links: () => [
    { icon: 'i-ph-github-logo', url: 'https://github.com/gagancodess', label: 'GitHub' },
    { icon: 'i-ph-linkedin-logo', url: 'https://linkedin.com/in/gagancodess', label: 'LinkedIn' },
    { icon: 'i-ph-behance-logo', url: 'https://behance.net/gagancodess', label: 'Behance' },
  ],
  showLabels: false,
  size: 'md',
})

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}
</script>

<template>
  <div class="flex items-center gap-3">
    <a
      v-for="social in props.links"
      :key="social.label"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.label"
      :class="[
        'flex items-center justify-center rounded-xl',
        'glass hover:bg-surface-hover transition-all duration-200',
        'hover:scale-105',
        props.showLabels ? 'gap-2 px-4 py-2' : sizeClasses[props.size],
      ]"
    >
      <span :class="[social.icon, iconSizes[props.size]]" />
      <span v-if="props.showLabels" class="text-sm font-medium">{{ social.label }}</span>
    </a>
  </div>
</template>
