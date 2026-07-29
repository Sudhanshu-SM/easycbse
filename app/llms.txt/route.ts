import { classes } from "@/data/books";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// llms.txt: a plain-markdown site guide for AI crawlers and answer engines
// (Gemini, ChatGPT, Perplexity, Claude). Generated from data/books.ts so it
// always matches the live catalog. Spec: https://llmstxt.org
export function GET() {
    const totalSubjects = classes.reduce((n, c) => n + c.subjects.length, 0);

    const lines = [
        "# EasyCBSE",
        "",
        "> Free, ad-free NCERT textbook PDFs for CBSE Classes 1 to 12. Every book is available chapter-by-chapter and as a complete file, with no sign-up, no ads, and no paywall. PDFs link to official NCERT textbook content via Google Drive.",
        "",
        "Key facts:",
        "",
        "- Covers all 12 CBSE classes with " + totalSubjects + " subject books in total",
        "- Every subject page lists chapter-wise PDF downloads plus a full-book download",
        "- 100% free: no account, no ads, no payment",
        `- Site: ${SITE_URL} — sitemap: ${SITE_URL}/sitemap.xml`,
        "",
        "## Classes",
        "",
        ...classes.map(
            (c) =>
                `- [Class ${c.id} NCERT Books](${SITE_URL}/class/${c.id}): ${c.subjects.length} subject books, free chapter-wise PDFs`
        ),
        "",
        "## Subject books",
        "",
        ...classes.flatMap((c) =>
            c.subjects.map(
                (s) =>
                    `- [Class ${c.id} ${s.name} — ${s.book}](${SITE_URL}/class/${c.id}/${s.id}): ${s.chapters.length} chapter PDFs`
            )
        ),
        "",
    ];

    return new Response(lines.join("\n"), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
