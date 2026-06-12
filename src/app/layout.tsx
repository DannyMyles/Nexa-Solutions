import type { Metadata } from "next";
import "./fonts/montserrat.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
  description:
    "NexaGen Solutions Limited helps Kenyan businesses implement ERPNext with clear service packages, tailored demos, and practical support.",
  keywords:
    "ERPNext, Frappe, ERP solutions, business automation, Kenya, Nairobi, audit, demo, ERP pricing",
  openGraph: {
    title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
    description:
      "Trusted ERPNext implementors helping businesses across East Africa gain full control of their operations with tailored ERP, integrations, and long-term support.",
    url: "https://www.nexasolutions.co.ke",
    siteName: "NexaGen Solutions Limited",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
    description:
      "Trusted ERPNext implementors helping businesses across East Africa gain full control of their operations.",
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
