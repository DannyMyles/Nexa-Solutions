import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  FaCheck,
  FaTools,
  FaChartLine,
  FaCogs,
  FaPlug,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "CRM Software | Nexa Solutions",
  description:
    "Track leads and customers end-to-end with pipelines, follow-ups, and actionable sales reporting.",
};

const item = {
  slug: "crm-software",
  label: "CRM Software",
  description:
    "Track leads and customers end-to-end with pipelines, follow-ups, and actionable sales reporting.",
  bullets: [
    "Lead capture and pipeline stages",
    "Quotes, sales workflows and follow-ups",
    "Marketing integrations support",
    "CRM reporting and KPIs",
  ],
};

const services = [
  {
    icon: FaTools,
    title: "ERPNext Implementation",
    description:
      "Complete implementation of ERPNext tailored to your business requirements, from initial setup to full deployment.",
    features: [
      "System configuration and setup",
      "Data migration from legacy systems",
      "User training and onboarding",
      "Go-live support and stabilization",
      "Post-implementation review",
    ],
    benefits: [
      "Reduced implementation time and costs",
      "Minimal disruption to operations",
      "Optimized system performance",
      "Comprehensive knowledge transfer",
    ],
  },
  {
    icon: FaChartLine,
    title: "Business Process Analysis",
    description:
      "In-depth analysis of your current workflows to identify optimization opportunities and design efficient processes.",
    features: [
      "Process mapping and documentation",
      "Gap analysis",
      "Process optimization recommendations",
      "Workflow automation design",
      "Performance benchmarks",
    ],
    benefits: [
      "Improved operational efficiency",
      "Reduced manual processes",
      "Better resource utilization",
      "Clear process visibility",
    ],
  },
  {
    icon: FaCogs,
    title: "System Customization",
    description:
      "Custom extensions and modifications to make ERPNext work exactly how your business needs it to.",
    features: [
      "Custom fields and doctypes",
      "App development",
      "Report customization",
      "Dashboard development",
      "UI/UX modifications",
    ],
    benefits: [
      "Perfect system fit",
      "Improved user adoption",
      "Better reporting capabilities",
      "Enhanced user experience",
    ],
  },
  {
    icon: FaPlug,
    title: "Integration Services",
    description:
      "Seamless integration of ERPNext with your existing systems, third-party applications, and APIs.",
    features: [
      "API development and integration",
      "Tax compliance integration",
      "Payment processing integration",
      "eTIMS - Electronic Tax Invoice Management System",
      "Payment gateway integration",
      "E-commerce platform integration",
      "CRM and accounting integration",
      "Custom webhook setup",
      "Custom API integrations",
    ],
    benefits: [
      "Unified business data",
      "Automated data flow",
      "Reduced duplicate entry",
      "Real-time synchronization",
      "Tax compliance automation",
      "Seamless payment processing",
    ],
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support & Maintenance",
    description:
      "Dedicated support services to keep your ERPNext system running smoothly and efficiently.",
    features: [
      "Technical support desk",
      "System updates and upgrades",
      "Performance monitoring",
      "Security patches",
      "Backup and recovery",
    ],
    benefits: [
      "Peace of mind",
      "System reliability",
      "Security compliance",
      "Latest features access",
      "No subscriptions or monthly fees",
      "Perpetual license",
    ],
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
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business requirements and processes",
  },
  {
    step: "02",
    title: "Design",
    description: "We create a tailored implementation plan",
  },
  {
    step: "03",
    title: "Implement",
    description: "We configure and deploy your ERPNext system",
  },
  {
    step: "04",
    title: "Support",
    description: "We provide ongoing training and maintenance",
  },
];

export default function CrmSoftwarePage() {
  if (!item?.slug) notFound();

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

      {/* What we deliver (category bullets) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What we deliver</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                A tailored ERPNext build for your workflow—setup, integrations, migration, training, and go-live support.
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
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">01</span>
                  <span>We review your scope and data requirements.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">02</span>
                  <span>We design the ERPNext blueprint and integrations.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">03</span>
                  <span>We implement, migrate, train, and support go-live.</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#14B8A6] px-6 py-3.5 font-semibold text-white hover:bg-[#0D9488] transition-colors"
                >
                  Get a tailored audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">
              ERPNext Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              How we help you succeed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Built around your category workflows, delivered through a structured implementation approach.
            </p>
          </div>

          <div className="space-y-14">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-16 h-16 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <FaCheck className="w-4 h-4 text-[#14B8A6] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-0" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h4 className="font-semibold text-gray-900 mb-6">
                      Business Benefits
                    </h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start p-4 bg-white rounded-xl"
                        >
                          <div className="w-6 h-6 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FaCheck className="w-3 h-3 text-[#14B8A6]" />
                          </div>
                          <span className="ml-3 text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">
              Our Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Companies we&apos;ve helped
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We deliver ERPNext solutions with clear scope, smooth rollout, and long-term support.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ClientCarousel clients={clients} autoPlay autoPlayInterval={4000} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              How we work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A proven, transparent methodology that maximizes ROI and adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-[#14B8A6]/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to scope the right solution?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the platform in action, then we&apos;ll shape the engagement around what your team needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Request for Audit
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
            >
              Try Demo Account
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

