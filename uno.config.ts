/**
 * UnoCSS Configuration
 * Product Engineer Portfolio - Clean, Minimal Design System
 */

import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700',
      },
    }),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
  ],

  theme: {
    colors: {
      bg: 'var(--color-bg)',
      'bg-elevated': 'var(--color-bg-elevated)',
      'bg-subtle': 'var(--color-bg-subtle)',
      text: 'var(--color-text)',
      'text-secondary': 'var(--color-text-secondary)',
      'text-muted': 'var(--color-text-muted)',
      border: 'var(--color-border)',
      'border-hover': 'var(--color-border-hover)',
      accent: 'var(--color-accent)',
      'accent-subtle': 'var(--color-accent-subtle)',
      highlight: 'var(--color-highlight)',
    },
  },

  shortcuts: {
    // Layout
    'container': 'max-w-[1100px] mx-auto px-6',
    'section': 'py-24',
    'section-sm': 'py-16',

    // Typography
    'text-display': 'text-5xl font-bold leading-tight tracking-tight',
    'text-h1': 'text-4xl font-bold leading-tight tracking-tight',
    'text-h2': 'text-2xl font-semibold',
    'text-h3': 'text-xl font-semibold',
    'text-body': 'text-base text-text-secondary',
    'text-body-lg': 'text-lg text-text-secondary',
    'text-small': 'text-sm text-text-muted',
    'text-meta': 'text-xs font-medium uppercase tracking-wide text-text-muted',

    // Components
    'card': 'bg-bg-elevated border border-border rounded-lg p-6 transition-all duration-150',
    'card-interactive': 'card cursor-pointer hover:border-border-hover hover:shadow-md',
    'badge': 'inline-flex items-center px-3 py-1 text-xs font-medium bg-accent-subtle text-text-secondary rounded',
    'badge-highlight': 'badge bg-[rgba(60,223,255,0.1)] text-highlight',

    // Buttons
    'btn': 'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all duration-150',
    'btn-primary': 'btn bg-text text-bg hover:opacity-90',
    'btn-secondary': 'btn bg-transparent border border-border text-text hover:border-border-hover hover:bg-accent-subtle',
    'btn-ghost': 'btn bg-transparent text-text-secondary hover:text-text',
    'btn-icon': 'flex items-center justify-center w-10 h-10 rounded-md border border-border hover:border-border-hover hover:bg-accent-subtle transition-all duration-150',

    // Navigation
    'nav-link': 'text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text transition-colors duration-150',

    // Grid
    'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-4',
    'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  },

  safelist: [
    'dark',
    'i-ph-sun',
    'i-ph-moon',
    'i-ph-list',
    'i-ph-x',
    'i-ph-arrow-left',
    'i-ph-arrow-right',
    'i-ph-arrow-up-right',
    'i-ph-arrow-down',
    'i-ph-github-logo',
    'i-ph-linkedin-logo',
    'i-ph-envelope',
    'i-ph-file-text',
    'i-ph-briefcase',
    'i-ph-code',
    'i-ph-database',
    'i-ph-cloud',
    'i-ph-chart-line',
    'i-ph-palette',
    'i-ph-cpu',
    'i-ph-tree-structure',
    'i-ph-desktop',
    'i-ph-image',
    'i-ph-list-checks',
    'i-ph-gear',
    'i-ph-graduation-cap',
    'i-ph-certificate',
    'i-ph-map-pin',
    'i-ph-buildings',
    'i-ph-sparkle',
  ],
})
