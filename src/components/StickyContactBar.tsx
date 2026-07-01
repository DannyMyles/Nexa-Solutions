"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhone, FaCalendarAlt } from "react-icons/fa";

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-[#2F966E] via-[#25D366] to-[#2F966E]" />

      <div className="flex bg-white shadow-[0_-8px_32px_rgba(0,0,0,0.12)]">
        {/* WhatsApp */}
        <a
          href="https://wa.me/254758269725?text=Hello%20NexaGen!%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[#25D366] active:bg-gray-50 transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/10">
            <FaWhatsapp className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="my-3 w-px bg-gray-100" />

        {/* Call */}
        <a
          href="tel:+254758269725"
          aria-label="Call NexaGen Solutions"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-600 active:bg-gray-50 transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <FaPhone className="h-3.5 w-3.5" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">Call Us</span>
        </a>

        {/* Divider */}
        <div className="my-3 w-px bg-gray-100" />

        {/* Book Demo — primary CTA */}
        <Link
          href="/contact?intent=demo"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-white bg-[#2F966E] active:bg-[#267A5A] transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <FaCalendarAlt className="h-3.5 w-3.5" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">Book Demo</span>
        </Link>
      </div>
    </div>
  );
}
