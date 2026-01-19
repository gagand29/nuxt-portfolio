<script setup lang="ts">
/**
 * TechStackSection Component
 * Displays tech stack badges with icons
 */

interface Tech {
  name: string
  icon: string // SVG path or icon component name
  color?: string
}

const technologies: Tech[] = [
  {
    name: 'Vue.js',
    icon: 'vue',
    color: '#42b883',
  },
  {
    name: 'React',
    icon: 'react',
    color: '#61dafb',
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    color: '#ffffff',
  },
  {
    name: 'Nuxt',
    icon: 'nuxt',
    color: '#00dc82',
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    color: '#339933',
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    color: '#3178c6',
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    color: '#4169e1',
  },
  {
    name: 'AWS',
    icon: 'aws',
    color: '#ff9900',
  },
  {
    name: 'Figma',
    icon: 'figma',
    color: '#f24e1e',
  },
  {
    name: 'Supabase',
    icon: 'supabase',
    color: '#3ecf8e',
  },
]

// Icon SVG paths (simplified)
const iconPaths: Record<string, string> = {
  vue: 'M2 3l8 14L18 3h-3l-5 8.75L5 3H2z',
  react: 'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  nextjs: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l7 4.5-7 4.5z',
  nuxt: 'M12 2L2 19h6l4-7 4 7h6L12 2z',
  nodejs: 'M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18 8v8l-6 3.5L6 16V8l6-3.5z',
  typescript: 'M3 3h18v18H3V3zm10 6v2h-2v7h-2v-7H7V9h6zm4 0v9h-2v-4h-1v-2h1V9h2z',
  postgresql: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm0-8H9V7h6v2z',
  aws: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  figma: 'M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-12H4c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8z',
  supabase: 'M12 2L3 7v10l9 5 9-5V7l-9-5z',
}
</script>

<template>
  <section class="py-8 overflow-hidden">
    <div class="section-container">
      <!-- Horizontal scrolling wrapper -->
      <div class="flex gap-4 flex-wrap justify-center">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="glass-card-hover flex items-center gap-2 px-4 py-2 group cursor-default"
        >
          <!-- Tech icon placeholder -->
          <div
            class="w-5 h-5 rounded flex-center transition-transform group-hover:scale-110"
            :style="{ color: tech.color }"
          >
            <!-- Simple colored dot as icon placeholder -->
            <div
              class="w-4 h-4 rounded-sm"
              :style="{ backgroundColor: tech.color }"
            />
          </div>

          <!-- Tech name -->
          <span class="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional infinite scroll effect - currently static grid */
.scroll-container {
  display: flex;
  gap: 1rem;
  animation: marquee 30s linear infinite;
}

.scroll-container:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
