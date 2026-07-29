interface FaqItem {
    q: string;
    a: string;
}

// Server-rendered FAQ with matching FAQPage JSON-LD. The visible text and
// the structured data must stay identical (Google requirement).
export default function FaqSection({ items }: { items: FaqItem[] }) {
    return (
        <section className="mt-14">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: items.map((item) => ({
                            "@type": "Question",
                            name: item.q,
                            acceptedAnswer: { "@type": "Answer", text: item.a },
                        })),
                    }),
                }}
            />
            <h2 className="mb-5 font-heading text-xl font-bold text-[#2A0F14] md:text-2xl">
                Frequently Asked Questions
            </h2>
            <div className="rounded-2xl border border-[#2A0F14]/10 bg-white divide-y divide-[#2A0F14]/5">
                {items.map((item) => (
                    <details key={item.q} className="group px-5 py-4 md:px-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-[#2A0F14] [&::-webkit-details-marker]:hidden">
                            {item.q}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0 text-[#544145] transition-transform duration-200 group-open:rotate-180"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </summary>
                        <p className="mt-3 font-body text-[14px] font-medium tracking-normal leading-relaxed text-[#544145]">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}
