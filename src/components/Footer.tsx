import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const solutionLinks = [
  { name: "Accounting Software", href: "/solutions/accounting-software" },
  { name: "HR & Payroll", href: "/solutions/hr-and-payroll-software" },
  { name: "CRM Software", href: "/solutions/crm-software" },
  { name: "POS System", href: "/solutions/pos-point-of-sale-system" },
  { name: "Hospital Management", href: "/solutions/hospital-management-system" },
  { name: "Real Estate", href: "/solutions/real-estate-property-management" },
];

const integrationLinks = [
  { name: "M-Pesa Integration", href: "/integrations/mpesa-integration" },
  { name: "KRA eTIMS Integration", href: "/integrations/kra-tims-and-etims-integration" },
  { name: "Bank Reconciliation", href: "/integrations/bank-reconciliation-integration" },
  { name: "Payment Gateways", href: "/integrations/payment-gateway-integration" },
  { name: "Biometric Integration", href: "/integrations/biometric-data-integration" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main flex row - all sections on same row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8 pb-12 border-b border-gray-200">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px] space-y-5">
            <Link href="/" className="flex items-center">
            <Image
              src="/NexaGen_logo.svg"
              alt="NexaGen Solutions Limited"
              width={160}
              height={48}
              style={{ width: "auto", height: "7rem" }}
              className="object-contain mix-blend-multiply"
              priority
              unoptimized
            />
          </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Trusted ERPNext implementors. We deliver end-to-end ERP solutions
              that transform operations across industries — with compliance built in from day one.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#13ACB3]/10 rounded-full flex items-center justify-center hover:bg-[#13ACB3] group transition-colors"
              >
                <FaLinkedin className="text-[#0B6E74] group-hover:text-white w-4 h-4 transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 bg-[#13ACB3]/10 rounded-full flex items-center justify-center hover:bg-[#13ACB3] group transition-colors"
              >
                <FaTwitter className="text-[#0B6E74] group-hover:text-white w-4 h-4 transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#13ACB3]/10 rounded-full flex items-center justify-center hover:bg-[#13ACB3] group transition-colors"
              >
                <FaFacebook className="text-[#0B6E74] group-hover:text-white w-4 h-4 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px] space-y-3">
            <h3 className="text-base font-semibold text-[#0B6E74]">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/company" },
                { name: "Contact", href: "/contact" },
                { name: "Book a Guided Demo", href: "/contact?intent=demo" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#13ACB3] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex-1 min-w-[180px] space-y-3">
            <h3 className="text-base font-semibold text-[#0B6E74]">Solutions</h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#13ACB3] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div className="flex-1 min-w-[180px] space-y-3">
            <h3 className="text-base font-semibold text-[#0B6E74]">Integrations</h3>
            <ul className="space-y-2.5">
              {integrationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#13ACB3] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[220px] space-y-4">
            <h3 className="text-base font-semibold text-[#0B6E74]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#13ACB3] mt-1 shrink-0" />
                <span className="text-sm text-gray-500">
                  Riverside Drive, Kofisi<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#13ACB3] shrink-0" />
                <a href="tel:+254758269725" className="text-sm text-gray-500 hover:text-[#13ACB3] transition-colors">
                  +254 758 269 725
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#13ACB3] shrink-0" />
                <a href="mailto:info@nexasolutions.com" className="text-sm text-gray-500 hover:text-[#13ACB3] transition-colors">
                  info@nexasolutions.com
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center px-5 py-2.5 bg-[#13ACB3] text-white text-sm font-semibold rounded-full hover:bg-[#109298] transition-colors"
              >
                Book a Guided Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NexaGen Solutions Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-[#13ACB3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-sm text-gray-400 hover:text-[#13ACB3] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}