import Link from "next/link";
import { FaArrowRight, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 text-center">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#2F966E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#2F966E]/10 rounded-full blur-3xl" />

      <div className="relative">
        <p className="text-9xl font-bold text-[#2F966E]/15 select-none">404</p>
        <div className="-mt-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Page not found</h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-base leading-relaxed">
            This page doesn&apos;t exist or may have been moved. Let&apos;s get you back to somewhere useful.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2F966E] text-white font-semibold rounded-full hover:bg-[#267A5A] transition-colors shadow-lg shadow-[#2F966E]/25"
            >
              <FaHome className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#2F966E] hover:text-[#2F966E] transition-colors"
            >
              Contact Us
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { label: "Solutions", href: "/solutions/accounting-software" },
              { label: "Integrations", href: "/integrations/mpesa-integration" },
              { label: "Industries", href: "/industries" },
              { label: "About Us", href: "/company" },
              { label: "Book a Demo", href: "/contact?intent=demo" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[#2F966E] bg-[#2F966E]/10 rounded-full hover:bg-[#2F966E]/20 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
