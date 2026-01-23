<script setup lang="ts">
/**
 * ProjectsSection Component
 * Bento grid display of selected work/projects
 *
 * Features:
 * - Bento grid layout with mixed sizes
 * - Featured project as large card
 * - Clean, minimal design
 */

import ProjectCard from './ProjectCard.vue'
import type { Project } from './ProjectCard.vue'

const projects: Project[] = [
  {
    title: 'volivr',
    description: 'Production dashboard handling 12k+ node datasets with optimized rendering. Reduced render times from 600ms to 250ms through virtual scrolling and reactive state management.',
    tech: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
    featured: true,
    links: {
      caseStudy: '#',
    },
  },
  {
    title: 'AI Interview Platform',
    description: 'Real-time interview platform with AI-powered questions and live transcription. Built scalable backend with WebSocket connections.',
    tech: ['React', 'Next.js', 'OpenAI', 'Firebase'],
    links: {
      caseStudy: '#',
      github: '#',
    },
  },
  {
    title: 'Movie Database Platform',
    description: 'End-to-end movie platform with authentication, cloud storage, and RESTful APIs. Complete CI/CD pipeline.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Complete redesign improving load time, modern design system, and responsive experience across all devices.',
    tech: ['Next.js', 'Tailwind', 'Figma'],
    links: {
      demo: '#',
    },
  },
]
</script>

<template>
  <section
    id="projects"
    class="section-padding"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          Selected Work
        </h2>
        <p class="body-base text-text-muted max-w-lg">
          Featured projects from the last 2 years
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :class="[
            'reveal-item',
            project.featured && 'md:col-span-2'
          ]"
          :style="{ animationDelay: `${index * 75}ms` }"
        />
      </div>
    </div>
  </section>
</template>
