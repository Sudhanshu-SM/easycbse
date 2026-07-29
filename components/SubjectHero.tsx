"use client";

import Link from "next/link";
import Grainient from "@/components/reactbits/Grainient/Grainient";
import NumberTicker from "@/components/magicui/number-ticker";
import TypingAnimation from "@/components/magicui/typing-animation";
import type { ClassData, Subject } from "@/data/books";

const SUBJECT_DESCRIPTIONS: Record<string, string> = {
  "informatics-practices": "Handling data structures, SQL queries, and networking protocols without losing your mind. Make database querying look easy: download the chapters to grab optimized query maps instantly.",
  "computer-science": "Syntax errors everywhere, semicolons missing, and the terminal is crying. Let's fix your code logic fast—download the chapters to secure optimized, bug-free textbook answers right now.",
  "physical-education": "Let's be real—you can't outrun the syllabus. But you can outsmart it: download the chapters and get your theory, fitness plans, and sports rules locked in without breaking a sweat.",
  "political-science": "Understanding how the world actually runs behind the scenes. Demystify the constitutions, policies, and global governance structures: download the chapters to secure precise exam notes.",
  "business-studies": "From management principles to corporate marketing blueprints. It's time to secure the business bag: download the chapters to get optimal answers structured exactly how board checkers want them.",
  biotechnology: "Cells, genes, and lab techniques that sound complicated but actually make total sense when explained right. Download the chapters to clone your grades and ace the exam.",
  psychology: "Mind games, behavior patterns, and the science behind why you're procrastinating right now. Download the chapters and decode the human psyche without the information overload.",
  accountancy: "Debit what comes in, credit what goes out, and pray that the balance sheet finally matches on the first try. Save your mental energy—download the chapters for crystal-clear ledger assets.",
  mathematics: "Numbers are numbering, functions are functioning, and the anxiety is real. Skip the endless scrolls—just download the chapters, grab your formulas, and let's pass this exam together.",
  geography: "From tectonic plate shifts to maps that actually make sense. Stop staring blankly at topography graphs—download the chapters right now and master your physical map layouts easily.",
  economics: "Graphs going up, curves shifting down, and inflation breaking the system. Let's make micro and macro concepts clear: download the chapters immediately to master your charts.",
  chemistry: "Honestly, it's a miracle we haven't blown anything up yet. From balancing reactions to surviving organic naming rules, download the chapters now to get clean, high-scoring notes.",
  "fine-arts": "Creativity meets curriculum. From color theory to sculpture techniques, stop stressing about the practical viva—download the chapters and craft your way to a perfect score.",
  sociology: "Decoding human behavior, social structures, and cultural shifts. It's basically studying society's inner lore. Skip the long-winded paragraphs—download the chapters to get straight-to-the-point context grids.",
  history: "Centuries of pure political drama, empire betrayals, and massive timelines you somehow have to memorize. Make your study time efficient: download the chapters for direct, point-wise summaries.",
  english: "Time to read between lines that don't even exist. Let's make analyzing poetry summaries and letter writing simple: download the chapters to skip the fluff and ace your literature boards.",
  biology: "It's literally a cheat code for understanding how your own body works. Stop guessing diagrams and memorizing long words blindly—download the chapters to unlock pure textbook perfection.",
  physics: "From falling apples to quantum mechanics, the universe is doing a lot right now. Make it make sense: download the chapters instantly and get those numerical sheets sorted out.",
  science: "Where logic meets total chaos. Whether you are dealing with electricity grids or life cycles, don't sweat it. Download the chapters right here and get your absolute basics locked down instantly.",
  sanskrit: "Ancient language, modern syllabus, timeless wisdom. Stop memorizing shlokas without context—download the chapters for clean translations and grammar breakdowns that actually stick.",
  evs: "Trees, ecosystems, pollution, and why your carbon footprint matters. Skip the textbook jargon—download the chapters and get environment notes that actually make you care.",
  hindi: "Grammar rules and deep literature summaries don't have to be intimidating. Get your writing sections and chapter explanations organized flawlessly—download the chapters today.",
  social: "History, geography, and political lore all bundled into one massive reading saga. Keep it moving without getting lost: download the chapters for high-speed notes and clear blueprint summaries.",
};

const DESCRIPTION_FALLBACK = "Level up your study efficiency right now. Skip the boring reading blocks and download the chapters directly to secure your free premium textbook summaries.";

function getSubjectDescription(subjectId: string): string {
  const key = subjectId.toLowerCase().trim().replace(/%20/g, '-').replace(/\s+/g, '-').replace(/_/g, '-');
  if (SUBJECT_DESCRIPTIONS[key]) return SUBJECT_DESCRIPTIONS[key];
  const sorted = Object.keys(SUBJECT_DESCRIPTIONS).sort((a, b) => b.length - a.length);
  for (const prefix of sorted) {
    if (key.startsWith(prefix)) return SUBJECT_DESCRIPTIONS[prefix];
  }
  return DESCRIPTION_FALLBACK;
}

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

export default function SubjectHero({
  classData,
  subject,
}: {
  classData: ClassData;
  subject: Subject;
}) {
  const g = classGradients[classData.id] || classGradients[12];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
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
      <div className="relative z-10 flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <nav className="mb-4 flex items-center gap-2 font-body text-[14px] font-medium tracking-normal text-orange-50/70">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            <Link href={`/class/${classData.id}`} className="transition-colors hover:text-white">{classData.name}</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-white">{subject.name}</span>
          </nav>
          <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
            <span className="sr-only">{`CBSE Class ${classData.id} ${subject.name} NCERT Book PDF — Free Download`}</span>
            <span aria-hidden="true">{subject.name}</span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-body text-[14px] font-medium tracking-normal text-orange-50/90 backdrop-blur-sm">
              <span>Class</span>
              <NumberTicker value={classData.id} className="text-orange-50/90 font-body text-[14px]" />
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-body text-[14px] font-medium tracking-normal text-orange-50/90 backdrop-blur-sm">
              <NumberTicker value={subject.chapters.length} className="text-orange-50/90 font-body text-[14px]" />
              <span>Chapters</span>
            </span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 font-body text-[14px] font-medium tracking-normal text-orange-50/90 backdrop-blur-sm">
              Free PDF
            </span>
          </div>
          <div className="min-h-[48px] max-w-3xl font-body text-base text-white/90 leading-relaxed mt-2">
            <TypingAnimation
              text={getSubjectDescription(subject.id)}
              className="text-left font-body font-normal text-base text-white/95 leading-relaxed"
              duration={18}
            />
          </div>
        </div>
        <div className="shrink-0">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
            <p className="font-body text-[14px] font-medium tracking-normal leading-relaxed text-orange-50/80">
              Get the full {subject.book} textbook in one file
            </p>
            <a
              href={subject.chapters[0]?.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-4 inline-flex flex-col outline-offset-4 select-none touch-manipulation"
            >
              <span className="absolute inset-0 rounded-xl bg-black/10 will-change-transform translate-y-[2px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-active:translate-y-[1px]" />
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E5DEC9] via-[#EAE7DC] to-[#E5DEC9]" />
              <span className="relative block rounded-xl bg-[#FAF9F5] px-6 py-3 font-heading font-semibold text-[#2A0F14] will-change-transform -translate-y-[4px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-[6px] group-active:-translate-y-[2px]">
                Download Full Book
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
