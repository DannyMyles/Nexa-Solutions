import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  title: "Accounting Software | Nexa Solutions",
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
  { name: "Creams on Cakes", description: "Bakery & Confectionery", logo: "CoC" },
  { name: "Spices Restaurant", description: "Food & Beverage", logo: "SR" },
  { name: "Green Valley Farms", description: "Agriculture", logo: "GV" },
  { name: "CGM Logistics", description: "Transportation", logo: "CGM" },
  { name: "Sunrise Healthcare", description: "Medical Services", logo: "SH" },
  { name: "Elite Retail", description: "Fashion & Retail", logo: "ER" },
  { name: "Prime Distributors", description: "Wholesale", logo: "PD" },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your chart of accounts, workflows, and reporting needs." },
  { step: "02", title: "Design", description: "We design the ledger structure, integrations, and automation rules." },
  { step: "03", title: "Implement", description: "We configure, migrate data, train your team, and support go-live." },
  { step: "04", title: "Support", description: "We provide ongoing maintenance, upgrades, and accounting guidance." },
];

export default function AccountingSoftwarePage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#14B8A6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">{item.label}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">{item.description}</p>
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
                  <span>We review your chart of accounts and reporting requirements.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">02</span>
                  <span>We design the ERPNext ledger blueprint and integrations.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">03</span>
                  <span>We implement, migrate data, train, and support go-live.</span>
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

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">What&apos;s Included</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Key Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every module is configured around your accounting workflow, not a generic template.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#14B8A6]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#14B8A6]" />
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
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Clients</span>
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">How we work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A proven, transparent methodology that maximizes ROI and user adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-[#14B8A6]/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to modernize your accounting?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the platform in action — we&apos;ll shape the engagement around your finance team&apos;s needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Demo
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
