import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBoxes,
  FaWarehouse,
  FaExchangeAlt,
  FaClipboardCheck,
  FaBarcode,
  FaChartBar,
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Inventory & Warehouse Management Software Kenya | NexaGen Solutions Limited",
  description:
    "Streamline stock control with ERPNext. Improve accuracy, automate movements, and keep your warehouse operations audit-ready.",
};

const item = {
  label: "Inventory and Warehouse Management",
  description:
    "Streamline stock control with ERPNext. Improve accuracy, automate movements, and keep your warehouse operations audit-ready.",
  bullets: [
    "Stock reconciliation and audit-ready trails",
    "Purchase, sales, and transfer workflows",
    "Barcode/scan-ready processes",
    "Warehouse transfers with accurate valuation",
  ],
};

const features = [
  {
    icon: FaBoxes,
    title: "Stock Item Master Setup",
    description:
      "Configure items with variants, units of measure, reorder levels, and valuation methods tailored to your warehouse structure.",
  },
  {
    icon: FaWarehouse,
    title: "Multi-warehouse Management",
    description:
      "Manage multiple stores, warehouses, and bin locations with accurate stock visibility and inter-warehouse transfer workflows.",
  },
  {
    icon: FaExchangeAlt,
    title: "Purchase & Sales Receipts",
    description:
      "Automate goods receipt notes, delivery notes, and stock adjustments linked directly to purchase orders and sales orders.",
  },
  {
    icon: FaClipboardCheck,
    title: "Stock Reconciliation & Audits",
    description:
      "Run physical stock counts, reconcile variances, and generate audit-ready reports with full transaction history.",
  },
  {
    icon: FaBarcode,
    title: "Batch & Serial Number Tracking",
    description:
      "Track stock by batch number, serial number, and expiry date for full traceability across every movement.",
  },
  {
    icon: FaChartBar,
    title: "Demand Forecasting & Reorder",
    description:
      "Automated reorder point alerts, stock aging reports, and demand planning dashboards to eliminate stockouts and overstock.",
  },
];

const clients = [
  { name: "Prime Distributors", description: "Wholesale", logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Green Valley Farms", description: "Agriculture", logo: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "CGM Logistics", description: "Transportation", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Elite Retail", description: "Fashion & Retail", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Creams on Cakes", description: "Bakery & Confectionery", logo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Spices Restaurant", description: "Food & Beverage", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Sunrise Healthcare", description: "Medical Services", logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=96&h=96&q=80" },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We review your stock flows, warehouses, movement types, and valuation rules." },
  { step: "02", title: "Design", description: "We design the item master, warehouse hierarchy, and automation workflows." },
  { step: "03", title: "Implement", description: "We migrate data, run reconciliation, train staff, and support go-live." },
  { step: "04", title: "Support", description: "We provide ongoing stock audits, system upgrades, and reporting assistance." },
];

const audiences = ["Distributors & Wholesalers", "Retailers with Warehouses", "Manufacturing Companies", "Import/Export Businesses", "E-commerce Fulfilment"];

const faqs = [
  { q: "Does it support multiple warehouses?", a: "Yes — unlimited warehouse locations with full transfer workflows and valuation between them." },
  { q: "Can we do batch and serial number tracking?", a: "Yes — full lot, batch, and serial number traceability is supported natively in ERPNext." },
  { q: "Does it integrate with the POS module?", a: "Yes — ERPNext POS and inventory are natively integrated; every sale updates stock in real time." },
  { q: "How do we handle stock discrepancies found during audits?", a: "Stock reconciliation tools let you investigate, adjust, and document variances with full audit trails." },
];

export default function InventoryAndWarehouseManagementPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#2F966E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Solutions</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">{item.label}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">{item.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?intent=demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#2F966E] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#2F966E]/25 transition-all duration-300 hover:bg-[#267A5A] hover:shadow-xl"
                >
                  Book a Guided Demo
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden bg-inherit aspect-[4/5]">
                <Image
                  src="/images/solutions/inventory_managemnt.jpeg"
                  alt="Inventory and Warehouse Management"
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
                ERPNext inventory configured to match your warehouse operations — so stock is accurate, processes are repeatable, and reporting is reliable.
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
                  <span><span className="font-semibold">Scope your inventory baseline.</span> We review your stock flows, warehouses, and movement types.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span><span className="font-semibold">Configure ERPNext inventory.</span> We set up items, warehouses, pricing, and workflows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">03</span>
                  <span><span className="font-semibold">Migrate and go live.</span> We migrate data, run reconciliation, train users, and stabilize.</span>
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
              Every module is configured around your warehouse layout, stock types, and operational workflows.
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
              We deliver inventory solutions with clear scope, smooth rollout, and long-term support.
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
              A structured methodology that ensures inventory accuracy and zero disruption at go-live.
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
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Recommended integrations for inventory</h2>
            <p className="text-gray-500 mt-2 text-sm">Extend inventory with live storefront sync and automated payment reconciliation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "E-commerce Integration", href: "/solutions/e-commerce-integration", desc: "Push real-time stock levels to your online store" },
              { label: "M-Pesa Integration", href: "/integrations/mpesa-integration", desc: "Reconcile supplier and customer mobile payments" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to improve inventory accuracy?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the platform in action — we&apos;ll configure it around your warehouse&apos;s exact workflows.
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
