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
    const { classId, subject: subjectId } = await params;
    const classData = getClassById(parseInt(classId));
    const subject = getSubject(parseInt(classId), subjectId);

    if (!classData || !subject) {
        notFound();
    }

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href={`/class/${classData.id}`}>{classData.name}</Link>
                    <span>/</span>
                    <span className="text-text">{subject.name}</span>
                </nav>

                {/* Header */}
                <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl">{subject.icon}</div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">{`CBSE ${classData.name} ${subject.name} NCERT Book PDF`}</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                            📖 {subject.book}
                        </span>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">
                            📑 {subject.chapters.length} Chapters
                        </span>
                    </div>
                </div>

                {/* Chapters List */}
                <h2 className="text-xl font-bold mb-4">Chapters</h2>
                <div className="space-y-3">
                    {subject.chapters.map((chapter, idx) => (
                        <div
                            key={chapter.number}
                            id={`chapter-${chapter.number}`}
                            className="chapter-item animate-fadeInUp"
                            style={{ animationDelay: `${idx * 30}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                                    {chapter.number}
                                </div>
                                <div>
                                    <h3 className="font-medium">{chapter.title}</h3>
                                    <p className="text-xs text-text-secondary">Chapter {chapter.number}</p>
                                </div>
                            </div>
                            <a
                                href={chapter.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-btn"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span className="hidden sm:inline">Download PDF</span>
                                <span className="sm:hidden">PDF</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Download All */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary-light rounded-2xl text-white text-center">
                    <h3 className="text-lg font-bold mb-2">📥 Download Complete Book</h3>
                    <p className="text-sm opacity-90 mb-4">
                        Get the full {subject.book} textbook in one file
                    </p>
                    <a
                        href={subject.chapters[0]?.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
                        style={{ color: '#000000' }}
                    >
                        Download Full Book
                    </a>
                </div>

                {/* Other Subjects */}
                <div className="mt-12">
                    <h3 className="text-lg font-semibold mb-4 text-text-secondary">Other Subjects in {classData.name}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {classData.subjects
                            .filter((s) => s.id !== subject.id)
                            .map((s) => (
                                <Link
                                    key={s.id}
                                    href={`/class/${classData.id}/${s.id}`}
                                    className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-1">{s.icon}</div>
                                    <div className="text-sm font-medium">{s.name}</div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
