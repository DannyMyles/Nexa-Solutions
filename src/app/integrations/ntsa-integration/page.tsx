import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "NTSA ERPNext Integration Kenya | Vehicle & Driver Verification",
  description:
    "Connect ERPNext to NTSA Kenya for real-time vehicle registration verification, logbook checks, driver licence validation, and fleet compliance — automated directly from your ERP.",
  keywords: ["NTSA ERPNext integration", "NTSA vehicle verification Kenya", "driver licence check ERPNext", "TIMS vehicle check", "NTSA API Kenya", "fleet management Kenya"],
  openGraph: {
    title: "NTSA ERPNext Integration Kenya | NexaGen Solutions Limited",
    description: "Real-time NTSA vehicle and driver verification built directly into ERPNext for Kenyan fleet and transport businesses.",
    url: "https://nexagensolutions.com/integrations/ntsa-integration",
    type: "website",
  },
  alternates: { canonical: "https://nexagensolutions.com/integrations/ntsa-integration" },
};

const item = {
  slug: "ntsa-integration",
  label: "NTSA Integration",
  description:
    "Integrate ERPNext with NTSA Kenya to automate vehicle registration checks, logbook verification, driver licence validation, and fleet compliance tracking — all from within your ERP system.",
  bullets: [
    "Real-time vehicle registration and logbook verification via TIMSVIRL",
    "Driver licence status checks integrated into fleet and HR workflows",
    "Vehicle inspection status tracking directly in ERPNext",
    "Automated compliance alerts for expiring licences and inspections",
  ],
  pills: ["Vehicle Verification", "Driver Licence Checks", "Fleet Compliance", "NTSA TIMSVIRL"],
};

const howItWorks = [
  {
    title: "Connect",
    description: "We configure secure access to NTSA's digital platforms and link them to the relevant ERPNext modules — Fleet Management, HR, or Asset Registry.",
  },
  {
    title: "Verify",
    description: "Vehicle registration numbers, chassis numbers, and driver licence IDs are validated against live NTSA data whenever they are entered or updated in ERPNext.",
  },
  {
    title: "Monitor",
    description: "ERPNext tracks expiry dates for vehicle inspections, road licences, and driver licences — sending automated alerts before deadlines are missed.",
  },
];

const impact = [
  { value: "Real-time", label: "Vehicle and driver verification at the point of data entry, not after the fact" },
  { value: "Zero", label: "Manual NTSA portal lookups — all checks automated from ERPNext" },
  { value: "Always ready", label: "Full compliance history available for regulators and internal audits" },
];

const audiences = [
  "Transport & Logistics Companies",
  "Fleet Operators",
  "PSV (Public Service Vehicle) Businesses",
  "Insurance Companies",
  "HR & Compliance Teams",
  "Government Contractors with Vehicle Fleets",
];

const faqs = [
  {
    q: "What NTSA data can be verified through ERPNext?",
    a: "We can integrate vehicle registration status, logbook verification (chassis number + QR code), driver licence validity, and vehicle inspection status — all sourced from NTSA's TIMSVIRL platform and eCitizen services.",
  },
  {
    q: "Does this work with NTSA's new smart driving licence system?",
    a: "Yes — Kenya's new electronic driving licence (e-DL) launched in 2026 is part of an integrated digital system, and we build our integration to work with the current NTSA digital infrastructure.",
  },
  {
    q: "Which ERPNext modules does this integrate with?",
    a: "Primarily Fleet Management and HR & Payroll. For businesses with vehicle assets, we also integrate with the Asset module to track registration and inspection dates.",
  },
  {
    q: "Can ERPNext alert us before licences or inspections expire?",
    a: "Yes — we configure automated notifications so your team receives alerts well before vehicle inspections, road licences, or driver licences are due for renewal.",
  },
  {
    q: "Is this suitable for PSV operators?",
    a: "Absolutely. PSV businesses have strict NTSA compliance requirements — this integration helps operators stay on top of every vehicle and driver obligation from a single ERPNext dashboard.",
  },
];

