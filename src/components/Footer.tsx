import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<div className="w-10 h-10 bg-[#14B8A6] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">Nexa Solutions</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted ERPNext implementors. We deliver comprehensive ERP 
              solutions to businesses across multiple industries, helping you transform 
              operations and achieve growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <FaLinkedin className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <FaGithub className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#14B8A6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  ERPNext Implementation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Business Process Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  System Customization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Integration Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#14B8A6] transition-colors">
                  Ongoing Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#14B8A6] mt-1" />
                <span className="text-sm">
                  Riverside Drive, Kofisi<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#14B8A6]" />
                <span className="text-sm">+254 758 269 725</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#14B8A6]" />
                <span className="text-sm">info@nexasolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Nexa Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#14B8A6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-[#14B8A6] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
