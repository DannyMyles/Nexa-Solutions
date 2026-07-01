import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBuilding, FaGraduationCap, FaHospital, FaIndustry, FaLandmark, FaMoneyBillWave, FaShoppingCart, FaTractor, FaTruck, FaUserTie, FaWarehouse, FaHome } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Industries We Serve | ERPNext Implementation Kenya",
  description: "NexaGen Solutions delivers ERPNext implementations across manufacturing, healthcare, retail, logistics, education, and more — tailored to each sector's workflows and compliance needs in Kenya.",
  keywords: ["ERPNext manufacturing Kenya", "ERPNext healthcare Kenya", "ERPNext retail Kenya", "ERP for logistics Kenya", "industry ERP Kenya", "sector-specific ERP Kenya"],
  alternates: { canonical: "https://nexagensolutions.com/industries" },
  openGraph: {
    title: "Industries We Serve | ERPNext Implementation Kenya",
    description: "ERPNext solutions tailored for manufacturing, healthcare, retail, logistics, education, and more — deployed across Kenya and East Africa.",
    url: "https://nexagensolutions.com/industries",
    type: "website",
  },
};

const industries = [
  {
    icon: FaIndustry,
    name: "Manufacturing & Production",
    description:
      "Track raw materials, manage production orders, control quality, and keep your supply chain connected — all in one system.",
    challenges: ["Bill of Materials management", "Production scheduling", "Quality control", "Cost tracking"],
    solutions: [
      { label: "Manufacturing & Production Planning", href: "/solutions/manufacturing-and-production-planning" },
      { label: "Inventory & Warehouse Management", href: "/solutions/inventory-and-warehouse-management" },
    ],
    integrations: [],
  },
  {
    icon: FaShoppingCart,
    name: "Retail & E-commerce",
    description:
      "Real-time stock visibility across branches, M-Pesa and card payments, and automated daily reconciliation — so retail operations run without manual data entry.",
    challenges: ["Multi-location stock", "Payment reconciliation", "Supplier management", "Sales reporting"],
    solutions: [
      { label: "POS System", href: "/solutions/pos-system" },
      { label: "E-commerce Integration", href: "/solutions/e-commerce-integration" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
  {
    icon: FaHospital,
    name: "Healthcare",
    description:
      "Patient billing, insurance claims, pharmacy inventory, and staff payroll — structured and connected within a single integrated environment.",
    challenges: ["Patient billing & insurance", "Pharmacy stock control", "Staff shift management", "Regulatory compliance"],
    solutions: [
      { label: "Hospital Management System", href: "/solutions/hospital-management-system" },
      { label: "HR & Payroll Software", href: "/solutions/hr-and-payroll-software" },
    ],
    integrations: [
      { label: "Biometric Data Integration", href: "/integrations/biometric-data-integration" },
      { label: "Payment Gateway Integration", href: "/integrations/payment-gateway-integration" },
    ],
  },
  {
    icon: FaGraduationCap,
    name: "Education",
    description:
      "Fee collection via M-Pesa, student records, staff payroll, and biometric attendance — giving institutions full visibility from admissions to accounts.",
    challenges: ["Fee management & reminders", "Student records", "Staff payroll compliance", "Biometric attendance"],
    solutions: [
      { label: "Learning Management System", href: "/solutions/learning-management-system" },
      { label: "HR & Payroll Software", href: "/solutions/hr-and-payroll-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
      { label: "Biometric Data Integration", href: "/integrations/biometric-data-integration" },
    ],
  },
  {
    icon: FaMoneyBillWave,
    name: "Microfinance & Banking",
    description:
      "Loan origination, disbursement, repayment tracking, and CBK compliance reporting — purpose-built for licensed microfinance institutions.",
    challenges: ["Loan lifecycle management", "CBK regulatory reporting", "Online repayment collection", "Client account management"],
    solutions: [
      { label: "Microfinance Core Banking Software", href: "/solutions/microfinance-core-banking-software" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
      { label: "Payment Gateway Integration", href: "/integrations/payment-gateway-integration" },
    ],
  },
  {
    icon: FaHome,
    name: "Real Estate & Property",
    description:
      "Lease management, tenant M-Pesa rent collection, maintenance tracking, and VAT-compliant invoicing for property managers and landlords.",
    challenges: ["Tenant rent collection", "Lease and contract management", "Maintenance workflows", "VAT and KRA compliance"],
    solutions: [
      { label: "Real Estate Property Management", href: "/solutions/real-estate-property-management" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
  {
    icon: FaTruck,
    name: "Logistics & Distribution",
    description:
      "Fleet management, route costing, customer delivery tracking, and supplier payment reconciliation — connected to your finance ledger in real time.",
    challenges: ["Fleet cost management", "Delivery tracking", "Supplier invoicing", "Branch reconciliation"],
    solutions: [
      { label: "Inventory & Warehouse Management", href: "/solutions/inventory-and-warehouse-management" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
    ],
  },
  {
    icon: FaWarehouse,
    name: "Wholesale & Distribution",
    description:
      "Multi-warehouse stock control, purchase order management, customer credit limits, and automated reconciliation across branches.",
    challenges: ["Multi-warehouse inventory", "Customer credit management", "Purchase order workflows", "Branch-level reporting"],
    solutions: [
      { label: "Inventory & Warehouse Management", href: "/solutions/inventory-and-warehouse-management" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
  {
    icon: FaLandmark,
    name: "Legal Practice",
    description:
      "Matter billing, trust account management, time tracking, and compliance-ready financial records — purpose-fitted to legal workflows.",
    challenges: ["Matter-based billing", "Trust account compliance", "Time & expense tracking", "Client invoicing"],
    solutions: [
      { label: "Legal Practice Management", href: "/solutions/legal-practice-management" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
  {
    icon: FaUserTie,
    name: "Professional Services",
    description:
      "Project-based billing, retainer management, staff utilisation tracking, and automated invoicing for agencies and consulting firms.",
    challenges: ["Project time & billing", "Retainer management", "Staff utilisation", "Client reporting"],
    solutions: [
      { label: "CRM Software", href: "/solutions/crm-software" },
      { label: "HR & Payroll Software", href: "/solutions/hr-and-payroll-software" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "Payment Gateway Integration", href: "/integrations/payment-gateway-integration" },
    ],
  },
  {
    icon: FaTractor,
    name: "Agriculture & Agribusiness",
    description:
      "Farm input procurement, produce tracking, farmer payment processing via M-Pesa, and compliance invoicing for agribusiness operations.",
    challenges: ["Input & produce management", "Farmer payment processing", "Traceability & compliance", "Seasonal cost tracking"],
    solutions: [
      { label: "Inventory & Warehouse Management", href: "/solutions/inventory-and-warehouse-management" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
    ],
  },
  {
    icon: FaBuilding,
    name: "Construction & Real Estate Dev",
    description:
      "Project cost tracking, subcontractor management, progress billing, and materials procurement — with full visibility into project profitability.",
    challenges: ["Project cost control", "Subcontractor payments", "Progress billing", "Materials procurement"],
    solutions: [
      { label: "Manufacturing & Production Planning", href: "/solutions/manufacturing-and-production-planning" },
      { label: "Accounting Software", href: "/solutions/accounting-software" },
    ],
    integrations: [
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-36 overflow-hidden min-h-[520px] flex items-center">
        <Image
          src="/images/ChatGPT Image Jun 12, 2026, 04_53_30 PM.png"
          alt="Business operations across industries served by NexaGen Solutions"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E1C]/92 via-[#1A5C42]/80 to-[#2F966E]/40" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#86D4AD] uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-[#2F966E]" />
              Who We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Business systems built for<br className="hidden sm:block" /> your industry.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              Every industry has distinct workflows, compliance requirements, and integration needs. We configure our systems to fit your sector — not the other way around.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-full bg-[#2F966E] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#2F966E]/25 transition-all duration-300 hover:bg-[#267A5A] hover:shadow-xl"
              >
                Book a Guided Demo
              </Link>
              <Link
                href="/contact?intent=audit"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/10"
              >
                Request a Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col hover:border-[#2F966E]/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2F966E]/10 flex items-center justify-center shrink-0">
                    <industry.icon className="w-5 h-5 text-[#2F966E]" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mt-1">{industry.name}</h2>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">{industry.description}</p>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key challenges we solve</p>
                  <ul className="space-y-1.5">
                    {industry.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2F966E] shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-3 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Relevant solutions</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="text-xs font-semibold text-[#2F966E] bg-[#2F966E]/10 px-3 py-1.5 rounded-full hover:bg-[#2F966E]/20 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {industry.integrations.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Integrations</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.integrations.map((i) => (
                          <Link
                            key={i.label}
                            href={i.href}
                            className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#2F966E] hover:text-[#2F966E] transition-colors"
                          >
                            {i.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2F966E] to-[#267A5A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don&apos;t see your industry listed?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Our solutions are flexible enough for almost any business model. Tell us what you do and we&apos;ll show you how it fits.
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
