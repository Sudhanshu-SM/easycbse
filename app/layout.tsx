import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NCERT Books PDF - Free Download Class 1 to 12",
  description: "Download free NCERT textbook PDFs for Class 1 to 12. Access all subjects including Maths, Science, English, Hindi, Social Science and more.",
  keywords: "NCERT, PDF, textbooks, Class 1-12, free download, CBSE, education, India",
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
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-primary text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm opacity-80">
              © 2025 NCERT Books PDF. All textbooks are property of NCERT.
            </p>
            <p className="text-xs opacity-60 mt-2">
              This is an educational resource. PDFs link to official NCERT sources.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

