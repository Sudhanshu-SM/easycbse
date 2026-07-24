"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function WordRotate({
  className,
  words,
}: {
  className?: string;
  words: string[];
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={cn("inline-block", className)}>
      <span
        className="inline-block transition-all duration-300"
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(4px)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
