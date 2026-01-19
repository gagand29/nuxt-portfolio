<script setup lang="ts">
/**
 * RotatingBadge Component
 * Circular rotating text badge displaying tech stack
 * Shows "Updating Portfolio" indicator when in development
 */

interface Props {
  /** Size of the badge in pixels */
  size?: number
  /** Text to display in the circular rotation */
  text?: string
  /** Animation duration in seconds */
  duration?: number
  /** Show updating indicator */
  isUpdating?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 280,
  text: 'VUE * REACT * NEXT * AWS * NUXT * NODE * ',
  duration: 20,
  isUpdating: false,
})

// Double the text for seamless loop
const displayText = computed(() => props.text + props.text)

// Calculate viewBox and path for text
const viewBoxSize = computed(() => props.size)
const radius = computed(() => (props.size - 40) / 2)
const centerPoint = computed(() => props.size / 2)
</script>

<template>
  <div
    class="rotating-badge relative flex-center"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <!-- Updating indicator pulse (shown when updating) -->
    <div
      v-if="isUpdating"
      class="absolute -top-2 -right-2 z-10"
    >
      <span class="relative flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
        <span class="relative inline-flex rounded-full h-4 w-4 bg-accent-secondary" />
      </span>
    </div>

    <!-- Outer glow ring -->
    <div
      class="absolute inset-0 rounded-full opacity-30"
      :style="{
        background: 'radial-gradient(circle, rgba(29, 185, 84, 0.2) 0%, transparent 70%)',
      }"
    />

    <!-- Rotating SVG with circular text -->
    <svg
      :width="size"
      :height="size"
      :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
      class="animate-rotate"
      :style="{ animationDuration: `${duration}s` }"
    >
      <defs>
        <!-- Circular path for text -->
        <path
          id="circlePath"
          :d="`M ${centerPoint}, ${centerPoint}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0`"
          fill="none"
        />
      </defs>

      <!-- Text following circular path -->
      <text
        class="fill-text-secondary"
        font-size="14"
        font-weight="600"
        letter-spacing="3"
        text-transform="uppercase"
      >
        <textPath
          href="#circlePath"
          startOffset="0%"
        >
          {{ displayText }}
        </textPath>
      </text>
    </svg>

    <!-- Center content -->
    <div class="absolute inset-0 flex-center">
      <div
        class="glass-card flex-center p-8 rounded-full relative"
        :style="{ width: `${size * 0.55}px`, height: `${size * 0.55}px` }"
      >
        <!-- Updating state -->
        <div
          v-if="isUpdating"
          class="text-center"
        >
          <div class="text-xs text-accent-secondary uppercase tracking-wider mb-1 animate-pulse">
            Updating
          </div>
          <div class="text-2xl font-bold text-gradient">Portfolio</div>
        </div>

        <!-- Normal state -->
        <div
          v-else
          class="text-center"
        >
          <div class="text-3xl font-bold text-gradient mb-1">2+</div>
          <div class="text-xs text-text-muted uppercase tracking-wider">
            Years Exp
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotating-badge {
  filter: drop-shadow(0 0 20px rgba(29, 185, 84, 0.1));
}

/* Ensure smooth rotation */
.animate-rotate {
  will-change: transform;
}

/* Text styling in SVG */
text {
  font-family: 'Inter', system-ui, sans-serif;
}

/* Ping animation for updating indicator */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
