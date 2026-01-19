<script setup lang="ts">
/**
 * ExpertiseSection Component
 * Grid display of areas of expertise
 */

import ExpertiseCard from './ExpertiseCard.vue'
import type { Expertise } from './ExpertiseCard.vue'

const expertiseAreas: Expertise[] = [
  {
    icon: 'Code',
    title: 'Frontend Development',
    description: 'Building pixel-perfect, high-performance interfaces with Vue, React, and Next.js. Focus on scalability, accessibility, and exceptional user experience.',
  },
  {
    icon: 'Stack',
    title: 'Full-Stack Development',
    description: 'End-to-end application development with Node.js, databases, and cloud deployment. RESTful APIs and modern, scalable architectures.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered design with Figma and Adobe tools. Prototyping, user research, and building cohesive design systems.',
  },
]
</script>

<template>
  <section
    id="expertise"
    class="section-padding section-gradient-purple"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          What I Do
        </h2>
      </div>

      <!-- Expertise grid -->
      <div class="grid-expertise">
        <ExpertiseCard
          v-for="(item, index) in expertiseAreas"
          :key="item.title"
          :expertise="item"
          class="reveal-item"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </section>
</template>
