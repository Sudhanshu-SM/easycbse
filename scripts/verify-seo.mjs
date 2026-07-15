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
