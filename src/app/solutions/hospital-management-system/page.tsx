import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaUserMd,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaPills,
  FaFlask,
  FaShieldAlt,
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Hospital Management System in Kenya",
  description:
    "ERPNext hospital management system in Kenya — patient billing, pharmacy inventory, staff scheduling, insurance claims, and NHIF compliance for Kenyan healthcare facilities.",
  keywords: ["hospital management system Kenya", "HMS Kenya", "healthcare ERP Kenya", "patient billing Kenya", "pharmacy management Kenya"],
  openGraph: {
    title: "Hospital Management System in Kenya | NexaGen Solutions Limited",
    description: "ERPNext HMS in Kenya — patient billing, pharmacy, staff scheduling, NHIF compliance.",
    url: "https://www.nexasolutions.co.ke/solutions/hospital-management-system",
    type: "website",
  },
};

const item = {
  slug: "hospital-management-system",
  label: "Hospital Management System",
  description:
    "Improve operational visibility across patients, services, billing, inventory, and approvals.",
  bullets: [
    "Patient and service records",
    "Billing workflows and invoicing",
    "Inventory control for operations",
    "Reporting dashboards for management",
  ],
  pills: ["Patient Records", "Billing & Invoicing", "Inventory Control", "Management Reports"],
};

const features = [
  {
    icon: FaUserMd,
    title: "Patient Registration & Records",
    description:
      "Centralized patient profiles with medical history, visit records, and document attachments accessible across departments.",
  },
  {
    icon: FaCalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Calendar-based scheduling with automated reminders, waitlist management, and multi-department booking.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Billing & Claims Management",
    description:
      "Generate itemized bills, process insurance claims, and track payment status across NHIF, private, and cash patients.",
  },
  {
    icon: FaPills,
    title: "Pharmacy & Drug Inventory",
    description:
      "Real-time stock tracking, reorder alerts, and dispensing records linked to prescriptions and clinical notes.",
  },
  {
    icon: FaFlask,
    title: "Laboratory Management",
    description:
      "Test request tracking, result entry, and structured reporting for diagnostic departments with seamless billing integration.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Audit Trails",
    description:
      "Role-based access controls, approval workflows, and complete audit logs to meet regulatory and accreditation requirements.",
  },
];


const processSteps = [
  { step: "01", title: "Discovery", description: "We map your clinical workflows, billing rules, and reporting needs." },
  { step: "02", title: "Design", description: "We design the HMS blueprint, integrations, and approval structures." },
  { step: "03", title: "Implement", description: "We configure, migrate patient data, train staff, and support go-live." },
  { step: "04", title: "Support", description: "We provide ongoing maintenance, compliance updates, and system reviews." },
];

const audiences = ["Private Hospitals & Clinics", "Diagnostic Centers", "Nursing Homes", "Healthcare Networks", "Medical Service Providers"];

const faqs = [
  { q: "Does it support NHIF billing?", a: "Yes — we configure billing workflows aligned to NHIF claim submission requirements." },
  { q: "Can multiple departments use it simultaneously?", a: "Yes — role-based access ensures each department sees only the data relevant to their function." },
  { q: "Does it handle pharmacy and lab workflows?", a: "Yes — pharmacy dispensing and lab result entry workflows are included in the implementation." },
  { q: "Is patient data kept confidential?", a: "Yes — strict access controls and full audit trails are enforced throughout the system." },
];

export default function HospitalManagementSystemPage() {
  if (!item?.slug) notFound();

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
                src="/images/solutions/hospital_managementl.jpeg"
                alt="Hospital Management System"
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
              <h2 className="text-2xl font-bold text-gray-900">End-to-end hospital operations — unified in one system</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Patients, billing, inventory, and reporting connected in a single platform — so your clinical and administrative teams always have the full picture.</p>
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
                  <span>We assess your clinical workflows, billing structure, and compliance needs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">02</span>
                  <span>We design the system architecture, integrations, and department flows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2F966E]">03</span>
                  <span>We implement, train staff across departments, and support go-live.</span>
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
              Every module is built around your facility&apos;s workflow — from registration to discharge and billing.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Organizations we&apos;ve helped</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We deliver HMS solutions with clear scope, smooth rollout, and long-term support.
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
              A proven methodology that minimizes disruption to patient care during implementation.
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
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Recommended integrations for healthcare</h2>
            <p className="text-gray-500 mt-2 text-sm">Extend your HMS with these integrations for seamless billing and payments.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Payment Gateway Integration", href: "/integrations/payment-gateway-integration", desc: "Accept card, mobile & online payments" },
              { label: "M-Pesa Integration", href: "/integrations/mpesa-integration", desc: "Reconcile M-Pesa billing automatically" },
              { label: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration", desc: "Ensure VAT compliance on all invoices" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to transform your facility operations?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the HMS in action — we&apos;ll shape the engagement around your facility&apos;s needs.
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
