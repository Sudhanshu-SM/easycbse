"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const utilities = [
  {
    id: 1,
    title: "Curriculum Focused",
    desc: "All study materials align directly with the latest board patterns and official chapter flows.",
    color: "bg-[#FFEAD2]",
  },
  {
    id: 2,
    title: "Structured Navigation",
    desc: "Jump directly between classes, subjects, and specific chapters with zero friction or delays.",
    color: "bg-[#E2F0D9]",
  },
  {
    id: 3,
    title: "Integrated Desktop Flow",
    desc: "Keep your textbooks and reference resources visible side-by-side in one single study surface.",
    color: "bg-[#E8DFF5]",
  },
];

export default function StudentUtilities() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { margin: "-100px" });

  return (
    <section className="w-full bg-[#FAF9F5] py-20 px-6 sm:px-12 md:px-20 select-none">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mx-auto mb-14 max-w-3xl text-center">
        <div className="w-full flex justify-center items-center select-none mb-2">
          <p className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased text-center animate-glow-pulse">
            STUDENT UTILITIES
          </p>
        </div>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#2A0F14] sm:text-5xl">
            Built for efficient exam preparation.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-[#2A0F14]/70 sm:text-lg">
            A streamlined environment designed to help students organize, navigate, and master their school curriculum.
          </p>
        </div>
        <motion.div
          ref={gridRef}
          className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 items-stretch"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {utilities.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
            >
              <div
                className={`h-full w-full cursor-pointer rounded-2xl border-2 border-[#2A0F14] p-6 shadow-[4px_4px_0px_#2A0F14] transition-all duration-200 ease-out hover:translate-y-[-4px] active:translate-y-0 sm:p-8 flex flex-col justify-start ${item.color}`}
              >
                <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight text-[#2A0F14]">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#2A0F14]/80 antialiased sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
