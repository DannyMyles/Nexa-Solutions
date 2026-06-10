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
  FaDatabase,
  FaHeadset,
  FaHospital,
  FaIndustry,
  FaPlug,
  FaRocket,
  FaShoppingCart,
  FaShieldAlt,
  FaTools,
  FaTruck,
  FaWarehouse,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaChartPie,
  FaClock,

  FaCalendarAlt,
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
      bullets: ["API work", "Payment gateway flows", "Third-party tools"],
    },
];

const valueProps = [
    {
      icon: FaShieldAlt,
      title: "Built for global operations",
      text: "Local compliance, payment processing, payroll, and approval structures are considered from day one.",
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

// NOTE: Pricing section removed from the homepage.
// Package/tier data intentionally kept out to avoid unused-variable warnings.




const industries = [
  { icon: FaBuilding, name: "Manufacturing", backgroundImage: "https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: FaShoppingCart, name: "Retail & E-commerce", backgroundImage: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: FaIndustry, name: "Distribution", backgroundImage: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: FaTruck, name: "Logistics", backgroundImage: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: FaHospital, name: "Healthcare", backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: FaWarehouse, name: "Warehousing", backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const clients = [
  { name: "Creams on Cakes", description: "Bakery & Confectionery", logo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Spices Restaurant", description: "Food & Beverage", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Green Valley Farms", description: "Agriculture", logo: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "CGM Logistics", description: "Transportation", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Sunrise Healthcare", description: "Medical Services", logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Elite Retail", description: "Fashion & Retail", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=96&h=96&q=80" },
  { name: "Prime Distributors", description: "Wholesale", logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=96&h=96&q=80" },
];

// Redesigned process flow with more detail and visual approach
const processSteps = [
  {
    step: "01",
    title: "Audit",
    description:
      "We review the current state of your systems, workflows, and pain points.",
    icon: FaClipboardList,
    deliverables: ["Current state assessment", "Gap analysis report", "High-level roadmap"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We define the right scope, package, integrations, and rollout plan.",
    icon: FaPencilRuler,
    deliverables: ["Detailed solution design", "Integration architecture", "Migration strategy"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "We configure ERPNext, migrate data, and train your users for go-live.",
    icon: FaCode,
    deliverables: ["Configured system", "Data migration", "User training & documentation"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We refine reporting, automation, and support as your business grows.",
    icon: FaChartPie,
    deliverables: ["Performance optimization", "Advanced automation", "Continuous support"],
    color: "from-amber-500 to-orange-500",
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
        <div className="absolute -top-12 left-0 h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-[#13ACB3]/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] lg:h-[26rem] lg:w-[26rem] rounded-full bg-[#13ACB3]/15 blur-3xl animate-float-slower" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#13ACB3]/15 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#13ACB3] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#13ACB3]" />
              ERPNext & Frappe implementation partner
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Modern ERP built for
              <span className="px-2 text-[#13ACB3]">clarity, control, and growth.</span>
            </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                We help you simplify operations, scale faster, and gain full control of your business processes—
                with ERPNext, tailored workflows, and long-term support.
              </p>



            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#13ACB3] hover:text-[#13ACB3]"
              >
                Book a Guided Demo
              </Link>
              <Link
                href="/solutions/accounting-software"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold border border-[#13ACB3] text-gray-700 transition-colors hover:text-[#13ACB3]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
              "Compliance-ready configurations",
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
            <div className="absolute -inset-3 rounded-[2rem] bg-[#13ACB3]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-[#13ACB3]/10 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4">

                <Image
                  src="/images/web.webp"
                  alt="ERPNext dashboard preview"
                  width={900}
                  height={640}
                  className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                  priority
                />

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gray-900 px-4 py-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">Audit-first</p>
                  <p className="mt-2 text-sm font-semibold">
                    We scope the right solution before we quote the build.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#13ACB3] px-4 py-4 text-white shadow-lg shadow-[#13ACB3]/20">
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
          <div className="grid gap-4 rounded-[2rem] border border-gray-200 bg-white/80 p-5 shadow-xl shadow-[#13ACB3]/5 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#13ACB3]/10 text-[#13ACB3]">
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13ACB3]">
              What You Gain
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              ERP that runs your business—clearly, consistently, and fast.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We align ERPNext configuration, integrations, and support around outcomes you can measure from day one.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#13ACB3]/25 hover:shadow-xl"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#13ACB3]/10 text-[#13ACB3] transition-colors group-hover:bg-[#13ACB3] group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheck className="h-3.5 w-3.5 text-[#13ACB3]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13ACB3]">
              Software Solutions & Web Services
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              ERP, business systems, and digital builds—ready to deploy
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-600">
              Explore our software categories and web services—built to fit your workflows, connect your data, and help you operate with confidence.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Software Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "ERP Software Popular",
                  "Accounting Software",
                  "HR & Payroll Software",
                  "Inventory Management",
                  "POS System",
                  "CRM Software",
                  "Fleet Management",
                  "Property Management",
                  "Hospital Management",
                  "Logistics Software", 
                  "Booking Systems",
                  "ERP for Schools",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 border border-gray-100"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#13ACB3]" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Web & Digital</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "All Services",
                  "Web Design",
                  "Custom Website Design",
                  "Corporate Web Development",
                  "E-commerce Payments Integration",
                  "SEO Web Design",
                  "Website Redesign",
                  "Website Maintenance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 border border-gray-100"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#13ACB3]" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-[#13ACB3] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#13ACB3]/25 transition-all duration-300 hover:bg-[#109298] hover:shadow-xl"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13ACB3]">
                Why Choose Nexa
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Your ERP partner—not a vendor.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                You shouldn’t buy uncertainty. We deliver clear scope, measurable outcomes, and support that keeps improving your system long after go-live.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Proven expertise in ERPNext + Frappe implementations—built for real-world workflows.",
                  "Tailored solutions (no one-size-fits-all templates).",
                  "Audit-first scoping to reduce risk, waste, and expensive rework.",
                  "Long-term support mindset: training, optimization, and reliability.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#13ACB3]/10">
                      <FaCheck className="h-3 w-3 text-[#13ACB3]" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#13ACB3]/15" />
              <div className="relative rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { value: "10+", label: "Projects completed" },
                    { value: "5+", label: "Industries served" },
                    { value: "5+", label: "Years experience" },
                    { value: "1", label: "Partner for all stages" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-gray-50 p-5 text-center">
                      <p className="text-3xl font-bold text-[#13ACB3]">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-[#13ACB3] to-[#109298] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Conversion focus</p>
                  <h3 className="mt-3 text-xl font-bold">Turn uncertainty into a roadmap with our delivery process.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    You’ll get clear scope, risks, and opportunities—so pricing is easier to trust and your team knows the next step.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED HOW WE WORK SECTION */}
            {/* REDESIGNED HOW WE WORK SECTION - NO GREEN LINE */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#13ACB3]/10 px-4 py-1.5 mb-4">
              <FaCalendarAlt className="h-3.5 w-3.5 text-[#13ACB3]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#13ACB3]">Our Methodology</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              How we deliver <span className="text-[#13ACB3]">exceptional results</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              A proven, transparent process that transforms your operations from chaos to clarity
            </p>
          </div>

          {/* Horizontal Timeline - Desktop (no line) */}
          <div className="hidden lg:block relative mb-20">
            <div className="relative grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative text-center group">
                  {/* Timeline node */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className={`
                      flex items-center justify-center w-16 h-16 
                      rounded-2xl bg-gradient-to-br ${step.color} 
                      shadow-lg transform transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-xl
                    `}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 mb-4">
                    <span className="text-xs font-bold text-[#13ACB3]">Step {step.step}</span>
                    <span className="text-xs text-gray-400">•</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4 mb-4">{step.description}</p>
                  
                  {/* Deliverables preview */}
                  <div className="mt-2 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key deliverables</p>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item) => (
                        <li key={item} className="text-xs text-gray-600 flex items-center justify-center gap-1.5">
                          <FaCheck className="h-2.5 w-2.5 text-[#13ACB3]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Timeline - Mobile & Tablet (no line) */}
          <div className="lg:hidden relative">
            <div className="space-y-10">
                {processSteps.map((step) => (

                 <div key={step.step} className="relative flex gap-5 group">
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`
                      flex items-center justify-center w-14 h-14 
                      rounded-xl bg-gradient-to-br ${step.color} 
                      shadow-md transform transition-all duration-300 
                      group-hover:scale-105
                    `}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5">
                        <span className="text-xs font-bold text-[#13ACB3]">Step {step.step}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <FaClock className="h-3 w-3" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Deliverables */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <FaCheck className="h-3 w-3 text-[#13ACB3]" />
                        Key deliverables
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.deliverables.map((item) => (
                          <span key={item} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700 shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting metrics / CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#13ACB3] to-[#109298] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by businesses across East Africa</span>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block" />
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center gap-2 text-[#13ACB3] font-semibold text-sm hover:gap-3 transition-all"
              >
                Need to start demo?
                <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  
      {/* Industries Section */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Who we serve</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Industries we support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We&apos;ve implemented ERPNext across a wide range of sectors, each with distinct workflows and compliance requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${industry.backgroundImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#13ACB3] text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <industry.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-white leading-tight">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel — full width */}
      <section className="bg-white py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Companies we&apos;ve helped</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Trusted by businesses across Kenya to deliver ERPNext with clear scope and long-term support.
            </p>
          </div>
        </div>
        <div className="w-full px-4 sm:px-8">
          <ClientCarousel clients={clients} autoPlay autoPlayInterval={4000} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13ACB3]">
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
              href="/contact?intent=demo"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#13ACB3] hover:text-[#13ACB3]"
            >
              Book a Guided Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}