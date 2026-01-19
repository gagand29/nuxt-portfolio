<script setup lang="ts">
/**
 * CertificationsSection Component
 * Grid display of certifications and credentials
 */

import CertificationCard from './CertificationCard.vue'
import type { Certification } from './CertificationCard.vue'

const certifications: Certification[] = [
  {
    icon: 'AWS',
    title: 'AWS Solutions Architect - Associate',
    date: 'Feb 2025 - Feb 2028',
    link: '#', // TODO: Add actual credential link
  },
  {
    icon: 'AWS',
    title: 'AWS Cloud Practitioner',
    date: 'Oct 2024 - Feb 2028',
    link: '#', // TODO: Add actual credential link
  },
  {
    icon: 'Design',
    title: 'UX/UI Design Diploma',
    organization: 'Edit Institute',
    date: 'Jun 2023',
    link: '#', // TODO: Add actual credential link
  },
  {
    icon: 'AI',
    title: 'Generative AI with LLMs',
    date: 'Oct 2024',
    link: '#', // TODO: Add actual credential link
  },
  {
    icon: 'DataScience',
    title: 'Data Science Certificate',
    organization: '360DigiTMG + SUNY',
    status: 'In Progress',
    statusBadge: '🎓 Ongoing',
    link: '#', // TODO: Add actual credential link
  },
]
</script>

<template>
  <section
    id="certifications"
    class="section-padding"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          Certifications & Credentials
        </h2>
      </div>

      <!-- Certifications grid -->
      <div class="grid-certs">
        <CertificationCard
          v-for="(cert, index) in certifications"
          :key="cert.title"
          :certification="cert"
          class="reveal-item"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </section>
</template>
