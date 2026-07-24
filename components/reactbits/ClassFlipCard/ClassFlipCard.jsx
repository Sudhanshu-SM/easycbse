import Link from "next/link";
import "./ClassFlipCard.css";

export default function ClassFlipCard({ id, href, subjectCount, stageLabel }) {
  return (
    <Link href={href} className="flip-card block w-full h-full">
      <div className="flip-card-inner">
        <div className={`flip-card-front class-${id}`}>
          <span className="text-2xl font-bold text-white sm:text-3xl">{id}</span>
          <span className="mt-0.5 text-[11px] font-medium text-white/80">Class</span>
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">
            {stageLabel}
          </span>
        </div>
        <div className={`flip-card-back class-${id}`}>
          <span className="text-sm font-bold text-white">
            {subjectCount} Subjects
          </span>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30">
            Browse NCERT
          </span>
        </div>
      </div>
    </Link>
  );
}
