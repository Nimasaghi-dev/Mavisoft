/**
 * Animation System 
 * 
 * PATTERN EXPLANATION:
 * --------------------
 * This animation system uses a consistent "fade-up" pattern across all sections.
 * 
 * Why this pattern?
 * 1. SUBTLETY: A small vertical movement (24px) combined with opacity creates
 *    a gentle "reveal" effect that feels natural without being distracting.
 * 
 * 2. CONSISTENCY: Every element uses the same easing curve and base duration,
 *    creating visual harmony as users scroll through the page.
 * 
 * 3. PERFORMANCE: Using `transform` and `opacity` only means animations run
 *    on the compositor thread, ensuring 60fps even on mobile devices.
 * 
 * 4. SCROLL-BASED: Using `whileInView` with `once: false` allows elements to
 *    animate in when entering viewport and reset when leaving, creating an
 *    engaging scroll experience.
 * 
 * Animation Specifications:
 * - Duration: 0.6s (smooth but not sluggish)
 * - Easing: [0.25, 0.1, 0.25, 1] (custom cubic-bezier for natural deceleration)
 * - Y offset: 24px (subtle lift effect)
 * - Stagger: 0.1s between children (creates wave effect)
 * - Viewport threshold: 0.2 (triggers when 20% visible)
 */

import { Variants, Transition, UseInViewOptions } from 'framer-motion'

// CORE ANIMATION CONFIGURATION
{/**Standard transition used across all animations-The custom easing creates a smooth deceleration that feels natural*/}
export const standardTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1], 
}

{/** Standard viewport options for scroll-triggered animations */}
export const viewportOptions: UseInViewOptions = {
  once: false,
  amount: 0.2,
}

// ANIMATION VARIANTS
{/** Primary fade-up animation variant - Use for: headings, paragraphs, standalone elements */}
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
}

{/** Container variant with staggered children-Use for: grids, lists, card containers */}
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

{/** Child variant for staggered animations-Use with: staggerContainerVariants as parent */}
export const staggerChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
}

{/** Scale fade variant for cards and interactive elements-Use for: cards that should have a subtle scale effect */}
export const scaleFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: standardTransition,
  },
}

// UTILITY FUNCTIONS
/**
 * Creates a delayed version of the fade-up animation
 * @param delay - Delay in seconds before animation starts
 */
export const createDelayedFadeUp = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...standardTransition,
      delay,
    },
  },
})

/**
 * Creates a stagger container with custom timing
 * @param stagger - Time between each child animation
 * @param delayChildren - Initial delay before first child animates
 */
export const createStaggerContainer = (
  stagger: number = 0.1,
  delayChildren: number = 0.1
): Variants => ({
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

// MOTION COMPONENT PROPS HELPERS
/**
 * Standard motion props for animated sections
 * Apply directly to motion.div or motion.section
 */

export const sectionMotionProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: fadeUpVariants,
}

/**
 * Motion props for stagger containers
 */
export const staggerContainerProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: staggerContainerVariants,
}

/**
 * Motion props for stagger children
 */
export const staggerChildProps = {
  variants: staggerChildVariants,
}

/**
 * Motion props for scale fade elements
 */
export const scaleFadeProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: scaleFadeVariants,
}
