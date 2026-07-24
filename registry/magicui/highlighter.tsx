"use client";

import { motion } from "framer-motion";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "underline" | "highlight";
  color?: string;
  className?: string;
}

export function Highlighter({ children, action = "highlight", color = "#FF9800", className }: HighlighterProps) {
  if (action === "underline") {
    return (
      <span className={`relative inline-flex items-center ${className ?? ""}`}>
        <span className="relative z-10 inline">{children}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: color,
            transformOrigin: "left",
            pointerEvents: "none",
          }}
        />
      </span>
    );
  }

  return (
    <span className={`relative inline-flex items-center ${className ?? ""}`}>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 4,
          backgroundColor: color,
          opacity: 0.15,
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />
      <span className="relative z-10 inline">{children}</span>
    </span>
  );
}
