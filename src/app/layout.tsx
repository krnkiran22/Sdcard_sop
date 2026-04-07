import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMetadataBase, getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();
const title = "SD Card Return — Packaging SOP";
const description =
  "Standard operating procedure for factory workers: how to label SD card return packages (date, factory, team, count, mobile), pack and seal correctly, avoid common mistakes, and verify before handover. Mobile-friendly, print-friendly.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: title,
    template: "%s | SD Card SOP",
  },
  description,
  applicationName: "SD Card Packaging SOP",
  authors: [{ name: "Operations", url: siteUrl }],
  keywords: [
    "SD card",
    "packaging SOP",
    "factory",
    "label",
    "ziplock",
    "return package",
    "ingestion",
    "standard operating procedure",
    "quality control",
  ],
  category: "reference documentation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: siteUrl,
  inLanguage: "en",
  isAccessibleForFree: true,
  isPartOf: {
    "@type": "WebSite",
    name: title,
    url: siteUrl,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
