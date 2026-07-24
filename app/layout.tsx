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
    default: "EasyCBSE — Ad-Free NCERT PDF Downloads for Class 1-12",
    template: "%s | EasyCBSE",
  },
  description: "Download ad-free NCERT textbook PDFs for Classes 1 to 12 via Google Drive. Access clean, beautifully typeset CBSE NCERT books for all subjects — instant, no sign-up required.",
  keywords: "NCERT PDF download, ad-free NCERT textbooks, CBSE NCERT books Google Drive, Class 1-12 NCERT PDFs, EasyCBSE NCERT textbooks, free NCERT download",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "EasyCBSE",
    title: "EasyCBSE — Ad-Free NCERT PDF Downloads for Class 1-12",
    description: "Download ad-free NCERT textbook PDFs for Classes 1 to 12 via Google Drive. Access clean CBSE NCERT books for all subjects — instant, no sign-up.",
    images: [{ url: "/og-preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyCBSE — Ad-Free NCERT PDF Downloads for Class 1-12",
    description: "Download ad-free NCERT textbook PDFs for Classes 1 to 12. Clean CBSE NCERT books — instant, no sign-up.",
    images: ["/og-preview.png"],
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
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              mainEntity: {
                "@type": "EducationalOrganization",
                name: "EasyCBSE",
                logo: `${siteUrl}/logo.png`,
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
