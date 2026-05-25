"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const solutions = [
  "Accounting Software",
  "HR and Payroll Software",
  "Microfinance Core Banking Software",
  "Hospital Management System",
  "CRM Software",
  "Inventory and Warehouse Management",
  "Manufacturing and Production Planning",
  "Project Management Software",
  "E-commerce Integration",
  "POS (Point of Sale) System",
  "Fleet and Asset Management",
  "Real Estate Property Management",
  "Non-Profit Organization Management",
  "Agriculture and Farm Management",
  "Legal Practice Management",
  "School, College and University Management Software",
];

const integrations = [
  "DigiTax Integration with ERPNext",
  "Mpesa Integration",
  "Biometric Data Integration",
  "Custom Software Integrations",
  "KRA TIMS & eTIMS Integration",
  "Payment Gateway Integration (PayPal, Stripe, etc.)",
  "Bank Reconciliation Integration"
];

function toCategorySlug(label: string) {
  return encodeURIComponent(
    label
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#14B8A6] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Nexa Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#14B8A6]"
                    : "text-gray-700 hover:text-[#14B8A6]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-[#14B8A6] inline-flex items-center gap-2`}
                aria-haspopup="menu"
              >
                Solutions
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-3 hidden group-hover:block min-w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Industries & Use-cases</div>
                </div>
                {solutions.map((label) => {
                  const slug = toCategorySlug(label);
                  return (
                    <Link
                      key={label}
                      href={`/solutions/${slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#0D9488]"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Integrations Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-[#14B8A6] inline-flex items-center gap-2`}
                aria-haspopup="menu"
              >
                Integrations
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-3 hidden group-hover:block min-w-[360px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Connectors & Platforms</div>
                </div>
                {integrations.map((label) => {
                  const slug = toCategorySlug(label);
                  return (
                    <Link
                      key={label}
                      href={`/integrations/${slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#0D9488]"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/contact?intent=demo"
              className="px-5 py-2.5 bg-[#14B8A6] text-white text-sm font-medium rounded-full hover:bg-[#0D9488] transition-all duration-300 hover:shadow-lg hover:shadow-[#14B8A6]/30"
            >
              Try Demo
            </Link>

          </div>

{/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

{/* Mobile Menu with Backdrop Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Mobile Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 z-50">
              <div className="bg-white mx-4 mt-4 p-4 rounded-2xl shadow-xl">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                        pathname === link.href
                          ? "bg-[#14B8A6]/10 text-[#14B8A6]"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="mt-3">
                    <div className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</div>
                    <div className="grid grid-cols-1 gap-1 px-2">
                      {solutions.map((label) => {
                        const slug = toCategorySlug(label);
                        return (
                          <Link
                            key={label}
                            href={`/solutions/${slug}`}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#0D9488]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Integrations</div>
                    <div className="grid grid-cols-1 gap-1 px-2">
                      {integrations.map((label) => {
                        const slug = toCategorySlug(label);
                        return (
                          <Link
                            key={label}
                            href={`/integrations/${slug}`}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#0D9488]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>


                  <Link
                    href="/contact?intent=demo"
                    className="px-5 py-3 bg-white text-[#14B8A6] text-base font-medium rounded-lg text-center border border-[#14B8A6]/25 hover:border-[#14B8A6] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Try Demo
                  </Link>

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
