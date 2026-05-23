"use client";

import { useState } from "react";
import Link from "next/link";
import { FaClipboardCheck, FaPlay, FaTimes } from "react-icons/fa";

export default function FloatingCtaWidget() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-6 z-50 rounded-full border border-[#14B8A6]/25 bg-white px-4 py-3 text-sm font-semibold text-[#14B8A6] shadow-xl shadow-[#14B8A6]/10 transition-all duration-300 hover:border-[#14B8A6] hover:shadow-2xl"
        aria-label="Open quick actions"
      >
        Quick actions
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[min(92vw,19rem)] rounded-[1.5rem] border border-[#14B8A6]/20 bg-[#051B2B] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white/65 transition-colors hover:bg-white/12 hover:text-white"
        aria-label="Close quick actions"
      >
        <FaTimes className="h-3.5 w-3.5" />
      </button>

      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8FF4D]">
        Need a quick next step?
      </p>
      <h3 className="mt-2 text-lg font-bold leading-snug text-[#F4F7EB]">
        Start with an audit or try the demo account.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        Get a tailored assessment or see the platform before you decide.
      </p>

      <div className="mt-4 grid gap-3">
        <Link
          href="/contact?intent=audit"
          className="inline-flex items-center justify-center rounded-2xl bg-[#14B8A6] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0D9488]"
        >
          <FaClipboardCheck className="mr-2 h-4 w-4" />
          Request for Audit
        </Link>
        <Link
          href="/contact?intent=demo"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <FaPlay className="mr-2 h-3.5 w-3.5" />
          Try Demo Account
        </Link>
      </div>
    </div>
  );
}
