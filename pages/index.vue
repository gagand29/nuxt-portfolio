<script setup lang="ts">
/**
 * Index Page - Main Portfolio Page
 * Modern minimal single-page layout
 *
 * Section Order:
 * 1. Hero (minimal)
 * 2. Projects (bento grid - prominent)
 * 3. Tech Stack (inline badges)
 * 4. Experience (timeline)
 * 5. Footer (contact CTA)
 */

import HeroSection from '~/components/Hero/HeroSection.vue'
import ProjectsSection from '~/components/Projects/ProjectsSection.vue'
import TechStackSection from '~/components/TechStack/TechStackSection.vue'
import ExperienceSection from '~/components/Experience/ExperienceSection.vue'
import ContactFooter from '~/components/Footer/ContactFooter.vue'

// Page meta
definePageMeta({
  title: 'Home',
})

// SEO
useSeoMeta({
  title: 'Gagan Doddanna - Frontend Engineer',
  ogTitle: 'Gagan Doddanna - Frontend Engineer',
  description: 'Frontend Engineer crafting performant web experiences with Vue.js, React, and modern architectures.',
  ogDescription: 'Frontend Engineer crafting performant web experiences with Vue.js, React, and modern architectures.',
})
</script>

<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Projects / Selected Work (Prominent) -->
    <ProjectsSection />

    <!-- Tech Stack -->
    <TechStackSection />

    <!-- Experience -->
    <ExperienceSection />

    <!-- Contact Footer -->
    <ContactFooter />
  </main>
</template>
