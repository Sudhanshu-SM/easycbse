"use client";

import { motion } from "motion/react";

import WhyEasyCBSE from "@/components/why-easycbse";
import StudentUtilities from "@/components/student-utilities";
import HeroSection from "@/components/hero-section";
import StackedFeatureCards from "@/components/stacked-feature-cards";
import SubjectCard from "@/components/reactbits/SubjectCard/SubjectCard";
import Grainient from "@/components/reactbits/Grainient/Grainient";
import FeaturesCircularGallery from "@/components/FeaturesCircularGallery";

const resources = [
  {
    id: 1,
    title: "NCERT Textbooks",
    desc: "Official chapter-wise PDFs for classes 1 to 12.",
    href: "#hero",
    color: "bg-[#FFEAD2]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Popular Subjects",
    desc: "Quick access to high-demand Class 10 and 12 subjects.",
    href: "#notes",
    color: "bg-[#E2F0D9]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Board Prep",
    desc: "A focused path for CBSE-friendly concepts and revision.",
    href: "#papers",
    color: "bg-[#E8DFF5]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

const popularSubjects = [
  { href: "/class/10/math", icon: "calculator", title: "Mathematics", subtitle: "Class 10", gradient: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%)" },
  { href: "/class/10/science", icon: "microscope", title: "Science", subtitle: "Class 10", gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)" },
  { href: "/class/12/physics", icon: "atom", title: "Physics", subtitle: "Class 12", gradient: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)" },
  { href: "/class/12/chemistry", icon: "beaker", title: "Chemistry", subtitle: "Class 12", gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)" },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.45, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-8 md:mb-10 max-w-3xl text-center">
      <h2 className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased mb-4 animate-glow-pulse">
        {eyebrow}
      </h2>
      <h2 className="font-heading text-3xl font-bold leading-tight text-[#2A0F14] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl font-body text-[14px] font-medium tracking-normal leading-relaxed text-[#544145]">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen space-y-16 md:space-y-24">
      <HeroSection />

      <div id="features-flow" />
      <section id="features">
        <FeaturesCircularGallery />
      </section>

      <div id="papers" />
      <WhyEasyCBSE />

      <StudentUtilities />

      <div id="features-stack" />
      <StackedFeatureCards />

      <div id="notes" />
      <section id="resources" className="w-full bg-[#FAF9F5] py-20 px-6 sm:px-12 md:px-20 select-none">
        <div className="mx-auto flex max-w-7xl flex-col">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center">
              <FadeUp>
                <h2 className="text-[#2A0F14] font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased mb-3 animate-glow-pulse">
                  Study Resources
                </h2>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#2A0F14] sm:text-5xl">
                  Resources designed for focused study.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3 items-stretch">
                {resources.map((r) => (
                  <a
                    key={r.id}
                    href={r.href}
                    style={{ cursor: "pointer" }}
                    className={`h-full rounded-2xl border-2 border-[#2A0F14] p-6 shadow-[4px_4px_0px_#2A0F14] transition-all duration-200 ease-out hover:translate-y-[-4px] active:translate-y-0 flex flex-col justify-start ${r.color}`}
                  >
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 border border-[#2A0F14]/15 shadow-[2px_2px_0px_rgba(42,15,20,0.05)]">
                      {r.icon}
                    </span>
                    <h3 className="font-heading text-lg font-extrabold leading-tight tracking-tight text-[#2A0F14]">
                      {r.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[#2A0F14]/80 antialiased">
                      {r.desc}
                    </p>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {popularSubjects.map((subject) => (
                <SubjectCard
                  key={subject.href}
                  icon={subject.icon}
                  title={subject.title}
                  subtitle={subject.subtitle}
                  href={subject.href}
                  gradient={subject.gradient}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl min-h-[280px] md:min-h-[320px]">
              <div className="absolute inset-0 w-full h-full z-0">
                <Grainient
                  color1="#2A0F14"
                  color2="#4A232A"
                  color3="#784F41"
                  grainAmount={0.02}
                  grainScale={1.0}
                  timeSpeed={0.15}
                  contrast={1.2}
                />
              </div>
              <div className="relative z-10 w-full h-full flex flex-col items-center gap-8 p-8 text-center md:flex-row md:justify-between md:p-14 md:text-left">
                <div className="max-w-xl">
                  <h2 className="text-orange-50/70 font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased mb-3 animate-glow-pulse">
                    Start learning
                  </h2>
                  <h2 className="font-heading text-2xl font-bold leading-tight text-white md:text-4xl">
                    Your next textbook is one click away.
                  </h2>
                  <p className="mt-4 font-body text-[14px] font-medium tracking-normal leading-relaxed text-orange-50/80">
                    Choose your class, pick your subject, and start reading. No sign-up, no paywall — just the books you need for board prep.
                  </p>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => {
                      const el = document.getElementById("hero");
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
                    }}
                    style={{ cursor: "pointer" }}
                    className="group relative inline-flex flex-col outline-offset-4 select-none touch-manipulation"
                  >
                    <span className="absolute inset-0 rounded-xl bg-black/10 will-change-transform translate-y-[2px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-active:translate-y-[1px]" style={{ cursor: "pointer" }} />
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E5DEC9] via-[#EAE7DC] to-[#E5DEC9]" style={{ cursor: "pointer" }} />
                    <span className="relative block rounded-xl bg-[#FAF9F5] px-6 py-3 font-heading font-semibold text-[#2A0F14] will-change-transform -translate-y-[4px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-[6px] group-active:-translate-y-[2px]" style={{ cursor: "pointer" }}>
                      Choose Your Class
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
