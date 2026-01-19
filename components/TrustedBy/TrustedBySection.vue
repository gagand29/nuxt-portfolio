<script setup lang="ts">
/**
 * TrustedBySection Component
 * Displays companies/clients worked with
 */

interface Company {
  name: string
  logo?: string // Optional logo path
}

const companies: Company[] = [
  { name: 'Arontel' },
  { name: '2ndSight.ai' },
  { name: 'YES HardSoft' },
  { name: 'Amoha Services' },
]
</script>

<template>
  <section class="py-12 border-y border-border">
    <div class="section-container">
      <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <!-- Label -->
        <span class="label shrink-0">
          Worked With
        </span>

        <!-- Company list -->
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div
            v-for="company in companies"
            :key="company.name"
            class="text-text-muted opacity-60 hover:opacity-100 hover:text-text-primary transition-all duration-300 cursor-default"
          >
            <!-- If logo is provided, show image -->
            <img
              v-if="company.logo"
              :src="company.logo"
              :alt="company.name"
              class="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            >
            <!-- Otherwise, show text -->
            <span
              v-else
              class="text-lg sm:text-xl font-semibold tracking-tight"
            >
              {{ company.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
