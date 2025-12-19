import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const easing = [0.22, 1, 0.36, 1];

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  y = 60,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: easing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
