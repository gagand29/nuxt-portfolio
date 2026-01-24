<script setup lang="ts">
/**
 * Project Page
 * Scroll-based storytelling: Problem → Constraints → System → Impact
 */

const route = useRoute()
const slug = route.params.slug as string

interface Project {
  title: string
  subtitle: string
  role: string
  stack: string[]
  scale: string
  problem: string[]
  constraints: string[]
  approach: string[]
  owned: string[]
  impact: { metric: string; label: string }[]
  patterns: string[]
  // Images - add your screenshots here
  heroImage?: string        // Main UI screenshot (full width)
  screenshots?: string[]    // Grid of UI screenshots
  diagram?: string          // Architecture/system diagram
}

const projects: Record<string, Project> = {
  volivr: {
    title: 'VolIVR Platform',
    subtitle: 'Large-scale IVR management platform for telecom systems',
    role: 'Frontend-Heavy Full-Stack Engineer',
    stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia', 'PostgreSQL'],
    scale: '12k+ nodes, production system',
    problem: [
      'Node counts exceed thousands — standard rendering breaks',
      'Deeply nested data structures slow down traversal',
      'UI performance collapses under load',
      'Operators make critical mistakes when system lags',
    ],
    constraints: [
      'Must handle 12k+ nodes in real-time',
      'Must support enterprise telecom workflows',
      'Cannot break existing production flows',
      'Must scale without full system rewrite',
      'Must remain usable for non-technical operators',
    ],
    approach: [
      'Virtualized rendering instead of DOM-heavy trees',
      'Flat data models for fast traversal',
      'Separation of UI state and domain state',
      'Progressive disclosure of complexity',
      'System-first design, not component-first',
    ],
    owned: [
      'Designed scalable tree rendering architecture',
      'Built IVR node management system',
      'Implemented performance optimizations',
      'Created reusable platform UI patterns',
      'Structured state management for large datasets',
    ],
    impact: [
      { metric: '60%', label: 'Faster renders' },
      { metric: '12k+', label: 'Nodes handled' },
      { metric: '0', label: 'Production incidents' },
    ],
    patterns: [
      'Virtualization',
      'State separation',
      'System-first design',
      'Performance-first',
      'Progressive disclosure',
    ],
  },

  'ai-interview': {
    title: 'AI Interview Platform',
    subtitle: 'Real-time interview system with AI-powered assessment',
    role: 'Full-Stack Engineer',
    stack: ['React', 'Next.js', 'OpenAI', 'Firebase', 'WebSocket'],
    scale: 'Concurrent sessions, real-time',
    problem: [
      'Traditional interviews are inconsistent',
      'Manual transcription delays feedback',
      'No structured soft skills assessment',
      'Scaling human interviewers is expensive',
    ],
    constraints: [
      'Must feel natural, not robotic',
      'Latency under 500ms for responses',
      'Handle network interruptions gracefully',
      'Work across accents and speech patterns',
    ],
    approach: [
      'WebSocket for real-time communication',
      'Streaming transcription with buffers',
      'Prompt engineering for natural flow',
      'Optimistic UI for perceived speed',
    ],
    owned: [
      'Built real-time WebSocket infrastructure',
      'Integrated OpenAI streaming responses',
      'Designed conversation state machine',
      'Implemented audio processing pipeline',
    ],
    impact: [
      { metric: '<500ms', label: 'Response latency' },
      { metric: '95%', label: 'Transcription accuracy' },
      { metric: '3x', label: 'Interview throughput' },
    ],
    patterns: [
      'Event-driven',
      'Optimistic UI',
      'Graceful degradation',
      'State machines',
    ],
  },

  'movie-platform': {
    title: 'Movie Database Platform',
    subtitle: 'Full-stack platform with auth, storage, and CI/CD',
    role: 'Full-Stack Engineer',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    scale: 'Production, automated pipeline',
    problem: [
      'Manual deployments cause inconsistencies',
      'No standardized auth flow',
      'Database migrations are error-prone',
      'No visibility into deployment status',
    ],
    constraints: [
      'Must deploy with zero downtime',
      'Handle migrations safely',
      'Support multiple environments',
      'Must be reproducible and auditable',
    ],
    approach: [
      'Infrastructure as code',
      'Blue-green deployments',
      'Automated migration scripts',
      'Comprehensive logging',
    ],
    owned: [
      'Designed CI/CD pipeline',
      'Built auth with JWT + refresh tokens',
      'Set up AWS infrastructure',
      'Created testing framework',
    ],
    impact: [
      { metric: '0', label: 'Downtime deploys' },
      { metric: '10min', label: 'Deploy time' },
      { metric: '100%', label: 'Test coverage' },
    ],
    patterns: [
      'IaC',
      'Blue-green deploy',
      'Token auth',
      'Test pyramid',
    ],
  },
}

