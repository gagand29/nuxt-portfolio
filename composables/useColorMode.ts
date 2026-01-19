/**
 * useColorMode Composable
 * Manages light/dark mode theme switching with localStorage persistence
 *
 * Features:
 * - Light mode is default
 * - Preference saved to localStorage
 * - Smooth transition between modes
 * - SSR-safe with client-side hydration
 */

type ColorMode = 'light' | 'dark'

// Reactive state for color mode
const colorMode = ref<ColorMode>('light')
const isInitialized = ref(false)

/**
 * Initialize color mode from localStorage or system preference
 * Only runs on client-side
 */
const initColorMode = () => {
  if (import.meta.server || isInitialized.value) return

  // Check localStorage first
  const stored = localStorage.getItem('color-mode') as ColorMode | null

  if (stored && (stored === 'light' || stored === 'dark')) {
    colorMode.value = stored
  } else {
    // Default to light mode (as requested)
    // Optionally check system preference:
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // colorMode.value = prefersDark ? 'dark' : 'light'
    colorMode.value = 'light'
  }

  // Apply the class to document
  updateDocumentClass(colorMode.value)
  isInitialized.value = true
}

/**
 * Update the document's class to reflect current color mode
 */
const updateDocumentClass = (mode: ColorMode) => {
  if (import.meta.server) return

  const html = document.documentElement

  if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

/**
 * Toggle between light and dark mode
 */
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('color-mode', colorMode.value)
  updateDocumentClass(colorMode.value)
}

/**
 * Set a specific color mode
 */
const setColorMode = (mode: ColorMode) => {
  colorMode.value = mode
  localStorage.setItem('color-mode', mode)
  updateDocumentClass(mode)
}

/**
 * Main composable export
 */
export const useColorMode = () => {
  // Initialize on first use (client-side only)
  if (import.meta.client) {
    initColorMode()
  }

  // Computed properties for convenience
  const isDark = computed(() => colorMode.value === 'dark')
  const isLight = computed(() => colorMode.value === 'light')

  return {
    colorMode: readonly(colorMode),
    isDark,
    isLight,
    toggleColorMode,
    setColorMode,
  }
}
