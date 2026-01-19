<script setup lang="ts">
/**
 * CurrentlySection Component
 * Display of current activities and focus areas
 */

interface CurrentItem {
  icon: string
  text: string
  link?: string
}

const currentItems: CurrentItem[] = [
  {
    icon: '🎓',
    text: 'Completing Data Science Certification (Python, ML, R)',
    link: '#', // TODO: Add actual link
  },
  {
    icon: '💻',
    text: 'Contributing to Vue.js open source ecosystem',
    link: 'https://github.com/gagancodess', // TODO: Update with actual GitHub
  },
  {
    icon: '✍️',
    text: 'Writing technical articles about performance optimization',
    link: '#', // TODO: Add blog link when ready
  },
]
</script>

<template>
  <section
    id="currently"
    class="section-padding section-gradient"
  >
    <div class="section-container">
      <!-- Section header -->
      <div class="space-y-4 mb-12">
        <h2 class="heading-2">
          Currently
        </h2>
      </div>

      <!-- Current activities grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          v-for="(item, index) in currentItems"
          :key="index"
          :href="item.link"
          class="glass-card-hover p-6 flex items-start gap-4 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- Icon -->
          <span class="text-2xl shrink-0">
            {{ item.icon }}
          </span>

          <!-- Text -->
          <p class="text-text-secondary group-hover:text-text-primary transition-colors">
            {{ item.text }}
          </p>

          <!-- Arrow indicator -->
          <svg
            class="w-5 h-5 text-text-muted shrink-0 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
