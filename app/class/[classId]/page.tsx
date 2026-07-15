import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { classes, getClassById } from "@/data/books";
import { absoluteUrl, breadcrumbJsonLd, buildClassMetadata } from "@/lib/seo";

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
    const { classId } = await params;
    const classData = getClassById(parseInt(classId));

    if (!classData) {
        notFound();
    }

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
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span className="text-text">{classData.name}</span>
                </nav>

                {/* Header */}
                <div className={`class-card class-${classData.id} p-8 md:p-12 mb-8 text-white text-center`}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        {`CBSE ${classData.name} NCERT Books`}
                    </h1>

                </div>

                {/* Subjects Grid */}
                <h2 className="text-2xl font-bold mb-6">Choose a Subject</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classData.subjects.map((subject, idx) => (
                        <Link
                            key={subject.id}
                            href={`/class/${classData.id}/${subject.id}`}
                            className="subject-card flex items-start gap-4 animate-fadeInUp"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <div className="text-4xl">{subject.icon}</div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                                <p className="text-sm text-text-secondary mb-2">{subject.book}</p>
                                <div className="flex items-center gap-2 text-xs text-primary">
                                    <span>{subject.chapters.length} Chapters</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Other Classes Quick Links */}
                <div className="mt-12">
                    <h3 className="text-lg font-semibold mb-4 text-text-secondary">Other Classes</h3>
                    <div className="flex flex-wrap gap-2">
                        {classes.map((c) => (
                            <Link
                                key={c.id}
                                href={`/class/${c.id}`}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${c.id === classData.id
                                    ? "bg-primary text-white"
                                    : "bg-white text-text-secondary hover:bg-gray-100"
                                    }`}
                            >
                                Class {c.id}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
