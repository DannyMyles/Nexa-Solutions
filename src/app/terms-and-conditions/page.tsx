import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of NexaGen Solutions services and website.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#2F966E]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#2F966E] uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">Terms &amp; Conditions</h1>
          <p className="text-gray-600 mt-4">Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the NexaGen Solutions Limited website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or engage our services. These terms apply to all visitors, clients, and others who access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">
                NexaGen Solutions Limited provides ERPNext implementation, customization, integration, training, and ongoing support services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separately executed Statement of Work (SOW) or Service Agreement. These Terms and Conditions apply alongside any such agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website — including text, graphics, logos, and design — is the property of NexaGen Solutions Limited and is protected under applicable Kenyan intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ERPNext is an open-source platform developed by Frappe Technologies. Our implementation work, custom modules, and proprietary configurations developed for clients remain subject to the terms agreed in the individual service contracts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">As a client engaging our services, you agree to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Provide accurate and complete information necessary for service delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Make timely decisions and assign an accountable project lead from your organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Ensure adequate participation from key users during discovery, testing, and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Settle invoices within the agreed payment terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2F966E] shrink-0" />
                  <span>Maintain regular backups of your data, which remains your sole responsibility</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Fees for services are as agreed in the individual service contract or SOW. Unless otherwise specified, invoices are due within thirty (30) days of issue. Late payments may attract interest at the rate specified in the service contract. We reserve the right to suspend services for accounts with overdue balances until settlement is made.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                Both parties agree to keep confidential any proprietary business information, trade secrets, or sensitive data shared during the engagement. This obligation survives the termination of the service relationship for a period of three (3) years. We will not disclose your business information to third parties without your express consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by Kenyan law, NexaGen Solutions Limited shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services or website. Our total aggregate liability for any claim shall not exceed the total fees paid by you for the specific service giving rise to the claim in the three (3) months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Website Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The information on this website is provided for general informational purposes only. While we strive to keep it accurate and current, we make no warranties, expressed or implied, about the completeness, accuracy, or fitness for a particular purpose of the content. Use of the website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate a service engagement in accordance with the terms specified in the applicable service contract. Upon termination, all outstanding fees become immediately due, and each party shall return or destroy the other party&apos;s confidential information as directed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the Kenyan courts, unless the parties agree to an alternative dispute resolution mechanism.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to These Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms and Conditions, please reach out to us:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <p className="text-gray-700 font-semibold">NexaGen Solutions Limited</p>
                <p className="text-gray-600 text-sm">Riverside Drive, Kofisi, Nairobi, Kenya</p>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a href="mailto:info@nexagensolutions.com" className="text-[#2F966E] hover:underline">
                    info@nexagensolutions.com
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
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#2F966E]/30 text-[#2F966E] font-semibold rounded-full hover:border-[#2F966E] hover:bg-[#2F966E]/5 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
