import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

type NavItem = {
  slug: string;
  label: string;
  description: string;
  bullets: string[];
};

export const metadata: Metadata = {
  title: "Custom Software Integrations | Nexa Solutions",
  description:
    "Build bespoke integration layers for systems unique to your business.",
};

const item: NavItem = {
  slug: "custom-software-integrations",
  label: "Custom Software Integrations",
  description:
    "Build bespoke integration layers for systems unique to your business.",
  bullets: [
    "API development",
    "Webhooks and scheduled syncs",
    "Data mapping & transformation",
    "Monitoring and reliability",
  ],
};

export default function CustomSoftwareIntegrationsPage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#14B8A6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">
              Integrations
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
              {item.label}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              {item.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?intent=audit"
                className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#14B8A6]/25 transition-all duration-300 hover:bg-[#0D9488] hover:shadow-xl"
              >
                Request an Audit
              </Link>
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-full border border-[#14B8A6]/30 bg-white px-8 py-3.5 font-semibold text-[#14B8A6] transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]/5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What we implement</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Integration work delivered with clear mapping, safe auth, and production-ready monitoring.
              </p>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Next steps</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">01</span>
                  <span>We review the integration scope and required data flows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">02</span>
                  <span>We design the integration architecture and security approach.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">03</span>
                  <span>We build, test, migrate/roll out, and support go-live.</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#14B8A6] px-6 py-3.5 font-semibold text-white hover:bg-[#0D9488] transition-colors"
                >
                  Get a tailored audit
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

