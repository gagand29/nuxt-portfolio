<script setup lang="ts">
/**
 * AppHeader Component
 * Fixed header with navigation, logo, dark mode toggle, and "Hire on Upwork" CTA
 *
 * Features:
 * - Sticky position with glass effect on scroll
 * - Responsive navigation with mobile menu
 * - Dark mode toggle with sun/moon icons
 * - Smooth scroll to sections
 */

// Import color mode composable for theme toggle
const { isDark, toggleColorMode } = useColorMode()

// Track scroll position for glass effect
const isScrolled = ref(false)

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation links - smooth scroll to sections
const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#expertise' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

// Handle scroll to show/hide glass effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Smooth scroll to section
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'header-glass' : 'bg-transparent',
    ]"
  >
    <div class="section-container">
      <nav class="flex items-center justify-between h-16 lg:h-18">
        <!-- Logo / Name -->
        <a
          href="#hero"
          class="flex items-center gap-2 font-bold text-lg text-text-primary hover:text-accent-primary transition-colors"
          @click.prevent="scrollToSection('#hero')"
        >
          <span class="text-accent-primary text-2xl font-bold">G</span>
          <span class="hidden sm:inline">Gagan Doddanna</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="nav-link"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Right side: Theme toggle + CTA -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle Button -->
          <button
            class="theme-toggle"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleColorMode"
          >
            <!-- Sun icon (shown in dark mode) -->
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <!-- Moon icon (shown in light mode) -->
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <!-- Hire on Upwork CTA (Desktop) -->
          <a
            href="https://upwork.com/freelancers/gagancodess"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-hire hidden sm:inline-flex"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
              />
            </svg>
            <span>Hire Me</span>
          </a>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden theme-toggle"
            aria-label="Open menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-menu-backdrop md:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition name="slide-down">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
      >
        <div class="section-container py-4 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block py-3 px-4 text-text-primary font-medium rounded-lg hover:bg-surface transition-colors"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>

          <!-- Mobile Hire CTA -->
          <a
            href="https://upwork.com/freelancers/gagancodess"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-hire w-full justify-center mt-4"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
              />
            </svg>
            <span>Hire on Upwork</span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide down transition for mobile menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
