<script setup lang="ts">
/**
 * Landing Page
 * Product Engineer Portfolio - Clean, System-first Design
 */

// SEO
useSeoMeta({
  title: 'Gagan Doddanna — Product Engineer',
  description: 'Frontend-heavy full-stack engineer building scalable product systems. Vue, React, TypeScript, Cloud Infrastructure.',
  ogTitle: 'Gagan Doddanna — Product Engineer',
  ogDescription: 'I build scalable product systems, not just interfaces.',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: { lang: 'en' },
})

// Color mode
const toggleColorMode = inject('toggleColorMode') as () => void

// Data
const projects = [
  {
    slug: 'volivr',
    title: 'VolIVR Platform',
    description: 'Production dashboard handling 12k+ node datasets with optimized rendering.',
    outcome: 'Reduced render times from 600ms to 250ms through virtual scrolling.',
    tech: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
    featured: true,
  },
  {
    slug: 'ai-interview',
    title: 'AI Interview Platform',
    description: 'Real-time interview system with AI-powered questions and live transcription.',
    outcome: 'Scalable WebSocket architecture serving concurrent sessions.',
    tech: ['React', 'Next.js', 'OpenAI', 'Firebase'],
  },
  {
    slug: 'movie-platform',
    title: 'Movie Database Platform',
    description: 'End-to-end platform with authentication, cloud storage, and RESTful APIs.',
    outcome: 'Complete CI/CD pipeline with automated deployments.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
]

const interests = [
  { label: 'System Design', icon: 'i-ph-tree-structure' },
  { label: 'Data Modeling', icon: 'i-ph-database' },
  { label: 'Cloud Architecture', icon: 'i-ph-cloud' },
  { label: 'UX Engineering', icon: 'i-ph-palette' },
  { label: 'AI Agents', icon: 'i-ph-cpu' },
  { label: 'Data Visualization', icon: 'i-ph-chart-line' },
]

const experience = [
  { role: 'Software Engineer', company: 'Arontel (Remofirst)', period: '2025 — Present', current: true },
  { role: 'Software Engineer', company: 'YES HardSoft Solutions', period: '2024 — 2025' },
  { role: 'Full-Stack Engineer', company: '2ndSight.ai', period: '2024' },
]

const skills = {
  'Product Systems': ['Vue.js', 'React', 'TypeScript', 'Nuxt', 'Next.js'],
  'Cloud & Infra': ['AWS', 'Firebase', 'Supabase', 'Docker', 'CI/CD'],
  'Data': ['PostgreSQL', 'Redis', 'REST APIs', 'GraphQL'],
}
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <!-- Skip Link -->
    <a href="#main" class="skip-link">Skip to content</a>

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] border-b border-border backdrop-blur-md">
      <div class="container flex items-center justify-between h-16">
        <a href="#" class="logo">
          <span>G</span><span class="logo-highlight">D</span>
        </a>
        <nav class="hidden md:flex items-center gap-1">
          <a href="#work" class="nav-link">Work</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button
          class="btn-icon"
          aria-label="Toggle theme"
          @click="toggleColorMode"
        >
          <span class="i-ph-sun w-5 h-5 dark:hidden" />
          <span class="i-ph-moon w-5 h-5 hidden dark:block" />
        </button>
      </div>
    </header>

    <main id="main" class="pt-16">
      <!-- Hero -->
      <section class="section">
        <div class="container">
          <div class="max-w-2xl space-y-6">
            <!-- Status -->
            <div class="flex items-center gap-2 text-small fade-in">
              <span class="status-dot" />
              <span>Building at Arontel</span>
            </div>

            <!-- Name -->
            <h1 class="text-display fade-in delay-1">
              Gagan Doddanna
            </h1>

            <!-- Role -->
            <p class="text-h3 text-text-secondary fade-in delay-2">
              Frontend-Heavy Full-Stack Engineer
            </p>

            <!-- Tagline -->
            <p class="text-body-lg max-w-lg text-balance fade-in delay-3">
              I build scalable product systems, not just interfaces.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-3 pt-4 fade-in delay-4">
              <a href="#work" class="btn-primary">
                View Work
                <span class="i-ph-arrow-right w-4 h-4" />
              </a>
              <a href="/resume.pdf" class="btn-secondary">
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Work -->
      <section id="work" class="section border-t border-border">
        <div class="container">
          <h2 class="text-h2 mb-8">Selected Work</h2>

          <div class="space-y-4">
            <!-- Featured Project -->
            <NuxtLink :to="`/projects/${projects[0].slug}`" class="card card-featured block">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in projects[0].tech"
                  :key="tech"
                  class="badge"
                >
                  {{ tech }}
                </span>
              </div>
              <h3 class="text-h3 mb-2">{{ projects[0].title }}</h3>
              <p class="text-body mb-3">{{ projects[0].description }}</p>
              <p class="text-small mb-4">{{ projects[0].outcome }}</p>
              <span class="btn-ghost p-0 text-sm inline-flex items-center gap-2">
                View Project
                <span class="i-ph-arrow-right w-4 h-4" />
              </span>
            </NuxtLink>

            <!-- Other Projects Grid -->
            <div class="grid-2">
              <NuxtLink
                v-for="project in projects.slice(1)"
                :key="project.title"
                :to="`/projects/${project.slug}`"
                class="card card-interactive block"
              >
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="tech in project.tech.slice(0, 3)"
                    :key="tech"
                    class="badge"
                  >
                    {{ tech }}
                  </span>
                </div>
                <h3 class="text-h3 mb-2">{{ project.title }}</h3>
                <p class="text-body text-sm mb-2">{{ project.description }}</p>
                <p class="text-small">{{ project.outcome }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Interests / Labs -->
      <section class="section-sm bg-bg-subtle border-y border-border">
        <div class="container">
          <h2 class="text-meta mb-6">Interests & Exploration</h2>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="item in interests"
              :key="item.label"
              class="flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border rounded-md text-sm"
            >
              <span :class="[item.icon, 'w-4 h-4 text-text-muted']" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="section">
        <div class="container">
          <h2 class="text-h2 mb-8">Experience</h2>
          <div class="space-y-6">
            <div
              v-for="exp in experience"
              :key="exp.company"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-6 border-b border-border last:border-0"
            >
              <div>
                <h3 class="font-semibold flex items-center gap-2">
                  {{ exp.role }}
                  <span v-if="exp.current" class="badge-highlight text-xs">Current</span>
                </h3>
                <p class="text-text-secondary">{{ exp.company }}</p>
              </div>
              <span class="text-small">{{ exp.period }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="section-sm border-t border-border">
        <div class="container">
          <h2 class="text-meta mb-6">Skills</h2>
          <div class="grid-3">
            <div v-for="(items, category) in skills" :key="category">
              <h3 class="text-sm font-medium mb-3">{{ category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in items" :key="skill" class="badge">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="section border-t border-border">
        <div class="container text-center">
          <h2 class="text-h2 mb-4">Let's build real systems, not just screens.</h2>
          <p class="text-body mb-8">Open for collaboration and opportunities.</p>
          <div class="flex justify-center gap-4">
            <a href="mailto:gagan@example.com" class="btn-primary">
              <span class="i-ph-envelope w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://github.com/gagand29"
              target="_blank"
              rel="noopener"
              class="btn-icon"
              aria-label="GitHub"
            >
              <span class="i-ph-github-logo w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gagandoddanna"
              target="_blank"
              rel="noopener"
              class="btn-icon"
              aria-label="LinkedIn"
            >
              <span class="i-ph-linkedin-logo w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="py-8 border-t border-border">
      <div class="container text-center text-small">
        <p>Designed & built with system-first thinking.</p>
      </div>
    </footer>
  </div>
</template>
