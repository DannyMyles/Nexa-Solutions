import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gava Connect ERPNext Integration Kenya | KRA API",
  description:
    "Connect ERPNext to Gava Connect — Kenya's official KRA developer API portal. Verify PINs, check Tax Compliance Certificates, and automate KRA compliance lookups in real time.",
  keywords: ["Gava Connect ERPNext", "KRA API Kenya", "PIN verification ERPNext", "TCC check Kenya", "developer.go.ke integration", "KRA compliance API"],
  openGraph: {
    title: "Gava Connect ERPNext Integration Kenya | NexaGen Solutions Limited",
    description: "Real-time KRA PIN and TCC verification built directly into ERPNext via Kenya's Gava Connect API platform.",
    url: "https://nexagensolutions.com/integrations/gava-connect-integration",
    type: "website",
  },
};

const item = {
  slug: "gava-connect-integration",
  label: "Gava Connect Integration",
  description:
    "Integrate ERPNext with Gava Connect — Kenya's official KRA API platform — to verify PINs, validate Tax Compliance Certificates, and automate government data lookups in real time.",
  bullets: [
    "Real-time KRA PIN verification on suppliers and customers",
    "Automated Tax Compliance Certificate (TCC) validation",
    "Nil Filing and compliance status checks without manual KRA portal visits",
    "Audit-ready compliance logs stored directly in ERPNext",
  ],
  pills: ["KRA PIN Verification", "TCC Validation", "Compliance Automation", "Gava Connect API"],
};

const howItWorks = [
  {
    title: "Connect",
    description: "We register your business on the Gava Connect developer portal (developer.go.ke) and configure secure API credentials inside ERPNext.",
  },
  {
    title: "Automate",
    description: "PIN and TCC checks run automatically when creating suppliers, customers, or processing payments — no manual KRA portal lookups needed.",
  },
  {
    title: "Audit",
    description: "Every API response is logged in ERPNext with timestamps, giving your finance and compliance teams a complete, searchable audit trail.",
  },
];

const impact = [
  { value: "Real-time", label: "PIN and TCC verification at the point of transaction, not after the fact" },
  { value: "Zero", label: "Manual KRA portal visits for compliance checks — all automated from ERPNext" },
  { value: "Always ready", label: "Full compliance lookup history available for auditors at any time" },
];

const audiences = [
  "Finance & Accounts Teams",
  "Procurement Departments",
  "VAT-Registered Businesses",
  "Businesses with Large Supplier Networks",
  "Government Contractors",
  "Audit & Compliance Teams",
];

const faqs = [
  {
    q: "What is Gava Connect?",
    a: "Gava Connect (developer.go.ke) is KRA's official Enterprise API platform that gives approved developers and businesses secure programmatic access to KRA data — including PIN verification, TCC checks, and more.",
  },
  {
    q: "Is access to the Gava Connect API free?",
    a: "Yes — access is currently free for approved developers and businesses. KRA may introduce tiered pricing for high-volume use in the future, and we will help you stay compliant with any changes.",
  },
  {
    q: "Which Gava Connect APIs can be integrated with ERPNext?",
    a: "We currently support PIN verification and Tax Compliance Certificate (TCC) checks. As KRA expands Gava Connect with eTIMS and VAT APIs, we will integrate those as well.",
  },
  {
    q: "Will this work with our existing KRA eTIMS integration?",
    a: "Yes — Gava Connect and eTIMS are complementary. Gava Connect handles compliance lookups while eTIMS handles invoice submission. We can deploy both together.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 1–2 weeks from API credential approval to go-live, depending on your ERPNext configuration.",
  },
];

export default function GavaConnectIntegrationPage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
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
              src="/images/solutions/gava_connect.png"
              alt="Gava Connect KRA API Integration with ERPNext"
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
              <h2 className="text-2xl font-bold text-gray-900">KRA compliance checks — automated inside ERPNext</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Verify every supplier and customer PIN, and confirm their Tax Compliance Certificate status, without anyone leaving ERPNext. Gava Connect gives your business live access to KRA&apos;s data at the moment it matters.
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
                  <span>We assess your current supplier onboarding and payment approval workflows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span>We register on Gava Connect and design the API integration into your ERPNext instance.</span>
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
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">From API registration to live compliance automation in three clear steps.</p>
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
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">Measurable outcomes from businesses that have deployed this integration.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Integrations that pair well with Gava Connect</h2>
            <p className="text-gray-500 mt-2 text-sm">Gava Connect compliance checks are typically deployed alongside these ERPNext integrations.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "KRA TIMS & eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration", desc: "Automate invoice submission to KRA" },
              { label: "Accounting Software", href: "/solutions/accounting-software", desc: "Full tax-compliant accounting in ERPNext" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate KRA compliance checks?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the integration in action — we&apos;ll connect your ERPNext to Gava Connect and eliminate manual KRA portal lookups.
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
