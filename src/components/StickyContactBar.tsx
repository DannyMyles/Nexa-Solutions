"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden border-t border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href="https://wa.me/254758269725?text=Hello%20NexaGen!%20I%27m%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 py-4 text-sm font-semibold text-[#25D366] border-r border-gray-100"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href="tel:+254758269725"
        className="flex flex-1 items-center justify-center gap-1.5 py-4 text-sm font-semibold text-gray-700 border-r border-gray-100"
        aria-label="Call NexaGen Solutions"
      >
        <FaPhone className="h-4 w-4" />
        Call Us
      </a>
      <Link
        href="/contact?intent=demo"
        className="flex flex-1 items-center justify-center py-4 text-sm font-semibold text-white bg-[#2F966E]"
      >
        Book Demo
      </Link>
    </div>
  );
}
