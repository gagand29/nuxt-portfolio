<script setup lang="ts">
/**
 * Landing Page
 * Frontend Engineer Portfolio - Enterprise, Clean, Recruiter-Ready
 *
 * Layout Pattern: Left-Aligned Stacked Hero
 * - Consistent left alignment for content sections
 * - Center alignment only for standalone CTAs
 * - Mobile-first responsive design
 *
 * Principles:
 * - Show real production work
 * - Enterprise-grade presentation
 * - Recruiter-friendly signals (years, education, certs)
 * - Accessibility-first (a11y)
 */

// SEO
useSeoMeta({
  title: 'Gagan Doddanna — Frontend Engineer',
  description: 'Frontend Engineer with 2+ years building large-scale, data-heavy platform UIs. Vue, React, TypeScript, AWS. MS CS DePaul University.',
  ogTitle: 'Gagan Doddanna — Frontend Engineer',
  ogDescription: 'Building scalable enterprise platforms and production-grade UI architectures.',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: { lang: 'en' },
})

// Color mode
const toggleColorMode = inject('toggleColorMode') as () => void

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  document.addEventListener('keydown', handleEscape)
  onUnmounted(() => document.removeEventListener('keydown', handleEscape))
})

// Close menu on route change (if clicking nav links)
watch(isMobileMenuOpen, (isOpen) => {
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

// === DATA ===

// Companies worked with (for logo strip)
const companies = [
  { name: 'Arontel', logo: '/logos/arontel.svg' },
  { name: 'YES HardSoft', logo: '/logos/yeshardsoft.svg' },
  { name: '2ndSight.ai', logo: '/logos/2ndsight.svg' },
]

// Projects - Featured + Others
const projects = [
  {
    slug: 'arontel-platform',
    title: 'Arontel Enterprise Platform',
    description: 'Control system for live telecom operations. 12k+ node IVR trees, real-time dashboards.',
    outcome: '60% faster rendering · <300ms latency',
    tech: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
    featured: true,
    image: '/projects/after-ivr-m.png',
  },
  {
    slug: 'ai-interview',
    title: 'AI Interview Platform',
    description: 'Early-stage prototype for recruiter and candidate workflows. Built under tight deadlines with fast pivots.',
    outcome: 'Demo-ready in days · UX-first design',
    tech: ['React', 'Next.js', 'Firebase', 'AWS'],
    company: '2ndSight.ai',
  },
  {
    slug: 'movie-platform',
    title: 'Movie Database Platform',
    description: 'Full-stack app with auth and CI/CD pipeline.',
    outcome: 'AWS deployment · Zero downtime',
    tech: ['Next.js', 'Node.js', 'AWS'],
    company: 'Personal',
  },
]

// Experience - Timeline only (details in Projects)
const experience = [
  {
    role: 'Software Engineer',
    company: 'Remofirst (Arontel)',
    location: 'Chicago, IL',
    period: 'Jul 2025 — Present',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'YES HardSoft Solutions',
    location: 'Remote',
    period: 'Dec 2024 — May 2025',
  },
  {
    role: 'Full-Stack Engineer',
    company: '2ndSight.ai',
    location: 'Remote',
    period: 'Aug 2024 — Nov 2024',
  },
]

// Education
const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'DePaul University',
    location: 'Chicago, IL',
    year: '2023',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Visvesvaraya Technological University',
    location: 'India',
    year: '2020',
  },
]

// Certifications
const certifications = [
  { name: 'AWS Solutions Architect – Associate', year: '2025', icon: 'i-ph-certificate' },
  { name: 'AWS Cloud Practitioner', year: '2024', icon: 'i-ph-cloud' },
  { name: 'Generative AI with LLMs', year: '2024', icon: 'i-ph-cpu' },
]

