<script setup lang="ts">
/**
 * ContactFooter Component
 * Contact information and social links with proper light/dark mode support
 *
 * Features:
 * - Email with copy-to-clipboard functionality
 * - Social links (LinkedIn, GitHub, Upwork)
 * - Responsive grid layout
 * - Theme-aware styling
 */

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

interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gagancodess',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/gagancodess',
    icon: 'github',
  },
  {
    name: 'Upwork',
    url: 'https://upwork.com/freelancers/gagancodess',
    icon: 'upwork',
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    id="contact"
    class="section-padding border-t border-border bg-surface"
  >
    <div class="section-container">
      <!-- Main content -->
      <div class="text-center space-y-10 max-w-2xl mx-auto">
        <!-- Heading -->
        <div class="space-y-4">
          <span class="section-label">
            <span class="w-2 h-2 rounded-full bg-accent-primary" />
            Get in Touch
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary">
            Let's Work Together
          </h2>
          <p class="body-lg max-w-lg mx-auto">
            Available for freelance projects and full-time opportunities.
            Let's build something great.
          </p>
        </div>

        <!-- Email with copy button -->
        <div class="space-y-4">
          <button
            class="group inline-flex items-center gap-3 text-xl sm:text-2xl font-medium text-text-primary hover:text-accent-primary transition-colors relative"
            :class="{ 'copy-feedback copied': copied }"
            @click="copyEmail"
          >
            <span>{{ email }}</span>
            <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-hover border border-border transition-all group-hover:border-accent-primary group-hover:bg-accent-primary/10">
              <svg
                v-if="!copied"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <svg
                v-else
                class="w-5 h-5 text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </button>
        </div>

        <!-- Social links -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            class="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
          >
            <!-- LinkedIn icon -->
            <svg
              v-if="social.icon === 'linkedin'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>

            <!-- GitHub icon -->
            <svg
              v-if="social.icon === 'github'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>

            <!-- Upwork icon -->
            <svg
              v-if="social.icon === 'upwork'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
              />
            </svg>

            <span>{{ social.name }}</span>
          </a>

          <!-- Email button -->
          <a
            :href="`mailto:${email}`"
            class="footer-link"
            aria-label="Send Email"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      <!-- Bottom section: Copyright -->
      <div class="mt-16 pt-8 border-t border-border">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <p class="text-sm text-text-muted">
            &copy; {{ currentYear }} Gagan Doddanna. All rights reserved.
          </p>

          <!-- Made with love -->
          <p class="text-sm text-text-muted flex items-center gap-1">
            Built with
            <svg
              class="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            using Vue & Nuxt
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
