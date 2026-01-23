<script setup lang="ts">
/**
 * ContactFooter Component
 * Minimal contact section with email and social links
 *
 * Features:
 * - Large "Let's connect" text
 * - Email with copy functionality
 * - Social icons (GitHub, LinkedIn, Behance)
 * - Minimal copyright
 */

import SocialLinks from '~/components/ui/SocialLinks.vue'

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

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    id="contact"
    class="section-padding border-t border-border"
  >
    <div class="section-container">
      <!-- Main content -->
      <div class="max-w-2xl space-y-8">
        <!-- Heading -->
        <div class="space-y-4">
          <h2 class="heading-1">
            Let's connect
          </h2>
          <p class="body-lg">
            Available for freelance projects and full-time opportunities.
          </p>
        </div>

        <!-- Email with copy button -->
        <button
          class="group inline-flex items-center gap-3 text-xl sm:text-2xl font-medium text-text-primary hover:text-accent transition-colors relative"
          :class="{ 'copy-feedback copied': copied }"
          @click="copyEmail"
        >
          <span>{{ email }}</span>
          <span
            class="flex items-center justify-center w-10 h-10 rounded-xl glass transition-all group-hover:bg-surface-hover"
          >
            <span v-if="!copied" class="i-ph-copy w-5 h-5" />
            <span v-else class="i-ph-check w-5 h-5 text-accent" />
          </span>
        </button>

        <!-- Social links -->
        <SocialLinks :show-labels="true" />
      </div>

      <!-- Bottom section: Copyright -->
      <div class="mt-20 pt-8 border-t border-border">
        <p class="text-sm text-text-muted">
          {{ currentYear }} Gagan Doddanna
        </p>
      </div>
    </div>
  </footer>
</template>
