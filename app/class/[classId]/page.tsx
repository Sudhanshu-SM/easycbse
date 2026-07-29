import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classes, getClassById } from "@/data/books";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import SubjectIcon from "@/components/SubjectIcon";
import ClassHero from "@/components/ClassHero";
import FaqSection from "@/components/FaqSection";
import BlurFade from "@/components/magicui/blur-fade";

const siteUrl = "https://www.easycbse.com";

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

    const ordinal = ["th","st","nd","rd"];
    const suffix = ordinal[classData.id] || ordinal[0];
    const title = `CBSE Class ${classData.id} NCERT Books PDF (Free Download) — All Subjects`;

    return {
        title,
        description: `Download free NCERT textbook PDFs for CBSE Class ${classData.id}${suffix} (${classData.name}). Access CBSE NCERT books for all subjects — ad-free, instant, no sign-up required.`,
        alternates: { canonical: `${siteUrl}/class/${classData.id}` },
        openGraph: {
            title,
            description: `Download free NCERT textbook PDFs for CBSE Class ${classData.id}${suffix} (${classData.name}). All subjects — ad-free, instant, no sign-up.`,
            url: `/class/${classData.id}`,
            images: [{ url: "/og-preview.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: `Download free NCERT PDFs for CBSE Class ${classData.id}${suffix}. All subjects — ad-free, instant, no sign-up.`,
            images: ["/og-preview.png"],
        },
    };
}

export default async function ClassPage({ params }: PageProps) {
    const { classId } = await params;
    const classData = getClassById(parseInt(classId));

    if (!classData) {
        notFound();
    }

    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: absoluteUrl("/") },
        { name: classData.name, url: absoluteUrl(`/class/${classData.id}`) },
    ]);

    const subjectNames = [...new Set(classData.subjects.map((s) => s.name))].join(", ");
    const faqs = [
        {
            q: `Which subjects are available for CBSE Class ${classData.id}?`,
            a: `Class ${classData.id} on EasyCBSE covers ${subjectNames}. Every subject page has chapter-wise NCERT textbook PDF downloads.`,
        },
        {
            q: `Are the Class ${classData.id} NCERT book PDFs free to download?`,
            a: `Yes. Every Class ${classData.id} NCERT textbook PDF on EasyCBSE is completely free — no sign-up, no ads. PDFs open directly via Google Drive links.`,
        },
        {
            q: `Can I download individual chapters for Class ${classData.id}?`,
            a: `Yes. Open any subject to see its full chapter list and download each chapter as a separate PDF, or download the complete book in one file.`,
        },
        {
            q: `Are these official NCERT textbooks for Class ${classData.id}?`,
            a: `Yes. All PDFs link to official NCERT textbook content, following the CBSE-prescribed NCERT curriculum for Class ${classData.id}.`,
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
                        "@type": "EducationalOccupationalProgram",
                        name: `Class ${classData.id} NCERT Curriculum`,
                        educationalLevel: `Class ${classData.id}`,
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
                        numberOfCredits: classData.subjects.length,
                        hasCourse: classData.subjects.map((s) => ({
                            "@type": "Course",
                            name: `${s.name} — Class ${classData.id}`,
                            description: `Download ad-free NCERT textbook PDF for ${s.name} Class ${classData.id}.`,
                            educationalAlignment: `Class ${classData.id}`,
                            isAccessibleForFree: true,
                            inLanguage: "en",
                            url: `${siteUrl}/class/${classData.id}/${s.id}`,
                        })),
                    }),
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(42,15,20,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,15,20,0.04)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
            <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
                <ClassHero classData={classData} />

                <div className="mb-8">
                    <h2 className="font-heading text-2xl font-bold text-[#2A0F14]">Choose a Subject</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {classData.subjects.map((subject, index) => (
                        <BlurFade key={subject.id} delay={0.1 + index * 0.05}>
                        <Link
                            href={`/class/${classData.id}/${subject.id}`}
                            className="group block rounded-2xl border border-[#2A0F14]/5 bg-white p-6 transition-all duration-300 hover:border-[#2A0F14]/10 hover:shadow-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2A0F14]/5 text-[#2A0F14] md:h-11 md:w-11">
                                    <SubjectIcon subjectId={subject.id} className="w-[18px] h-[18px]" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-heading text-lg font-bold text-[#2A0F14]">
                                        {subject.name}
                                    </h3>
                                    <p className="mt-0.5 font-body text-[14px] font-medium tracking-normal leading-relaxed text-[#544145]">
                                        {subject.book}
                                    </p>
                                    <div className="mt-3 flex items-center gap-1.5 font-body text-[14px] font-medium tracking-normal text-[#544145]">
                                        <span>{subject.chapters.length} Chapters</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </BlurFade>
                    ))}
                </div>

                <FaqSection items={faqs} />

                <div className="mt-14">
                    <h3 className="mb-4 font-heading text-lg font-bold text-[#2A0F14]">Other Classes</h3>
                    <div className="flex flex-wrap gap-2">
                        {classes.map((c) => {
                            const active = c.id === classData.id;
                            return (
                                <Link
                                    key={c.id}
                                    href={`/class/${c.id}`}
                                    className={`rounded-full px-4 py-2 font-heading text-sm font-semibold transition-all ${
                                        active
                                            ? "bg-[#2A0F14] text-[#FAF9F5]"
                                            : "border border-[#2A0F14]/10 bg-white text-[#544145] hover:border-[#2A0F14]/20 hover:text-[#2A0F14]"
                                    }`}
                                >
                                    Class {c.id}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
