<script setup lang="ts">
/**
 * ExperienceCard Component
 * Individual work experience card
 */

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  logo?: string
  current?: boolean
}

interface Props {
  experience: Experience
}

defineProps<Props>()
</script>

<template>
  <article class="glass-card-hover p-6 accent-border-left space-y-3 group">
    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
      <!-- Company logo placeholder -->
      <div
        v-if="experience.logo"
        class="w-12 h-12 rounded-lg bg-surface-hover flex-center shrink-0"
      >
        <img
          :src="experience.logo"
          :alt="experience.company"
          class="w-8 h-8 object-contain"
        >
      </div>

      <!-- Content -->
      <div class="flex-1 space-y-2">
        <!-- Title and company -->
        <div>
          <h3 class="text-xl font-semibold text-text-primary flex items-center gap-2">
            {{ experience.title }}
            <span
              v-if="experience.current"
              class="badge-accent text-xs"
            >
              Current
            </span>
          </h3>
          <p class="text-lg text-accent-primary font-medium">
            {{ experience.company }}
          </p>
        </div>

        <!-- Period and location -->
        <div class="flex flex-wrap gap-4 text-sm">
          <span class="text-text-secondary flex items-center gap-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {{ experience.period }}
          </span>
          <span class="text-text-muted flex items-center gap-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {{ experience.location }}
          </span>
        </div>

        <!-- Description -->
        <p class="body-base pt-2">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </article>
</template>
