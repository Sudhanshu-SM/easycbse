"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

export function Marquee({
  children,
  className,
  gap = "40px",
  pauseOnHover = true,
}: {
  children?: React.ReactNode;
  className?: string;
  gap?: string;
  pauseOnHover?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex overflow-hidden", className)}
    >
      <div
        className={cn(
          "flex shrink-0 items-center",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          gap,
          animation: "marquee-scroll 30s linear infinite",
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
