"use client";

import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Compass, ShieldCheck, BookMarked, LayoutGrid, WifiOff } from 'lucide-react';

export default function SmoothDragCircularGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const featureCards = [
    { id: 1, title: "Instant textbook access", color: "bg-[#FAF9F5]", icon: BookOpen, desc: "Browse every class, subject, and chapter without digging through scattered resources." },
    { id: 2, title: "Exam-first resources", color: "bg-[#FFEAD2]", icon: Compass, desc: "Keep NCERT books, sample practice, and board-focused preparation in one reliable place." },
    { id: 3, title: "No sign-up, zero ads", color: "bg-[#E2F0D9]", icon: ShieldCheck, desc: "Every PDF is free to access. No account creation, no distraction — just the material you need." },
    { id: 4, title: "Pure Reading Canvas", color: "bg-[#EAE4F2]", icon: BookMarked, desc: "Say goodbye to chaotic ads, pop-ups, and cluttered layouts. Enjoy beautifully typeset textbooks designed purely for deep focus." },
    { id: 5, title: "Zero-Clutter Navigation", color: "bg-[#E2F4E4]", icon: LayoutGrid, desc: "Jump straight into your specific CBSE class, subject, or chapter instantly. Zero click-loops, just the exact content you need." },
    { id: 6, title: "Seamless Offline Cache", color: "bg-[#F3C4FB]", icon: WifiOff, desc: "Save your most-read book chapters locally in your browser cache to study seamlessly even when networks drop." }
  ];

  useEffect(() => {
    const updatePhysicsLoop = () => {
      if (!trackRef.current) return;

      if (!isDragging.current) {
        velocity.current *= 0.95;
        targetRotation.current += velocity.current;
      } else {
        velocity.current = targetRotation.current - currentRotation.current;
      }

      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.08;

      trackRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;

      animationFrameId.current = requestAnimationFrame(updatePhysicsLoop);
    };

    animationFrameId.current = requestAnimationFrame(updatePhysicsLoop);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    velocity.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const deltaX = currentX - lastX.current;

    targetRotation.current += deltaX * 0.25;
    lastX.current = currentX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[85vh] bg-[#FAF9F5] py-20 px-6 flex flex-col items-center overflow-hidden select-none">

      <div className="text-center max-w-3xl mx-auto mb-12 pointer-events-none">
      <div className="w-full flex justify-center items-center select-none mb-2">
        <h2 className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased text-center animate-glow-pulse">
          FEATURES ARCHITECTURE
        </h2>
      </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2A0F14] mb-4">Everything you need, nothing you don&apos;t.</h2>
        <p className="font-body text-[#2A0F14]/70 text-base sm:text-lg">EasyCBSE keeps the study surface simple while making the important learning actions easy to reach.</p>
      </div>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full max-w-[950px] h-[420px] flex items-center justify-center perspective-[1400px] cursor-grab active:cursor-grabbing touch-none"
      >
        <div
          ref={trackRef}
          className="relative w-[220px] h-[280px] will-change-transform"
          style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
        >
          {featureCards.map((card, index) => {
            const angle = 60 * index;
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className={`absolute inset-0 w-full h-full p-5 rounded-2xl border-2 border-[#2A0F14] shadow-[4px_4px_0px_#2A0F14] flex flex-col justify-between antialiased subpixel-antialiased backface-hidden ${card.color}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(320px)`,
                  pointerEvents: 'auto'
                }}
              >
                <div className="flex flex-col">
                  <div className="w-9 h-9 rounded-xl border border-[#2A0F14]/15 bg-white/75 flex items-center justify-center mb-5 text-[#2A0F14]">
                    <IconComponent size={18} strokeWidth={2.2} />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#2A0F14] mb-2 tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  <p className="font-body text-xs text-[#2A0F14]/80 leading-relaxed tracking-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="font-mono text-[9px] font-semibold tracking-wider text-[#2A0F14]/40 uppercase pt-2 border-t border-[#2A0F14]/5">
                  E-CBSE // DECK 0{card.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-6 select-none pointer-events-none">
        <div className="flex items-center gap-3 text-[#2A0F14]/70 font-heading font-bold text-xs tracking-[0.2em] uppercase antialiased">
          <span className="animate-bounce inline-block [animation-direction:alternate] [animation-duration:0.8s]">
            ←
          </span>
          <span className="animate-pulse duration-1000">
            Swipe to Spin the Feature Deck
          </span>
          <span className="animate-bounce inline-block [animation-direction:alternate] [animation-duration:0.8s]">
            →
          </span>
        </div>
      </div>

    </section>
  );
}
