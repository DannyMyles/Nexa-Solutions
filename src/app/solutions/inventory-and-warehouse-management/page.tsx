import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  FaArrowRight,
  FaCheck,
  FaCogs,
  FaDatabase,
  FaPlug,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Inventory and Warehouse Management | Nexa Solutions",
  description:
    "Efficient inventory tracking and warehouse workflows with ERPNext: real-time stock visibility, audits, and automated movements.",
};

const item = {
  slug: "inventory-and-warehouse-management",
  label: "Inventory and Warehouse Management",
  description:
    "Streamline stock control with ERPNext. Improve accuracy, automate movements, and keep your warehouse operations audit-ready.",
  bullets: [
    "Stock reconciliation and audit-ready trails",
    "Purchase, sales, and transfer workflows",
    "Barcodes/scan-ready processes (where applicable)",
    "Warehouse transfers with accurate valuation",
  ],
};

export default function InventoryAndWarehouseManagementPage() {
  if (!item?.slug) notFound();

  const nextSteps = [
    {
      n: "01",
      t: "Scope & inventory baseline",
      d: "We review your stock flows, warehouses, and movement types.",
    },
    {
      n: "02",
      t: "Configure ERPNext inventory",
      d: "We set up items, warehouses, units, pricing/valuation, and workflows.",
    },
    {
      n: "03",
      t: "Migrate & go-live support",
      d: "We migrate data, run reconciliation, train users, and stabilize operations.",
    },
  ];

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
                ERPNext inventory configured to match your warehouse operations—so stock is accurate, processes are repeatable, and reporting is reliable.
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
                {nextSteps.map((s) => (
                  <div key={s.n} className="flex items-start gap-3">
                    <span className="font-bold text-[#14B8A6]">{s.n}</span>
                    <span>
                      <span className="font-semibold">{s.t}.</span> {s.d}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FaTools,
                t: "Implementation",
                d: "Configure items, warehouses, stock movements, and valuation rules.",
              },
              {
                icon: FaCogs,
                t: "Automation & workflows",
                d: "Set up repeatable processes for purchasing, sales, and transfers.",
              },
              {
                icon: FaDatabase,
                t: "Data migration",
                d: "Import your inventory history and validate reconciliation.",
              },
              {
                icon: FaPlug,
                t: "Integrations",
                d: "Connect e-commerce, POS, or other systems for synchronized stock.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center">
                    <c.icon className="text-[#14B8A6] w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{c.t}</h4>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Improve inventory accuracy.
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Start with a tailored audit, then implement the right warehouse workflows in ERPNext.
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

