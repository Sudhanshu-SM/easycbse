"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedList({ children, className }: AnimatedListProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={cn(
        "relative flex max-h-[420px] flex-col overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-12 before:bg-gradient-to-b before:from-[#FAF9F5] before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-16 after:bg-gradient-to-t after:from-[#FAF9F5] after:to-transparent",
        className
      )}
    >
      <div className="flex flex-col gap-4 animate-infinite-scroll">
        {childrenArray.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {childrenArray.map((child, i) => (
          <div key={`dup-${i}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
