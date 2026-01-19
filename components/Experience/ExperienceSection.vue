<script setup lang="ts">
/**
 * ExperienceSection Component
 * Timeline display of work experience
 */

import ExperienceCard from './ExperienceCard.vue'
import type { Experience } from './ExperienceCard.vue'

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Arontel (Remofirst)',
    period: 'Jul 2025 - Present',
    location: 'Chicago, IL',
    description: 'Building large-scale Vue/Nuxt dashboards for telecom platforms. Led performance optimization reducing render times from 600ms to 250ms for 12k+ node datasets.',
    current: true,
  },
  {
    title: 'Software Engineer',
    company: 'YES HardSoft Solutions',
    period: 'Dec 2024 - May 2025',
    location: 'Remote',
    description: 'Frontend architecture and complete website revamp projects using Next.js and modern React patterns.',
  },
  {
    title: 'Full-Stack Engineer',
    company: '2ndSight.ai',
    period: 'Aug 2024 - Nov 2024',
    location: 'Remote',
    description: 'Developed AI-powered interview platform with React, Next.js, and OpenAI integration. Implemented real-time transcription and WebSocket connections.',
  },
]
</script>

<template>
  <section
    id="experience"
    class="section-padding"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          Experience
        </h2>
      </div>

      <!-- Experience timeline -->
      <div class="space-y-6">
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="exp.company"
          :experience="exp"
          class="reveal-item"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </section>
</template>
