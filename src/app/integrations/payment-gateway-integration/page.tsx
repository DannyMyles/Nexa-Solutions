import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Payment Gateway Integration (PayPal, Stripe, etc.) | NexaGen Solutions Limited",
  description:
    "Connect external payment gateways to ERPNext so your sales and finance records stay consistent end-to-end.",
};

const item = {
  slug: "payment-gateway-integration",
  label: "Payment Gateway Integration",
  description:
    "Connect PayPal, Stripe, Flutterwave, and other gateways to ERPNext so every transaction instantly updates your sales and finance records.",
  bullets: [
    "Payment intent capture and webhook flows",
    "Settlement reconciliation",
    "Automatic invoice status updates",
    "Webhook-driven event handling",
  ],
};

const howItWorks = [
  { title: "Connect", description: "We configure your gateway (PayPal, Stripe, Flutterwave, Pesapal) with secure API keys in ERPNext." },
  { title: "Capture", description: "Payment confirmations trigger immediate sales order and invoice status updates in ERPNext in real time." },
  { title: "Settle", description: "Daily settlement reports reconcile gateway payouts against ERPNext accounts for a clean, closed ledger." },
];

const impact = [
  { value: "Real-time", label: "Payment status on every invoice, updated within seconds of confirmation" },
  { value: "Zero", label: "Manual payment recording — all gateway transactions post to ERPNext automatically" },
  { value: "Multi-gateway", label: "Run PayPal, Stripe, and M-Pesa from a single ERPNext instance" },
];

const audiences = ["E-commerce Businesses", "SaaS & Subscription Services", "Event & Ticketing Platforms", "Service Businesses", "Cross-border Sellers"];

const faqs = [
  { q: "Which gateways do you support?", a: "PayPal, Stripe, Flutterwave, and Pesapal — others available on request." },
  { q: "Can we use multiple gateways simultaneously?", a: "Yes — each gateway is configured with its own reconciliation rules and account mapping." },
  { q: "How are refunds handled?", a: "Refund events from the gateway automatically generate credit notes in ERPNext." },
  { q: "Is PCI compliance maintained?", a: "Yes — no card data is stored in ERPNext; all sensitive handling stays with the gateway provider." },
];

export default function PaymentGatewayIntegrationPage() {
  if (!item?.slug) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-6 w-56 h-56 bg-[#14B8A6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Integrations</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">{item.label}</h1>
              <p className="text-sm text-gray-500 mt-1">(PayPal, Stripe, Flutterwave &amp; more)</p>
              <p className="text-lg text-gray-600 leading-relaxed mt-3">{item.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?intent=demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#14B8A6]/25 transition-all duration-300 hover:bg-[#0D9488] hover:shadow-xl"
                >
                  Book a Guided Demo
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden bg-inherit aspect-square">
                <Image
                  src="/images/solutions/erpsystem.jpg"
                  alt="Payment Gateway Integration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we implement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What we implement</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Integration work delivered with clear data mapping, secure authentication, and production-ready monitoring.
              </p>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
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
                  <span>We review your payment gateway, transaction volumes, and reconciliation needs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">02</span>
                  <span>We design the webhook flows, invoice matching, and error handling approach.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#14B8A6]">03</span>
                  <span>We build, test, deploy, and support go-live.</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#14B8A6] px-6 py-3.5 font-semibold text-white hover:bg-[#0D9488] transition-colors"
                >
                  Get a tailored audit
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{i + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Business impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impact.map((stat) => (
              <div key={stat.label} className="p-8 bg-gradient-to-br from-[#14B8A6]/5 to-[#14B8A6]/10 rounded-2xl border border-[#14B8A6]/20 text-center">
                <div className="text-4xl font-bold text-[#14B8A6] mb-2">{stat.value}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Best Fit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Who it&apos;s for</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span key={a} className="px-5 py-2.5 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-semibold text-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-[#14B8A6] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to connect your payment gateway?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Start with a tailored audit or see the integration in action — we&apos;ll sync every payment directly into ERPNext.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
