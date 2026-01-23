<script setup lang="ts">
/**
 * TechStackSection Component
 * Infinite scrolling marquee tech badges
 */

const technologies = [
  'Vue.js',
  'React',
  'Next.js',
  'Nuxt',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Firebase',
  'AWS',
  'Tailwind',
  'Figma',
  'Git',
  'Docker',
]
</script>

<template>
  <section class="py-16 border-y border-border overflow-hidden" aria-label="Technologies">
    <div class="marquee">
      <!-- First copy -->
      <div class="marquee-content">
        <span
          v-for="tech in technologies"
          :key="`a-${tech}`"
          class="badge text-sm"
        >
          {{ tech }}
        </span>
      </div>
      <!-- Second copy for seamless loop -->
      <div class="marquee-content" aria-hidden="true">
        <span
          v-for="tech in technologies"
          :key="`b-${tech}`"
          class="badge text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>
