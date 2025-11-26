"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  id?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className = "",
  id,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? value : 0
  );

  const motionValue = useMotionValue(prefersReducedMotion ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        setDisplayValue(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [isInView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue, prefersReducedMotion]);

  // When reduced motion is preferred, show the value immediately without animation
  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className} id={id}>
        {value}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;
