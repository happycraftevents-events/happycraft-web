import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: {
    default: "HappyCraft Event LLP - Top Event Management Company in India",
    template: "%s | HappyCraft Event LLP",
  },
  description:
    "Begin an extraordinary journey with HappyCraft Event LLP. Design, delight, and inspire with India's premier corporate event management company, where every moment is crafted to perfection.",
  keywords: [
    "event management",
    "corporate events",
    "weddings",
    "product launches",
    "exhibitions",
    "India",
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
  ],
  authors: [{ name: "HappyCraft Event LLP", url: "https://happycraftevent.in" }],
  creator: "HappyCraft Event LLP",
  publisher: "HappyCraft Event LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://happycraftevent.in",
    siteName: "HappyCraft Event LLP",
    title: "HappyCraft Event LLP - Top Event Management Company in India",
    description:
      "Begin an extraordinary journey with HappyCraft Event LLP. Design, delight, and inspire with India's premier corporate event management company.",
    images: [
      {
        url: "https://happycraftevent.in/og-graph/home.jpg",
        width: 1200,
        height: 630,
        alt: "HappyCraft Event LLP - Professional Event Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HappyCraft Event LLP - Top Event Management Company in India",
    description:
      "Begin an extraordinary journey with HappyCraft Event LLP. Design, delight, and inspire with India's premier corporate event management company.",
    images: ["https://happycraftevent.in/og-graph/home.jpg"],
    creator: "@happycraftevent",
  },
  alternates: {
    canonical: "https://happycraftevent.in",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fallback to logo until proper favicon files are added to /public */}
        <link rel="icon" href="/logo/hce.png" />
        <link rel="shortcut icon" href="/logo/hce.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/hce.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/hce.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/hce.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  );
}
