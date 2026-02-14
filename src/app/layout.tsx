import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/providers/AOSInit";
import PageTransition from "@/components/layout/PageTransition";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AuthProvider from "@/components/providers/AuthProvider";
import ExitIntentModal from "@/components/ui/ExitIntentModal";
import CookieConsent from "@/components/ui/CookieConsent";
import NextTopLoader from "nextjs-toploader";
import NeuralAssistant from "@/components/ai/NeuralAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cloude-india.com'),
  title: {
    default: "CloudeIndia | 4 Years of Engineering Excellence",
    template: "%s | CloudeIndia - Engineering the Future"
  },
  description: "CloudeIndia is a global engineering collective delivering mission-critical AI, Cloud, and Software solutions for the digital world. Architecting success since 2022.",
  keywords: ["Software Development", "AI Solutions", "Cloud Native", "Enterprise Software India", "Digital Transformation", "CloudeIndia", "Best IT Company in Lucknow", "Top Software Agency India", "GenAI Development", "Next.js Experts"],
  authors: [{ name: "CloudeIndia Tech Team" }],
  creator: "CloudeIndia",
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloude-india.com",
    siteName: "CloudeIndia",
    title: "CloudeIndia | Engineering the Future",
    description: "Enterprise-grade AI, Cloud, and Software solutions. Architecting digital success since 2022.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CloudeIndia - Engineering the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudeIndia | Engineering the Future",
    description: "Enterprise-grade AI, Cloud, and Software solutions. Architecting digital success since 2022.",
    images: ["/og-image.png"],
    creator: "@cloudeindia",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-white bg-slate-950 selection:bg-primary/30 selection:text-white`}>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CloudeIndia",
              "url": "https://cloude-india.com",
              "logo": "https://cloude-india.com/logo-icon.png",
              "sameAs": [
                "https://linkedin.com/company/cloudeindia",
                "https://twitter.com/cloudeindia",
                "https://github.com/cloudeindia"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tedhi Puliya, Vikas Nagar Sector A",
                "addressLocality": "Lucknow",
                "addressRegion": "UP",
                "postalCode": "226022",
                "addressCountry": "IN"
              },
              "description": "Leading the digital frontier with high-impact software solutions."
            })
          }}
        />
        <AuthProvider>
          <NextTopLoader
            color="#137fec"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #137fec,0 0 5px #137fec"
          />
          <AOSInit />
          <PageTransition>
            {children}
            <ExitIntentModal />
            <CookieConsent />
            <NeuralAssistant />
          </PageTransition>
        </AuthProvider>
      </body>
    </html>
  );
}
