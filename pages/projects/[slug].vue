<script setup lang="ts">
/**
 * Project Page
 * Scroll-based storytelling: Problem → Constraints → System → Impact
 * With visual placeholders for screenshots
 */

const route = useRoute()
const slug = route.params.slug as string

interface Project {
  title: string
  subtitle: string
  role: string
  stack: string[]
  scale: string
  context: string
  problem: string[]
  constraints: string[]
  approach: string[]
  owned: string[]
  impact: { metric: string; label: string }[]
  patterns: string[]
}

const projects: Record<string, Project> = {
  'arontel-platform': {
    title: 'Arontel Enterprise Platform',
    subtitle: 'Large-scale telecom platform with data-heavy dashboards, IVR management, and real-time systems',
    role: 'Software Engineer',
    stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia', 'Supabase'],
    scale: '4k-12k+ nodes, multi-tenant, production',

    context: 'Enterprise telecom platform serving multiple business units. Handles complex IVR workflows, conference management, admin dashboards, and real-time data synchronization across organizational hierarchies.',

    problem: [
      'Node tree rendering breaks at scale (4k-12k+ nodes)',
      'Nested data structures cause O(n²) traversal',
      'Multi-tenant isolation requires careful state management',
      'Non-technical operators need intuitive complex workflows',
      'Real-time updates across concurrent users',
    ],
    constraints: [
      'Must handle 12k+ nodes without UI freeze',
      'Interaction latency must stay under 300ms',
      'Zero-downtime deployments for production system',
      'WCAG accessibility for enterprise compliance',
      'Must work across tenant boundaries securely',
    ],
    approach: [
      'Virtualized tree rendering — only visible nodes in DOM',
      'Flat normalized state with computed hierarchies',
      'Store-driven data flow with single source of truth',
      'Progressive disclosure for complex workflows',
      'Optimistic UI with rollback for real-time feel',
    ],
    owned: [
      'End-to-end development of large-scale platform dashboards',
      'Optimized UI rendering for 4k-12k+ node datasets',
      'Led rapid 0→1 feature delivery with UX and implementation',
      'Built reusable component library for enterprise UI',
      'Implemented Cloudflare authentication integration',
      'Structured real-time sync using Supabase',
    ],
    impact: [
      { metric: '60%', label: 'Faster renders' },
      { metric: '12k+', label: 'Nodes handled' },
      { metric: '<300ms', label: 'Interaction latency' },
    ],
    patterns: [
      'Virtualization',
      'Multi-tenancy',
      'State normalization',
      'RBAC UI',
      'Optimistic updates',
    ],
  },

  'ai-interview': {
    title: 'AI Interview Platform',
    subtitle: 'Real-time interview system with AI-powered assessment and transcription',
    role: 'Full-Stack Engineer',
    stack: ['React', 'Next.js', 'OpenAI', 'Firebase', 'WebSocket'],
    scale: 'Concurrent sessions, real-time streaming',

    context: 'Automated interview platform that conducts AI-powered conversations, transcribes responses in real-time, and provides structured assessment feedback.',

    problem: [
      'Manual interviews are inconsistent and biased',
      'Transcription delays break conversation flow',
      'AI responses feel robotic without careful prompting',
      'Network issues disrupt live sessions',
    ],
    constraints: [
      'Response latency must be under 500ms',
      'Must handle audio streaming reliably',
      'Conversation must feel natural, not scripted',
      'Must gracefully recover from disconnections',
    ],
    approach: [
      'WebSocket architecture for bi-directional streaming',
      'Chunked audio processing with overlap buffers',
      'Conversation state machine for natural flow',
      'Optimistic UI with background sync',
    ],
    owned: [
      'Built real-time WebSocket infrastructure',
      'Integrated OpenAI streaming API',
      'Designed conversation state machine',
      'Implemented audio pipeline with fallbacks',
    ],
    impact: [
      { metric: '<500ms', label: 'Response time' },
      { metric: '95%', label: 'Transcription accuracy' },
      { metric: '3x', label: 'Interview throughput' },
    ],
    patterns: [
      'Event-driven',
      'State machines',
      'Streaming APIs',
      'Graceful degradation',
    ],
  },

  'movie-platform': {
    title: 'Movie Database Platform',
    subtitle: 'Full-stack platform with authentication, cloud storage, and automated pipelines',
    role: 'Full-Stack Engineer',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'GitHub Actions'],
    scale: 'Production deployment, automated CI/CD',

    context: 'End-to-end movie database with user authentication, media storage, search functionality, and fully automated deployment pipeline.',

    problem: [
      'Manual deployments cause environment drift',
      'No standardized authentication flow',
      'Database migrations are error-prone',
      'No deployment visibility or rollback',
    ],
    constraints: [
      'Zero-downtime deployments required',
      'Must handle database migrations safely',
      'Multiple environments (dev/staging/prod)',
      'Audit trail for all changes',
    ],
    approach: [
      'Infrastructure as code with Terraform',
      'Blue-green deployment strategy',
      'Migration scripts with automatic rollback',
      'Comprehensive logging and monitoring',
    ],
    owned: [
      'Designed CI/CD pipeline architecture',
      'Built JWT auth with refresh token rotation',
      'Set up AWS infrastructure (EC2, RDS, S3)',
      'Created automated testing framework',
    ],
    impact: [
      { metric: '0', label: 'Downtime deploys' },
      { metric: '10min', label: 'Full deploy' },
      { metric: '100%', label: 'Test coverage' },
    ],
    patterns: [
      'IaC',
      'Blue-green deploy',
      'Token rotation',
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
          <NuxtLink to="/#work" class="back-link">← Back</NuxtLink>
          <button class="theme-toggle" aria-label="Toggle theme" @click="toggleColorMode">
            <span class="i-ph-sun w-5 h-5 dark:hidden" />
            <span class="i-ph-moon w-5 h-5 hidden dark:block" />
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Hero -->
      <section class="hero fade-in">
        <div class="container">
          <h1 class="hero-title hero-name">{{ project.title }}</h1>
          <p class="hero-subtitle">{{ project.subtitle }}</p>
          <div class="hero-meta">
            <div class="meta-item">
              <span class="meta-label">Role</span>
              <span class="meta-value">{{ project.role }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Scale</span>
              <span class="meta-value meta-highlight">{{ project.scale }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Stack</span>
              <div class="stack-badges">
                <span v-for="tech in project.stack" :key="tech" class="badge badge-tech">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hero Image Placeholder -->
      <section class="visual-section fade-in">
        <div class="container">
          <div class="placeholder-hero">
            <div class="placeholder-icon">
              <span class="i-ph-desktop w-10 h-10" />
            </div>
            <div class="placeholder-text">
              <span class="placeholder-title">Dashboard Overview</span>
              <span class="placeholder-sub">Full interface screenshot will be added</span>
            </div>
          </div>
          <p class="visual-caption">Production system interface • Laptop mockup</p>
        </div>
      </section>

      <!-- Context -->
      <section class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Context</h2>
          <p class="context-text">{{ project.context }}</p>
        </div>
      </section>

      <!-- Problem -->
      <section class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">The Problem</h2>
          <ul class="content-list">
            <li v-for="item in project.problem" :key="item">
              <span class="list-marker">—</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Constraints -->
      <section class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Constraints</h2>
          <ul class="content-list">
            <li v-for="item in project.constraints" :key="item">
              <span class="list-marker accent">→</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- System Approach + Diagram -->
      <section class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">System Approach</h2>
          <div class="approach-grid">
            <ul class="content-list">
              <li v-for="item in project.approach" :key="item">
                <span class="list-marker">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <!-- Architecture Diagram Placeholder -->
            <div class="placeholder-diagram">
              <div class="placeholder-icon">
                <span class="i-ph-tree-structure w-8 h-8" />
              </div>
              <div class="placeholder-text">
                <span class="placeholder-title">System Architecture</span>
                <span class="placeholder-sub">Diagram will be added</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What I Owned -->
      <section class="content-section owned-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">What I Owned</h2>
          <ul class="content-list">
            <li v-for="item in project.owned" :key="item">
              <span class="list-marker accent">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Screenshots Grid Placeholder -->
      <section class="visual-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Interface Highlights</h2>
          <div class="placeholder-grid">
            <div class="placeholder-thumb">
              <span class="i-ph-chart-line w-6 h-6" />
              <span>Analytics View</span>
            </div>
            <div class="placeholder-thumb">
              <span class="i-ph-list-checks w-6 h-6" />
              <span>Management Panel</span>
            </div>
            <div class="placeholder-thumb">
              <span class="i-ph-gear w-6 h-6" />
              <span>Configuration</span>
            </div>
          </div>
          <p class="visual-caption">UI screenshots will be added • Click to expand</p>
        </div>
      </section>

      <!-- Impact -->
      <section class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Impact</h2>
          <div class="impact-grid">
            <div v-for="item in project.impact" :key="item.label" class="impact-card">
              <span class="impact-metric">{{ item.metric }}</span>
              <span class="impact-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Patterns -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title section-title-accent">Patterns Applied</h2>
          <div class="patterns-list">
            <span v-for="pattern in project.patterns" :key="pattern" class="badge badge-tech">
              {{ pattern }}
            </span>
          </div>
        </div>
      </section>

      <!-- Next Projects -->
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
  padding: 64px 0 48px;
  border-bottom: 1px solid var(--color-border);
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}

/* Hero name gradient in dark mode */
:deep(.dark) .hero-title.hero-name {
  background: linear-gradient(135deg, #FFFFFF 0%, #3CDFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.meta-highlight {
  color: var(--color-highlight);
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  max-width: 600px;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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

/* Tech badges with cyan styling */
.badge-tech {
  background: rgba(60, 223, 255, 0.1);
  color: var(--color-highlight);
  border: 1px solid rgba(60, 223, 255, 0.15);
  transition: all 150ms ease;
}

.badge-tech:hover {
  background: rgba(60, 223, 255, 0.2);
  border-color: rgba(60, 223, 255, 0.3);
}

/* Visual Sections */
.visual-section {
  padding: 48px 0;
  border-bottom: 1px solid var(--color-border);
}

.visual-caption {
  text-align: center;
  font-size: 13px;
  color: var(--color-text-muted);
  margin-top: 16px;
}

/* Placeholder - Hero Image */
.placeholder-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 24px;
  background: linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-subtle) 100%);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.placeholder-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(60, 223, 255, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.placeholder-icon {
  color: var(--color-highlight);
  opacity: 0.6;
}

.placeholder-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.placeholder-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.placeholder-sub {
  font-size: 13px;
  color: var(--color-text-muted);
}

/* Placeholder - Diagram */
.placeholder-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px 24px;
  background: linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-subtle) 100%);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  min-height: 200px;
  position: relative;
}

.placeholder-diagram::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(60, 223, 255, 0.03) 0%, transparent 50%);
  pointer-events: none;
  border-radius: 12px;
}

