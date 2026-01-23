<script setup lang="ts">
/**
 * ExperienceSection Component
 * Minimal timeline display of work experience
 *
 * Features:
 * - Clean, left-aligned timeline
 * - Company + Role + Duration
 * - Minimal design
 */

interface Experience {
  title: string
  company: string
  period: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Arontel (Remofirst)',
    period: 'Jul 2025 - Present',
    current: true,
  },
  {
    title: 'Software Engineer',
    company: 'YES HardSoft Solutions',
    period: 'Dec 2024 - May 2025',
  },
  {
    title: 'Full-Stack Engineer',
    company: '2ndSight.ai',
    period: 'Aug 2024 - Nov 2024',
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

      <!-- Timeline -->
      <div class="space-y-0">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.company"
          class="timeline-item py-6 reveal-item"
          :style="{ animationDelay: `${index * 75}ms` }"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 class="text-lg font-semibold text-text-primary flex items-center gap-2">
                {{ exp.title }}
                <span v-if="exp.current" class="badge-accent text-xs">Current</span>
              </h3>
              <p class="text-accent font-medium">{{ exp.company }}</p>
            </div>
            <span class="text-sm text-text-muted">{{ exp.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
