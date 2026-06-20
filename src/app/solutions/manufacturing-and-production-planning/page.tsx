import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaSitemap,
  FaCalendarAlt,
  FaClipboardList,
  FaCheckCircle,
  FaTruckLoading,
  FaChartLine,
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Manufacturing & Production Planning Software Kenya",
  description:
    "Plan, schedule, and execute manufacturing workflows with ERPNext: production planning, BOMs, quality checkpoints, and reporting.",
};

const item = {
  label: "Manufacturing and Production Planning",
  description:
    "Plan, schedule, and execute manufacturing workflows with ERPNext — so your teams produce accurately, track execution, and improve throughput.",
  bullets: [
    "BOM setup and production workflows",
    "Production planning and scheduling",
    "Work order execution tracking",
    "Audit-ready reporting and traceability",
  ],
  pills: ["Production Planning", "BOM & Work Orders", "Scheduling", "Traceability"],
};

const features = [
  {
    icon: FaSitemap,
    title: "Bill of Materials Management",
    description:
      "Multi-level BOM setup with raw material quantities, scrap rates, operations, and costing — updated with every revision.",
  },
  {
    icon: FaCalendarAlt,
    title: "Production Planning & Scheduling",
    description:
      "Material requirements planning (MRP), capacity planning, and production schedule management aligned to sales orders.",
  },
  {
    icon: FaClipboardList,
    title: "Work Order Execution",
    description:
      "Create, release, and track work orders through each production stage with real-time status and operator accountability.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Inspection Checkpoints",
    description:
      "In-process and finished goods quality checks linked to work orders with pass/fail records and rejection workflows.",
  },
  {
    icon: FaTruckLoading,
    title: "Subcontracting Management",
    description:
      "Track materials sent to subcontractors, receive finished goods, and reconcile costs against purchase orders.",
  },
  {
    icon: FaChartLine,
    title: "Manufacturing Analytics",
    description:
      "OEE dashboards, production vs. plan reports, scrap analysis, and cost variance reports for operations management.",
  },
];


const processSteps = [
  { step: "01", title: "Discovery", description: "We map your BOMs, work orders, routing, and production constraints." },
  { step: "02", title: "Design", description: "We design the manufacturing module, scheduling logic, and quality flows." },
  { step: "03", title: "Implement", description: "We configure ERPNext, migrate product data, train production staff, and go live." },
  { step: "04", title: "Support", description: "We provide ongoing production reviews, system updates, and analytics setup." },
];

const audiences = ["Light Manufacturers", "Food & Beverage Producers", "Assembly Operations", "Custom Fabricators", "Industrial SMEs"];

const faqs = [
  { q: "Does it support multi-level Bills of Materials?", a: "Yes — nested BOMs with sub-assemblies are fully supported and version-controlled." },
  { q: "Can we plan production against open sales orders?", a: "Yes — MRP-style planning links demand from sales orders directly to production orders." },
  { q: "Does it track actual raw material consumption per work order?", a: "Yes — material requisitions and actual-vs-planned consumption are tracked per production order." },
  { q: "Can we manage outsourced production or job work?", a: "Yes — ERPNext's subcontracting workflows handle outsourced operations with full cost tracking." },
];

export default function ManufacturingAndProductionPlanningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#2F966E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[3fr_7fr] lg:px-8">
            <div>
              <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Solutions</span>
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
                src="/images/solutions/manufacturing.jpeg"
                alt="Manufacturing and Production Planning"
                width={900}
                height={620}
                className="h-auto w-full rounded-3xl object-cover"
                priority
              />
            </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Plan, execute, and track production — from BOM to finished goods</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Every work order, every material consumption, every quality check — visible in real time so your production floor runs on accurate data.</p>
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
                  <span><span className="font-semibold">Baseline your production flow.</span> We map BOMs, work orders, and planning constraints.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span><span className="font-semibold">Configure ERPNext manufacturing.</span> We set up workflows and reporting for your team.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">03</span>
                  <span><span className="font-semibold">Migrate, test, and stabilize.</span> We run go-live support with reconciliation and training.</span>
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

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">What&apos;s Included</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Key Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every module is configured around your production process, machinery, and quality requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2F966E]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2F966E]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#2F966E]" />
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
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Businesses we&apos;ve helped</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We deliver manufacturing solutions with clear scope, smooth rollout, and long-term support.
            </p>
          </div>
        </div>
        <div className="w-full">
          <ClientCarousel />
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-white">
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">How we work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A structured methodology that ensures production accuracy and team adoption from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F966E]/30 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-[#2F966E]/20 mb-4">{s.step}</div>
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

      {/* Related Integrations */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Pair With</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Recommended alongside manufacturing</h2>
            <p className="text-gray-500 mt-2 text-sm">These modules work together to give you full visibility from raw material to finished goods to finance.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Inventory & Warehouse Management", href: "/solutions/inventory-and-warehouse-management", desc: "Track raw materials, WIP, and finished goods" },
              { label: "Accounting Software", href: "/solutions/accounting-software", desc: "Post production costs to your P&L automatically" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to plan production with confidence?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the platform in action — we&apos;ll configure manufacturing planning for your exact workflow.
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
