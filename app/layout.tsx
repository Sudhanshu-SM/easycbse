import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopMarquee from "@/components/TopMarquee";
import BackToTop from "@/components/BackToTop";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const siteUrl = "https://www.easycbse.com";

export const metadata: Metadata = {
  title: {
    default: "CBSE NCERT Books PDF - Free Download Class 1 to 12 | EasyCBSE",
    template: "%s | EasyCBSE",
  },
  description: "Download free NCERT textbook PDFs for CBSE Class 1 to 12. All subjects including Maths, Science, English, Hindi, Social Science and more — ad-free, instant, no sign-up required.",
  keywords: "NCERT, PDF, textbooks, Class 1-12, free download, CBSE, NCERT books, CBSE NCERT PDF, education, India",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "EasyCBSE",
    title: "CBSE NCERT Books PDF - Free Download Class 1 to 12 | EasyCBSE",
    description: "Download free NCERT textbook PDFs for CBSE Class 1 to 12. All subjects — ad-free, instant, no sign-up.",
  },
  twitter: {
    card: "summary",
    title: "CBSE NCERT Books PDF - Free Download Class 1 to 12 | EasyCBSE",
    description: "Download free NCERT textbook PDFs for CBSE Class 1 to 12. All subjects — ad-free, instant, no sign-up.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", href: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KLV4D092MP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KLV4D092MP');
          `}
        </Script>
      </head>
      <body className={`${fredoka.variable} font-body bg-[#FAF9F5] text-[#57534E] antialiased`}>
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2a0f1406_1px,transparent_1px),linear-gradient(to_bottom,#2a0f1406_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
          <TopMarquee />
          <Navbar />
          <main className="relative z-10 min-h-screen pt-16">
            {children}
          </main>

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "EasyCBSE",
              url: siteUrl,
              description:
                "Download ad-free NCERT textbook PDFs for Classes 1 to 12 via Google Drive. Clean CBSE NCERT books for all subjects — instant, no sign-up required.",
              mainEntity: {
                "@type": "EducationalOrganization",
                name: "EasyCBSE",
                description:
                  "Providing organized, ad-free educational tools and core curriculum study resources for school students.",
              },
            }),
          }}
          />
          <footer className="border-t border-[#2A0F14]/5 bg-[#FAF9F5]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 font-body text-sm text-[#544145] md:flex-row md:items-center md:justify-between md:px-6">
            <span className="font-heading font-semibold text-[#2A0F14]">EasyCBSE</span>
            <p className="font-body text-[14px] font-medium tracking-normal leading-relaxed text-[#544145]">Curated CBSE learning resources for focused, ad-free study.</p>
            <div className="flex items-center gap-4">
              <BackToTop />
            </div>
          </div>
          <div className="border-t border-[#2A0F14]/5 py-4 text-center">
            <p className="text-xs text-[#544145]/60">
              &copy; 2025 NCERT Books PDF. All textbooks are property of NCERT. This is an educational resource. PDFs link to official NCERT sources.
            </p>
          </div>
        </footer>
      </div>
      </body>
    </html>
  );
}
