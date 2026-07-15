# On-Page SEO Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every page a unique, keyword-templated title/description/canonical, a keyword-rich H1, BreadcrumbList structured data, a sitemap + robots.txt, and a branded 404 — replacing the single generic `<title>`/description currently reused on all 137 pages.

**Architecture:** A new `lib/seo.ts` holds pure metadata-building functions (`buildClassMetadata`, `buildSubjectMetadata`, `breadcrumbJsonLd`, `absoluteUrl`, `SITE_URL`) consumed by `generateMetadata` exports added to the two dynamic route pages, by two new files (`app/sitemap.ts`, `app/robots.ts`), and by inline JSON-LD `<script>` tags. A single verification script (`scripts/verify-seo.mjs`) grows across tasks, asserting against the actual static-export HTML in `out/` after each `npm run build` — there's no test framework in this repo today, and this is Node-built-in-only (`node:fs`, `node:assert`), so it adds zero dependencies.

**Tech Stack:** Next.js 16.1.6 (App Router, `output: 'export'`), React 19.2.3, TypeScript, plain Node ESM script for verification.

## Global Constraints

- Site is static-export only (`next.config.ts:3`, `output: 'export'`) — every new file must be buildable at compile time with no request-time APIs, no server actions, no route handlers.
- Canonical domain: `https://www.easycbse.com` (from `CNAME:1`) — defined once as `SITE_URL` in `lib/seo.ts`, never hardcoded elsewhere.
- Title brand suffix is exactly the string `CBSE Free Download - EasyCBSE` (approved in `docs/superpowers/specs/2026-07-15-onpage-seo-fixes-design.md`) — copy verbatim, do not rephrase.
- No new npm dependencies. Verification uses only Node built-ins.
- Match each edited file's existing formatting: `app/class/[classId]/page.tsx` and `app/class/[classId]/[subject]/page.tsx` use 4-space indentation; `app/layout.tsx` and `app/page.tsx` use 2-space indentation. Don't reformat unrelated lines.
- Confirmed static-export output paths (verified via an actual `npm run build` on the unmodified codebase): home → `out/index.html`, class page → `out/class/{id}.html`, subject page → `out/class/{id}/{subject}.html`, 404 → `out/404.html`.
- Confirmed page counts (verified by direct filesystem count on the build output, which disagreed with an earlier estimate of 125 — one subject uses `id: "social_science"` with an underscore, an outlier easy to undercount with a naive regex): exactly **12** class pages and **124** subject pages, so **137** total sitemap entries (1 home + 12 + 124).
- Confirmed baseline bug (via `grep` on the pre-change build output): `out/class/10/math.html` currently contains `<title>NCERT Books PDF - Free Download Class 1 to 12</title>` — the same generic title as every other page. This is what each task's checks move away from.

---

### Task 1: SEO metadata helper + dynamic titles/descriptions/canonical

**Files:**
- Create: `lib/seo.ts`
- Create: `scripts/verify-seo.mjs`
- Modify: `package.json` (add `verify:seo` script)
- Modify: `app/layout.tsx`
- Modify: `app/class/[classId]/page.tsx`
- Modify: `app/class/[classId]/[subject]/page.tsx`

**Interfaces:**
- Produces: `SITE_URL: string`, `absoluteUrl(path: string): string`, `buildClassMetadata(classData: ClassData): Metadata`, `buildSubjectMetadata(classData: ClassData, subject: Subject): Metadata` — all exported from `lib/seo.ts`. `ClassData`/`Subject` types come from `@/data/books` (already exported there).
- Consumes: `getClassById`, `getSubject` from `@/data/books` (already exist, unchanged).

- [ ] **Step 1: Write the initial verification script**

Create `scripts/verify-seo.mjs`:

