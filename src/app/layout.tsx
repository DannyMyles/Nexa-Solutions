import type { Metadata } from "next";
import "./fonts/montserrat.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
 
export const metadata: Metadata = {
  title: "NexaGen Solutions Limited | ERPNext Implementation in Kenya",
  description:
    "NexaGen Solutions Limited helps Kenyan businesses implement ERPNext with clear service packages, tailored demos, and practical support.",
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
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
