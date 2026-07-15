# On-Page SEO Fixes: Titles, Meta, H1s, Sitemap (Sub-project 1 of 6)

## Context

EasyCBSE (`www.easycbse.com`) is a Next.js 16 static-export site (12 classes,
124 subjects, 1,110 chapters) listing NCERT textbook PDF download links for
CBSE students. An SEO review identified 6 priorities, ranked by
impact/effort. This spec covers the first and fastest: every class/subject
page currently ships the *identical* title and meta description (inherited
unchanged from the root layout), and headings don't carry the full
"CBSE + class + subject" keyword phrase. No sitemap or robots.txt exists at
all, despite the site already being Search-Console-verified
(`public/google71e3854eed7a3404.html`).

The remaining 5 priorities (per-chapter content, new route types like
`/solutions`, sitemap *submission*, backlinks) are separate, larger efforts
and are intentionally out of scope here — see "Deferred" below.

## Scope

**In scope:**
1. Unique, keyword-templated `<title>` and meta description per page
   (home / class / subject).
2. Single keyword-rich `<h1>` per page (currently split across an h1 + a
   separate p tag on the subject page; bare class name only on the class
   page).
3. `app/sitemap.ts` + `app/robots.ts` (code side of item 5).
4. Four low-cost additions that ride along naturally since we're already
   touching these files: `metadataBase` + canonical URLs, `BreadcrumbList`
   JSON-LD (matching the breadcrumb nav that already exists in the UI), and
   a branded `not-found.tsx` (currently falls back to Next's default 404).

**Explicitly out of scope (deferred, see below):** per-chapter content,
new route types, actual Search Console sitemap submission (manual, needs
the site owner's Google login), backlinks, custom Open Graph share image
(no branded image asset exists yet in `public/` — only default
create-next-app placeholder SVGs).

## Approach

New file `lib/seo.ts` exporting `buildClassMetadata(classData)` and
`buildSubjectMetadata(classData, subject)`, each returning a Next.js
`Metadata` object. Both page files call this instead of inlining the title
template, so the brand suffix (`"CBSE Free Download - EasyCBSE"`) lives in
exactly one place — it'll be reused as-is by the `/solutions`,
`/sample-papers` etc. route types planned for sub-project 3.

## Detailed design

### Titles & descriptions

- **Subject page** (`/class/[classId]/[subject]`):
  - Title: `${classData.name} ${subject.name} NCERT Book PDF | CBSE Free Download - EasyCBSE`
    e.g. `Class 10 Mathematics NCERT Book PDF | CBSE Free Download - EasyCBSE`
  - Description: `Download the CBSE ${classData.name} ${subject.name} NCERT textbook PDF for free. Get all ${chapters.length} chapters with direct download links, updated for the latest CBSE syllabus.`
- **Class page** (`/class/[classId]`):
  - Title: `${classData.name} NCERT Books PDF | CBSE Free Download - EasyCBSE`
  - Description: `Download free NCERT textbook PDFs for CBSE ${classData.name}. All ${subjects.length} subjects available with direct chapter-wise download links, updated for the latest CBSE syllabus.`
- **Home page** (root layout default — currently mentions no "CBSE" at all):
  - Title: `CBSE NCERT Books PDF - Free Download Class 1 to 12 | EasyCBSE`
  - Description: `Download free NCERT textbook PDFs for CBSE Class 1 to 12. Access all subjects including Maths, Science, English, Hindi, Social Science and more.`

Verified against real data: Class 9/10's split Social Science subjects are
stored as standalone subjects (`"History"`, `"Political Science"`,
`"Geography"`, `"Economics"`), so titles resolve to e.g. `Class 10 History
NCERT Book PDF | ...` — correct and matches real search patterns, no
special-casing needed.

### H1s

- Subject page: replace `<h1>{subject.name}</h1><p>{classData.name}</p>`
  with one `<h1>CBSE {classData.name} {subject.name} NCERT Book PDF</h1>`
  (the now-redundant `<p>` is removed — its content is folded into the h1).
- Class page: `<h1>{classData.name}</h1>` → `<h1>CBSE {classData.name} NCERT Books</h1>`.
- Home page: `📚 NCERT Books PDF` → `📚 CBSE NCERT Books PDF`.

Text-only changes, no layout/visual restructuring.

### metadataBase + canonical

Root layout gets `metadataBase: new URL('https://www.easycbse.com')`. Both
`generateMetadata` functions add `alternates: { canonical: <absolute path> }`
pointing at their own URL — cheap insurance against duplicate-content
signals if the site is ever reached via an alternate host.

### BreadcrumbList JSON-LD

Both class and subject pages already render a visible breadcrumb nav
(`app/class/[classId]/page.tsx:28-32`, `app/class/[classId]/[subject]/page.tsx:38-44`).
Add a matching `<script type="application/ld+json">` `BreadcrumbList` schema
alongside it, so Google can render breadcrumb rich results.

### Sitemap + robots

`app/sitemap.ts` (static, build-time only — compatible with `output:
'export'`): iterates `classes` from `data/books.ts`, emitting the home page
+ 12 class URLs + 124 subject URLs (137 total, confirmed by direct build
output count — one subject uses `id: "social_science"` with an
underscore, which made an earlier estimate of 125 subjects miss by one)
against
`https://www.easycbse.com`.

`app/robots.ts`: allow all crawlers, point `sitemap` at
`https://www.easycbse.com/sitemap.xml`.

### not-found.tsx

New `app/not-found.tsx`: branded 404 with a friendly message and links back
to the home page and a couple of popular classes, instead of Next's default
blank 404.

## Files touched

- New: `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`
- Edited: `app/layout.tsx`, `app/class/[classId]/page.tsx`,
  `app/class/[classId]/[subject]/page.tsx`

## Verification

- `npm run build` succeeds (static export, so any metadata/sitemap error
  surfaces at build time, not runtime).
- Spot-check generated `out/` HTML for 2-3 routes (home, a class page, a
  subject page): title, meta description, canonical, h1, and JSON-LD are
  all present and correct.
- Open generated `out/sitemap.xml` and `out/robots.txt` and confirm URL
  count and format.
- Run the site locally (`npm run dev`) and visually confirm headings still
  look right (no layout breakage from the h1/p merge).

## Deferred (future sub-projects / ideas)

From the original 6-item list: per-chapter content (150-300 words/chapter),
new route types (`/solutions`, `/sample-papers`, `/syllabus`,
`/previous-year-papers`, `/important-questions`), sitemap submission in
Search Console (manual), backlinks.

Additional ideas raised but not included here: custom Open Graph share
image (needs a real designed asset), FAQ block + `FAQPage` schema per
subject (needs actual content, pairs naturally with sub-project 2), informational
blog/content hub for query types a pure PDF-directory can't capture
("CBSE exam date sheet", "how to prepare for boards"), WhatsApp/share
buttons on subject pages, periodic Lighthouse/PageSpeed pass once traffic
data exists to prioritize against.
