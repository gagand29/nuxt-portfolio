/**
 * UnoCSS Configuration - Modern Minimal Glassmorphism Design System
 * https://unocss.dev/guide/config-file
 *
 * Design Philosophy: "Less but better" - Dieter Rams inspired
 * - Dark-first design with elegant light mode
 * - Bento grid layouts
 * - Glassmorphism 2.0 with subtle backdrop blur
 * - Smooth micro-interactions
 */

import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // Presets
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
    presetTypography(),
  ],

  // Transformers
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  // Theme - Design System Tokens
  theme: {
    // Colors - Reference CSS variables for theme switching
    colors: {
      // Base colors (use CSS variables)
      background: 'var(--color-background)',
      'bg-secondary': 'var(--color-bg-secondary)',
      surface: 'var(--color-surface)',
      'surface-hover': 'var(--color-surface-hover)',
      'surface-active': 'var(--color-surface-active)',
      border: 'var(--color-border)',
      'border-hover': 'var(--color-border-hover)',

      // Text colors
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
      'text-muted': 'var(--color-text-muted)',

      // Accent colors
      accent: 'var(--color-accent)',
      'accent-hover': 'var(--color-accent-hover)',
    },

    // Font sizes - Large typography focus
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.15' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
      '7xl': ['4.5rem', { lineHeight: '1.05' }],
      '8xl': ['6rem', { lineHeight: '1' }],
    },

    // Border radius - Rounded corners scale
    borderRadius: {
      'sm': '0.375rem',
      'md': '0.5rem',
      'lg': '0.75rem',
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      'full': '9999px',
    },

    // Box shadows
    boxShadow: {
      'sm': 'var(--shadow-sm)',
      'md': 'var(--shadow-md)',
      'lg': 'var(--shadow-lg)',
      'xl': 'var(--shadow-xl)',
      'card': 'var(--shadow-card)',
      'card-hover': 'var(--shadow-card-hover)',
      'glow': '0 0 20px var(--color-accent-glow)',
      'glow-lg': '0 0 40px var(--color-accent-glow)',
    },

    // Animation
    animation: {
      keyframes: {
        'fade-up': '{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}',
        'fade-in': '{from{opacity:0}to{opacity:1}}',
        'scale-in': '{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}',
        'blur-in': '{from{opacity:0;filter:blur(10px)}to{opacity:1;filter:blur(0)}}',
        'pulse-soft': '{0%,100%{opacity:1}50%{opacity:0.5}}',
        'float': '{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}',
      },
      durations: {
        'fade-up': '0.5s',
        'fade-in': '0.3s',
        'scale-in': '0.3s',
        'blur-in': '0.4s',
        'pulse-soft': '2s',
        'float': '3s',
      },
      timingFns: {
        'fade-up': 'var(--ease-out-expo)',
        'fade-in': 'var(--ease-out-expo)',
        'scale-in': 'var(--ease-out-expo)',
        'blur-in': 'var(--ease-out-expo)',
        'pulse-soft': 'ease-in-out',
        'float': 'ease-in-out',
      },
      counts: {
        'pulse-soft': 'infinite',
        'float': 'infinite',
      },
    },

    // Breakpoints
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    // Spacing
    spacing: {
      '18': '4.5rem',
      '22': '5.5rem',
      '30': '7.5rem',
    },

    // Easing curves
    easing: {
      'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  },

  // Shortcuts - Reusable utility combinations
  shortcuts: {
    // ===========================================
    // Glass Card Components
    // ===========================================

    'glass': 'backdrop-blur-xl bg-surface border border-border',
    'glass-card': 'glass rounded-2xl shadow-card transition-all duration-300',
    'glass-card-hover': 'glass-card hover:bg-surface-hover hover:border-border-hover hover:shadow-card-hover',
    'glass-card-interactive': 'glass-card-hover hover:translate-y-[-2px] cursor-pointer',

    // ===========================================
    // Bento Grid System
    // ===========================================

    'bento-grid': 'grid gap-4 md:gap-6',
    'bento-grid-2': 'bento-grid grid-cols-1 md:grid-cols-2',
    'bento-grid-3': 'bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'bento-card': 'glass-card-interactive p-6 overflow-hidden',
    'bento-card-lg': 'bento-card md:col-span-2',
    'bento-card-tall': 'bento-card md:row-span-2',

    // ===========================================
    // Button Components
    // ===========================================

    'btn-base': 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer',
    'btn-primary': 'btn-base bg-accent text-black px-6 py-3 hover:bg-accent-hover hover:shadow-glow',
    'btn-primary-sm': 'btn-base bg-accent text-black px-4 py-2 text-sm hover:bg-accent-hover',
    'btn-secondary': 'btn-base glass px-6 py-3 text-text-primary hover:bg-surface-hover hover:border-border-hover',
    'btn-ghost': 'btn-base px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-surface',
    'btn-icon': 'flex items-center justify-center w-10 h-10 rounded-xl glass hover:bg-surface-hover transition-all duration-200',

    // ===========================================
    // Typography
    // ===========================================

    'text-gradient': 'bg-clip-text text-transparent bg-gradient-to-r from-accent to-emerald-400',

    // Headings - Large, bold statements
    'heading-display': 'text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight',
    'heading-1': 'text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight',
    'heading-2': 'text-3xl sm:text-4xl font-bold text-text-primary',
    'heading-3': 'text-2xl sm:text-3xl font-semibold text-text-primary',
    'heading-4': 'text-xl font-semibold text-text-primary',

    // Body text
    'body-lg': 'text-lg sm:text-xl text-text-secondary leading-relaxed',
    'body-base': 'text-base text-text-secondary leading-relaxed',
    'body-sm': 'text-sm text-text-muted',

    // Labels
    'label': 'text-xs uppercase tracking-wider text-text-muted font-medium',

    // ===========================================
    // Links
    // ===========================================

    'link-hover': 'text-text-secondary hover:text-text-primary transition-colors duration-200',
    'link-accent': 'text-accent hover:text-accent-hover transition-colors duration-200',

    // ===========================================
    // Layout - Container & Spacing
    // ===========================================

    'section-container': 'max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10',
    'section-padding': 'py-20 sm:py-24 lg:py-32',
    'section-padding-sm': 'py-12 sm:py-16',

    // ===========================================
    // Flex Utilities
    // ===========================================

    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-col-center': 'flex flex-col items-center justify-center',

    // ===========================================
    // Status Indicator
    // ===========================================

    'status-dot': 'w-2 h-2 rounded-full bg-accent animate-pulse-soft',
    'status-badge': 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-text-secondary',

    // ===========================================
    // Nav styles
    // ===========================================

    'nav-link': 'text-sm font-medium text-text-secondary hover:text-text-primary px-4 py-2 rounded-xl transition-colors duration-200',
    'nav-pill': 'px-6 py-2.5 rounded-full glass hover:bg-surface-hover transition-all duration-200',
  },

  // Safelist for dynamic classes
  safelist: [
    'animate-fade-up',
    'animate-fade-in',
    'animate-scale-in',
    'animate-blur-in',
    'animate-pulse-soft',
    'animate-float',
    'dark',
    // Phosphor icons that might be used dynamically
    'i-ph-github-logo',
    'i-ph-linkedin-logo',
    'i-ph-behance-logo',
    'i-ph-envelope',
    'i-ph-arrow-right',
    'i-ph-arrow-up-right',
    'i-ph-sun',
    'i-ph-moon',
    'i-ph-list',
    'i-ph-x',
    'i-ph-copy',
    'i-ph-check',
  ],

  // Content sources
  content: {
    pipeline: {
      include: [
        /\.(vue|ts|tsx|js|jsx|md|mdx)($|\?)/,
      ],
    },
  },
})
