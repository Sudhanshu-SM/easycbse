"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

export function MagicCard({
  children,
  className,
  glowFrom = "#E9D5FF",
  glowTo = "#FBCFE8",
  mode = "orb",
}: {
  children?: React.ReactNode;
  className?: string;
  glowFrom?: string;
  glowTo?: string;
  mode?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const orbPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    const orb = orbRef.current;
    if (!card || mode !== "orb") return;

    const handleMouse = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const animate = () => {
      orbPosRef.current.x += (mouseRef.current.x - orbPosRef.current.x) / 12;
      orbPosRef.current.y += (mouseRef.current.y - orbPosRef.current.y) / 12;
      if (orb) {
        orb.style.transform = `translate(${orbPosRef.current.x - 150}px, ${orbPosRef.current.y - 150}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    card.addEventListener("mousemove", handleMouse);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      card.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mode]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md",
        className
      )}
    >
      {mode === "orb" && (
        <div
          ref={orbRef}
          className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowFrom}, ${glowTo} 60%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
