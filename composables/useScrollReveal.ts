/**
 * useScrollReveal Composable
 * Adds scroll reveal animation to elements using Intersection Observer
 */

export function useScrollReveal() {
  const observeElements = () => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Optionally stop observing after reveal
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Cleanup function
    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }

  // Run on mounted
  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(observeElements, 100)
  })
}
