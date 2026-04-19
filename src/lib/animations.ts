import { Variants, Transition, UseInViewOptions } from 'framer-motion'

export const standardTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

const easeOut = standardTransition

const easeOutSlow: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

export const viewportOptions: UseInViewOptions = {
  once: false,
  amount: 0.15,
}

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

export const scaleRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: easeOutSlow },
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export const scaleFadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

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
