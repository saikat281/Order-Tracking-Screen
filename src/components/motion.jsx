"use client";

import { motion } from "framer-motion";

/**
 * Named animation presets. Add new ones here and every component
 * using <Motion type="..."> gets access to it immediately.
 */
export const variants = {
  fadeUp: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  slideInLeft: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  slideInRight: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
};

/** Wrap a list container in this to stagger its children's own Motion/variants. */
export function staggerContainer(staggerChildren = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

const TAGS = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
  section: motion.section,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  button: motion.button,
};

/**
 * <Motion type="fadeUp" delay={0.1} as="section">...</Motion>
 *
 * type      - one of the presets above, or pass a custom `variants` object directly.
 * as        - the element tag to render (default "div").
 * once      - true (default) animates in the first time it enters the viewport;
 *             false re-animates every time `animate` state changes (good for stagger parents).
 * stagger   - shorthand: pass a number to turn this into a stagger container for its children.
 */
export default function Motion({
  type = "fadeUp",
  as = "div",
  delay = 0,
  duration = 0.4,
  once = true,
  amount = 0.3,
  stagger,
  variants: customVariants,
  className,
  children,
  ...rest
}) {
  const Component = TAGS[as] || motion.div;
  const chosen = stagger
    ? staggerContainer(stagger)
    : customVariants || variants[type] || variants.fadeUp;

  const viewportProps = once
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, amount } }
    : { initial: "hidden", animate: "visible" };

  return (
    <Component
      className={className}
      variants={chosen}
      transition={{ duration, delay, ease: "easeOut" }}
      {...viewportProps}
      {...rest}
    >
      {children}
    </Component>
  );
}