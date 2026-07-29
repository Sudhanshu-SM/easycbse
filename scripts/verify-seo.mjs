#!/usr/bin/env node
// Verifies on-page SEO output in the static export (out/). Extend the
// checks below as new pages/signals are added in later tasks.
import { readFileSync, existsSync } from "node:fs";
import { strict as assert } from "node:assert";

const OUT = "out";
const read = (path) => readFileSync(`${OUT}/${path}`, "utf8");

const checks = [];
const check = (name, fn) => checks.push({ name, fn });

// --- checks ---

check("branded 404 page exists", () => {
    const html = read("404.html");
    assert.match(html, /404 - Page Not Found/);
    assert.match(html, /Go to Homepage/);
});

check("sitemap.xml lists all 136 pages", () => {
    const xml = read("sitemap.xml");
    const urlCount = (xml.match(/<url>/g) || []).length;
    assert.equal(urlCount, 136);
    assert.match(xml, /<loc>https:\/\/www\.easycbse\.com<\/loc>/);
});

check("robots.txt allows all crawlers and points to the sitemap", () => {
    const txt = read("robots.txt");
    assert.match(txt, /Allow: \//);
    assert.match(txt, /Sitemap: https:\/\/www\.easycbse\.com\/sitemap\.xml/);
});

check("class and subject pages emit BreadcrumbList JSON-LD", () => {
    const classHtml = read("class/10.html");
    assert.match(classHtml, /"@type":"BreadcrumbList"/);
    assert.match(classHtml, /"name":"Class 10"/);

    const subjectHtml = read("class/10/math.html");
    assert.match(subjectHtml, /"@type":"BreadcrumbList"/);
    assert.match(subjectHtml, /"name":"Mathematics"/);
});

check("home, class, and subject H1s carry the full keyword phrase", () => {
    // Keyword phrase lives in an sr-only span inside each h1; animated
    // visuals are aria-hidden alongside it.
    assert.match(read("index.html"), /<h1[^>]*><span class="sr-only">CBSE NCERT Books PDF — Free Download for Class 1 to 12<\/span>/);
    assert.match(read("class/10.html"), /<h1[^>]*><span class="sr-only">CBSE Class 10 NCERT Books PDF — Free Download, All Subjects<\/span>/);
    assert.match(read("class/10/math.html"), /<h1[^>]*><span class="sr-only">CBSE Class 10 Mathematics NCERT Book PDF — Free Download<\/span>/);
});

check("hero numbers and typed copy are server-rendered (no empty placeholders)", () => {
    const classHtml = read("class/10.html");
    assert.doesNotMatch(classHtml, /Class 0/);
    assert.match(classHtml, /The absolute legendary Board Exam year/);
});

check("home title mentions CBSE", () => {
    const html = read("index.html");
    assert.match(html, /<title>CBSE NCERT Books PDF - Free Download Class 1 to 12 \| EasyCBSE<\/title>/);
});

check("class 10 page has unique title, description, canonical", () => {
    const html = read("class/10.html");
    assert.match(html, /<title>CBSE Class 10 NCERT Books PDF \(Free Download\) — All Subjects \| EasyCBSE<\/title>/);
    assert.match(html, /name="description" content="Download free NCERT textbook PDFs for CBSE Class 10/);
    assert.match(html, /rel="canonical" href="https:\/\/www\.easycbse\.com\/class\/10"/);
});

check("class 10 math page has unique title, description, canonical", () => {
    const html = read("class/10/math.html");
    assert.match(html, /<title>CBSE Class 10 Mathematics NCERT Book PDF \(Free Download\) \| EasyCBSE<\/title>/);
    assert.match(html, /name="description" content="Download the CBSE Class 10 Mathematics NCERT textbook PDF/);
    assert.match(html, /rel="canonical" href="https:\/\/www\.easycbse\.com\/class\/10\/math"/);
});

check("llms.txt exists and lists the full catalog", () => {
    const txt = read("llms.txt");
    assert.match(txt, /^# EasyCBSE/);
    assert.match(txt, /https:\/\/www\.easycbse\.com\/class\/10\b/);
    assert.match(txt, /Class 10 Mathematics/);
    const linkCount = (txt.match(/\]\(https:\/\//g) || []).length;
    assert.ok(linkCount >= 130, `expected >=130 links, got ${linkCount}`);
});

check("class and subject pages have visible FAQs with FAQPage JSON-LD", () => {
    for (const page of ["class/10.html", "class/10/math.html"]) {
        const html = read(page);
        assert.match(html, /"@type":"FAQPage"/);
        assert.match(html, /Frequently Asked Questions/);
        assert.match(html, /free/i);
    }
});

check("og-preview.png exists and pages reference it", () => {
    assert.ok(existsSync(`${OUT}/og-preview.png`), "out/og-preview.png missing");
    assert.match(read("index.html"), /property="og:image"[^>]*og-preview\.png|og-preview\.png[^>]*property="og:image"/);
    assert.match(read("class/10/math.html"), /og-preview\.png/);
});

check("decorative eyebrow labels are not h2 headings", () => {
    assert.doesNotMatch(read("index.html"), /<h2[^>]*>\s*FEATURES ARCHITECTURE/);
    assert.doesNotMatch(read("index.html"), /<h2[^>]*>\s*STUDENT UTILITIES/);
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
