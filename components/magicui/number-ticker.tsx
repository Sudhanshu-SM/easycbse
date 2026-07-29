"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface NumberTickerProps {
  value: number;
  className?: string;
  direction?: "up" | "down";
  delay?: number;
}

export default function NumberTicker({
  value,
  className,
  direction = "up",
  delay = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  // Server-render the real value so crawlers never see a placeholder "0";
  // the count-up animation only takes over after hydration.
  const [mounted, setMounted] = useState(false);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const rounded = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, direction, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {mounted ? <motion.span>{rounded}</motion.span> : <span>{value}</span>}
    </span>
  );
}
