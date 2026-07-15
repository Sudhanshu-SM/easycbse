import type { MetadataRoute } from "next";
import { classes } from "@/data/books";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

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
