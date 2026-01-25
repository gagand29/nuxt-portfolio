/**
 * useColorMode Composable
 * Manages light/dark mode theme switching with localStorage persistence
 *
 * Features:
 * - Automatic theme based on time of day (6 AM - 6 PM = light, else dark)
 * - User preference saved to localStorage (overrides auto)
 * - Smooth transition between modes
 * - SSR-safe with client-side hydration
 * - Prevents flash by having dark class in HTML by default
 */

type ColorMode = 'light' | 'dark'

// Reactive state for color mode
const colorMode = ref<ColorMode>('dark')
const isInitialized = ref(false)

/**
 * Get theme based on time of day
 * 6 AM - 6 PM = light mode (daytime)
 * 6 PM - 6 AM = dark mode (evening/night)
 */
const getTimeBasedTheme = (): ColorMode => {
  const hour = new Date().getHours()
  // Daytime: 6 AM (6) to 6 PM (18)
  return (hour >= 6 && hour < 18) ? 'light' : 'dark'
}

/**
 * Initialize color mode from localStorage or time-based default
 * Only runs on client-side
 */
const initColorMode = () => {
  if (import.meta.server || isInitialized.value) return

  // Check localStorage first (user preference overrides auto)
  const stored = localStorage.getItem('color-mode') as ColorMode | null

  if (stored && (stored === 'light' || stored === 'dark')) {
    colorMode.value = stored
  } else {
    // Auto theme based on time of day
    colorMode.value = getTimeBasedTheme()
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
