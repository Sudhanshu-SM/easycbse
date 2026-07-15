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
