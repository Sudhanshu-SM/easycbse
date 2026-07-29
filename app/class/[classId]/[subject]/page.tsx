import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classes, getClassById, getSubject } from "@/data/books";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import SubjectIcon from "@/components/SubjectIcon";
import SubjectHero from "@/components/SubjectHero";
import FaqSection from "@/components/FaqSection";
import ChapterDownloadButton from "@/components/ChapterDownloadButton";
import BlurFade from "@/components/magicui/blur-fade";
import TypingWithCursor from "@/components/magicui/typing-with-cursor";
import NumberTicker from "@/components/magicui/number-ticker";
import type { Subject } from "@/data/books";

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

const siteUrl = "https://www.easycbse.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { classId, subject: subjectId } = await params;
    const classData = getClassById(parseInt(classId));
    const subject = getSubject(parseInt(classId), subjectId);
    if (!classData || !subject) return {};

    const title = `CBSE Class ${classData.id} ${subject.name} NCERT Book PDF (Free Download)`;
    const canonical = `${siteUrl}/class/${classData.id}/${subject.id}`;

    return {
        title,
        description: `Download the CBSE Class ${classData.id} ${subject.name} NCERT textbook PDF for free. ${subject.book} — all ${subject.chapters.length} chapters, ad-free, no sign-up required.`,
        alternates: { canonical },
        openGraph: {
            title,
            description: `Download the CBSE Class ${classData.id} ${subject.name} NCERT textbook PDF for free. ${subject.book} — ad-free, no sign-up.`,
            url: `/class/${classData.id}/${subject.id}`,
            images: [{ url: "/og-preview.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: `Download the free CBSE Class ${classData.id} ${subject.name} NCERT PDF. ${subject.book} — ad-free, instant download.`,
            images: ["/og-preview.png"],
        },
    };
}

interface PageProps {
    params: Promise<{ classId: string; subject: string }>;
}

const coreSubjectNames = new Set([
    "English", "Hindi", "Mathematics", "Math", "Science",
    "Physics", "Chemistry", "Biology",
    "Social Science", "History", "Geography", "Political Science", "Economics",
    "EVS",
]);

function isCoreSubject(name: string): boolean {
    return coreSubjectNames.has(name);
}

const fallbackPastels = [
    "hover:bg-[#FFEAD2]",
    "hover:bg-[#E2F0D9]",
    "hover:bg-[#E8DFF5]",
    "hover:bg-[#D8F3DC]",
    "hover:bg-[#FCF6BD]",
    "hover:bg-[#F3C4FB]",
];

interface SubjectGroup {
    name: string;
    icon: string;
    ids: string[];
    books: string;
    totalChapters: number;
}

function deduplicateSubjects(subjects: Subject[]): SubjectGroup[] {
    const groups = new Map<string, { name: string; icon: string; ids: string[]; books: string[]; totalChapters: number }>();

    for (const s of subjects) {
        const existing = groups.get(s.name);
        if (existing) {
            existing.ids.push(s.id);
            existing.books.push(s.book);
            existing.totalChapters += s.chapters.length;
        } else {
            groups.set(s.name, {
                name: s.name,
                icon: s.icon,
                ids: [s.id],
                books: [s.book],
                totalChapters: s.chapters.length,
            });
        }
    }

    return Array.from(groups.values()).map((g) => ({
        ...g,
        books: g.books.join(", "),
    }));
}

export default async function SubjectPage({ params }: PageProps) {
    const { classId, subject: subjectId } = await params;
    const classData = getClassById(parseInt(classId));
    const subject = getSubject(parseInt(classId), subjectId);

    if (!classData || !subject) {
        notFound();
    }

    const otherGroups = deduplicateSubjects(
        classData.subjects.filter((s) => s.id !== subject.id)
    );

    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: absoluteUrl("/") },
        { name: classData.name, url: absoluteUrl(`/class/${classData.id}`) },
        { name: subject.name, url: absoluteUrl(`/class/${classData.id}/${subject.id}`) },
    ]);

    const faqs = [
        {
            q: `Which book does CBSE prescribe for Class ${classData.id} ${subject.name}?`,
            a: `CBSE follows the NCERT textbook "${subject.book}" for Class ${classData.id} ${subject.name}. You can download it free on this page.`,
        },
        {
            q: `How many chapters are in the Class ${classData.id} ${subject.name} NCERT book?`,
            a: `${subject.book} has ${subject.chapters.length} chapters. Each chapter can be downloaded as a separate PDF from the chapter list on this page.`,
        },
        {
            q: `Is the Class ${classData.id} ${subject.name} NCERT PDF free to download?`,
            a: `Yes. The complete Class ${classData.id} ${subject.name} NCERT book PDF is free on EasyCBSE — ad-free and no sign-up required.`,
        },
        {
            q: `Can I download the full ${subject.name} book in one file?`,
            a: `Yes. Use the "Download Full Book" button at the top of this page to get the complete ${subject.book} PDF in a single file.`,
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#FAF9F5]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LearningResource",
                        name: `Class ${classData.id} ${subject.name} NCERT Textbook`,
                        description: `Download ad-free Class ${classData.id} ${subject.name} NCERT textbook PDF. ${subject.book}`,
                        educationalLevel: `Class ${classData.id}`,
                        educationalAlignment: `${classData.name}`,
                        isAccessibleForFree: true,
                        inLanguage: "en",
                        url: `${siteUrl}/class/${classData.id}/${subject.id}`,
                        author: {
                            "@type": "Organization",
                            name: "NCERT",
                        },
                        provider: {
                            "@type": "EducationalOrganization",
                            name: "EasyCBSE",
                            url: siteUrl,
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "INR",
                            availability: "https://schema.org/InStock",
                        },
                        numberOfPages: subject.chapters.length * 15,
                        hasPart: subject.chapters.map((ch) => ({
                            "@type": "Chapter",
                            name: `Chapter ${ch.number}: ${ch.title}`,
                            url: ch.pdfUrl,
                            position: ch.number,
                        })),
                    }),
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(42,15,20,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,15,20,0.04)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
            <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
                <SubjectHero classData={classData} subject={subject} />

                <div className="flex w-full items-baseline justify-between border-b border-[#2A0F14]/10 py-5 mb-8 select-none">
                    <h2 className="font-heading text-xl font-bold tracking-tight text-[#2A0F14] md:text-2xl">
                        <TypingWithCursor text="Chapters" speed={35} cursorStyle="|" showCursor={true} />
                    </h2>
                    <div className="inline-flex items-baseline gap-1 font-body text-sm font-bold tracking-tight text-[#2A0F14]/90 md:text-base">
                        <NumberTicker value={subject.chapters.length} className="font-bold text-[#2A0F14]/90 tracking-tight text-sm md:text-base" />
                        <span className="font-body font-bold tracking-tight">chapters</span>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#2A0F14]/10 bg-white divide-y divide-[#2A0F14]/5">
                    {subject.chapters.map((chapter) => (
                        <div
                            key={chapter.number}
                            className="flex items-center gap-4 px-5 py-4 md:px-6"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A0F14]/5 font-heading text-sm font-bold text-[#544145]">
                                {String(chapter.number).padStart(2, "0")}
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="font-body text-[14px] font-medium tracking-normal leading-relaxed text-[#544145]">
                                    Chapter {chapter.number}
                                </p>
                                <h3 className="font-heading text-base font-semibold text-[#2A0F14]">
                                    {chapter.title}
                                </h3>
                            </div>
                            <ChapterDownloadButton href={chapter.pdfUrl} />
                        </div>
                    ))}
                </div>

                {otherGroups.length > 0 && (
                    <div className="mt-12">
                        <h3 className="mb-5 font-heading text-xl font-bold text-[#2A0F14]">
                            Other Subjects in {classData.name}
                        </h3>
                        <div className="other-subjects-group grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {otherGroups.map((group, index) => {
                                const core = isCoreSubject(group.name);
                                const hoverColor = fallbackPastels[index % fallbackPastels.length];
                                return (
                                    <BlurFade
                                        key={group.ids[0]}
                                        delay={0.1 + index * 0.05}
                                        blur="0px"
                                        className={`other-subjects-card overflow-hidden rounded-2xl border-2 border-[#2A0F14] bg-[#FAF9F5] shadow-[4px_4px_0px_#2A0F14] transition-all duration-300 ease-out hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_#2A0F14] active:translate-y-0 ${hoverColor} ${core ? "md:col-span-2" : ""}`}
                                    >
                                    <Link
                                        href={`/class/${classData.id}/${group.ids[0]}`}
                                        className="block p-6 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2A0F14]/5 text-[#2A0F14] md:h-11 md:w-11">
                                                <SubjectIcon subjectId={group.ids[0]} className="w-[18px] h-[18px]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="font-heading font-bold text-base text-[#2A0F14]">
                                                    {group.name}
                                                </h4>
                                                <span className="font-body font-medium text-[14px] text-[#544145]">
                                                    {group.books} &middot; {group.totalChapters} chapters
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    </BlurFade>
                                );
                            })}
                        </div>
                        <style>{`
                            .other-subjects-group:hover > .other-subjects-card:not(:hover) {
                                filter: blur(4px) !important;
                                transform: scale(0.97) !important;
                                opacity: 0.7 !important;
                            }
                            .other-subjects-card:hover {
                                transform: scale(1.05) !important;
                                filter: blur(0px) !important;
                                opacity: 1 !important;
                            }
                        `}</style>
                    </div>
                )}

                <FaqSection items={faqs} />
            </div>
        </div>
    );
}
