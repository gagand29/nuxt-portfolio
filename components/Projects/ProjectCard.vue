<script setup lang="ts">
/**
 * ProjectCard Component
 * Individual project card with image, tech stack, and links
 */

export interface ProjectLinks {
  caseStudy?: string
  github?: string
  demo?: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  links: ProjectLinks
}

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<template>
  <article class="glass-card card-lift card-shine group overflow-hidden">
    <!-- Project image -->
    <div class="aspect-video relative overflow-hidden bg-surface-hover">
      <!-- Placeholder gradient if no image -->
      <div
        v-if="!project.image"
        class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-surface to-accent-secondary/20"
      />

      <!-- Actual image -->
      <img
        v-else
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >

      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-center">
        <span class="text-sm font-medium text-text-primary">View Details</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Tech stack badges -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="techItem in project.tech"
          :key="techItem"
          class="badge"
        >
          {{ techItem }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="heading-4 group-hover:text-accent-primary transition-colors">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="body-base line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Links -->
      <div class="flex flex-wrap gap-3 pt-2">
        <!-- Case Study -->
        <a
          v-if="project.links.caseStudy"
          :href="project.links.caseStudy"
          class="btn-primary-sm flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Case Study</span>
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        <!-- GitHub -->
        <a
          v-if="project.links.github"
          :href="project.links.github"
          class="glass-button-sm flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span>GitHub</span>
        </a>

        <!-- Live Demo -->
        <a
          v-if="project.links.demo"
          :href="project.links.demo"
          class="glass-button-sm flex items-center gap-2"
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Line clamp for description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
