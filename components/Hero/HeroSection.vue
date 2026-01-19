<script setup lang="ts">
/**
 * HeroSection Component
 * Main hero/landing section with intro text and rotating badge
 *
 * Features:
 * - Responsive layout with rotating badge
 * - Copy email functionality
 * - Smooth scroll to projects
 * - Theme-aware styling
 */

import RotatingBadge from './RotatingBadge.vue'

// Email for copy functionality
const email = 'gagandoddanna@gmail.com'
const copied = ref(false)

// Copy email to clipboard
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}

// Smooth scroll to projects section
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden"
  >
    <!-- Animated background gradient (only visible in dark mode via CSS) -->
    <div class="animated-gradient-bg" />

    <div class="section-container w-full py-16 lg:py-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left side: Text content -->
        <div class="space-y-8 animate-fade-in-up">
          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
            <span class="w-2 h-2 rounded-full bg-accent-primary animate-glow-pulse" />
            <span class="text-sm text-text-secondary font-medium">
              Available for new opportunities
            </span>
          </div>

          <!-- Main heading -->
          <div class="space-y-4">
            <h1 class="heading-1">
              Hi, I'm
              <span class="text-gradient">Gagan</span>
            </h1>
            <p class="body-lg max-w-xl text-balance">
              Frontend Engineer specializing in Vue.js, React, and scalable
              architectures with 2+ years of production experience.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <!-- Primary: View Work -->
            <button
              class="btn-primary flex items-center gap-2 group"
              @click="scrollToProjects"
            >
              <span>View Selected Work</span>
              <svg
                class="w-5 h-5 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            <!-- Secondary: Copy Email -->
            <button
              class="btn-secondary flex items-center gap-2 relative"
              :class="{ 'copy-feedback copied': copied }"
              @click="copyEmail"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!copied"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ copied ? 'Copied!' : 'Copy Email' }}</span>
            </button>
          </div>

          <!-- Quick stats -->
          <div class="flex gap-8 pt-4">
            <div>
              <div class="text-2xl font-bold text-text-primary">12k+</div>
              <div class="text-sm text-text-muted">Nodes Optimized</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-text-primary">4+</div>
              <div class="text-sm text-text-muted">Companies</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-text-primary">5</div>
              <div class="text-sm text-text-muted">Certifications</div>
            </div>
          </div>
        </div>

        <!-- Right side: Rotating badge -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up delay-300">
          <RotatingBadge
            :size="280"
            class="hidden sm:flex"
          />
          <RotatingBadge
            :size="220"
            class="flex sm:hidden"
          />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft hidden lg:flex flex-col items-center gap-2">
      <span class="text-xs text-text-muted uppercase tracking-wider">Scroll</span>
      <svg
        class="w-5 h-5 text-text-muted"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>
