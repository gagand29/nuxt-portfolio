<script setup lang="ts">
/**
 * AppHeader Component
 * Floating pill-style header with minimal logo
 */

const { isDark, toggleColorMode } = useColorMode()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 p-4">
    <div class="section-container">
      <nav class="flex items-center justify-between h-12 px-2" aria-label="Main navigation">
        <!-- Logo - 4 dots grid -->
        <a
          href="#hero"
          class="logo-dots"
          aria-label="Go to top"
          @click.prevent="scrollToSection('#hero')"
        >
          <span class="logo-dot" />
          <span class="logo-dot" />
          <span class="logo-dot" />
          <span class="logo-dot" />
        </a>

        <!-- Desktop Navigation - Centered Pill -->
        <div class="hidden md:flex items-center gap-1 px-2 py-1 rounded-full glass">
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

        <!-- Right side: Theme toggle -->
        <div class="flex items-center gap-2">
          <button
            class="btn-icon"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleColorMode"
          >
            <span v-if="isDark" class="i-ph-sun w-5 h-5" />
            <span v-else class="i-ph-moon w-5 h-5" />
          </button>

          <button
            class="md:hidden btn-icon"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMobileMenuOpen"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <span v-if="!isMobileMenuOpen" class="i-ph-list w-5 h-5" />
            <span v-else class="i-ph-x w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition name="slide-down">
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl glass-card z-50"
        aria-label="Mobile navigation"
      >
        <div class="space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block py-3 px-4 text-text-primary font-medium rounded-xl hover:bg-surface-hover transition-colors"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