```js
#!/usr/bin/env node
// Verifies on-page SEO output in the static export (out/). Extend the
// checks below as new pages/signals are added in later tasks.
import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const OUT = "out";
const read = (path) => readFileSync(`${OUT}/${path}`, "utf8");

const checks = [];
const check = (name, fn) => checks.push({ name, fn });

// --- checks ---

check("home title mentions CBSE", () => {
    const html = read("index.html");
    assert.match(html, /<title>CBSE NCERT Books PDF - Free Download Class 1 to 12 \| EasyCBSE<\/title>/);
});

check("class 10 page has unique title, description, canonical", () => {
    const html = read("class/10.html");
    assert.match(html, /<title>Class 10 NCERT Books PDF \| CBSE Free Download - EasyCBSE<\/title>/);
    assert.match(html, /name="description" content="Download free NCERT textbook PDFs for CBSE Class 10\./);
    assert.match(html, /rel="canonical" href="https:\/\/www\.easycbse\.com\/class\/10"/);
});

check("class 10 math page has unique title, description, canonical", () => {
    const html = read("class/10/math.html");
    assert.match(html, /<title>Class 10 Mathematics NCERT Book PDF \| CBSE Free Download - EasyCBSE<\/title>/);
    assert.match(html, /name="description" content="Download the CBSE Class 10 Mathematics NCERT textbook PDF/);
    assert.match(html, /rel="canonical" href="https:\/\/www\.easycbse\.com\/class\/10\/math"/);
});

// --- run ---
let failed = 0;
for (const { name, fn } of checks) {
    try {
        fn();
        console.log(`PASS  ${name}`);
    } catch (err) {
        failed++;
        console.log(`FAIL  ${name}`);
        console.log(`      ${err.message}`);
    }
}

console.log(`\n${checks.length - failed}/${checks.length} passed`);
if (failed > 0) process.exit(1);
```

- [ ] **Step 2: Add the `verify:seo` npm script**

In `package.json`, change:

```json
    "lint": "eslint"
  },
```

to:

```json
    "lint": "eslint",
    "verify:seo": "node scripts/verify-seo.mjs"
  },
```

- [ ] **Step 3: Run the build and verify script, confirm it FAILS (red)**

Run: `npm run build && npm run verify:seo`
Expected: the build succeeds (it's unmodified so far), then all 3 checks print `FAIL` (current titles are all the generic layout default), and the process exits non-zero with `0/3 passed`.

- [ ] **Step 4: Create the metadata helper**

Create `lib/seo.ts`:

```ts
import type { Metadata } from "next";
import type { ClassData, Subject } from "@/data/books";

export const SITE_URL = "https://www.easycbse.com";
const BRAND_SUFFIX = "CBSE Free Download - EasyCBSE";

export function absoluteUrl(path: string): string {
    return `${SITE_URL}${path}`;
}

export function buildClassMetadata(classData: ClassData): Metadata {
    const title = `${classData.name} NCERT Books PDF | ${BRAND_SUFFIX}`;
    const description = `Download free NCERT textbook PDFs for CBSE ${classData.name}. All ${classData.subjects.length} subjects available with direct chapter-wise download links, updated for the latest CBSE syllabus.`;

    return {
        title,
        description,
        alternates: { canonical: absoluteUrl(`/class/${classData.id}`) },
    };
}

export function buildSubjectMetadata(classData: ClassData, subject: Subject): Metadata {
    const title = `${classData.name} ${subject.name} NCERT Book PDF | ${BRAND_SUFFIX}`;
    const description = `Download the CBSE ${classData.name} ${subject.name} NCERT textbook PDF for free. Get all ${subject.chapters.length} chapters with direct download links, updated for the latest CBSE syllabus.`;

    return {
        title,
        description,
        alternates: { canonical: absoluteUrl(`/class/${classData.id}/${subject.id}`) },
    };
}
```

- [ ] **Step 5: Wire metadata into the root layout**

In `app/layout.tsx`, change:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NCERT Books PDF - Free Download Class 1 to 12",
  description: "Download free NCERT textbook PDFs for Class 1 to 12. Access all subjects including Maths, Science, English, Hindi, Social Science and more.",
  keywords: "NCERT, PDF, textbooks, Class 1-12, free download, CBSE, education, India",
};
```

to:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CBSE NCERT Books PDF - Free Download Class 1 to 12 | EasyCBSE",
  description: "Download free NCERT textbook PDFs for CBSE Class 1 to 12. Access all subjects including Maths, Science, English, Hindi, Social Science and more.",
  keywords: "NCERT, PDF, textbooks, Class 1-12, free download, CBSE, education, India",
  alternates: { canonical: SITE_URL },
};
```

- [ ] **Step 6: Wire `generateMetadata` into the class page**

In `app/class/[classId]/page.tsx`, change:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { classes, getClassById } from "@/data/books";

// Generate static paths for all classes
export function generateStaticParams() {
    return classes.map((c) => ({
        classId: c.id.toString(),
    }));
}

interface PageProps {
    params: Promise<{ classId: string }>;
}

