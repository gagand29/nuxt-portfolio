<script setup lang="ts">
/**
 * ProjectCard Component
 * Glass card with hover lift and clean typography
 *
 * Features:
 * - Glass card design
 * - Hover lift effect
 * - Tech stack as subtle badges
 * - Arrow icon for links
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
  featured?: boolean
  links: ProjectLinks
}

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<template>
  <article
    class="bento-card group"
    :class="project.featured && 'md:flex md:gap-8'"
  >
    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <!-- Tech stack badges -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="techItem in project.tech"
          :key="techItem"
          class="badge"
        >
          {{ techItem }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="heading-4 group-hover:text-accent transition-colors mb-3">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="body-base line-clamp-3 flex-1">
        {{ project.description }}
      </p>

      <!-- Links -->
      <div class="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-border">
        <!-- Case Study -->
        <a
          v-if="project.links.caseStudy"
          :href="project.links.caseStudy"
          class="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors group/link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Project</span>
          <span class="i-ph-arrow-up-right w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>

        <!-- GitHub -->
        <a
          v-if="project.links.github"
          :href="project.links.github"
          class="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
        >
          <span class="i-ph-github-logo w-4 h-4" />
          <span>Code</span>
        </a>

        <!-- Live Demo -->
        <a
          v-if="project.links.demo"
          :href="project.links.demo"
          class="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="i-ph-globe w-4 h-4" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </article>
</template>
