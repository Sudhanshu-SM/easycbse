"use client";

import { useEffect, useRef } from "react";

const notices = [
  "ALWAYS 100% FREE",
  "PURE FOCUS",
  "NO SIGN-UP REQUIRED",
  "NCERT CLASS 1 TO 12",
  "ZERO ADS",
  "CHAPTER BY CHAPTER PDF",
  "BEAUTIFULLY TYPESET",
  "BUILT FOR TOPPERS",
];

function StarIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="shrink-0 text-orange-50/60"
    >
      <path d="M12 2l1.5 6.5L20 9l-5 4.5L16.5 20 12 15.5 7.5 20 9 13.5 4 9l6.5-0.5z" />
    </svg>
  );
}

export default function TopMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !ref.current) return;
    const reduceCheck = (e: MediaQueryListEvent) => {
      if (ref.current) {
        if (e.matches) ref.current.style.animationPlayState = "paused";
        else ref.current.style.animationPlayState = "running";
      }
    };
    mq.addEventListener("change", reduceCheck);
    return () => mq.removeEventListener("change", reduceCheck);
  }, []);

  const items = (
    <>
      {notices.map((text, idx) => (
        <span
          key={idx}
          className="mx-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-50/90"
        >
          <StarIcon />
          {text}
        </span>
      ))}
    </>
  );

  return (
    <div className="z-20 w-full overflow-hidden border-b border-[#2A0F14]/10 bg-[#2A0F14] py-1.5">
      <div
        ref={ref}
        className="flex shrink-0 items-center whitespace-nowrap motion-reduce:animate-none"
        style={{
          animation: "marquee-scroll 40s linear infinite",
        }}
      >
        {items}
        {items}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