// Skills - Grouped by domain
const skills = {
  'Frontend Systems': ['Vue 3', 'Nuxt', 'React', 'Next.js', 'TypeScript'],
  'Platform & Cloud': ['AWS', 'Firebase', 'Supabase', 'Docker', 'CI/CD'],
  'Data & APIs': ['PostgreSQL', 'DynamoDB', 'REST APIs', 'Node.js'],
}
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <!-- Skip Link -->
    <a href="#main" class="skip-link">Skip to content</a>

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] border-b border-border backdrop-blur-md">
      <div class="container flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="logo">
          <span>G</span><span class="logo-highlight">D</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <a href="#work" class="nav-link">Work</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" class="nav-link">Resume</a>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center gap-2">
          <!-- Theme toggle -->
          <button
            class="btn-icon"
            aria-label="Toggle theme"
            @click="toggleColorMode"
          >
            <span class="i-ph-sun w-5 h-5 dark:hidden" />
            <span class="i-ph-moon w-5 h-5 hidden dark:block" />
          </button>

          <!-- Mobile menu toggle -->
          <button
            class="btn-icon md:hidden"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen"
            @click="toggleMobileMenu"
          >
            <span v-if="!isMobileMenuOpen" class="i-ph-list w-5 h-5" />
            <span v-else class="i-ph-x w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <Transition name="mobile-menu">
        <div
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          class="md:hidden absolute top-16 left-0 right-0 bg-bg border-b border-border shadow-lg"
        >
          <nav class="container py-4" aria-label="Mobile navigation">
            <div class="flex flex-col gap-1">
              <a
                href="#work"
                class="mobile-nav-link"
                @click="closeMobileMenu"
              >
                Work
              </a>
              <a
                href="#experience"
                class="mobile-nav-link"
                @click="closeMobileMenu"
              >
                Experience
              </a>
              <a
                href="#contact"
                class="mobile-nav-link"
                @click="closeMobileMenu"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                class="mobile-nav-link"
                @click="closeMobileMenu"
              >
                Resume
                <span class="i-ph-arrow-up-right w-4 h-4 text-text-muted" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </Transition>

      <!-- Backdrop for mobile menu -->
      <Transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden fixed inset-0 top-16 bg-black/50 z-[-1]"
          aria-hidden="true"
          @click="closeMobileMenu"
        />
      </Transition>
    </header>

    <main id="main" class="pt-16">
      <!-- Hero -->
      <section class="min-h-[85vh] flex items-center py-16 md:py-20">
        <div class="container">
          <div class="max-w-2xl space-y-5">
            <!-- Current Status -->
            <div class="flex flex-wrap items-center gap-3 text-sm fade-in">
              <span class="inline-flex items-center gap-1.5 text-text-secondary">
                <span class="status-dot" aria-hidden="true" />
                <span>Building at <strong class="text-text font-medium">Arontel</strong></span>
              </span>
              <span class="text-text-muted">•</span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400">
                <span class="i-ph-sparkle w-3.5 h-3.5" aria-hidden="true" />
                <span class="font-medium">Open to Opportunities</span>
              </span>
            </div>

            <!-- Name -->
            <h1 class="text-display fade-in delay-1 hero-name">
              Gagan Doddanna
            </h1>

            <!-- Role -->
            <p class="text-h3 text-text-secondary fade-in delay-2">
              Frontend Engineer <span class="text-text-muted">•</span> 2+ Years
            </p>

            <!-- Credentials -->
            <div class="flex flex-wrap items-center gap-2 text-sm text-text-secondary fade-in delay-3">
              <span class="inline-flex items-center gap-1.5">
                <span class="i-ph-graduation-cap w-4 h-4 text-highlight" aria-hidden="true" />
                MS CS, DePaul
              </span>
              <span class="text-text-muted">•</span>
              <span class="inline-flex items-center gap-1.5">
                <span class="i-ph-certificate w-4 h-4 text-highlight" aria-hidden="true" />
                AWS Certified
              </span>
            </div>

            <!-- Tagline - Confident -->
            <p class="text-body-lg max-w-lg fade-in delay-3 pt-2">
              I build complex frontend systems — large-scale dashboards, real-time UIs, and production platforms that handle thousands of data points.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-3 pt-4 fade-in delay-4">
              <a href="#work" class="btn-primary">
                View Work
                <span class="i-ph-arrow-right w-4 h-4" aria-hidden="true" />
              </a>
              <a href="/resume.pdf" class="btn-secondary" target="_blank" rel="noopener">
                Resume
                <span class="i-ph-file-text w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <!-- Scroll Indicator -->
            <div class="pt-8 fade-in delay-4">
              <a href="#work" class="inline-flex items-center gap-2 text-text-muted text-sm hover:text-text transition-colors">
                <span class="i-ph-arrow-down w-4 h-4 animate-bounce" aria-hidden="true" />
                Scroll to see work
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Companies Strip -->
      <section class="py-6 border-y border-border bg-bg-subtle" aria-label="Companies worked with">
        <div class="container">
          <div class="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span class="text-xs text-text-muted uppercase tracking-wide">Worked at</span>
            <span class="text-text-muted hidden sm:inline">•</span>
            <div class="flex flex-row items-center gap-6 sm:gap-8">
              <span
                v-for="(company, index) in companies"
                :key="company.name"
                class="text-sm font-medium text-text-secondary hover:text-text transition-colors"
              >
                {{ company.name }}<span v-if="index < companies.length - 1" class="text-text-muted ml-6 sm:ml-8 hidden sm:inline">•</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Work -->
      <section id="work" class="py-16 md:py-20">
        <div class="container">
          <h2 class="text-h2 mb-6 section-title">Selected Work</h2>

          <div class="space-y-4">
            <!-- Featured Project (Arontel) -->
            <NuxtLink :to="`/projects/${projects[0].slug}`" class="card card-featured card-interactive block">
              <div class="flex flex-col md:flex-row gap-6">
                <!-- Image Preview -->
                <div v-if="projects[0].image" class="featured-image-container">
                  <img :src="projects[0].image" :alt="projects[0].title" class="featured-image" />
                </div>
                <!-- Content -->
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="badge-highlight text-xs">Featured</span>
                    <span class="text-xs text-text-muted">at Arontel</span>
                  </div>
                  <h3 class="text-h3 mb-2">{{ projects[0].title }}</h3>
                  <p class="text-text-secondary text-sm mb-3">{{ projects[0].description }}</p>
                  <div class="flex flex-wrap gap-1.5 mb-3">
                    <span
                      v-for="tech in projects[0].tech"
                      :key="tech"
                      class="badge badge-tech text-xs"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  <p class="text-highlight text-sm font-medium mb-4">{{ projects[0].outcome }}</p>
                  <span class="text-highlight text-sm inline-flex items-center gap-2 font-medium">
                    View Case Study
                    <span class="i-ph-arrow-right w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </NuxtLink>

            <!-- Other Projects Grid (2 projects) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NuxtLink
                v-for="project in projects.slice(1)"
                :key="project.title"
                :to="`/projects/${project.slug}`"
                class="card card-interactive block"
              >
                <p class="text-text-muted text-xs mb-2">{{ project.company }}</p>
                <h3 class="font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-text-secondary text-sm mb-3">{{ project.description }}</p>
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="badge badge-tech text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
                <p class="text-highlight text-xs font-medium">{{ project.outcome }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="py-16 md:py-20 border-t border-border">
        <div class="container">
          <h2 class="text-h2 mb-6 section-title">Experience</h2>
          <div class="space-y-4">
            <article
              v-for="exp in experience"
              :key="exp.company"
              class="experience-item"
            >
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 class="font-semibold flex items-center gap-2 text-base">
                    {{ exp.role }}
                    <span v-if="exp.current" class="badge-highlight text-xs">Current</span>
                  </h3>
                  <p class="text-text-secondary text-sm">{{ exp.company }} <span class="text-text-muted">• {{ exp.location }}</span></p>
                </div>
                <span class="text-small whitespace-nowrap">{{ exp.period }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Credentials: Education + Certifications -->
      <section class="py-12 bg-bg-subtle border-y border-border">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <!-- Education -->
            <div>
              <h2 class="text-meta mb-4">Education</h2>
              <div class="space-y-3">
                <div v-for="edu in education" :key="edu.school" class="flex items-start gap-3">
                  <span class="i-ph-graduation-cap w-4 h-4 text-highlight mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p class="font-medium text-sm">{{ edu.degree }}</p>
                    <p class="text-text-muted text-sm">{{ edu.school }} • {{ edu.year }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <h2 class="text-meta mb-4">Certifications</h2>
              <div class="space-y-3">
                <div v-for="cert in certifications" :key="cert.name" class="flex items-center gap-3">
                  <span :class="[cert.icon, 'w-4 h-4 text-highlight flex-shrink-0']" aria-hidden="true" />
                  <div>
                    <p class="font-medium text-sm">{{ cert.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="py-12">
        <div class="container">
          <h2 class="text-meta mb-5">Technical Stack</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="(items, category) in skills" :key="category">
              <h3 class="text-sm font-medium mb-2 text-text-secondary">{{ category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in items" :key="skill" class="badge badge-tech">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-16 border-t border-border">
        <div class="container text-center max-w-xl mx-auto">
          <h2 class="text-h2 mb-3">Let's build something together.</h2>
          <p class="text-body mb-6">Open to new opportunities — full-time, freelance, or collaboration.</p>
          <div class="flex flex-wrap justify-center items-center gap-3">
            <a href="mailto:gagandoddanna@gmail.com" class="btn-primary">
              <span class="i-ph-envelope w-4 h-4" aria-hidden="true" />
              Get in Touch
            </a>
            <a
              href="https://github.com/gagand29"
              target="_blank"
              rel="noopener"
              class="btn-icon"
              aria-label="View GitHub Profile"
            >
              <span class="i-ph-github-logo w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/gagand8353"
              target="_blank"
              rel="noopener"
              class="btn-icon"
              aria-label="View LinkedIn Profile"
            >
              <span class="i-ph-linkedin-logo w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <p class="text-small mt-5 text-text-muted">
            <span class="i-ph-map-pin w-3.5 h-3.5 inline-block mr-1 align-middle" aria-hidden="true" />
            Chicago, IL • Open to Remote
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="py-6 border-t border-border">
      <div class="container flex flex-col sm:flex-row items-center justify-between gap-2 text-small text-text-muted">
        <p>© {{ new Date().getFullYear() }} Gagan Doddanna</p>
        <p>Built with Nuxt 3</p>
      </div>
    </footer>
  </div>
</template>
