import type { Metadata } from "next";
import "./fonts/montserrat.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Nexa Solutions | ERPNext & Frappe Implementors",
  description: "Nexa Solutions - Your trusted ERPNext implementors. We deliver comprehensive ERP solutions to businesses across multiple industries, helping you transform operations and achieve growth.",
  keywords: "ERPNext, Frappe, ERP solutions, business automation, Kenya, Nairobi",
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
