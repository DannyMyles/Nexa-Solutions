import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Manufacturing and Production Planning | Nexa Solutions",
  description:
    "Plan, schedule, and execute manufacturing workflows with ERPNext: production planning, BOMs, quality checkpoints, and reporting.",
};

const item = {
  slug: "manufacturing-and-production-planning",
  label: "Manufacturing and Production Planning",
  description:
    "Implement ERPNext manufacturing planning so your teams can plan accurately, track execution, and improve throughput.",
  bullets: [
    "BOM setup and production workflows",
    "Production planning and scheduling",
    "Work orders execution tracking",
    "Audit-ready reporting and traceability",
  ],
};

export default function ManufacturingAndProductionPlanningPage() {
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
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
              {item.label}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              {item.description}
            </p>

            <div className="mt-8  sm:flex-row gap-3">
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
              <h2 className="text-2xl font-bold text-gray-900">What we deliver</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                A manufacturing setup that matches your operational rhythm—so planning, execution, and reporting stay consistent.
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
                  <span>
                    <span className="font-semibold">Baseline your production flow.</span> We map BOMs, work orders, and planning constraints.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">02</span>
                  <span>
                    <span className="font-semibold">Configure ERPNext manufacturing.</span> We set up workflows and reporting for your team.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">03</span>
                  <span>
                    <span className="font-semibold">Migrate, test, and stabilize.</span> We run go-live support with reconciliation and training.
                  </span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Plan production with confidence.
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Start with an ERPNext audit and we’ll configure manufacturing planning for your workflow.
          </p>
        
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#14B8A6] font-semibold px-8 py-4 hover:bg-gray-100 transition-all duration-300"
            >
              Request Audit
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white font-semibold px-8 py-4 hover:bg-white/20 transition-all duration-300"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

