import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NexaGen Solutions Limited",
  description: "How Nexa Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-gray-600 mt-4">Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                NexaGen Solutions Limited (&quot;we,&quot; &quot;our,&quot; or &quot;the Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. By using our website, you consent to the data practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We may collect the following categories of information:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span><strong>Contact Information:</strong> Name, email address, phone number, and company name provided through contact forms or demo booking requests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website, collected automatically via analytics tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span><strong>Business Information:</strong> Information about your organization, industry, and ERP requirements shared during consultations or audits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span><strong>Communications:</strong> Records of emails, calls, or messages exchanged as part of service delivery.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Respond to inquiries, demo requests, and audit submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Deliver and improve our ERPNext implementation and support services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Send service-related communications and project updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Analyze website usage to improve user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Comply with applicable legal and regulatory obligations in Kenya</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or delivering services (such as cloud hosting, email platforms, or analytics tools), subject to confidentiality agreements. We may also disclose information when required by Kenyan law, court order, or to protect the rights and safety of our company or clients.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), access controls, and regular security reviews. While we take reasonable precautions, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact and project information is typically retained for the duration of the business relationship plus a period of seven (7) years for legal and accounting purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Under the Kenya Data Protection Act, 2019, you have the right to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Request correction of inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Request erasure of your data where legally permissible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Object to or restrict how we process your data</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@nexasolutions.com" className="text-[#2F966E] hover:underline">
                  info@nexasolutions.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <p className="text-gray-700 font-semibold">NexaGen Solutions Limited</p>
                <p className="text-gray-600 text-sm">Riverside Drive, Kofisi, Nairobi, Kenya</p>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a href="mailto:info@nexasolutions.com" className="text-[#2F966E] hover:underline">
                    info@nexasolutions.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  Phone:{" "}
                  <a href="tel:+254758269725" className="text-[#2F966E] hover:underline">
                    +254 758 269 725
                  </a>
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2F966E] text-white font-semibold rounded-full hover:bg-[#267A5A] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/terms-and-conditions"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#2F966E]/30 text-[#2F966E] font-semibold rounded-full hover:border-[#2F966E] hover:bg-[#2F966E]/5 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
