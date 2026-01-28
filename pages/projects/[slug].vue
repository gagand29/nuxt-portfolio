<script setup lang="ts">
/**
 * Project Case Study Page
 * Senior-level storytelling: Context → Reality → Problems → Evolution → System → Impact
 * Reading time: 60-90 seconds
 */

const route = useRoute()
const slug = route.params.slug as string

interface Project {
  title: string
  subtitle: string
  role: string
  stack: string[]
  scale: string
  modules?: string[]
  context: string
  reality?: string[]
  problem: string[]
  designEvolution?: { before: string[]; after: string[] }
  operationalModel?: string
  stateModel?: { category: string; states: string[] }[]
  operatorUx?: string[]
  uxSectionTitle?: string
  uxSectionIntro?: string
  scalabilityStrategy?: string[]
  engineeringSectionTitle?: string
  owned: string[]
  impact: { metric: string; label: string }[]
  patterns: { engineering: string[]; ux?: string[] }
  images?: { dashboard?: string; before?: string; after?: string; system?: string; components?: string }
  realWorld?: string
  collaboration?: string
}

const projects: Record<string, Project> = {
  'arontel-platform': {
    title: 'Arontel Enterprise Platform',
    subtitle: 'Control system for live telecom operations. IVR routing, conference management, real-time dashboards.',
    role: 'Software Engineer',
    stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia', 'Supabase'],
    scale: '12k+ nodes · multi-tenant · production',
    modules: ['IVR Platform', 'Conference System', 'File Manager', 'Admin Console'],

    context: 'Operators manage live phone systems through this platform. Every click affects real call routing and production IVR trees. This is not a CRUD app — it\'s a control surface for telecom infrastructure.',

    reality: [
      '12k+ nodes per IVR tree',
      'Actions affect live callers',
      'Multi-tenant data isolation',
      'Non-technical operators',
      'Real-time concurrent edits',
      'Zero error tolerance',
    ],

    problem: [
      'UI freezes at 4k+ nodes',
      'State mutations cause re-render cascades',
      'Operators lost in deep hierarchies',
      'No visibility into what\'s active',
      'Easy to trigger destructive actions',
      'Sync conflicts corrupt data',
    ],

    designEvolution: {
      before: [
        'Deep nested components',
        'Coupled state + rendering',
        'Feature-first architecture',
        'No normalization',
        'Slow traversals',
      ],
      after: [
        'Flat normalized store',
        'Computed hierarchies',
        'Domain boundaries',
        'Virtual rendering',
        'Event-driven updates',
      ],
    },

    operationalModel: 'Incoming Call → Routing → IVR Tree → Node State → Operator Panel → Live Execution',

    stateModel: [
      { category: 'Audio', states: ['No audio → upload', 'Has audio → replace/delete', 'TTS → generate', 'Recording → locked'] },
      { category: 'Nodes', states: ['Active → green', 'Disabled → muted', 'Unconfigured → warning', 'Error → restricted'] },
      { category: 'Permissions', states: ['ACL → role-gated', 'PIN → confirmation', 'Admin → hidden'] },
      { category: 'Controls', states: ['Transfer → routing panel', 'Menu → tree expand', 'Intro/Outro → player'] },
    ],

    operatorUx: [
      'Always visible system state — what\'s live, what\'s inactive',
      'Gated destructive actions — confirm before delete',
      'Clear button meanings — no ambiguous actions',
      'State before action — see current config first',
      'Error containment — mistakes don\'t cascade',
    ],

    scalabilityStrategy: [
      'Virtual scrolling — only visible nodes in DOM',
      'Normalized state — flat maps, computed trees',
      'Batched updates — debounced mutations',
      'Optimistic UI — instant feedback, background sync',
      'Lazy loading — deep branches load on demand',
    ],

    owned: [
      'Platform architecture end-to-end',
      'Performance: 600ms → 250ms latency',
      'State management design',
      'Virtual tree rendering',
      'Real-time sync logic',
      'UX decisions with designers',
      'Production deployment',
    ],

    impact: [
      { metric: '60%', label: 'Faster' },
      { metric: '<300ms', label: 'Latency' },
      { metric: '12k+', label: 'Nodes' },
      { metric: '0', label: 'Downtime' },
    ],

    patterns: {
      engineering: [
        'Virtualization',
        'State normalization',
        'Event sourcing',
        'Optimistic updates',
        'Domain separation',
      ],
      ux: [
        'State-driven UI',
        'Gated actions',
        'Progressive disclosure',
        'Role-based visibility',
        'Error prevention',
      ],
    },

    images: {
      dashboard: '/projects/Dashboard.png',
      before: '/projects/before-ivr-main.png',
      after: '/projects/after-ivr-m.png',
      system: '/projects/system-diagram.png',
      components: '/projects/component-showcase.png',
    },

    realWorld: 'Used daily by telecom operators to manage IVR systems, route calls, and configure audio prompts.',

    collaboration: 'Worked with UX designers on complex telecom workflows.',
  },

  'ai-interview': {
    title: 'AI Interview Platform',
    subtitle: 'Early-stage product prototype built to validate recruiter and candidate workflows under tight deadlines',
    role: 'Frontend-heavy Full-Stack Engineer',
    stack: ['React', 'Next.js', 'TypeScript', 'Firebase', 'AWS Lambda', 'DynamoDB'],
    scale: '4-month prototype · demo-driven development',

    context: 'Built during an early startup phase with rapidly evolving requirements. The goal was to validate interview workflows quickly, not to build a fully scaled AI system. This taught me how to ship under uncertainty and design UIs that feel stable even when backend systems are still evolving.',

    reality: [
      'Short timelines (days, not months)',
      'Demo-driven development cycles',
      'Changing product direction mid-sprint',
      'Non-technical end users (recruiters)',
      'Limited backend maturity',
      'Fast pivots based on feedback',
    ],

    problem: [
      'Recruiters needed a structured, believable interview experience',
      'Too many concepts to explain (AI, audio, video, roles)',
      'First-time users under demo pressure',
      'UI needed to feel stable even when systems changed',
      'Complex flows with audio, TTS, and real-time state',
    ],

    operatorUx: [
      'Visual hierarchy — primary actions always visible',
      'Progressive disclosure — advanced options hidden by default',
      'Action clarity — View / Edit / Delete always explicit',
      'State visibility — interview status always visible',
      'Predictable flow — no surprise transitions',
    ],
    uxSectionTitle: 'UX Intent',
    uxSectionIntro: 'The UI was designed to reduce cognitive load, keep demos predictable, and guide first-time users through complex flows.',

    engineeringSectionTitle: 'Engineering Focus',

    scalabilityStrategy: [
      'Component-first architecture for fast iteration',
      'Optimistic UI where possible for perceived speed',
      'Simple CRUD patterns before optimization',
      'Iterative improvements instead of rewrites',
      'Cloud choices optimized for iteration speed and demo reliability',
    ],

    owned: [
      'Recruiter dashboard design and implementation',
      'Role and agent configuration UI',
      'Candidate interview screen',
      'Audio + TTS integration layer',
      'API integration and data flow architecture',
      'Fast prototyping for investor demos',
    ],

    impact: [
      { metric: 'Days', label: 'To demo-ready' },
      { metric: '3+', label: 'Major pivots' },
      { metric: '100%', label: 'Demo success rate' },
    ],

    patterns: {
      engineering: [
        'Component-first',
        'Optimistic UI',
        'Event-driven',
        'Graceful degradation',
      ],
      ux: [
        'Progressive disclosure',
        'State visibility',
        'Action clarity',
        'Predictable flow',
      ],
    },

    realWorld: 'The product direction evolved after the initial prototype. My contribution focused on building working systems under ambiguity, not defining the final business model.',

    collaboration: 'Worked directly with founders to iterate on product direction and translate business requirements into working prototypes.',
  },

  'movie-platform': {
    title: 'Movie Database Platform',
    subtitle: 'Full-stack platform with authentication, cloud storage, and automated pipelines',
    role: 'Full-Stack Engineer',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'GitHub Actions'],
    scale: 'Production deployment · automated CI/CD',

    context: 'End-to-end movie database with user authentication, media storage, search functionality, and fully automated deployment pipeline.',

    reality: [
      'Multiple deployment environments',
      'Database migration complexity',
      'Zero-downtime requirements',
      'Audit compliance needs',
    ],

    problem: [
      'Manual deployments cause environment drift',
      'No standardized authentication flow',
      'Database migrations are error-prone',
      'No deployment visibility or rollback',
    ],

    scalabilityStrategy: [
      'Infrastructure as code with Terraform',
      'Blue-green deployment strategy',
      'Migration scripts with automatic rollback',
      'Comprehensive logging and monitoring',
    ],

    owned: [
      'CI/CD pipeline architecture',
      'JWT auth with refresh token rotation',
      'AWS infrastructure (EC2, RDS, S3)',
      'Automated testing framework',
    ],

    impact: [
      { metric: '0', label: 'Downtime deploys' },
      { metric: '10min', label: 'Full deploy' },
      { metric: '100%', label: 'Test coverage' },
    ],

    patterns: {
      engineering: [
        'IaC',
        'Blue-green deploy',
        'Token rotation',
        'Test pyramid',
      ],
    },
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

          <!-- Modules (sub-projects) -->
          <div v-if="project.modules" class="modules-row">
            <span v-for="mod in project.modules" :key="mod" class="module-tag">{{ mod }}</span>
          </div>

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

      <!-- Dashboard Overview Image -->
      <section class="visual-section fade-in">
        <div class="container">
          <div v-if="project.images?.dashboard" class="hero-image-container">
            <img :src="project.images.dashboard" alt="Dashboard Overview" class="hero-image" />
          </div>
          <div v-else class="placeholder-hero">
            <div class="placeholder-icon">
              <span class="i-ph-desktop w-10 h-10" />
            </div>
            <div class="placeholder-text">
              <span class="placeholder-title">Dashboard Overview</span>
              <span class="placeholder-sub">Coming soon</span>
            </div>
          </div>
          <p class="visual-caption">Production system interface</p>
        </div>
      </section>

      <!-- Context -->
      <section class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Context</h2>
          <p class="context-text">{{ project.context }}</p>
          <!-- Real World Usage -->
          <div v-if="project.realWorld" class="real-world-note">
            <span class="i-ph-globe w-4 h-4" aria-hidden="true" />
            <span><strong>In Production:</strong> {{ project.realWorld }}</span>
          </div>
        </div>
      </section>

      <!-- Reality / Constraints -->
      <section v-if="project.reality" class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Reality / Constraints</h2>
          <ul class="content-list">
            <li v-for="item in project.reality" :key="item">
              <span class="list-marker accent">→</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Core Problems -->
      <section class="content-section fade-in" :class="{ 'section-alt': !project.reality }">
        <div class="container">
          <h2 class="section-title section-title-accent">Core Problems</h2>
          <ul class="content-list">
            <li v-for="item in project.problem" :key="item">
              <span class="list-marker">—</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Design Evolution (Before → After) - Only for Arontel -->
      <section v-if="project.designEvolution" class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Design Evolution</h2>
          <div class="evolution-grid">
            <div class="evolution-col">
              <h3 class="evolution-label">Before</h3>
              <ul class="content-list compact">
                <li v-for="item in project.designEvolution.before" :key="item">
                  <span class="list-marker text-red-400">✗</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="evolution-col">
              <h3 class="evolution-label">After</h3>
              <ul class="content-list compact">
                <li v-for="item in project.designEvolution.after" :key="item">
                  <span class="list-marker accent">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Before/After Images -->
          <div v-if="project.images?.before && project.images?.after" class="before-after-images">
            <div class="ba-image-container">
              <span class="ba-label">Before</span>
              <img :src="project.images.before" alt="Before redesign" class="ba-image" />
            </div>
            <div class="ba-image-container">
              <span class="ba-label ba-label-after">After</span>
              <img :src="project.images.after" alt="After redesign" class="ba-image" />
            </div>
          </div>
        </div>
      </section>

      <!-- Operational System Model -->
      <section v-if="project.operationalModel || project.images?.system" class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">System Flow</h2>
          <p class="model-intro">How a call moves through the system.</p>
          <p v-if="project.operationalModel" class="operational-flow">{{ project.operationalModel }}</p>
          <!-- System Diagram Image -->
          <div v-if="project.images?.system" class="system-diagram">
            <img :src="project.images.system" alt="Operational system model" class="diagram-image" />
          </div>
          <p class="visual-caption">Control system architecture</p>
        </div>
      </section>

      <!-- State-Driven Interface -->
      <section v-if="project.stateModel" class="content-section section-alt fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">State-Driven UI</h2>
          <p class="model-intro">UI controls reflect system state. What you see = what's actually happening.</p>
          <div class="state-grid">
            <div v-for="category in project.stateModel" :key="category.category" class="state-category">
              <h3 class="state-category-label">{{ category.category }}</h3>
              <ul class="state-list">
                <li v-for="state in category.states" :key="state">{{ state }}</li>
              </ul>
            </div>
          </div>
          <!-- Component Showcase Image -->
          <div v-if="project.images?.components" class="component-showcase">
            <img :src="project.images.components" alt="UI Component System" class="showcase-image" />
            <p class="visual-caption"><strong>Component Library</strong> — Built for reusability across modules</p>
          </div>
        </div>
      </section>

      <!-- UX Section -->
      <section v-if="project.operatorUx" class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">{{ project.uxSectionTitle || 'Operator-First UX' }}</h2>
          <p class="model-intro">{{ project.uxSectionIntro || 'Built for speed and safety, not aesthetics.' }}</p>
          <ul class="content-list">
            <li v-for="item in project.operatorUx" :key="item">
              <span class="list-marker accent">→</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Scalability / Engineering Strategy -->
      <section v-if="project.scalabilityStrategy" class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">{{ project.engineeringSectionTitle || 'Scalability Strategy' }}</h2>
          <ul class="content-list">
            <li v-for="item in project.scalabilityStrategy" :key="item">
              <span class="list-marker accent">→</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- What I Owned -->
      <section class="content-section owned-section fade-in" :class="{ 'section-alt': !project.scalabilityStrategy }">
        <div class="container">
          <h2 class="section-title section-title-accent">What I Owned</h2>
          <ul class="content-list">
            <li v-for="item in project.owned" :key="item">
              <span class="list-marker accent">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <!-- Collaboration Note -->
          <div v-if="project.collaboration" class="collab-note">
            <span class="i-ph-users-three w-4 h-4" aria-hidden="true" />
            <span>{{ project.collaboration }}</span>
          </div>
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

      <!-- Patterns Applied -->
      <section class="content-section fade-in">
        <div class="container">
          <h2 class="section-title section-title-accent">Patterns Applied</h2>
          <div class="patterns-grid">
            <div class="pattern-group">
              <h3 class="pattern-group-label">Engineering</h3>
              <div class="patterns-list">
                <span v-for="pattern in project.patterns.engineering" :key="pattern" class="badge badge-tech">
                  {{ pattern }}
                </span>
              </div>
            </div>
            <div v-if="project.patterns.ux" class="pattern-group">
              <h3 class="pattern-group-label">UX</h3>
              <div class="patterns-list">
                <span v-for="pattern in project.patterns.ux" :key="pattern" class="badge badge-ux">
                  {{ pattern }}
                </span>
              </div>
            </div>
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

      <!-- CTA -->
      <section class="cta-section">
        <div class="container text-center">
          <p class="cta-text">Interested in working together?</p>
          <a href="mailto:gagandoddanna@gmail.com" class="btn-primary">
            Get in Touch
            <span class="i-ph-arrow-right w-4 h-4" aria-hidden="true" />
          </a>
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

/* Modules (sub-projects) */
.modules-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.module-tag {
  font-size: 12px;
  padding: 4px 10px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-secondary);
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

/* Evolution Grid (Before/After) */
.evolution-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

.evolution-col {
  padding: 20px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.evolution-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.content-list.compact {
  gap: 8px;
}

.content-list.compact li {
  font-size: 14px;
}

/* Before/After Images */
.before-after-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;
}

.ba-image-container {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.ba-label {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border-radius: 4px;
  z-index: 1;
}

.ba-label-after {
  background: rgba(34, 197, 94, 0.9);
}

.ba-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Operational Model */
.model-intro {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  font-style: italic;
}

.operational-flow {
  font-size: 0.9rem;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  color: var(--color-highlight);
  background: var(--color-bg-elevated);
  padding: 20px 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.02em;
}

/* State-Driven Interface */
.state-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.state-category {
  padding: 16px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.state-category-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-highlight);
  margin-bottom: 12px;
}

.state-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.state-list li {
  font-size: 13px;
  color: var(--color-text-secondary);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
}

@media (max-width: 640px) {
  .state-grid {
    grid-template-columns: 1fr;
  }
}

.system-diagram {
  margin-top: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.diagram-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Hero Dashboard Image */
.hero-image-container {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Component Showcase */
.component-showcase {
  margin-top: 32px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-bg-elevated);
}

.showcase-image {
  width: 100%;
  height: auto;
  display: block;
}

.component-showcase .visual-caption {
  padding: 12px 16px;
  margin: 0;
  background: var(--color-bg-subtle);
  border-top: 1px solid var(--color-border);
}

/* Collaboration Note */
.collab-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 24px;
  padding: 16px;
  background: rgba(60, 223, 255, 0.05);
  border: 1px solid rgba(60, 223, 255, 0.15);
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.collab-note span:first-child {
  color: var(--color-highlight);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Real World Note */
.real-world-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 16px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-highlight);
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.real-world-note span:first-child {
  color: var(--color-highlight);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Strategy subtitle */
.strategy-subtitle {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
  font-style: italic;
}

/* Patterns Grid */
.patterns-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.pattern-group-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.badge-ux {
  background: rgba(168, 85, 247, 0.1);
  color: #A855F7;
  border: 1px solid rgba(168, 85, 247, 0.15);
}

.dark .badge-ux {
  color: #C084FC;
}

/* CTA Section */
.cta-section {
  padding: 64px 0;
  border-top: 1px solid var(--color-border);
  background: linear-gradient(135deg, var(--color-bg) 0%, rgba(60, 223, 255, 0.02) 100%);
}

.cta-text {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .evolution-grid,
  .before-after-images,
  .patterns-grid {
    grid-template-columns: 1fr;
  }
}

/* Impact Cards */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 600px;
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

/* Image Containers - Responsive */
.hero-image-container,
.system-diagram,
.component-showcase,
.ba-image-container {
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.hero-image-container:hover,
.system-diagram:hover,
.component-showcase:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Large screens - max width for readability */
@media (min-width: 1200px) {
  .hero-image-container,
  .system-diagram {
    max-width: 1000px;
    margin: 0 auto;
  }

  .component-showcase {
    max-width: 900px;
  }
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
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .impact-card {
    padding: 16px 8px;
  }

  .impact-metric {
    font-size: 1.25rem;
  }

  .real-world-note,
  .collab-note {
    font-size: 13px;
    padding: 12px;
  }

  .state-grid {
    gap: 12px;
  }

  .state-category {
    padding: 12px;
  }
}
</style>
