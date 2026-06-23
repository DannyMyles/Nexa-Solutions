"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const solutions = [
  "Accounting Software",
  "HR and Payroll Software",
  "Microfinance Core Banking Software",
  "Hospital Management System",
  "CRM Software",
  "Inventory and Warehouse Management",
  "Manufacturing and Production Planning",
  "E-commerce Integration",
  "POS System",
  "Real Estate Property Management",
  "Legal Practice Management",
  "School, College and University Management Software",
];

const integrations = [
  "DigiTax Integration with ERPNext",
  "Mpesa Integration",
  "Biometric Data Integration",
  "Custom Software Integrations",
  "KRA TIMS & eTIMS Integration",
  "Payment Gateway Integration",
  "Gava Connect Integration",
  "NTSA Integration",
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

type DropdownProps = {
  label: string;
  items: string[];
  itemsHeading: string;
  itemToHref: (label: string) => string;
  isScrolled: boolean;
};

function SolutionsIntegrationsDropdown({
  label,
  items,
  itemsHeading,
  itemToHref,
  isScrolled,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const within = target.closest?.("[data-dropdown-root='true']");
      if (!within) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="relative" data-dropdown-root="true">
      <button
        type="button"
        className={`text-sm font-semibold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
          open
            ? isScrolled ? "bg-[#2F966E]/15 text-[#2F966E]" : "bg-white/15 text-white"
            : isScrolled ? "text-gray-700 hover:bg-[#2F966E]/10 hover:text-[#2F966E]" : "text-white hover:bg-white/15"
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`${label}-dropdown-menu`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id={`${label}-dropdown-menu`}
          role="menu"
          aria-label={`${label} menu`}
          className="absolute left-0 top-full mt-3 min-w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
        >
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{itemsHeading}</div>
          </div>
          {items.map((itemLabel) => {
            const href = itemToHref(itemLabel);
            return (
              <Link
                key={itemLabel}
                href={href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#2F966E]/10 hover:text-[#267A5A]"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              >
                {itemLabel}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<"solutions" | "integrations" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const darkHeroPages = ["/company", "/contact", "/industries", "/process"];
  const useWhiteNav = !isScrolled && darkHeroPages.some((p) => pathname === p || pathname.startsWith(p + "?"));
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
      return;
    }

    setIsMobileMenuOpen(true);
  };

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
          <Link href="/" className="flex items-center">
            <Image
              src="/images/NexaGen Final Logo Concept 111.svg"
              alt="NexaGen Solutions Limited"
              width={160}
              height={48}
              className="object-contain mix-blend-multiply h-36 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive("/") ? "text-[#2F966E]" : useWhiteNav ? "text-white hover:text-white/80" : "text-gray-700 hover:text-[#2F966E]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/company"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive("/company") ? "text-[#2F966E]" : useWhiteNav ? "text-white hover:text-white/80" : "text-gray-700 hover:text-[#2F966E]"
              }`}
            >
              Company
            </Link>

            <Link
              href="/industries"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive("/industries") ? "text-[#2F966E]" : useWhiteNav ? "text-white hover:text-white/80" : "text-gray-700 hover:text-[#2F966E]"
              }`}
            >
              Industries
            </Link>

            <SolutionsIntegrationsDropdown
              label="Solutions"
              items={solutions}
              itemToHref={(label) => `/solutions/${toCategorySlug(label)}`}
              itemsHeading="Industries & Use-cases"
              isScrolled={!useWhiteNav}
            />

            <SolutionsIntegrationsDropdown
              label="Integrations"
              items={integrations}
              itemToHref={(label) => `/integrations/${toCategorySlug(label)}`}
              itemsHeading="Connectors & Platforms"
              isScrolled={!useWhiteNav}
            />

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive("/contact") ? "text-[#2F966E]" : useWhiteNav ? "text-white hover:text-white/80" : "text-gray-700 hover:text-[#2F966E]"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact?intent=demo"
              className="px-5 py-2.5 bg-[#2F966E] text-white text-sm font-medium rounded-full hover:bg-[#267A5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2F966E]/30 whitespace-nowrap"
            >
              Book a Guided Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative z-[60]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            style={{ color: useWhiteNav ? "#ffffff" : "#111827" }}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            <div className="md:hidden absolute top-full left-0 right-0 z-50">
              <div className="bg-white mx-4 mt-4 rounded-2xl shadow-xl max-h-[calc(100vh-7.5rem)] overflow-y-auto">
                <div className="flex flex-col space-y-1 p-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Company", href: "/company" },
                    { name: "Industries", href: "/industries" },
                    { name: "How We Work", href: "/process" },
                    { name: "Contact", href: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive(link.href)
                          ? "bg-[#2F966E]/10 text-[#2F966E]"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-50"
                      aria-expanded={openMobileSection === "solutions"}
                      onClick={() =>
                        setOpenMobileSection((current) =>
                          current === "solutions" ? null : "solutions"
                        )
                      }
                    >
                      <span>Solutions</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openMobileSection === "solutions" ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {openMobileSection === "solutions" && (
                      <div className="grid grid-cols-1 gap-0.5 px-2 pb-1 max-h-72 overflow-y-auto">
                        {solutions.map((label) => (
                          <Link
                            key={label}
                            href={`/solutions/${toCategorySlug(label)}`}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#2F966E]/10 hover:text-[#267A5A]"
                            onClick={closeMobileMenu}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-50"
                      aria-expanded={openMobileSection === "integrations"}
                      onClick={() =>
                        setOpenMobileSection((current) =>
                          current === "integrations" ? null : "integrations"
                        )
                      }
                    >
                      <span>Integrations</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openMobileSection === "integrations" ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {openMobileSection === "integrations" && (
                      <div className="grid grid-cols-1 gap-0.5 px-2 pb-1 max-h-72 overflow-y-auto">
                        {integrations.map((label) => (
                          <Link
                            key={label}
                            href={`/integrations/${toCategorySlug(label)}`}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#2F966E]/10 hover:text-[#267A5A]"
                            onClick={closeMobileMenu}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact?intent=demo"
                      className="block px-5 py-3 bg-[#2F966E] text-white text-base font-semibold rounded-xl text-center hover:bg-[#267A5A] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Book a Guided Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
