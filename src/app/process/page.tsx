import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChartPie,
  FaCheck,
  FaClipboardList,
  FaCode,
  FaHandshake,
  FaPencilRuler,
  FaRocket,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "How We Work | NexaGen Solutions Limited",
  description:
    "A transparent look at how NexaGen Solutions delivers ERPNext implementations — from the first discovery call through go-live and long-term support.",
};

const phases = [
  {
    step: "01",
    icon: FaClipboardList,
    title: "Discovery & Audit",
    duration: "1–2 weeks",
    color: "from-blue-500 to-cyan-500",
    description:
      "Every engagement starts with a free discovery call. We map your current workflows, identify where time and money are being lost, and produce a written findings report — no obligation to proceed.",
    activities: [
      "Stakeholder interviews and process walkthroughs",
      "Current system and data flow audit",
      "Gap analysis and pain point documentation",
      "High-level roadmap and recommended scope",
    ],
    deliverable: "Written audit report with prioritised recommendations",
  },
  {
    step: "02",
    icon: FaPencilRuler,
    title: "Solution Design",
    duration: "1–2 weeks",
    color: "from-indigo-500 to-purple-500",
    description:
      "We define the exact scope of the implementation: which ERPNext modules, which integrations, what data to migrate, and how go-live will be structured. You approve everything before a single line is configured.",
    activities: [
      "Module selection and configuration scope",
      "Integration architecture and API contracts",
      "Data migration strategy and mapping",
      "Training plan and rollout sequencing",
    ],
    deliverable: "Signed solution design document and project plan",
  },
  {
    step: "03",
    icon: FaCode,
    title: "Implementation",
    duration: "3–8 weeks",
    color: "from-teal-500 to-emerald-500",
    description:
      "We configure ERPNext, build integrations, migrate your data, and run parallel testing. You see the system working in a staging environment before anything touches production.",
    activities: [
      "ERPNext module configuration and customisation",
      "Integration development and end-to-end testing",
      "Data migration, cleaning, and validation",
      "User acceptance testing with your team",
    ],
    deliverable: "Production-ready system, fully tested",
  },
  {
    step: "04",
    icon: FaUserCheck,
    title: "Training & Go-live",
    duration: "1 week",
    color: "from-amber-500 to-orange-500",
    description:
      "We train your users in role-specific sessions — not a generic walkthrough of every feature. Go-live happens with us monitoring the system in real time so issues are caught before they become problems.",
    activities: [
      "Role-based user training sessions",
      "Admin and super-user training",
      "Go-live monitoring and hypercare support",
      "Documentation and quick-reference guides",
    ],
    deliverable: "Live system with trained users and go-live report",
  },
  {
    step: "05",
    icon: FaChartPie,
    title: "Optimise & Support",
    duration: "Ongoing",
    color: "from-rose-500 to-pink-500",
    description:
      "After go-live, we stay close. Monthly check-ins, support for ERPNext updates, new automation as your business scales, and fast response when something needs attention.",
    activities: [
      "Post-go-live support and issue resolution",
      "Reporting and dashboard refinement",
      "New automation and workflow improvements",
      "ERPNext version updates and compliance patches",
    ],
    deliverable: "Active support contract with defined SLAs",
  },
];

const principles = [
  {
    icon: FaClipboardList,
    title: "Audit before we scope",
    description:
      "We never quote before we understand. Every engagement starts with a proper discovery so the scope reflects your real situation, not our assumptions.",
  },
  {
    icon: FaShieldAlt,
    title: "No surprises",
    description:
      "You see and approve the solution design before implementation starts. Change requests mid-project are documented and costed transparently.",
  },
  {
    icon: FaHandshake,
    title: "Your team owns the system",
    description:
      "We train your staff to run ERPNext independently. A system your team can't use without calling us isn't a success — it's a dependency.",
  },
  {
    icon: FaRocket,
    title: "Start with the bottleneck",
    description:
      "We identify the highest-impact area first. You get measurable value faster instead of waiting for a months-long full-company rollout.",
  },
];

const faqs = [
  {
    q: "How long does a typical ERPNext implementation take?",
    a: "It depends on scope. A focused single-module go-live typically takes 4–6 weeks from kickoff. A full multi-module implementation across a larger business runs 8–16 weeks. We confirm the timeline during the solution design phase.",
  },
  {
    q: "Do we need to buy ERPNext licenses?",
    a: "ERPNext is open-source — there are no per-user license fees for the on-premise version. We charge for the implementation, configuration, and support. We can also advise on Frappe Cloud hosting if you prefer a managed option.",
  },
  {
    q: "What data can be migrated from our existing system?",
    a: "We migrate customers, suppliers, items, opening balances, and transaction history. The exact scope depends on what your current system can export. We assess this during the audit phase and provide a clear migration plan.",
  },
  {
    q: "Can we start small and expand later?",
    a: "Yes — and we recommend it. Most clients start with accounts and one operational module, then add HR, inventory, or integrations once the core is stable. ERPNext is designed for phased adoption.",
  },
  {
    q: "What ongoing support do you provide after go-live?",
    a: "We offer monthly support contracts covering issue resolution, user questions, system updates, and proactive optimisation. Support SLAs and response times are defined in the contract before go-live.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 overflow-hidden min-h-[520px] flex items-center">
        <Image
          src="/images/ChatGPT Image Jun 12, 2026, 04_53_30 PM.png"
          alt=""
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
              Our Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              How we deliver your<br className="hidden sm:block" /> business system.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              A transparent, five-phase process — from the first discovery call to long-term support. No surprises, no vague scope, no handover-and-goodbye.
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

      {/* Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Five phases, zero ambiguity</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every phase has clear inputs, activities, and a defined deliverable. You always know where we are and what comes next.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={phase.step} className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 rounded-2xl border border-gray-100 overflow-hidden">
                {/* Left: phase header */}
                <div className={`bg-gradient-to-br ${phase.color} p-8 flex flex-col justify-between`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Phase {phase.step}</div>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 w-fit">
                    <FaCalendarAlt className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-sm font-semibold">{phase.duration}</span>
                  </div>
                </div>

                {/* Right: content */}
                <div className="bg-gray-50 p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">{phase.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Activities</p>
                      <ul className="space-y-2">
                        {phase.activities.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="w-3.5 h-3.5 text-[#2F966E] mt-0.5 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Deliverable</p>
                      <div className="rounded-xl bg-white border border-gray-200 p-4">
                        <p className="text-sm font-semibold text-gray-800">{phase.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">How We Think</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Principles behind every engagement</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#2F966E]/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-[#2F966E]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2F966E] to-[#267A5A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to start your implementation?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            The first step is a free discovery call — we&apos;ll map your workflows and give you a clear picture of what the right system can do for your business.
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
              href="/contact?intent=audit"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
            >
              Request a Free Audit
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
