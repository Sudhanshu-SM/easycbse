import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center py-16">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-text-secondary mb-8">
                    We couldn&apos;t find that page. It may have moved, or the link might be incorrect.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="download-btn">Go to Homepage</Link>
                    <Link href="/class/10" className="download-btn">Class 10 Books</Link>
                    <Link href="/class/12" className="download-btn">Class 12 Books</Link>
                </div>
            </div>
        </div>
    );
}
