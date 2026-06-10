import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaUniversity,
  FaChartBar,
  FaReceipt,
  FaGlobe,
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Accounting Software | NexaGen Solutions Limited",
  description:
    "Modern accounting workflows with ERPNext: structured ledgers, accurate reporting, and automated reconciliation.",
};

const item = {
  slug: "accounting-software",
  label: "Accounting Software",
  description:
    "Modern accounting workflows with ERPNext: structured ledgers, accurate reporting, and automated reconciliation.",
  bullets: [
    "Chart of Accounts setup",
    "Invoices, payments & journal workflows",
    "Dashboards and financial reporting",
    "Reconciliation and audit-ready trails",
  ],
};

const features = [
  {
    icon: FaBalanceScale,
    title: "Chart of Accounts & Ledger",
    description:
      "Structured multi-level ledger hierarchy with account groups, cost centers, and fiscal year configuration tailored to your business.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Invoicing & Collections",
    description:
      "Automated invoice generation, payment reminders, and accounts receivable tracking to keep cash flow healthy.",
  },
  {
    icon: FaUniversity,
    title: "Bank Reconciliation",
    description:
      "Automated bank statement import and matching against ERPNext transactions to eliminate manual reconciliation errors.",
  },
  {
    icon: FaChartBar,
    title: "Financial Reporting",
    description:
      "P&L, balance sheet, cash flow statements, and custom dashboards that give management real-time visibility.",
  },
  {
    icon: FaReceipt,
    title: "Tax Compliance",
    description:
      "VAT, withholding tax, and eTIMS integration for full KRA regulatory compliance built into every transaction.",
  },
  {
    icon: FaGlobe,
    title: "Multi-currency Support",
    description:
      "Handle transactions in multiple currencies with automatic exchange rate updates and foreign exchange gain/loss tracking.",
  },
];

const clients = [
  { name: "Creams on Cakes", description: "Bakery & Confectionery", logo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Spices Restaurant", description: "Food & Beverage", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Green Valley Farms", description: "Agriculture", logo: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "CGM Logistics", description: "Transportation", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Sunrise Healthcare", description: "Medical Services", logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Elite Retail", description: "Fashion & Retail", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Prime Distributors", description: "Wholesale", logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=96&h=96&q=80" },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your chart of accounts, workflows, and reporting needs." },
  { step: "02", title: "Design", description: "We design the ledger structure, integrations, and automation rules." },
  { step: "03", title: "Implement", description: "We configure, migrate data, train your team, and support go-live." },
  { step: "04", title: "Support", description: "We provide ongoing maintenance, upgrades, and accounting guidance." },
];

const audiences = ["SMEs & Growing Businesses", "Trading Companies", "Service Businesses", "Accounting Firms", "NGOs & Institutions"];

const faqs = [
  { q: "Does ERPNext handle multi-currency?", a: "Yes — full multi-currency support with configurable exchange rate management is included." },
  { q: "Can we migrate data from our existing accounting system?", a: "Yes, we include data migration scoping and execution as part of implementation." },
  { q: "Is it compliant with Kenyan accounting standards?", a: "Yes — we configure the chart of accounts and reporting aligned to KRA and IFRS requirements." },
  { q: "How long does implementation take?", a: "Typically 2–4 weeks depending on chart of accounts complexity and data volume." },
];

export default function AccountingSoftwarePage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#13ACB3]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#13ACB3]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Solutions</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">{item.label}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">{item.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?intent=demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#13ACB3] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#13ACB3]/25 transition-all duration-300 hover:bg-[#109298] hover:shadow-xl"
                >
                  Book a Guided Demo
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden bg-inherit aspect-square">
                <Image
                  src="/images/solutions/accounting.png"
                  alt="Accounting Software"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What we deliver</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                A tailored ERPNext accounting build—ledger setup, integrations, data migration, training, and go-live support.
              </p>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#13ACB3]" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Next steps</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#13ACB3]">01</span>
                  <span>We review your chart of accounts and reporting requirements.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#13ACB3]">02</span>
                  <span>We design the ERPNext ledger blueprint and integrations.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#13ACB3]">03</span>
                  <span>We implement, migrate data, train, and support go-live.</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#13ACB3] px-6 py-3.5 font-semibold text-white hover:bg-[#109298] transition-colors"
                >
                  Get a tailored audit
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">What&apos;s Included</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Key Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every module is configured around your accounting workflow, not a generic template.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#13ACB3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#13ACB3]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#13ACB3]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Companies we&apos;ve helped</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We deliver ERPNext accounting solutions with clear scope, smooth rollout, and long-term support.
            </p>
          </div>
        </div>
        <div className="w-full">
          <ClientCarousel clients={clients} autoPlay autoPlayInterval={4000} variant="full-width" />
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Best Fit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Who it&apos;s for</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span key={a} className="px-5 py-2.5 rounded-full bg-[#13ACB3]/10 text-[#13ACB3] font-semibold text-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">How we work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A proven, transparent methodology that maximizes ROI and user adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#13ACB3]/30 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-[#13ACB3]/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-[#13ACB3] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#13ACB3] to-[#109298]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to modernize your accounting?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the platform in action — we&apos;ll shape the engagement around your finance team&apos;s needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center px-8 py-4 bg-white text-[#13ACB3] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
