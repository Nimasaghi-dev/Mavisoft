import { Variants, Transition, UseInViewOptions } from 'framer-motion'

// Fast ease-out — GPU-accelerated, no JS frame-by-frame calculation
const easeOut: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

const easeOutSlow: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

// once: false so animations play in both scroll directions
export const viewportOptions: UseInViewOptions = {
  once: false,
  amount: 0.15,
}

// Headings & text — slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

// Right-side elements — slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

// Images & diagrams — subtle scale up
export const scaleRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: easeOutSlow },
}

// Simple fade-up for misc elements
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

// Cards — subtle fade-up
export const scaleFadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

// Stagger children — fast fade-up
export const staggerChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export const createDelayedFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...easeOut, delay } },
})

export const createDelayedSlideLeft = (delay: number): Variants => ({
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { ...easeOut, delay } },
})

export const sectionMotionProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: slideInLeftVariants,
}

export const staggerContainerProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: staggerContainerVariants,
}

export const staggerChildProps = {
  variants: staggerChildVariants,
}

export const scaleFadeProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: viewportOptions,
  variants: scaleRevealVariants,
}