/* Placeholder - Grid */
.placeholder-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.placeholder-thumb {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 16px;
  background: linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-subtle) 100%);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 13px;
  color: var(--color-text-muted);
  transition: all 200ms ease;
}

.placeholder-thumb:hover {
  border-color: rgba(60, 223, 255, 0.2);
  transform: translateY(-2px);
}

.placeholder-thumb span:first-child {
  color: var(--color-highlight);
  opacity: 0.6;
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

.section-title-accent {
  position: relative;
  display: inline-block;
}

.section-title-accent::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--color-highlight);
  border-radius: 1px;
}

.context-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 600px;
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

.list-marker.accent {
  color: var(--color-highlight);
}

/* Owned section - highlight achievements */
.owned-section {
  background: linear-gradient(135deg, var(--color-bg) 0%, rgba(60, 223, 255, 0.02) 100%);
}

.owned-section .content-list li {
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.owned-section .content-list li:last-child {
  border-bottom: none;
}

/* Approach Grid */
.approach-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

@media (max-width: 768px) {
  .approach-grid {
    grid-template-columns: 1fr;
  }
}

/* Impact Cards */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 500px;
}

.impact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-align: center;
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

.impact-card:hover {
  border-color: rgba(60, 223, 255, 0.3);
  box-shadow: 0 0 30px rgba(60, 223, 255, 0.15);
  transform: translateY(-2px);
}

.impact-metric {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-highlight);
  margin-bottom: 4px;
  text-shadow: 0 0 20px rgba(60, 223, 255, 0.3);
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
  transition: all 200ms ease;
  padding: 8px 16px;
  border-radius: 8px;
}

.next-link:hover {
  color: var(--color-highlight);
  background: rgba(60, 223, 255, 0.1);
  text-shadow: 0 0 20px rgba(60, 223, 255, 0.3);
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
    padding: 48px 0 32px;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-meta {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .content-section,
  .visual-section {
    padding: 32px 0;
  }

  .placeholder-hero {
    padding: 48px 16px;
  }

  .placeholder-grid {
    grid-template-columns: 1fr;
  }

  .impact-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .impact-card {
    padding: 16px 8px;
  }

  .impact-metric {
    font-size: 1.25rem;
  }
}
</style>
