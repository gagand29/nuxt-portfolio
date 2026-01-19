<script setup lang="ts">
/**
 * CertificationCard Component
 * Individual certification display card
 */

export interface Certification {
  icon: 'AWS' | 'Design' | 'AI' | 'DataScience'
  title: string
  organization?: string
  date: string
  status?: 'In Progress'
  statusBadge?: string
  link?: string
}

interface Props {
  certification: Certification
}

defineProps<Props>()

// Icon colors based on type
const iconColors: Record<string, string> = {
  AWS: '#ff9900',
  Design: '#f24e1e',
  AI: '#10a37f',
  DataScience: '#3b82f6',
}

// Icon SVG based on type (simplified representations)
const iconSymbols: Record<string, string> = {
  AWS: 'AWS',
  Design: 'UX',
  AI: 'AI',
  DataScience: 'DS',
}
</script>

<template>
  <article class="glass-card-hover p-6 flex flex-col items-center text-center space-y-4 group">
    <!-- Icon -->
    <div
      class="w-16 h-16 rounded-xl flex-center text-2xl font-bold transition-transform group-hover:scale-110"
      :style="{
        backgroundColor: `${iconColors[certification.icon]}20`,
        color: iconColors[certification.icon],
      }"
    >
      {{ iconSymbols[certification.icon] }}
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-text-primary leading-tight">
      {{ certification.title }}
    </h3>

    <!-- Organization (optional) -->
    <p
      v-if="certification.organization"
      class="text-sm text-text-muted"
    >
      {{ certification.organization }}
    </p>

    <!-- Date -->
    <p class="text-sm text-text-secondary">
      {{ certification.date }}
    </p>

    <!-- Status badge (for in-progress) -->
    <span
      v-if="certification.statusBadge"
      class="badge-ongoing"
    >
      {{ certification.statusBadge }}
    </span>

    <!-- View credential button -->
    <a
      v-if="certification.link"
      :href="certification.link"
      class="glass-button-sm mt-auto flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <span>View Credential</span>
    </a>
  </article>
</template>
