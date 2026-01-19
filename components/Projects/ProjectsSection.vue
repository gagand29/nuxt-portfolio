<script setup lang="ts">
/**
 * ProjectsSection Component
 * Grid display of selected work/projects
 */

import ProjectCard from './ProjectCard.vue'
import type { Project } from './ProjectCard.vue'

const projects: Project[] = [
  {
    title: 'Enterprise Telecom Dashboard',
    description: 'Production dashboard handling 12k+ node datasets with optimized rendering (600ms → 250ms). Virtual scrolling, reactive state management, and real-time updates.',
    tech: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia', 'Supabase'],
    links: {
      caseStudy: '#', // TODO: Add actual link
    },
  },
  {
    title: 'Real-time AI Interview Platform',
    description: 'Interactive interview platform with AI-powered questions, real-time transcription, and session management. Built scalable backend with AWS and WebSocket connections.',
    tech: ['React', 'Next.js', 'OpenAI', 'Firebase', 'WebSockets'],
    links: {
      caseStudy: '#', // TODO: Add actual link
      github: '#', // TODO: Add actual link
    },
  },
  {
    title: 'Movie Database & Streaming Platform',
    description: 'End-to-end movie platform with user authentication, cloud storage, and RESTful APIs. Complete CI/CD pipeline with AWS deployment and Swagger documentation.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'JWT'],
    links: {
      demo: '#', // TODO: Add actual link
      github: '#', // TODO: Add actual link
    },
  },
  {
    title: 'Enterprise Website Redesign',
    description: 'Complete redesign and rebuild of corporate website. Improved load time, modern design system, and responsive across all devices.',
    tech: ['Next.js', 'Tailwind', 'Figma', 'UX Design'],
    links: {
      demo: '#', // TODO: Add actual link
    },
  },
]
</script>

<template>
  <section
    id="projects"
    class="section-padding section-gradient-blue"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          Selected Work
        </h2>
        <p class="body-lg max-w-2xl">
          A curated list of projects from the last 2 years
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid-projects">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          class="reveal-item"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </section>
</template>
