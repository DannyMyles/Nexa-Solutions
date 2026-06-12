import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaBuilding, FaGraduationCap, FaHospital, FaIndustry, FaLandmark, FaMoneyBillWave, FaShoppingCart, FaTractor, FaTruck, FaUserTie, FaWarehouse, FaHome } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Industries We Serve | NexaGen Solutions Limited",
  description:
    "NexaGen Solutions delivers ERPNext implementations across 12+ industries in Kenya and East Africa — tailored to your sector's workflows, compliance, and integration needs.",
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
    integrations: [
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
    ],
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
      "Patient billing, insurance claims, pharmacy inventory, and staff payroll — structured and connected within a single ERPNext environment.",
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
      { label: "School, College & University Management", href: "/solutions/school-college-and-university-management-software" },
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
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
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
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
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
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
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
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
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
      { label: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
      { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#2F966E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Who We Serve</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            ERPNext built for your industry
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
            Every industry has distinct workflows, compliance requirements, and integration needs. We configure ERPNext to fit your sector — not the other way around.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center justify-center rounded-full bg-[#2F966E] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#2F966E]/25 transition-all duration-300 hover:bg-[#267A5A] hover:shadow-xl"
            >
              Book a Guided Demo
            </Link>
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold border-2 border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-[#2F966E] hover:text-[#2F966E]"
            >
              Request a Free Audit
            </Link>
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
            ERPNext is flexible enough for almost any business model. Tell us what you do and we&apos;ll show you how it fits.
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
