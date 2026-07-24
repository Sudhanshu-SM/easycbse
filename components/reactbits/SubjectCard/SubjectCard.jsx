"use client";

import Link from "next/link";
import "./SubjectCard.css";

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10" />
    <line x1="12" y1="10" x2="12" y2="10" />
    <line x1="16" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="8" y2="14" />
    <line x1="12" y1="14" x2="12" y2="14" />
    <line x1="16" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="8" y2="18" />
    <line x1="12" y1="18" x2="12" y2="18" />
    <line x1="16" y1="18" x2="16" y2="18" />
  </svg>
);

const MicroscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-5.5" />
    <path d="M12 22a7 7 0 0 1-7-7c0-2 1-4 3-5.5" />
    <path d="M12 22V8" />
    <path d="M8 2h8" />
    <path d="M12 8V2" />
    <path d="M10 18h4" />
  </svg>
);

const AtomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" fill="white" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2h6" />
    <path d="M12 2v6" />
    <path d="M6 12h2" />
    <path d="M16 12h2" />
    <path d="M4.93 22.07A4.5 4.5 0 0 0 8 23h8a4.5 4.5 0 0 0 3.07-1.07" />
    <path d="M18 5c0-1.1-.9-2-2-2H8a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5Z" />
    <path d="M6 21V8" />
    <path d="M18 21V8" />
  </svg>
);

const ICON_MAP = {
  calculator: CalculatorIcon,
  microscope: MicroscopeIcon,
  atom: AtomIcon,
  beaker: BeakerIcon,
};

export default function SubjectCard({ icon, title, subtitle, href, gradient }) {
  const Icon = ICON_MAP[icon];
  const trackerIds = Array.from({ length: 25 }, (_, i) => i + 1);

  if (!Icon) return null;

  return (
    <Link href={href} className="subject-card-link">
      <div className="subject-card noselect">
        <div className="subject-card-canvas">
          {trackerIds.map((id) => (
            <div key={id} className={`tracker tr-${id}`} />
          ))}
          <div className="subject-card-inner" style={{ background: gradient }}>
            <span className="subject-card-prompt-icon">
              <Icon />
            </span>
            <span className="subject-card-small-icon">
              <Icon />
            </span>
            <div className="subject-card-title">{title}</div>
            <div className="subject-card-subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
