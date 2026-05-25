import type { Metadata } from "next";
import "./fonts/montserrat.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
 
export const metadata: Metadata = {
  title: "Nexa Solutions | ERPNext, Audit & Demo-Ready ERP Delivery",
  description:
    "Nexa Solutions helps Kenyan businesses implement ERPNext with clear service packages, tailored audits, demo experiences, and practical support.",
  keywords:
    "ERPNext, Frappe, ERP solutions, business automation, Kenya, Nairobi, audit, demo, ERP pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pb-44 sm:pb-32">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
