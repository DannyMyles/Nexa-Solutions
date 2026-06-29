import type { Metadata } from "next";
import "./fonts/montserrat.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexagensolutions.com"),
  title: {
    default: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
    template: "%s | NexaGen Solutions Limited",
  },
  description:
    "NexaGen Solutions Limited — trusted ERPNext implementation partner in Kenya. We deliver accounting, HR, payroll, M-Pesa integration, KRA eTIMS, and full ERP systems for businesses across East Africa.",
  keywords: [
    "ERPNext Kenya",
    "ERPNext implementation Kenya",
    "Frappe Kenya",
    "ERP software Kenya",
    "ERP Kenya",
    "M-Pesa ERPNext integration",
    "KRA eTIMS integration",
    "accounting software Kenya",
    "HR payroll software Kenya",
    "hospital management system Kenya",
    "business automation Kenya",
    "NexaGen Solutions",
  ],
  authors: [{ name: "NexaGen Solutions Limited" }],
  creator: "NexaGen Solutions Limited",
  publisher: "NexaGen Solutions Limited",
  alternates: {
    canonical: "https://nexagensolutions.com",
  },
  openGraph: {
    title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
    description:
      "Trusted ERPNext implementation partner in Kenya — accounting, HR & payroll, M-Pesa, KRA eTIMS, and full ERP systems tailored for East African businesses.",
    url: "https://nexagensolutions.com",
    siteName: "NexaGen Solutions Limited",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
    description:
      "Trusted ERPNext implementation partner in Kenya — accounting, HR, M-Pesa, KRA eTIMS, and full ERP systems for East African businesses.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
