<script setup lang="ts">
/**
 * ExpertiseCard Component
 * Individual expertise/service card
 */

export interface Expertise {
  icon: 'Code' | 'Stack' | 'Palette'
  title: string
  description: string
}

interface Props {
  expertise: Expertise
}

defineProps<Props>()

// Icon colors
const iconColors: Record<string, string> = {
  Code: '#1DB954',
  Stack: '#3b82f6',
  Palette: '#f24e1e',
}
</script>

<template>
  <article class="glass-card-hover p-8 space-y-4 group">
    <!-- Icon -->
    <div
      class="w-12 h-12 rounded-lg flex-center transition-all duration-300 group-hover:scale-110"
      :style="{
        backgroundColor: `${iconColors[expertise.icon]}20`,
        color: iconColors[expertise.icon],
      }"
    >
      <!-- Code icon -->
      <svg
        v-if="expertise.icon === 'Code'"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>

      <!-- Stack icon -->
      <svg
        v-else-if="expertise.icon === 'Stack'"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>

      <!-- Palette icon -->
      <svg
        v-else-if="expertise.icon === 'Palette'"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    </div>

    <!-- Title -->
    <h3 class="heading-4">
      {{ expertise.title }}
    </h3>

    <!-- Description -->
    <p class="body-base">
      {{ expertise.description }}
    </p>
  </article>
</template>
