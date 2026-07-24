"use client";

const svgProps = {
  className: "w-full h-full",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  physics: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" />
    </svg>
  ),
  chemistry: (
    <svg {...svgProps}>
      <path d="M9 2v5.5L4.5 17a2 2 0 0 0 1.5 3h12a2 2 0 0 0 1.5-3L15 7.5V2" />
      <path d="M9 2h6" />
      <line x1="6" y1="14" x2="18" y2="14" />
    </svg>
  ),
  biology: (
    <svg {...svgProps}>
      <path d="M7 4c3 3-3 8 3 10s-3 5 0 6" />
      <path d="M17 4c-3 3 3 8-3 10s3 5 0 6" />
      <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
      <line x1="8.5" y1="13" x2="15.5" y2="13" />
      <line x1="9.5" y1="18" x2="14.5" y2="18" />
    </svg>
  ),
  biotechnology: (
    <svg {...svgProps}>
      <path d="M6 3c2 2-2 6 2 8" />
      <path d="M18 3c-2 2 2 6-2 8" />
      <circle cx="12" cy="16" r="5" />
      <circle cx="12" cy="16" r="2" />
    </svg>
  ),
  math: (
    <svg {...svgProps}>
      <path d="M12 3L3 21h18z" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  computer: (
    <svg {...svgProps}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <line x1="8" y1="8" x2="6" y2="10.5" />
      <line x1="6" y1="10.5" x2="8" y2="13" />
      <line x1="16" y1="8" x2="18" y2="10.5" />
      <line x1="18" y1="10.5" x2="16" y2="13" />
      <line x1="9" y1="19" x2="15" y2="19" />
    </svg>
  ),
  history: (
    <svg {...svgProps}>
      <rect x="5" y="9" width="14" height="12" rx="1" />
      <path d="M7 9V6a5 5 0 0 1 10 0v3" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  geography: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 12c0 3.3 4 5.5 9 5.5s9-2.2 9-5.5" />
      <path d="M3 12c0-3.3 4-5.5 9-5.5s9 2.2 9 5.5" />
    </svg>
  ),
  political: (
    <svg {...svgProps}>
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="4" y1="7" x2="20" y2="7" />
      <path d="M6 7v3a4 4 0 0 0 4 4" />
      <path d="M18 7v3a4 4 0 0 1-4 4" />
      <line x1="12" y1="14" x2="12" y2="21" />
    </svg>
  ),
  economics: (
    <svg {...svgProps}>
      <path d="M3 18l5-7 4 4 9-10" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  ),
  accountancy: (
    <svg {...svgProps}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="12" y1="9" x2="12" y2="20" />
    </svg>
  ),
  psychology: (
    <svg {...svgProps}>
      <path d="M12 3a7 7 0 0 0-7 7v1a4 4 0 0 0 4 4h1" />
      <path d="M12 21a7 7 0 0 0 7-7v-1a4 4 0 0 0-4-4h-1" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  sociology: (
    <svg {...svgProps}>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <line x1="9.5" y1="7.5" x2="7.5" y2="15.5" />
      <line x1="14.5" y1="7.5" x2="16.5" y2="15.5" />
      <line x1="7.5" y1="16.5" x2="16.5" y2="16.5" />
    </svg>
  ),
  english: (
    <svg {...svgProps}>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14.5" />
      <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="10.5" x2="14" y2="10.5" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  ),
  hindi: (
    <svg {...svgProps}>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14.5" />
      <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="10.5" x2="14" y2="10.5" />
      <circle cx="17" cy="10.5" r="1.5" />
    </svg>
  ),
  sanskrit: (
    <svg {...svgProps}>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14.5" />
      <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19" />
      <circle cx="12" cy="9" r="1.8" />
      <circle cx="12" cy="9" r="4.5" />
    </svg>
  ),
  fine_arts: (
    <svg {...svgProps}>
      <path d="M11 4a2 2 0 1 1 2 2v1" />
      <path d="M6 10a2 2 0 1 1 2-2" />
      <path d="M18 8a2 2 0 1 1 0 4" />
      <path d="M4 18a2 2 0 1 0 2-2" />
      <path d="M8 20a2 2 0 1 0 0-4" />
      <path d="M14 16a2 2 0 1 1 4 2" />
      <path d="M12 12v8" />
    </svg>
  ),
  physical_education: (
    <svg {...svgProps}>
      <circle cx="12" cy="6" r="2.5" />
      <path d="M6 22l3-8 3 2 3-8 3 8" />
      <path d="M6 22l-2-6 4-2" />
      <path d="M18 22l2-6-4-2" />
    </svg>
  ),
  evs: (
    <svg {...svgProps}>
      <path d="M12 21s7-4 7-9V6l-7-3-7 3v6c0 5 7 9 7 9z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  ),
  science: (
    <svg {...svgProps}>
      <circle cx="12" cy="6" r="3" />
      <path d="M6 22l6-10 6 10" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  ),
  social_science: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 12c0 3.3 4 5.5 9 5.5s9-2.2 9-5.5" />
      <path d="M3 12c0-3.3 4-5.5 9-5.5s9 2.2 9 5.5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
};

const prefixOrder = [
  "biotechnology", "physical_education", "fine_arts",
  "accountancy", "political", "psychology", "sociology",
  "computer", "economics", "geography", "history",
  "physics", "chemistry", "biology", "science",
  "social_science",
  "sanskrit", "english", "hindi", "math",
  "evs",
];

function findIcon(slug: string): React.ReactNode {
  const normal = slug.toLowerCase().replace(/-/g, "_");
  for (const prefix of prefixOrder) {
    if (normal.startsWith(prefix)) return icons[prefix];
  }
  return icons.english;
}

export default function SubjectIcon({ subjectId, className = "" }: { subjectId: string; className?: string }) {
  return <span className={className}>{findIcon(subjectId)}</span>;
}
