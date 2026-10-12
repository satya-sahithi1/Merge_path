"use client";

/**
 * Thin client wrapper that adds a Motion fade-up entrance to whatever
 * tab content the server-rendered repo detail page passes as children.
 *
 * Kept deliberately minimal — the server component owns all data fetching
 * and structure; this component only owns the animation.
 */

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function AnimatedSection({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Animates a list of items with staggered whileInView entrances. */
export function AnimatedList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ staggerChildren: 0.055, delayChildren: 0 }}
    >
      {children}
    </motion.div>
  );
}

/** One animated list item — pair with AnimatedList. */
export function AnimatedItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
