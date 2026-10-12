/**
 * Shared Motion (motion.dev) variants and transition presets.
 *
 * Import only what each page needs. Every value here is deliberate:
 *  - Durations are short (0.3–0.5 s) so the site feels snappy, not theatrical.
 *  - Easing uses "easeOut" for entrances (quick start, gentle finish).
 *  - Reduced-motion is handled at the component level via `useReducedMotion`.
 */

import type { Variants, Transition } from "motion/react";

// ── Base transitions ──────────────────────────────────────────────────────

export const ease = [0.25, 0.1, 0.25, 1] as const; // cubic-bezier, similar to CSS "ease"
export const easeOut = [0.0, 0.0, 0.2, 1] as const;

export const fastTransition: Transition = { duration: 0.25, ease: easeOut };
export const defaultTransition: Transition = { duration: 0.35, ease: easeOut };
export const slowTransition: Transition = { duration: 0.5, ease: easeOut };

// ── Entrance variants ─────────────────────────────────────────────────────

/** Fade up from 10 px below — the default entrance for most elements */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Plain opacity fade — for elements whose position should not shift */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: defaultTransition },
};

/** Subtle scale-up — good for modal-like cards appearing from nothing */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: defaultTransition },
};

/** Fade in from slightly to the right — for secondary/staggered content */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

// ── Slide transition variants (for AnimatePresence page flips) ────────────

/**
 * Slide a new panel in from the right while exiting left.
 * Use `custom` prop to pass direction: 1 = forward, -1 = backward.
 */
export const slideTransition: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -24 : 24,
    transition: fastTransition,
  }),
};

// ── Stagger containers ────────────────────────────────────────────────────

/**
 * Wrap a list in this container and children will stagger their entrances.
 * Children should use fadeUp (or any variant with "hidden"/"visible").
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

/** Faster stagger — for larger lists (repo issue rows, etc.) */
export const fastStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.0,
    },
  },
};

// ── Viewport trigger defaults ─────────────────────────────────────────────

/**
 * Common whileInView props — apply as spread to <motion.div>.
 * Triggers once when 15 % of the element is visible.
 */
export const inViewOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
} as const;