export default function NtsaIntegrationPage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd crumbs={[{ name: "Integrations", path: "/services" }, { name: item.label, path: `/integrations/${item.slug}` }]} />
      <FaqJsonLd faqs={faqs} />
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#2F966E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Integrations</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">{item.label}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">{item.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.pills.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F966E]" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-full bg-[#2F966E] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#2F966E]/25 transition-all duration-300 hover:bg-[#267A5A] hover:shadow-xl"
              >
                Book a Guided Demo
              </Link>
            </div>
          </div>
          <div className="relative -mr-8 lg:-mr-16">
            <Image
              src="/images/solutions/ntsa.png"
              alt="NTSA Vehicle and Driver Verification Integration with ERPNext"
              width={900}
              height={620}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent rounded-xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* What we implement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">NTSA compliance — automated inside your fleet and HR workflows</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Keep every vehicle and driver in your fleet compliant with NTSA requirements — without anyone manually checking the NTSA portal. ERPNext verifies, tracks, and alerts so your team stays ahead of every deadline.
              </p>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2F966E]" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Next steps</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">01</span>
                  <span>We review your fleet size, current compliance processes, and ERPNext modules in use.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span>We design the NTSA integration and configure compliance tracking dashboards in ERPNext.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">03</span>
                  <span>We build, test, deploy, and support go-live — including staff training.</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#2F966E] px-6 py-3.5 font-semibold text-white hover:bg-[#267A5A] transition-colors"
                >
                  Get a tailored audit
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F966E] uppercase tracking-[0.2em] bg-[#2F966E]/10 px-4 py-1.5 rounded-full">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">How it works</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">From connection to live fleet compliance automation in three clear steps.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-11 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px bg-gradient-to-r from-transparent via-[#2F966E]/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {howItWorks.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  <div className="relative z-10 w-[5.5rem] h-[5.5rem] rounded-2xl bg-white border-2 border-[#2F966E]/20 shadow-lg shadow-[#2F966E]/10 flex flex-col items-center justify-center mb-6 group-hover:border-[#2F966E] group-hover:shadow-[#2F966E]/20 transition-all duration-300">
                    <span className="text-[10px] font-bold text-[#2F966E]/50 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-4xl font-black text-[#2F966E] leading-none mt-0.5">{i + 1}</span>
                  </div>
                  <div className="bg-white rounded-3xl border border-gray-100 px-6 py-7 shadow-sm w-full flex-1 group-hover:shadow-md group-hover:border-[#2F966E]/20 transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business impact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F966E] uppercase tracking-[0.2em] bg-[#2F966E]/10 px-4 py-1.5 rounded-full">Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">Business impact</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">Measurable outcomes for fleet and transport businesses that have deployed this integration.</p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2F966E] via-emerald-400 to-[#2F966E]" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {impact.map((stat) => (
                <div key={stat.label} className="px-10 py-12">
                  <div className="text-3xl sm:text-4xl font-black text-[#2F966E] leading-none mb-3">{stat.value}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Best Fit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Who it&apos;s for</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span key={a} className="px-5 py-2.5 rounded-full bg-[#2F966E]/10 text-[#2F966E] font-semibold text-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-[#2F966E] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Works Great With */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Works Great With</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Solutions that benefit from NTSA compliance</h2>
            <p className="text-gray-500 mt-2 text-sm">This integration is typically deployed alongside these ERPNext modules.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "HR and Payroll Software", href: "/solutions/hr-and-payroll-software", desc: "Driver licence checks in the HR workflow" },
              { label: "Inventory and Warehouse Management", href: "/solutions/inventory-and-warehouse-management", desc: "Fleet and delivery vehicle compliance" },
              { label: "Custom Software Integrations", href: "/integrations/custom-software-integrations", desc: "Connect any government or third-party API" },
            ].map((i) => (
              <Link
                key={i.label}
                href={i.href}
                className="flex flex-col items-start gap-1 px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[#2F966E] hover:bg-[#2F966E]/5 transition-all duration-200 min-w-[220px]"
              >
                <span className="font-semibold text-gray-900 text-sm">{i.label}</span>
                <span className="text-xs text-gray-500">{i.desc}</span>
                <span className="mt-1 text-xs font-semibold text-[#2F966E]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2F966E] to-[#267A5A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate your NTSA compliance?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the integration in action — we&apos;ll connect your ERPNext to NTSA and eliminate manual vehicle and driver compliance checks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center px-8 py-4 bg-white text-[#2F966E] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Guided Demo
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
