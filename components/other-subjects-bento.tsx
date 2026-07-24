"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const subjects = [
  {
    title: "Mathematics",
    chapters: 15,
    colSpan: "md:col-span-3 md:row-span-2",
    hoverColor: "hover:bg-[#FFEAD2]",
    description: "Algebra, Geometry, Trigonometry, Calculus & more — complete chapter-wise coverage for Classes 10–12 board curriculum.",
  },
  {
    title: "Physics",
    chapters: 12,
    colSpan: "md:col-span-2 md:row-span-1",
    hoverColor: "hover:bg-[#E2F0D9]",
    description: "Mechanics, Thermodynamics, Optics, Electromagnetism — conceptual clarity with solved numericals.",
  },
  {
    title: "Chemistry",
    chapters: 10,
    colSpan: "md:col-span-2 md:row-span-1",
    hoverColor: "hover:bg-[#E8DFF5]",
    description: "Physical, Organic & Inorganic Chemistry — reaction mechanisms, periodic trends & practice problems.",
  },
  {
    title: "Biology",
    chapters: 16,
    colSpan: "md:col-span-5 md:row-span-1",
    hoverColor: "hover:bg-[#D8F3DC]",
    description: "Genetics, Ecology, Human Physiology, Biotechnology — illustrated diagrams and NCERT-aligned revision notes.",
  },
];

export default function OtherSubjectsBento() {
  return (
    <section className="w-full bg-[#FAF9F5] py-20 px-6 sm:px-12 md:px-20 select-none">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-[#2A0F14]/60">
            OTHER SUBJECTS
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#2A0F14] sm:text-5xl">
            Core subjects, structured simply.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-[#2A0F14]/70 sm:text-lg">
            Hover over any card to preview the subject scope and chapter count.
          </p>
        </div>

        <BentoGrid>
          {subjects.map((subject) => (
            <BentoCard
              key={subject.title}
              colSpan={subject.colSpan}
              hoverColor={subject.hoverColor}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight text-[#2A0F14]">
                    {subject.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-[#2A0F14]/80 antialiased">
                    {subject.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#2A0F14]/50">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#2A0F14]/20" />
                  {subject.chapters} Chapters
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
