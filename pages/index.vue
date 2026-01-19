<script setup lang="ts">
/**
 * Index Page - Main Portfolio Page
 * Single-page layout with all sections
 */

// Import all section components
import HeroSection from '~/components/Hero/HeroSection.vue'
import TrustedBySection from '~/components/TrustedBy/TrustedBySection.vue'
import TechStackSection from '~/components/TechStack/TechStackSection.vue'
import ProjectsSection from '~/components/Projects/ProjectsSection.vue'
import CertificationsSection from '~/components/Certifications/CertificationsSection.vue'
import ExpertiseSection from '~/components/Expertise/ExpertiseSection.vue'
import ExperienceSection from '~/components/Experience/ExperienceSection.vue'
import CurrentlySection from '~/components/Currently/CurrentlySection.vue'
import ContactFooter from '~/components/Footer/ContactFooter.vue'

// Page meta
definePageMeta({
  title: 'Home',
})

// SEO
useSeoMeta({
  title: 'Gagan Doddanna - Frontend Engineer',
  ogTitle: 'Gagan Doddanna - Frontend Engineer',
  description: 'Frontend Engineer specializing in Vue.js, React, and scalable architectures with 2+ years of production experience.',
  ogDescription: 'Frontend Engineer specializing in Vue.js, React, and scalable architectures with 2+ years of production experience.',
})
</script>

<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Trusted By / Companies Worked With -->
    <TrustedBySection />

    <!-- Tech Stack -->
    <TechStackSection />

    <!-- Projects / Selected Work -->
    <ProjectsSection />

    <!-- Certifications -->
    <CertificationsSection />

    <!-- What I Do / Expertise -->
    <ExpertiseSection />

    <!-- Experience -->
    <ExperienceSection />

    <!-- Currently -->
    <CurrentlySection />

    <!-- Contact Footer -->
    <ContactFooter />
  </main>
</template>
