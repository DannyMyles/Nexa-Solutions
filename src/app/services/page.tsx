import { Metadata } from "next";
import {
  FaTools,
  FaChartLine,
  FaCogs,
  FaPlug,
  FaHeadset,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERPNext Implementation Services in Kenya | NexaGen Solutions",
  description: "ERPNext implementation, customization, integration, and ongoing support services for businesses across Kenya and East Africa. From audit to go-live and beyond.",
  keywords: ["ERPNext implementation services Kenya", "Frappe customization Kenya", "ERP integration Kenya", "ERPNext support Kenya", "business systems implementation Kenya"],
  alternates: { canonical: "https://nexagensolutions.com/services" },
  openGraph: {
    title: "ERPNext Implementation Services in Kenya | NexaGen Solutions",
    description: "ERPNext implementation, customization, integration, and long-term support — tailored for Kenyan and East African businesses.",
    url: "https://nexagensolutions.com/services",
    type: "website",
  },
};

const services = [
  {
    icon: FaTools,
    title: "ERPNext Implementation",
    description:
      "Complete ERPNext implementation tailored to your business — from initial setup to full deployment and go-live support.",
    features: [
      "System configuration and setup",
      "Data migration from legacy systems",
      "User training and onboarding",
      "Go-live support and stabilization",
      "Post-implementation review",
    ],
    benefits: [
      "Faster time to value",
      "Minimal disruption to operations",
      "Optimized system performance",
      "Comprehensive knowledge transfer",
    ],
  },
  {
    icon: FaChartLine,
    title: "Business Process Analysis",
    description:
      "We map your current workflows, identify gaps, and design cleaner, faster operating models built around how your business actually works.",
    features: [
      "Process mapping and documentation",
      "Gap analysis and bottleneck identification",
      "Process optimization recommendations",
      "Workflow automation design",
      "Performance benchmarks",
    ],
    benefits: [
      "Improved operational efficiency",
      "Fewer manual processes",
      "Better resource utilization",
      "Clearer process visibility",
    ],
  },
  {
    icon: FaCogs,
    title: "Customization & Automation",
    description:
      "From custom fields to approval flows, we shape ERPNext so your team spends less time on manual work and more on what matters.",
    features: [
      "Custom fields and doctypes",
      "Custom app development",
      "Report and dashboard customization",
      "Approval and workflow automation",
      "UI/UX modifications",
    ],
    benefits: [
      "System that fits your workflow exactly",
      "Higher user adoption",
      "Better reporting capabilities",
      "Reduced manual entry",
    ],
  },
  {
    icon: FaPlug,
    title: "Integration Services",
    description:
      "We connect ERPNext to your payments, websites, and external systems so data moves once and stays accurate across the board.",
    features: [
      "M-Pesa payment integration",
      "KRA eTIMS tax compliance",
      "Payment gateway integration",
      "E-commerce platform integration",
      "Biometric attendance sync",
      "Bank reconciliation automation",
      "Custom API and webhook development",
    ],
    benefits: [
      "Unified business data",
      "Automated data flow",
      "Eliminated duplicate entry",
      "Real-time synchronization",
    ],
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support & Maintenance",
    description:
      "You get a partner after go-live — not just a handover document. We keep your system current, secure, and running smoothly.",
    features: [
      "Dedicated technical support desk",
      "System updates and upgrades",
      "Performance monitoring",
      "Security patches and backups",
      "Statutory compliance updates",
    ],
    benefits: [
      "Peace of mind",
      "System reliability",
      "Always on the latest version",
      "No subscriptions or monthly SaaS fees",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your workflows, systems, and pain points to establish a clear baseline." },
  { step: "02", title: "Design", description: "We create a tailored implementation plan with defined scope, integrations, and milestones." },
  { step: "03", title: "Implement", description: "We configure ERPNext, migrate data, train users, and manage go-live." },
  { step: "04", title: "Support", description: "We provide ongoing maintenance, upgrades, and hands-on post-go-live support." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-72 h-72 bg-[#2F966E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-96 h-96 bg-[#2F966E]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">
              ERPNext Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-5">
              End-to-end ERPNext delivery — from first audit to long-term support
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We implement, customize, integrate, and support ERPNext for businesses across Kenya and East Africa.
              Every engagement is scoped to your workflow, not a generic template.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2F966E] text-white font-semibold rounded-full hover:bg-[#267A5A] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Guided Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#2F966E] hover:text-[#2F966E] transition-all duration-300"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">What we do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our core service areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Five areas of expertise, each delivered as part of a structured engagement — not piecemeal projects.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-[#2F966E]/10 rounded-2xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-[#2F966E]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">What&apos;s included</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <FaCheck className="w-4 h-4 text-[#2F966E] shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-5">Business outcomes</h4>
                    <div className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 p-3 bg-white rounded-xl">
                          <div className="w-6 h-6 bg-[#2F966E]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheck className="w-3 h-3 text-[#2F966E]" />
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <Link
                        href="/contact?intent=demo"
                        className="inline-flex items-center gap-2 text-[#2F966E] font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Discuss this service
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
              A structured, transparent approach that maximizes ROI and team adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F966E]/30 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-[#2F966E]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2F966E] to-[#267A5A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to scope the right solution?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            See the platform in action or talk through your requirements — we&apos;ll shape the engagement around what your team actually needs.
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