export default async function ClassPage({ params }: PageProps) {
```

to:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classes, getClassById } from "@/data/books";
import { buildClassMetadata } from "@/lib/seo";

// Generate static paths for all classes
export function generateStaticParams() {
    return classes.map((c) => ({
        classId: c.id.toString(),
    }));
}

interface PageProps {
    params: Promise<{ classId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { classId } = await params;
    const classData = getClassById(parseInt(classId));
    if (!classData) return {};
    return buildClassMetadata(classData);
}

export default async function ClassPage({ params }: PageProps) {
```

- [ ] **Step 7: Wire `generateMetadata` into the subject page**

In `app/class/[classId]/[subject]/page.tsx`, change:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { classes, getClassById, getSubject } from "@/data/books";

// Generate static paths for all class/subject combinations
export function generateStaticParams() {
    const paths: { classId: string; subject: string }[] = [];

    for (const classData of classes) {
        for (const subject of classData.subjects) {
            paths.push({
                classId: classData.id.toString(),
                subject: subject.id,
            });
        }
    }

    return paths;
}

interface PageProps {
    params: Promise<{ classId: string; subject: string }>;
}

export default async function SubjectPage({ params }: PageProps) {
```

to:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classes, getClassById, getSubject } from "@/data/books";
import { buildSubjectMetadata } from "@/lib/seo";

// Generate static paths for all class/subject combinations
export function generateStaticParams() {
    const paths: { classId: string; subject: string }[] = [];

    for (const classData of classes) {
        for (const subject of classData.subjects) {
            paths.push({
                classId: classData.id.toString(),
                subject: subject.id,
            });
        }
    }

    return paths;
}

interface PageProps {
    params: Promise<{ classId: string; subject: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { classId, subject: subjectId } = await params;
    const classData = getClassById(parseInt(classId));
    const subject = classData ? getSubject(parseInt(classId), subjectId) : undefined;
    if (!classData || !subject) return {};
    return buildSubjectMetadata(classData, subject);
}

export default async function SubjectPage({ params }: PageProps) {
```

- [ ] **Step 8: Run the build and verify script, confirm it PASSES (green)**

Run: `npm run build && npm run verify:seo`
Expected: build succeeds, all 3 checks print `PASS`, final line `3/3 passed`.

- [ ] **Step 9: Commit**

```bash
git add lib/seo.ts scripts/verify-seo.mjs package.json app/layout.tsx "app/class/[classId]/page.tsx" "app/class/[classId]/[subject]/page.tsx"
git commit -m "Add dynamic per-page titles, meta descriptions, and canonical URLs"
```

---

### Task 2: Keyword-rich H1s

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/class/[classId]/page.tsx`
- Modify: `app/class/[classId]/[subject]/page.tsx`
- Modify: `scripts/verify-seo.mjs`

**Interfaces:**
- Consumes: nothing new — pure JSX text changes in already-open files.

- [ ] **Step 1: Extend the verification script (red)**

In `scripts/verify-seo.mjs`, change:

```js
// --- checks ---

check("home title mentions CBSE", () => {
```

to:

```js
// --- checks ---

check("home, class, and subject H1s carry the full keyword phrase", () => {
    assert.match(read("index.html"), /<h1[^>]*>\s*📚 CBSE NCERT Books PDF/);
    assert.match(read("class/10.html"), /<h1[^>]*>\s*CBSE Class 10 NCERT Books\s*<\/h1>/);
    assert.match(read("class/10/math.html"), /<h1[^>]*>CBSE Class 10 Mathematics NCERT Book PDF<\/h1>/);
});

check("home title mentions CBSE", () => {
```

Run: `npm run build && npm run verify:seo`
Expected: the new H1 check prints `FAIL` (current H1s don't have this text yet); the 3 title/description checks from Task 1 still print `PASS`. Final line `3/4 passed`.

- [ ] **Step 2: Update the home page H1**

In `app/page.tsx`, change:

```tsx
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            📚 NCERT Books PDF
          </h1>
```

to:

```tsx
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            📚 CBSE NCERT Books PDF
          </h1>
```

- [ ] **Step 3: Update the class page H1**

In `app/class/[classId]/page.tsx`, change:

```tsx
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        {classData.name}
                    </h1>
```

to:

```tsx
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        CBSE {classData.name} NCERT Books
                    </h1>
```

- [ ] **Step 4: Update the subject page H1 and drop the now-redundant class-name line**

In `app/class/[classId]/[subject]/page.tsx`, change:

```tsx
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">{subject.name}</h1>
                            <p className="text-text-secondary">{classData.name}</p>
                        </div>
```

to:

```tsx
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">CBSE {classData.name} {subject.name} NCERT Book PDF</h1>
                        </div>
```

- [ ] **Step 5: Run the build and verify script, confirm it PASSES (green)**

Run: `npm run build && npm run verify:seo`
Expected: all 4 checks print `PASS`, final line `4/4 passed`.

- [ ] **Step 6: Manually confirm no layout breakage**

Run: `npm run dev`, then open `http://localhost:3000`, `http://localhost:3000/class/10`, and `http://localhost:3000/class/10/math` in a browser. Confirm the header sections still look visually correct (no overlapping text, no leftover empty gap where the removed `<p>` used to be). Stop the dev server when done.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx "app/class/[classId]/page.tsx" "app/class/[classId]/[subject]/page.tsx" scripts/verify-seo.mjs
git commit -m "Add CBSE + class + subject keyword phrase to page H1s"
```

---

### Task 3: BreadcrumbList structured data

**Files:**
- Modify: `lib/seo.ts` (add `breadcrumbJsonLd`)
- Modify: `app/class/[classId]/page.tsx`
- Modify: `app/class/[classId]/[subject]/page.tsx`
- Modify: `scripts/verify-seo.mjs`

**Interfaces:**
- Produces: `breadcrumbJsonLd(items: { name: string; url: string }[]): object` from `lib/seo.ts`.
- Consumes: `absoluteUrl` (from Task 1, same file).

- [ ] **Step 1: Extend the verification script (red)**

In `scripts/verify-seo.mjs`, change:

```js
// --- checks ---

check("home, class, and subject H1s carry the full keyword phrase", () => {
```

to:

```js
// --- checks ---

check("class and subject pages emit BreadcrumbList JSON-LD", () => {
    const classHtml = read("class/10.html");
    assert.match(classHtml, /"@type":"BreadcrumbList"/);
    assert.match(classHtml, /"name":"Class 10"/);

    const subjectHtml = read("class/10/math.html");
    assert.match(subjectHtml, /"@type":"BreadcrumbList"/);
    assert.match(subjectHtml, /"name":"Mathematics"/);
});

check("home, class, and subject H1s carry the full keyword phrase", () => {
```

Run: `npm run build && npm run verify:seo`
Expected: the new JSON-LD check prints `FAIL` (no structured data exists yet). Final line `4/5 passed`.

- [ ] **Step 2: Add the breadcrumb builder to the helper module**

In `lib/seo.ts`, add this export at the end of the file:

```ts

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
```

- [ ] **Step 3: Add the JSON-LD script tag to the class page**

In `app/class/[classId]/page.tsx`, change:

```tsx
import { buildClassMetadata } from "@/lib/seo";
```

to:

```tsx
import { absoluteUrl, breadcrumbJsonLd, buildClassMetadata } from "@/lib/seo";
```

Then change:

```tsx
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
```

to:

```tsx
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: absoluteUrl("/") },
        { name: classData.name, url: absoluteUrl(`/class/${classData.id}`) },
    ]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
                />
                {/* Breadcrumb */}
                <nav className="breadcrumb">
```

- [ ] **Step 4: Add the JSON-LD script tag to the subject page**

In `app/class/[classId]/[subject]/page.tsx`, change:

```tsx
import { buildSubjectMetadata } from "@/lib/seo";
```

to:

```tsx
import { absoluteUrl, breadcrumbJsonLd, buildSubjectMetadata } from "@/lib/seo";
```

Then change:

```tsx
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
```

to:

```tsx
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: absoluteUrl("/") },
        { name: classData.name, url: absoluteUrl(`/class/${classData.id}`) },
        { name: subject.name, url: absoluteUrl(`/class/${classData.id}/${subject.id}`) },
    ]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
                />
                {/* Breadcrumb */}
                <nav className="breadcrumb">
```

- [ ] **Step 5: Run the build and verify script, confirm it PASSES (green)**

Run: `npm run build && npm run verify:seo`
Expected: all 5 checks print `PASS`, final line `5/5 passed`.

- [ ] **Step 6: Commit**

```bash
git add lib/seo.ts "app/class/[classId]/page.tsx" "app/class/[classId]/[subject]/page.tsx" scripts/verify-seo.mjs
git commit -m "Add BreadcrumbList structured data to class and subject pages"
```

---

### Task 4: Sitemap + robots.txt

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `scripts/verify-seo.mjs`

**Interfaces:**
- Consumes: `SITE_URL` from `@/lib/seo` (Task 1), `classes` from `@/data/books`.

- [ ] **Step 1: Extend the verification script (red)**

In `scripts/verify-seo.mjs`, change:

```js
// --- checks ---

check("class and subject pages emit BreadcrumbList JSON-LD", () => {
```

to:

```js
// --- checks ---

check("sitemap.xml lists all 137 pages", () => {
    const xml = read("sitemap.xml");
    const urlCount = (xml.match(/<url>/g) || []).length;
    assert.equal(urlCount, 137);
    assert.match(xml, /<loc>https:\/\/www\.easycbse\.com<\/loc>/);
});

check("robots.txt allows all crawlers and points to the sitemap", () => {
    const txt = read("robots.txt");
    assert.match(txt, /Allow: \//);
    assert.match(txt, /Sitemap: https:\/\/www\.easycbse\.com\/sitemap\.xml/);
});

check("class and subject pages emit BreadcrumbList JSON-LD", () => {
```

Run: `npm run build && npm run verify:seo`
Expected: the 2 new checks print `FAIL` with a "no such file" error (`out/sitemap.xml`/`out/robots.txt` don't exist yet). Final line `5/7 passed`.

- [ ] **Step 2: Create the sitemap**

Create `app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { classes } from "@/data/books";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [
        { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ];

    for (const classData of classes) {
        entries.push({
            url: `${SITE_URL}/class/${classData.id}`,
            changeFrequency: "monthly",
            priority: 0.8,
        });

        for (const subject of classData.subjects) {
            entries.push({
                url: `${SITE_URL}/class/${classData.id}/${subject.id}`,
                changeFrequency: "monthly",
                priority: 0.7,
            });
        }
    }

    return entries;
}
```

- [ ] **Step 3: Create robots.txt**

Create `app/robots.ts`:

```ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
```

- [ ] **Step 4: Run the build and verify script, confirm it PASSES (green)**

Run: `npm run build && npm run verify:seo`
Expected: all 7 checks print `PASS`, final line `7/7 passed`. If the URL count check fails, run `grep -c '<url>' out/sitemap.xml` and compare against `1 + 12 + (sum of every class's subjects.length)` to find which class/subject is missing.

- [ ] **Step 5: Commit**

```bash
git add app/sitemap.ts app/robots.ts scripts/verify-seo.mjs
git commit -m "Add sitemap.xml and robots.txt"
```

---

### Task 5: Branded 404 page

**Files:**
- Create: `app/not-found.tsx`
- Modify: `scripts/verify-seo.mjs`

**Interfaces:**
- None — self-contained page component, reuses the existing `.download-btn` CSS class from `app/globals.css:130`.

- [ ] **Step 1: Extend the verification script (red)**

In `scripts/verify-seo.mjs`, change:

```js
// --- checks ---

check("sitemap.xml lists all 137 pages", () => {
```

to:

```js
// --- checks ---

check("branded 404 page exists", () => {
    const html = read("404.html");
    assert.match(html, /404 - Page Not Found/);
    assert.match(html, /Go to Homepage/);
});

check("sitemap.xml lists all 137 pages", () => {
```

Run: `npm run build && npm run verify:seo`
Expected: the new check prints `FAIL` (Next's default 404 doesn't have this text). Final line `7/8 passed`.

- [ ] **Step 2: Create the branded 404 page**

Create `app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center py-16">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-text-secondary mb-8">
                    We couldn&apos;t find that page. It may have moved, or the link might be incorrect.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="download-btn">Go to Homepage</Link>
                    <Link href="/class/10" className="download-btn">Class 10 Books</Link>
                    <Link href="/class/12" className="download-btn">Class 12 Books</Link>
                </div>
            </div>
        </div>
    );
}
```

- [ ] **Step 3: Run the build and verify script, confirm it PASSES (green)**

Run: `npm run build && npm run verify:seo`
Expected: all 8 checks print `PASS`, final line `8/8 passed`.

- [ ] **Step 4: Manually confirm the 404 renders correctly**

Run: `npm run dev`, open `http://localhost:3000/this-page-does-not-exist`, confirm the branded 404 page renders instead of a blank/default page. Stop the dev server when done.

- [ ] **Step 5: Commit**

```bash
git add app/not-found.tsx scripts/verify-seo.mjs
git commit -m "Add branded 404 page"
```

---

## After all 5 tasks

All 6 files from the design's "Files touched" list exist and are wired up, `npm run verify:seo` has 8/8 passing checks, and `npm run build` produces a clean static export. Remaining work from the original 6-priority list (chapter content, new route types, Search Console submission, backlinks) is out of scope for this plan — see the "Deferred" section of the design doc.
