/**
 * UnoCSS Configuration with Design System Tokens
 * https://unocss.dev/guide/config-file
 *
 * Theme Strategy:
 * - Uses CSS custom properties (variables) defined in main.css
 * - Light mode is default, dark mode applied via .dark class on html
 * - All theme colors reference CSS variables for seamless switching
 */

import {
  defineConfig,
  presetUno,
  presetWebFonts,
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
      surface: 'var(--color-surface)',
      'surface-hover': 'var(--color-surface-hover)',
      'surface-active': 'var(--color-surface-active)',
      border: 'var(--color-border)',
      'border-hover': 'var(--color-border-hover)',

      // Text colors
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
      'text-muted': 'var(--color-text-muted)',

      // Accent colors (consistent across themes)
      'accent-primary': '#1DB954',
      'accent-secondary': '#3b82f6',
      'accent-purple': '#764ba2',
      'accent-pink': '#667eea',
    },

    // Font sizes
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.2' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
    },

    // Border radius
    borderRadius: {
      'sm': '0.375rem',
      'md': '0.5rem',
      'lg': '0.75rem',
      'xl': '1rem',
      '2xl': '1.5rem',
      'full': '9999px',
    },

    // Box shadows - Use CSS variables for theme-aware shadows
    boxShadow: {
      'sm': 'var(--shadow-sm)',
      'md': 'var(--shadow-md)',
      'lg': 'var(--shadow-lg)',
      'xl': 'var(--shadow-xl)',
      'card': 'var(--shadow-card)',
      'card-hover': 'var(--shadow-card-hover)',
      // Glow effects for accent elements
      'glow': '0 0 20px rgba(29, 185, 84, 0.3)',
      'glow-lg': '0 0 40px rgba(29, 185, 84, 0.5)',
      'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
    },

    // Animation
    animation: {
      keyframes: {
        rotate: '{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
        'fade-in-up': '{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}',
        float: '{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}',
        'glow-pulse': '{0%,100%{box-shadow:0 0 20px rgba(29,185,84,0.3)}50%{box-shadow:0 0 40px rgba(29,185,84,0.6)}}',
        shimmer: '{0%{background-position:-200% 0}100%{background-position:200% 0}}',
        'bounce-soft': '{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}',
      },
      durations: {
        rotate: '20s',
        'fade-in-up': '0.6s',
        float: '3s',
        'glow-pulse': '2s',
        shimmer: '2s',
        'bounce-soft': '2s',
      },
      timingFns: {
        rotate: 'linear',
        'fade-in-up': 'cubic-bezier(0.4, 0, 0.2, 1)',
        float: 'ease-in-out',
        'glow-pulse': 'ease-in-out',
        shimmer: 'linear',
        'bounce-soft': 'ease-in-out',
      },
      counts: {
        rotate: 'infinite',
        float: 'infinite',
        'glow-pulse': 'infinite',
        shimmer: 'infinite',
        'bounce-soft': 'infinite',
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

    // Spacing (extends default)
    spacing: {
      '18': '4.5rem',
      '22': '5.5rem',
      '30': '7.5rem',
    },
  },

  // Shortcuts - Reusable utility combinations
  shortcuts: {
    // ===========================================
    // Card Components (Theme-Aware)
    // ===========================================

    // Base card - uses CSS variables for theme switching
    'card': 'bg-surface border border-border rounded-xl shadow-card transition-all duration-300',
    'card-hover': 'card hover:bg-surface-hover hover:border-border-hover hover:shadow-card-hover',

    // Glass card (enhanced in dark mode via CSS)
    'glass-card': 'backdrop-blur-xl bg-surface border border-border rounded-xl shadow-card',
    'glass-card-hover': 'glass-card hover:bg-surface-hover hover:border-border-hover transition-all duration-300',

    // ===========================================
    // Button Components
    // ===========================================

    // Glass button
    'glass-button': 'backdrop-blur-md bg-surface-hover border border-border rounded-lg transition-all duration-300 hover:scale-102 cursor-pointer',
    'glass-button-sm': 'glass-button px-3 py-1.5 text-sm',
    'glass-button-md': 'glass-button px-4 py-2 text-base',
    'glass-button-lg': 'glass-button px-6 py-3 text-lg',

    // Primary button (Spotify green) - high contrast for both themes
    'btn-primary': 'bg-accent-primary text-black font-semibold rounded-lg px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer',
    'btn-primary-sm': 'bg-accent-primary text-black font-medium rounded-md px-4 py-2 text-sm transition-all duration-300 hover:scale-105 cursor-pointer',

    // Secondary button
    'btn-secondary': 'bg-surface border border-border text-text-primary px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:bg-surface-hover hover:border-border-hover cursor-pointer',

    // ===========================================
    // Typography
    // ===========================================

    // Text gradient (accent colors)
    'text-gradient': 'bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary',
    'text-gradient-purple': 'bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-accent-purple',

    // Headings - responsive sizes
    'heading-1': 'text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight',
    'heading-2': 'text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary',
    'heading-3': 'text-2xl sm:text-3xl font-semibold text-text-primary',
    'heading-4': 'text-xl sm:text-2xl font-semibold text-text-primary',

    // Body text
    'body-lg': 'text-lg sm:text-xl text-text-secondary leading-relaxed',
    'body-base': 'text-base text-text-secondary leading-relaxed',

    // Labels
    'label': 'text-xs uppercase tracking-wider text-text-muted font-medium',

    // ===========================================
    // Links
    // ===========================================

    'link-hover': 'text-text-secondary hover:text-text-primary transition-colors duration-200',
    'link-accent': 'text-accent-primary hover:text-accent-secondary transition-colors duration-200',

    // ===========================================
    // Layout - Container & Spacing
    // ===========================================

    // Section container - 1200px max-width with responsive padding
    'section-container': 'max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10',

    // Section padding - 120px (7.5rem) vertical on desktop
    'section-padding': 'py-20 sm:py-24 lg:py-30',

    // ===========================================
    // Flex Utilities
    // ===========================================

    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-col-center': 'flex flex-col items-center justify-center',

    // ===========================================
    // Grid Layouts
    // ===========================================

    'grid-projects': 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    'grid-certs': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
    'grid-expertise': 'grid grid-cols-1 lg:grid-cols-3 gap-8',
  },

  // Safelist for dynamic classes
  safelist: [
    'animate-rotate',
    'animate-fade-in-up',
    'animate-float',
    'animate-glow-pulse',
    'animate-bounce-soft',
    'dark',
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
