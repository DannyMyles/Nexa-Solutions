"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import {
  FaArrowRight,
  FaBuilding,
  FaCheck,
  FaCogs,
  FaChartLine,
  FaClipboardCheck,
  FaDatabase,
  FaHeadset,
  FaHospital,
  FaIndustry,
  FaPlay,
  FaPlug,
  FaRocket,
  FaShoppingCart,
  FaShieldAlt,
  FaTools,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

const coreServices = [
  {
    icon: FaTools,
    title: "ERPNext Implementation",
    description:
      "We design, configure, and launch ERPNext around the way your business actually works.",
    bullets: ["Discovery and scope", "System setup", "Go-live support"],
  },
  {
    icon: FaChartLine,
    title: "Business Process Analysis",
    description:
      "We map the gaps in your current workflow and turn them into a cleaner, faster operating model.",
    bullets: ["Process mapping", "Gap analysis", "Workflow redesign"],
  },
  {
    icon: FaCogs,
    title: "Customization & Automation",
    description:
      "From custom fields to approval flows, we shape ERPNext so your team spends less time on manual work.",
    bullets: ["Custom apps", "Automation", "Reports & dashboards"],
  },
  {
    icon: FaPlug,
    title: "Integrations",
    description:
      "We connect ERPNext to your payments, websites, and external systems so data moves once and stays accurate.",
    bullets: ["API work", "M-Pesa flows", "Third-party tools"],
  },
];

const valueProps = [
  {
    icon: FaShieldAlt,
    title: "Built for Kenyan operations",
    text: "KRA compliance, M-Pesa reconciliation, payroll, and approval structures are considered from day one.",
  },
  {
    icon: FaDatabase,
    title: "No loose ends",
    text: "Implementation, migration, training, and support are planned as one delivery system, not separate handoffs.",
  },
  {
    icon: FaRocket,
    title: "Fast to value",
    text: "We start with the bottleneck that hurts most, then expand to the rest of the stack once momentum is built.",
  },
  {
    icon: FaHeadset,
    title: "Support that stays",
    text: "You get a partner after go-live, not just a handover document and a goodbye email.",
  },
];

const packages = [
  {
    name: "Foundation",
    badge: "Best for smaller teams",
    price: "KSh 260,000+",
    investment: "Scoped after a free audit",
    description:
      "For businesses that want a clean ERPNext launch with the most important workflows mapped first.",
    features: [
      "Discovery workshop and process audit",
      "Core ERP setup and configuration",
      "Basic migration and onboarding",
      "Launch support and stabilization",
    ],
  },
  {
    name: "Growth",
    badge: "Most popular",
    price: "KSh 650,000+",
    investment: "Fixed scope after discovery",
    description:
      "For teams ready to connect operations, finance, and reporting into a single operating layer.",
    features: [
      "Everything in Foundation",
      "Automation for approvals and handoffs",
      "Custom dashboards and reports",
      "Role-based training for teams",
    ],
  },
  {
    name: "Scale",
    badge: "For multi-department teams",
    price: "KSh 910,000+",
    investment: "Custom scoped for complexity",
    description:
      "For larger operations that need integrations, multi-branch visibility, and deeper governance.",
    features: [
      "Advanced integrations and APIs",
      "Multi-branch and department setup",
      "Extended support and optimization",
      "Roadmap for continuous improvement",
    ],
  },
];

const pricingHighlights = [
  "One-time implementation fee",
  "No recurring licence fees",
  "Audit-led scoping",
];

