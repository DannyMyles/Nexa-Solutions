import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "DigiTax ERPNext Integration Kenya",
  description:
    "Connect ERPNext to DigiTax for compliant e-invoicing in Kenya — automated eTIMS submission, tax configuration, and KRA compliance reporting for Kenyan businesses.",
  alternates: { canonical: "https://nexagensolutions.com/integrations/digitax-integration-with-erpnext" },
};

const item = {
  slug: "digitax-integration-with-erpnext",
  label: "DigiTax Integration with ERPNext",
  description:
    "Connect ERPNext to DigiTax flows for compliant e-invoicing, streamlined tax operations, and KRA reporting.",
  bullets: [
    "eTIMS-friendly integration setup",
    "Tax configuration and validation",
    "Invoice lifecycle automation",
    "Reconciliation and compliance support",
  ],
  pills: ["e-Invoicing", "Tax Validation", "KRA Submission", "Compliance Reporting"],
};

const howItWorks = [
  { title: "Configure", description: "We set up DigiTax credentials, invoice templates, and tax mapping within your ERPNext environment." },
  { title: "Submit", description: "Invoices generated in ERPNext automatically flow to DigiTax for eTIMS-compliant submission and QR code assignment." },
  { title: "Reconcile", description: "Tax liability reports and compliance dashboards keep your finance team fully audit-ready." },
];

const impact = [
  { value: "Full compliance", label: "Every invoice submitted automatically via DigiTax with no manual steps" },
  { value: "No duplicate entry", label: "Data moves directly from ERPNext to DigiTax in real time" },
  { value: "Tax filing ready", label: "ERPNext data structured for straightforward KRA compliance reporting" },
];

const audiences = ["Current DigiTax Users", "VAT-Registered Businesses", "Finance & Tax Teams", "Growing SMEs", "Accounting Firms"];

const faqs = [
  { q: "Do we need an existing DigiTax account?", a: "Yes — active DigiTax credentials are required before the integration can be configured." },
  { q: "Does this replace manual DigiTax entry?", a: "Yes — once live, invoices flow from ERPNext to DigiTax automatically without any manual steps." },
  { q: "How long does setup take?", a: "Typically 3–5 business days from credential provision to production go-live." },
  { q: "Can we test in sandbox mode first?", a: "Yes — we always validate the full flow in a sandbox environment before switching to production." },
];

export default function DigitaxIntegrationWithErpnextPage() {
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
                src="/images/solutions/digitax.png"
                alt="DigiTax Integration with ERPNext"
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
              <h2 className="text-2xl font-bold text-gray-900">DigiTax compliance — integrated directly into ERPNext invoicing</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Invoices validated against KRA rules, submitted via DigiTax, and reconciled in your ERPNext ledger — so compliance happens without slowing down your billing workflow.</p>
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
                  <span>We review your tax compliance requirements and current invoice flows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span>We design the DigiTax integration and ERPNext tax configuration.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">03</span>
                  <span>We build, test, deploy, and support go-live.</span>
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
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">From kickoff to a live, fully automated integration in three clear steps.</p>
          </div>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-11 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px bg-gradient-to-r from-transparent via-[#2F966E]/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {howItWorks.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  {/* Step bubble */}
                  <div className="relative z-10 w-[5.5rem] h-[5.5rem] rounded-2xl bg-white border-2 border-[#2F966E]/20 shadow-lg shadow-[#2F966E]/10 flex flex-col items-center justify-center mb-6 group-hover:border-[#2F966E] group-hover:shadow-[#2F966E]/20 transition-all duration-300">
                    <span className="text-[10px] font-bold text-[#2F966E]/50 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-4xl font-black text-[#2F966E] leading-none mt-0.5">{i + 1}</span>
                  </div>
                  {/* Card */}
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
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Solutions that benefit from DigiTax integration</h2>
            <p className="text-gray-500 mt-2 text-sm">DigiTax compliance is relevant wherever your business generates taxable invoices.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Accounting Software", href: "/solutions/accounting-software", desc: "Ensure every sales invoice carries correct tax codes" },
              { label: "POS System", href: "/solutions/pos-system", desc: "Tax-compliant receipts issued at every point of sale" },
              { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration", desc: "Combine DigiTax with direct eTIMS submission" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate your tax compliance?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the integration in action — we&apos;ll connect ERPNext to DigiTax for full compliance.
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
