/**
 * Animation Utilities Library
 * Centralized animation configurations for consistency across MagniPay
 * All durations in seconds, easing arrays for Framer Motion
 */

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

/**
 * Standard easing for most animations
 * Smooth, professional feel with quick initial response
 */
export const STANDARD_EASING = [0.16, 1, 0.3, 1] as const;

/**
 * Smooth, flowing easing for subtle transitions
 * More gentle than standard easing
 */
export const SMOOTH_EASING = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Bounce easing for energetic, playful feel
 */
export const BOUNCE_EASING = [0.68, -0.55, 0.265, 1.55] as const;

// ============================================================================
// DURATION CONSTANTS
// ============================================================================

export const DURATIONS = {
  QUICK: 0.3,    // Fast state changes (hover, focus)
  STANDARD: 0.6, // Fade-ins, slides
  SLOW: 0.8,     // Large content animations
} as const;

export const DELAYS = {
  STAGGER: 0.1, // Delay between staggered items (multiply by index)
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
} as const;

// ============================================================================
// STANDARD ANIMATION VARIANTS (Framer Motion)
// ============================================================================

/**
 * Fade and blur in from top (standard section animation)
 */
export const fadeInFromTop = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0)" },
  transition: { duration: DURATIONS.STANDARD, ease: STANDARD_EASING },
};

/**
 * Fade and blur in on viewport (standard whileInView)
 */
export const fadeInViewport = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: DURATIONS.STANDARD, ease: STANDARD_EASING },
};

/**
 * Slide in from left with blur
 */
export const slideInFromLeft = {
  initial: { opacity: 0, x: -24, filter: "blur(6px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: DURATIONS.SLOW, ease: STANDARD_EASING },
};

/**
 * Slide in from right with blur
 */
export const slideInFromRight = {
  initial: { opacity: 0, x: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: DURATIONS.SLOW, ease: STANDARD_EASING },
};

/**
 * Staggered item animation (for grids, lists)
 * Use with index: transition={{ ...staggeredItem, delay: index * DELAYS.STAGGER }}
 */
export const staggeredItem = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: DURATIONS.STANDARD, ease: STANDARD_EASING },
};

/**
 * Header animation (section titles)
 */
export const headerAnimation = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: STANDARD_EASING },
};

/**
 * Quick hover scale effect
 */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: DURATIONS.QUICK, ease: STANDARD_EASING },
};

/**
 * Card hover with float effect
 */
export const cardHover = {
  whileHover: { y: -4, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" },
  transition: { duration: DURATIONS.QUICK, ease: STANDARD_EASING },
};

/**
 * Navbar animation (slide down from top)
 */
export const navbarSlide = {
  initial: { y: -80 },
  animate: { y: 0 },
  transition: { duration: DURATIONS.STANDARD, ease: STANDARD_EASING },
};

/**
 * Mobile menu slide in from right
 */
export const mobileMenuSlide = {
  initial: { x: "100%" },
  animate: { x: 0 },
  transition: { type: "spring", damping: 30, stiffness: 300 },
};

/**
 * Fade in animation (no movement)
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATIONS.STANDARD, ease: STANDARD_EASING },
};

/**
 * Rotate and fade in (for icons)
 */
export const rotateAndFadeIn = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: DURATIONS.QUICK, ease: STANDARD_EASING },
};

// ============================================================================
// ANIMATION COMPOSER FUNCTIONS
// ============================================================================

/**
 * Create a staggered animation with index-based delay
 * @param index - Item index in array
 * @param baseAnimation - Base animation config
 * @param baseDelay - Base delay before stagger (default 0)
 * @returns Animation config with delay applied
 */
export const createStaggeredAnimation = (
  index: number,
  baseAnimation = staggeredItem,
  baseDelay = 0
) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay: baseDelay + index * DELAYS.STAGGER,
  },
});

/**
 * Create a timed delay animation
 * @param duration - Animation duration
 * @param delay - Delay before animation starts
 * @returns Animation config with timing
 */
export const createTimedAnimation = (
  duration = DURATIONS.STANDARD,
  delay = 0
) => ({
  transition: {
    duration,
    delay,
    ease: STANDARD_EASING,
  },
});

// ============================================================================
// ANIMATION CONTAINER VARIANTS (for staggering child elements)
// ============================================================================

/**
 * Container animation that staggerers child animations
 * Use with motion.div variants={containerVariants}
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: DELAYS.STAGGER,
    },
  },
};

/**
 * Child variant for container stagger
 */
export const childVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: {
      duration: DURATIONS.STANDARD,
      ease: STANDARD_EASING,
    },
  },
};

// ============================================================================
// PRESET CONFIGURATIONS (Ready to use in components)
// ============================================================================

/**
 * Complete preset for section header
 */
export const PRESET_SECTION_HEADER = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: STANDARD_EASING },
} as const;

/**
 * Complete preset for card in grid
 */
export const PRESET_GRID_CARD = (index: number) => ({
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: DURATIONS.STANDARD,
    delay: index * DELAYS.STAGGER,
    ease: STANDARD_EASING,
  },
});

/**
 * Complete preset for page fade in
 */
export const PRESET_PAGE_FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DURATIONS.STANDARD },
} as const;

// ============================================================================
// TAILWIND CLASS UTILITIES
// ============================================================================

/**
 * Hover effect classes (Tailwind)
 */
export const HOVER_CLASSES = {
  SCALE: "group-hover:scale-105 transition-transform duration-300 ease-out",
  LIFT: "group-hover:-translate-y-1 transition-transform duration-300 ease-out",
  SHADOW: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-shadow duration-300 ease-out",
  ALL: "group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 ease-out",
} as const;

/**
 * Background animation classes (Tailwind)
 */
export const BACKGROUND_CLASSES = {
  GRADIENT_ORB_TOP: "absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none",
  GRADIENT_ORB_BOTTOM: "absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none",
  GRADIENT_LIGHT: "bg-gradient-to-br from-brand-blue to-brand-green",
  GRADIENT_REVERSE: "bg-gradient-to-br from-brand-green to-brand-blue",
} as const;

// ============================================================================
// DEFAULTS & EXPORTS
// ============================================================================

export const ANIMATION_DEFAULTS = {
  whileInViewDefault: {
    once: true,      // Animation only plays once
    amount: 0.2,     // Trigger when 20% of element is in view
  },
} as const;

// Re-export constants for convenience
export { STDEV_EASING = STANDARD_EASING };
