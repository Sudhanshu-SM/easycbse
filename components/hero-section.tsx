"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Highlighter } from "@/registry/magicui/highlighter";
import { classes } from "@/data/books";
import ClassFlipCard from "@/components/reactbits/ClassFlipCard/ClassFlipCard";

const words = ["topper.", "star.", "ranker.", "achiever."];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTypewriterDone, setIsTypewriterDone] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [startWordCycle, setStartWordCycle] = useState(false);

  useEffect(() => {
    if (!startWordCycle) return;
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [startWordCycle]);

  const baseText = "The free library behind every CBSE";
  const typewriterContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035 },
    },
  };
  const letterVariant = {
    hidden: { opacity: 0, display: "inline" },
    visible: { opacity: 1, display: "inline" },
  };

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
  };

  const stageLabel = (id: number) =>
    id <= 5 ? "Primary"
    : id <= 8 ? "Middle"
    : id <= 10 ? "High School"
    : "Senior Secondary";

  return (
    <div id="hero" className="relative min-h-screen w-full bg-[#FAF9F5] flex items-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2a0f1406_1px,transparent_1px),linear-gradient(to_bottom,#2a0f1406_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:gap-12 lg:grid-cols-12 px-6 py-16 md:py-20">
        {/* LEFT COLUMN */}
        <div className="flex w-full max-w-2xl flex-col space-y-5 lg:col-span-7">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl text-[#2A0F14] leading-[1.25] sm:leading-[1.15] tracking-tight">
            <span className="sr-only">CBSE NCERT Books PDF — Free Download for Class 1 to 12</span>
            <motion.span
              aria-hidden="true"
              variants={typewriterContainer}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => setIsTypewriterDone(true)}
              className="font-medium mr-2 sm:mr-3 inline"
            >
              {baseText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {char}
                </motion.span>
              ))}
            </motion.span>

            <span aria-hidden="true" className="inline-block align-middle h-auto">
              <AnimatePresence>
                {isTypewriterDone && (
                  <motion.span
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45, type: "spring", stiffness: 90, damping: 15 }}
                    onAnimationComplete={() => {
                      setTimeout(() => {
                        setShowWord(true);
                        setStartWordCycle(true);
                      }, 500);
                    }}
                    className="inline-flex items-center justify-center bg-[#FFC93C] border-2 border-[#2A0F14] shadow-[3px_3px_0px_#2A0F14] px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1"
                  >
                    <span className="inline-block overflow-hidden relative h-[1.2em] min-w-[70px] sm:min-w-[100px] text-center">
                      <AnimatePresence mode="wait">
                        {showWord && (
                          <motion.span
                            key={currentWord}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 140, damping: 12 }}
                            className="block font-heading font-black text-[#2A0F14]"
                          >
                            {words[currentWord]}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </h1>

          <p className="max-w-xl font-body font-semibold text-[#2A0F14]/90 text-sm sm:text-base md:text-lg leading-relaxed">
            <Highlighter action="highlight" className="font-bold text-[#2A0F14] px-2.5 py-1 rounded-sm" color="#FBBF24">
              Select your class from the grid on the right
            </Highlighter>{" "}
            to instantly access NCERT textbook PDFs, subject modules, and chapterwise materials for{" "}
            <Highlighter action="underline" className="font-bold text-[#2A0F14]" color="#2563EB">
              Classes 1 to 12
            </Highlighter>
            . No distractions, no paywalls — pure ad-free study focus.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={() => smoothScroll("features-stack")}
              style={{ cursor: "pointer" }}
              className="group relative inline-block select-none focus:outline-none rounded-lg hover:-translate-y-[2px] active:translate-y-0 transition-transform duration-150"
            >
              <span className="absolute inset-0 h-full w-full translate-y-[7px] rounded-lg border-2 border-[#2A0F14] bg-white shadow-[0_6px_0_rgba(42,15,20,0.15)]" style={{ cursor: "pointer" }} />
              <span className="relative block translate-y-0 rounded-lg border-2 border-[#2A0F14] bg-[#2A0F14] px-8 py-3 text-base font-bold tracking-wide text-[#FAF9F5] font-heading transition-transform duration-75 ease-out group-hover:translate-y-[2px] group-active:translate-y-[7px] flex items-center gap-2" style={{ cursor: "pointer" }}>
                <span>Why EasyCBSE</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-75 group-hover:translate-x-0.5"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            <div className="uiverse-btn-wrap">
              <button
                onClick={() => smoothScroll("features-flow")}
                style={{ cursor: "pointer" }}
                className="animated-button relative flex items-center gap-1 overflow-hidden border-4 border-transparent bg-transparent px-9 py-4 text-base font-semibold text-[#2A0F14] shadow-[0_0_0_2px_#2A0F14] active:scale-95 rounded-[26px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2 absolute w-6 fill-[#2A0F14]" style={{ zIndex: 9 }} viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text relative z-[1]">
                  Explore Features
                </span>
                <span className="circle pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF922B] opacity-0" style={{ width: "20px", height: "20px" }} />
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1 absolute w-6 fill-[#2A0F14]" style={{ zIndex: 9 }} viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
              <style>{`
                .uiverse-btn-wrap .animated-button {
                  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .uiverse-btn-wrap .animated-button .arr-1 {
                  right: 16px;
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .uiverse-btn-wrap .animated-button .arr-2 {
                  left: -25%;
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .uiverse-btn-wrap .animated-button .text {
                  transform: translateX(-12px);
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .uiverse-btn-wrap .animated-button .circle {
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .uiverse-btn-wrap .animated-button:hover {
                  box-shadow: 0 0 0 12px transparent;
                  border-radius: 12px;
                }
                .uiverse-btn-wrap .animated-button:hover .arr-1 {
                  right: -25%;
                }
                .uiverse-btn-wrap .animated-button:hover .arr-2 {
                  left: 16px;
                }
                .uiverse-btn-wrap .animated-button:hover .text {
                  transform: translateX(12px);
                }
                .uiverse-btn-wrap .animated-button:hover .circle {
                  width: 220px !important;
                  height: 220px !important;
                  opacity: 1;
                }
                .uiverse-btn-wrap .animated-button:active {
                  scale: 0.95;
                  box-shadow: 0 0 0 4px #FF922B;
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 5/12 — CLASS GRID */}
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={isTypewriterDone ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 80, damping: 14 }}
          className="flex w-full flex-col lg:col-span-5 h-auto"
        >
          <div className="grid grid-cols-3 gap-2 w-full">
            {classes.map((classData) => (
              <div key={classData.id} className="aspect-[3/2] w-full">
                <ClassFlipCard
                  id={classData.id}
                  href={`/class/${classData.id}`}
                  subjectCount={classData.subjects.length}
                  stageLabel={stageLabel(classData.id)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
