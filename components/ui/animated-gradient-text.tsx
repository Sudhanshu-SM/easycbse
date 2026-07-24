"use client";

import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
  speed = 2,
  colorFrom = "#4ade80",
  colorTo = "#06b6d4",
}: {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: "200% 100%",
        animation: `shimmer ${speed}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
}
