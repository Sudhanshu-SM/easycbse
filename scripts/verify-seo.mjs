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

check("class and subject pages emit BreadcrumbList JSON-LD", () => {
    const classHtml = read("class/10.html");
    assert.match(classHtml, /"@type":"BreadcrumbList"/);
    assert.match(classHtml, /"name":"Class 10"/);

    const subjectHtml = read("class/10/math.html");
    assert.match(subjectHtml, /"@type":"BreadcrumbList"/);
    assert.match(subjectHtml, /"name":"Mathematics"/);
});

check("home, class, and subject H1s carry the full keyword phrase", () => {
    assert.match(read("index.html"), /<h1[^>]*>\s*📚 CBSE NCERT Books PDF/);
    assert.match(read("class/10.html"), /<h1[^>]*>\s*CBSE Class 10 NCERT Books\s*<\/h1>/);
    assert.match(read("class/10/math.html"), /<h1[^>]*>CBSE Class 10 Mathematics NCERT Book PDF<\/h1>/);
});

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
