"use client";

import { useEffect, useRef, useState } from "react";

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

const cards = [
  {
    id: 1,
    tag: "FEATURE 01 // ARCHITECTURE",
    title: "Pure NCERT Library",
    desc: "Access complete, unadulterated textbook chapters directly from the official curriculum. No clutter, just pure educational material.",
    bullets: ["Official NCERT Chapter Texts", "Clean Typographic Layout", "Direct Subject & Class Access"],
    color: "bg-[#7C3AED] text-white",
    getTargetY: () => 0,
  },
  {
    id: 2,
    tag: "FEATURE 02 // RESOURCES",
    title: "Distraction-Free Reader",
    desc: "Read and study without the noise. Experience a clean canvas engineered specifically for deep focus and smooth chapter navigation.",
    bullets: ["Zero Pop-ups or Heavy Ads", "Optimized Mobile & Web View", "Seamless Chapter-to-Chapter Flow"],
    color: "bg-[#0D9488] text-white",
    getTargetY: (p: number) => {
      if (p < 0.15) return 400;
      if (p > 0.40) return 12;
      return lerp(400, 12, (p - 0.15) / (0.40 - 0.15));
    },
  },
  {
    id: 3,
    tag: "FEATURE 03 // PERFORMANCE",
    title: "Instant Class Hub",
    desc: "Jump straight into your grade level. Find your exact subjects and chapters in seconds without digging through messy file directories.",
    bullets: ["Structured by Classes & Subjects", "Lightning-Fast Page Load Speeds", "Student-First Minimal Interface"],
    color: "bg-[#DB2777] text-white",
    getTargetY: (p: number) => {
      if (p < 0.40) return 550;
      if (p > 0.65) return 24;
      return lerp(550, 24, (p - 0.40) / (0.65 - 0.40));
    },
  },
  {
    id: 4,
    tag: "FEATURE 04 // UX PROMISE",
    title: "100% Zero-Ad Canvas",
    desc: "A pure digital reading sanctuary engineered solely for deep study focus. Completely distraction-free dashboard.",
    bullets: ["Zero Pop-ups or Ad Interruption", "Ultra-Fast Mobile Document Rendering", "Night-Mode Grid Canvas Alignment"],
    color: "bg-[#2A0F14] text-[#FAF9F5]",
    getTargetY: (p: number) => {
      if (p < 0.65) return 600;
      if (p > 0.90) return 36;
      return lerp(600, 36, (p - 0.65) / (0.90 - 0.65));
    },
  },
];

export default function StackedFeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      setScrollProgress(Math.max(0, Math.min(1, -rect.top / totalHeight)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[260vh] w-full bg-[#FAF9F5]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2a0f1406_1px,transparent_1px),linear-gradient(to_bottom,#2a0f1406_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:gap-12 lg:grid-cols-12 px-6">
          {/* LEFT TEXT */}
          <div className="flex w-full flex-col space-y-5 lg:col-span-5">
            <h2 className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased animate-glow-pulse">
              Why EasyCBSE
            </h2>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#2A0F14] md:text-4xl">
              A reading experience built for focus.
            </h2>
            <p className="max-w-xl font-body font-semibold text-[#2A0F14]/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Every feature is designed to remove friction and keep you in a flow state — from the second you open a textbook.
            </p>
          </div>

          {/* RIGHT STACK */}
          <div className="flex w-full flex-col items-center justify-center lg:justify-end lg:col-span-7 h-auto overflow-visible">
            <div className="relative h-[340px] sm:h-[400px] w-full max-w-[500px]">
              {cards.map((card, i) => {
                const y = card.getTargetY(scrollProgress);
                return (
                  <div
                    key={card.id}
                    className={`absolute inset-0 flex h-full w-full flex-col justify-between rounded-2xl border-2 border-[#2A0F14] p-4 sm:p-6 shadow-[6px_6px_0px_#2A0F14] transition-transform duration-75 ease-out ${card.color}`}
                    style={{ transform: `translateY(${y}px)`, zIndex: i + 1, cursor: "pointer" }}
                  >
                    <div className="flex h-full flex-col overflow-hidden">
                      <span className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest opacity-75">
                        {card.tag}
                      </span>

                      <h3 className="font-heading text-2xl font-extrabold tracking-tight leading-none mb-3">
                        {card.title}
                      </h3>

                      <p className="font-body text-xs leading-relaxed opacity-90 mb-4">
                        {card.desc}
                      </p>

                      <ul className="mt-auto space-y-1.5 border-t border-current/10 pt-3">
                        {card.bullets.map((b, j) => (
                          <li key={j} className="flex items-center gap-2 font-body text-[11px] font-medium">
                            <span className="text-xs opacity-65">✦</span>
                            <span className="opacity-90">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex w-full items-center justify-between border-t border-current/10 pt-3 font-mono text-[10px] tracking-wider opacity-60">
                      <span>E-CBSE HUB</span>
                      <span>SYSTEM V.1</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
