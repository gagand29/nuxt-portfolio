<script setup lang="ts">
/**
 * HeroSection Component
 * Minimal hero with gradient blobs, metrics, and scroll indicator
 */

import StatusIndicator from '~/components/ui/StatusIndicator.vue'
import SocialLinks from '~/components/ui/SocialLinks.vue'

// Metrics data
const metrics = [
  { value: '12k+', label: 'Nodes Optimized' },
  { value: '60%', label: 'Faster Renders' },
  { value: '3+', label: 'Years Building' },
]

// Smooth scroll to projects section
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Magnetic button effect
const buttonRef = ref<HTMLButtonElement | null>(null)
const buttonTransform = ref({ x: 0, y: 0 })

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return
  const rect = buttonRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  buttonTransform.value = { x: x * 0.15, y: y * 0.15 }
}

const handleMouseLeave = () => {
  buttonTransform.value = { x: 0, y: 0 }
}
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center relative overflow-hidden"
  >
    <!-- Gradient Blobs -->
    <div class="gradient-blob gradient-blob-1" aria-hidden="true" />
    <div class="gradient-blob gradient-blob-2" aria-hidden="true" />

    <div class="section-container w-full py-20 lg:py-0 relative z-10">
      <div class="max-w-4xl space-y-10">
        <!-- Status indicator -->
        <StatusIndicator class="animate-fade-up" />

        <!-- Main heading -->
        <div class="space-y-4 animate-fade-up" style="animation-delay: 100ms;">
          <h1 class="heading-display">
            <span class="text-gradient">Gagan</span>
            <span class="block text-text-primary">Doddanna</span>
          </h1>
        </div>

        <!-- Tagline -->
        <p
          class="text-xl sm:text-2xl text-text-secondary max-w-xl text-balance animate-fade-up"
          style="animation-delay: 200ms;"
        >
          Frontend engineer crafting performant interfaces with Vue, React, and modern web architectures.
        </p>

        <!-- Actions row -->
        <div
          class="flex flex-wrap items-center gap-6 animate-fade-up"
          style="animation-delay: 300ms;"
        >
          <!-- Magnetic Primary CTA -->
          <button
            ref="buttonRef"
            class="magnetic-btn btn-primary group"
            :style="{
              transform: `translate(${buttonTransform.x}px, ${buttonTransform.y}px)`
            }"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            @click="scrollToProjects"
          >
            <span class="magnetic-btn-inner flex items-center gap-2">
              <span>View Work</span>
              <span class="i-ph-arrow-down w-5 h-5 transition-transform group-hover:translate-y-1" />
            </span>
          </button>

          <!-- Social Links -->
          <SocialLinks />
        </div>

        <!-- Metrics -->
        <div
          class="flex flex-wrap gap-8 pt-8 border-t border-border animate-fade-up"
          style="animation-delay: 400ms;"
        >
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="space-y-1"
          >
            <div class="metric-value">{{ metric.value }}</div>
            <div class="text-sm text-text-muted">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-up"
      style="animation-delay: 500ms;"
      aria-hidden="true"
    >
      <span class="text-xs text-text-muted uppercase tracking-wider">Scroll</span>
      <div class="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-text-muted animate-float" />
      </div>
    </div>
  </section>
</template>