const industries = [
  { icon: FaBuilding, name: "Manufacturing" },
  { icon: FaShoppingCart, name: "Retail & E-commerce" },
  { icon: FaIndustry, name: "Distribution" },
  { icon: FaTruck, name: "Logistics" },
  { icon: FaHospital, name: "Healthcare" },
  { icon: FaWarehouse, name: "Warehousing" },
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

const process = [
  {
    step: "01",
    title: "Audit",
    description:
      "We review the current state of your systems, workflows, and pain points.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We define the right scope, package, integrations, and rollout plan.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "We configure ERPNext, migrate data, and train your users for go-live.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We refine reporting, automation, and support as your business grows.",
  },
];

export default function Home() {
  const [spotlight, setSpotlight] = useState({ x: 54, y: 36 });

  const handleMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const heroGlow: CSSProperties = {
    background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(20,184,166,0.24) 0%, rgba(20,184,166,0.12) 18%, transparent 55%), linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,255,255,0.64))`,
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <section
        className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
        onPointerMove={handleMove}
        onPointerLeave={() => setSpotlight({ x: 54, y: 36 })}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute inset-0 opacity-80" style={heroGlow} />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(20,184,166,0.09) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-12 left-0 h-80 w-80 rounded-full bg-[#14B8A6]/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-[#14B8A6]/15 blur-3xl animate-float-slower" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/15 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#14B8A6]" />
              ERPNext & Frappe implementation partner
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Modern ERP for Kenyan teams that want{" "}
              <span className="block text-[#14B8A6]">clarity, control, and conversion.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Nexa Solutions helps businesses move from fragmented spreadsheets and manual follow-ups to a
              cleaner operating system with ERPNext, tailored workflows, and support that keeps pace with growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?intent=audit"
                className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#14B8A6]/25 transition-all duration-300 hover:bg-[#0D9488] hover:shadow-xl"
              >
                Request for Audit
                <FaClipboardCheck className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#14B8A6] hover:text-[#14B8A6]"
              >
                Try Demo Account
                <FaPlay className="ml-2 h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-gray-700 transition-colors hover:text-[#14B8A6]"
              >
                Explore Services
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Fixed scope delivery",
                "KRA eTIMS and M-Pesa readiness",
                "No per-user licensing surprises",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#14B8A6]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-[#14B8A6]/10 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
                      Live Preview
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-gray-900">
                      A cleaner operating layer
                    </h2>
                  </div>
                  <div className="rounded-full bg-[#14B8A6]/10 px-3 py-1 text-xs font-semibold text-[#14B8A6]">
                    +24/7 visibility
                  </div>
                </div>

                <Image
                  src="/images/web.webp"
                  alt="ERPNext dashboard preview"
                  width={900}
                  height={640}
                  className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                  priority
                />

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { value: "10+", label: "Projects" },
                    { value: "5+", label: "Industries" },
                    { value: "100%", label: "Focus on fit" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-gray-100"
                    >
                      <p className="text-xl font-bold text-[#14B8A6]">{stat.value}</p>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gray-900 px-4 py-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">Audit-first</p>
                  <p className="mt-2 text-sm font-semibold">
                    We scope the right solution before we quote the build.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#14B8A6] px-4 py-4 text-white shadow-lg shadow-[#14B8A6]/20">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/80">Demo-led</p>
                  <p className="mt-2 text-sm font-semibold">
                    See the platform in action before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-gray-200 bg-white/80 p-5 shadow-xl shadow-[#14B8A6]/5 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#14B8A6]">
              What We Deliver
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Clear service breakdowns that speak to outcomes, not just deliverables.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We keep the messaging practical: what the service solves, what gets configured, and what your team
              should expect after launch.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/25 hover:shadow-xl"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6] transition-colors group-hover:bg-[#14B8A6] group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheck className="h-3.5 w-3.5 text-[#14B8A6]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#14B8A6]">
                Why Nexa
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                A more transparent way to buy ERP services.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                Competitor-style clarity matters: package your engagement, show the scope, and make the value easy
                to understand before the first call.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Audit-first engagements reduce wasted scope and expensive guesswork.",
                  "Packages are arranged around business maturity, not technical jargon.",
                  "Value propositions are explicit so buyers know what they are getting.",
                  "The design stays polished and modern without losing the current brand feel.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/10">
                      <FaCheck className="h-3 w-3 text-[#14B8A6]" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#14B8A6]/15" />
              <div className="relative rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { value: "10+", label: "Projects completed" },
                    { value: "5+", label: "Industries served" },
                    { value: "5+", label: "Years experience" },
                    { value: "1", label: "Partner for all stages" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-gray-50 p-5 text-center">
                      <p className="text-3xl font-bold text-[#14B8A6]">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Conversion focus</p>
                  <h3 className="mt-3 text-xl font-bold">Request a tailored audit before committing to scope.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    This makes pricing easier to trust and gives your team a clear path from problem to plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#14B8A6]">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Structured pricing that helps buyers compare scope quickly.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We keep the tiers easy to understand and open with a free audit so each quote is scoped to the
                actual business need.
              </p>
            </div>
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-5 py-3 text-sm font-semibold text-[#14B8A6] transition-colors hover:bg-[#14B8A6] hover:text-white"
            >
              Book a tailored audit
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {pricingHighlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative rounded-[1.9rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 1
                    ? "border-[#14B8A6]/30 bg-gradient-to-b from-[#14B8A6]/8 to-white"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                {index === 1 && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#14B8A6] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
                  {tier.badge}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{tier.description}</p>

                <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Implementation cost
                  </p>
                  <p className="mt-2 text-3xl font-bold text-[#14B8A6]">{tier.price}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">{tier.investment}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#14B8A6]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact?intent=audit"
                    className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0D9488]"
                  >
                    Request for Audit
                  </Link>
                  <Link
                    href="/contact?intent=demo"
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition-colors hover:border-[#14B8A6] hover:text-[#14B8A6]"
                  >
                    Try Demo Account
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#14B8A6]">
                How We Work
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                A process that feels structured from the first call.
              </h2>
              <div className="mt-8 space-y-4">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-sm font-bold text-[#14B8A6]">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">Industries we support</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The website should communicate fit quickly, so these sectors are surfaced as obvious use cases.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {industries.map((industry) => (
                  <div
                    key={industry.name}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center transition-all duration-300 hover:border-[#14B8A6]/25 hover:shadow-md"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
                      <industry.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{industry.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-gray-100">
                <ClientCarousel clients={clients} autoPlay autoPlayInterval={4000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#14B8A6]">
            Ready to move faster?
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let&apos;s turn your ERPNext plan into a clear, conversion-ready roadmap.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            If you want a tailored assessment, start with an audit. If you want to feel the product, try the demo.
            Either way, the next step is simple.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#14B8A6]/25 transition-all duration-300 hover:bg-[#0D9488]"
            >
              Request for Audit
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#14B8A6] hover:text-[#14B8A6]"
            >
              Try Demo Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
