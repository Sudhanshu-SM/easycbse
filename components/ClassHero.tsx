"use client";

import Link from "next/link";
import Grainient from "@/components/reactbits/Grainient/Grainient";
import NumberTicker from "@/components/magicui/number-ticker";
import TypingAnimation from "@/components/magicui/typing-animation";
import type { ClassData } from "@/data/books";

const CLASS_DESCRIPTIONS: Record<string, string> = {
  "1": "Welcome to the big leagues! Zero thoughts, just crayons, addition blocks, and dodging the afternoon nap time rule. Let's learn to read!",
  "2": "Now that you've mastered survival in the playground grid, it's time to level up your storybook lore and basic math spells. Let's cook.",
  "3": "Moving past single digits and entered the fractions era. Congratulations, you're officially learning things your parents forgot how to do.",
  "4": "Crayons are out, ink pens are in. The stakes have never been higher. Let's secure those cursive loops and division tables without crying.",
  "5": "The absolute bosses of primary school. Time to crush the elementary final boss level and prepare for the chaotic world of middle school.",
  "6": "Welcome to middle school! You suddenly have six different notebooks, a geometry box you don't know how to use, and a whole lot of questions.",
  "7": "Not the youngest anymore, definitely not the oldest. Just vibe-checking your way through algebraic equations and history timelines.",
  "8": "The peak middle school era. Science labs are getting real, grammar rules are personal, and the high school preview chapter is officially unlocking.",
  "9": "Oh, you thought school was easy? Welcome to the ultimate canon event. The graphs are graphing, the definitions are long, but we've got you covered.",
  "10": "The absolute legendary Board Exam year. The entire family is watching, the pressure is real, but these clean PDFs are built to save your internal sanity.",
  "11": "Stream selection happened and reality just hit like a freight train. Whether you're drowning in Integration, Accounts, or Humanities—welcome to the trenches.",
  "12": "The Final Boss fight of school life. Entrances are lurking, boards are coming, and coffee is your only friend. Let's secure the bag and graduate.",
};

const classGradients: Record<number, { color1: string; color2: string; color3: string }> = {
  1:  { color1: "#5B39B9", color2: "#44219C", color3: "#2D1078" },
  2:  { color1: "#D81B60", color2: "#AD1457", color3: "#880E4F" },
  3:  { color1: "#0288D1", color2: "#01579B", color3: "#003C6C" },
  4:  { color1: "#00796B", color2: "#004D40", color3: "#00332A" },
  5:  { color1: "#E64A19", color2: "#BF360C", color3: "#8E2400" },
  6:  { color1: "#6A1B9A", color2: "#4A148C", color3: "#320866" },
  7:  { color1: "#C62828", color2: "#8E1C1C", color3: "#5C0C0C" },
  8:  { color1: "#1565C0", color2: "#0D47A1", color3: "#072B6B" },
  9:  { color1: "#2E7D32", color2: "#1B5E20", color3: "#113D14" },
  10: { color1: "#00838F", color2: "#006064", color3: "#003B3E" },
  11: { color1: "#EF6C00", color2: "#E65100", color3: "#B33E00" },
  12: { color1: "#2A0F14", color2: "#4A232A", color3: "#573C35" },
};

export default function ClassHero({ classData }: { classData: ClassData }) {
  const g = classGradients[classData.id] || classGradients[12];
  const totalChapters = classData.subjects.reduce(
    (sum, s) => sum + s.chapters.length,
    0
  );

  return (
    <div className="relative w-full overflow-hidden rounded-3xl p-10 md:p-14 lg:p-16 mb-12 md:mb-16 flex flex-col items-start justify-center min-h-[340px]">
      <div className="absolute inset-0 z-0">
        <Grainient
          color1={g.color1}
          color2={g.color2}
          color3={g.color3}
          grainAmount={0.02}
          grainScale={1.0}
          timeSpeed={0.12}
          contrast={1.1}
        />
      </div>
      <div className="relative z-10 flex flex-col gap-4 md:gap-5 max-w-2xl text-left">
        <nav className="flex items-center gap-2 font-body text-[14px] font-medium tracking-normal text-white/80">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-white">Class {classData.id}</span>
        </nav>
        <div className="flex items-center gap-2 select-none">
          <p className="text-white font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase antialiased">
            ✦ NCERT Textbooks ✦
          </p>
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl tracking-tight flex items-baseline gap-x-2">
          <span>Class</span>
          <NumberTicker value={classData.id} className="text-white font-extrabold tracking-tight" />
        </h1>
        <div className="min-h-[48px] max-w-2xl font-body font-medium text-[14px] text-white/95 leading-relaxed">
          <TypingAnimation
            text={CLASS_DESCRIPTIONS[classData.id.toString()] || "Access all curated curriculum textbooks and chapter-wise study notes instantly."}
            className="text-left font-body font-medium text-[14px] text-white/95 leading-relaxed"
            duration={20}
          />
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          <span className="inline-flex items-baseline gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[14px] font-medium tracking-normal text-white backdrop-blur-md">
            <NumberTicker value={classData.subjects.length} className="text-white font-medium text-[14px]" />
            <span>Subjects</span>
          </span>
          <span className="inline-flex items-baseline gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[14px] font-medium tracking-normal text-white backdrop-blur-md">
            <NumberTicker value={totalChapters} className="text-white font-medium text-[14px]" />
            <span>Chapter PDFs</span>
          </span>
          <span className="inline-flex items-baseline gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[14px] font-medium tracking-normal text-white backdrop-blur-md">
            <NumberTicker value={100} className="text-white font-medium text-[14px]" />
            <span>% Free</span>
          </span>
        </div>
      </div>
    </div>
  );
}