const project = computed(() => projects[slug])

if (!project.value) {
  throw createError({ statusCode: 404, message: 'Project not found' })
}

useSeoMeta({
  title: `${project.value.title} — Gagan Doddanna`,
  description: project.value.subtitle,
})

const toggleColorMode = inject('toggleColorMode') as () => void

const otherProjects = computed(() => {
  return Object.entries(projects)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, val]) => ({ slug: key, title: val.title }))
})
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <!-- Header -->
    <header class="header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo">
          <span>G</span><span class="logo-highlight">D</span>
        </NuxtLink>
        <div class="header-actions">
          <NuxtLink to="/#work" class="back-link">
            ← Back
          </NuxtLink>
          <button class="theme-toggle" aria-label="Toggle theme" @click="toggleColorMode">
            <span class="i-ph-sun w-5 h-5 dark:hidden" />
            <span class="i-ph-moon w-5 h-5 hidden dark:block" />
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Hero -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">{{ project.title }}</h1>
          <p class="hero-subtitle">{{ project.subtitle }}</p>
          <div class="hero-meta">
            <div class="meta-item">
              <span class="meta-label">Role</span>
              <span class="meta-value">{{ project.role }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Scale</span>
              <span class="meta-value">{{ project.scale }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Stack</span>
              <div class="stack-badges">
                <span v-for="tech in project.stack" :key="tech" class="badge">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">The Problem</h2>
          <ul class="content-list">
            <li v-for="item in project.problem" :key="item">
              <span class="list-marker">—</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Constraints -->
      <section class="content-section section-alt">
        <div class="container">
          <h2 class="section-title">Constraints</h2>
          <ul class="content-list">
            <li v-for="item in project.constraints" :key="item">
              <span class="list-marker highlight">→</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Approach -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">System Approach</h2>
          <ul class="content-list">
            <li v-for="item in project.approach" :key="item">
              <span class="list-marker">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Owned -->
      <section class="content-section section-alt">
        <div class="container">
          <h2 class="section-title">What I Owned</h2>
          <ul class="content-list">
            <li v-for="item in project.owned" :key="item">
              <span class="list-marker highlight">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Impact -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">Impact</h2>
          <div class="impact-grid">
            <div v-for="item in project.impact" :key="item.label" class="impact-item">
              <span class="impact-metric">{{ item.metric }}</span>
              <span class="impact-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Patterns -->
      <section class="content-section section-alt">
        <div class="container">
          <h2 class="section-title">Patterns Applied</h2>
          <div class="patterns-list">
            <span v-for="pattern in project.patterns" :key="pattern" class="badge">{{ pattern }}</span>
          </div>
        </div>
      </section>

      <!-- Next -->
      <section class="next-section">
        <div class="container">
          <p class="next-label">More Projects</p>
          <div class="next-links">
            <NuxtLink
              v-for="p in otherProjects"
              :key="p.slug"
              :to="`/projects/${p.slug}`"
              class="next-link"
            >
              {{ p.title }} →
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <NuxtLink to="/" class="footer-link">← Back to Home</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--header-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-link {
  font-size: 14px;
  color: var(--color-text-secondary);
  transition: color 150ms;
}

.back-link:hover {
  color: var(--color-text);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: all 150ms;
}

.theme-toggle:hover {
  border-color: var(--color-border-hover);
  background: var(--color-accent-subtle);
}

/* Main */
.main {
  padding-top: 64px;
}

/* Hero */
.hero {
  padding: 80px 0 64px;
  border-bottom: 1px solid var(--color-border);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  max-width: 600px;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 14px;
}

.stack-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

/* Content Sections */
.content-section {
  padding: 48px 0;
  border-bottom: 1px solid var(--color-border);
}

.section-alt {
  background: var(--color-bg-subtle);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
}

.content-list li {
  display: flex;
  gap: 12px;
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.list-marker {
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.list-marker.highlight {
  color: var(--color-highlight);
}

/* Impact */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 500px;
}

.impact-item {
  text-align: center;
}

.impact-metric {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-highlight);
  margin-bottom: 4px;
}

.impact-label {
  font-size: 13px;
  color: var(--color-text-muted);
}

/* Patterns */
.patterns-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Next */
.next-section {
  padding: 64px 0;
  text-align: center;
}

.next-label {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.next-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.next-link {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 150ms;
}

.next-link:hover {
  color: var(--color-highlight);
}

/* Footer */
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer-link {
  font-size: 14px;
  color: var(--color-text-muted);
  transition: color 150ms;
}

.footer-link:hover {
  color: var(--color-text);
}

/* Responsive */
@media (max-width: 640px) {
  .hero {
    padding: 48px 0;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-meta {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .content-section {
    padding: 32px 0;
  }

  .impact-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .impact-metric {
    font-size: 1.5rem;
  }
}
</style>
