"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/registry/magicui/animated-list";

const points = [
  { id: "01", color: "bg-[#FFEAD2]", text: "Built around the CBSE learning path from Class 1 to 12." },
  { id: "02", color: "bg-[#E2F0D9]", text: "Clear subject navigation that helps students find the right chapter faster." },
  { id: "03", color: "bg-[#E8DFF5]", text: "Free textbook PDFs with routes preserved for every class and subject." },
  { id: "04", color: "bg-[#D8F3DC]", text: "Simple, distraction-free interface designed for daily study sessions." },
];

function Notification({ point }: { point: (typeof points)[0] }) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-[#2A0F14] p-4 sm:p-5",
        "shadow-[4px_4px_0px_#2A0F14] transition-all duration-150 ease-in-out hover:translate-y-[-2px] active:translate-y-0",
        point.color
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#2A0F14]/15 bg-white font-mono text-sm font-bold text-[#2A0F14] shadow-[2px_2px_0px_rgba(42,15,20,0.1)] sm:size-12 sm:text-base">
          {point.id}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="whitespace-pre text-base font-semibold leading-snug text-[#2A0F14] antialiased sm:text-lg">
            {point.text}
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

export default function WhyEasyCBSE() {
  return (
    <section id="why-easycbse" className="w-full bg-[#FAF9F5] py-20 select-none">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-12 md:px-20 lg:grid-cols-5 lg:items-start">
        <div className="flex flex-col space-y-4 lg:col-span-2">
          <div className="w-full flex items-center select-none mb-2">
            <h2 className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased animate-glow-pulse">
              WHY EASYCBSE
            </h2>
          </div>
          <h2 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-[#2A0F14] sm:text-5xl">
            A calmer way to prepare for CBSE exams.
          </h2>
          <p className="pt-2 font-body text-base leading-relaxed text-[#2A0F14]/80 sm:text-lg">
            The platform keeps NCERT at the center, then layers better navigation, cleaner spacing, and clean, high-yield study resources around it.
          </p>
        </div>

        <div className="w-full lg:col-span-3">
          <AnimatedList>
            {points.map((point) => (
              <Notification key={point.id} point={point} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
