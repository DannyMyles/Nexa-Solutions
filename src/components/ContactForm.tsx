"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    details: ["Riverside Drive, Kofisi", "Nairobi, Kenya"],
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: ["+254 758 269 725", "+254 716 357 560"],
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: ["info@nexasolutions.com", "support@nexasolutions.com"],
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Contact Form */}
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-[#14B8A6]/10 rounded-full flex items-center justify-center mb-6">
              <FaCheck className="w-8 h-8 text-[#14B8A6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">
              Thank you for reaching out. We&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="Your Company Ltd"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
              >
                <option value="">Select a service</option>
                <option value="implementation">ERPNext Implementation</option>
                <option value="analysis">Business Process Analysis</option>
                <option value="customization">System Customization</option>
                <option value="integration">Integration Services</option>
                <option value="support">Ongoing Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all resize-none"
                placeholder="Tell us about your project or requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-full hover:bg-[#0D9488] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info) => (
            <div key={info.title} className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail) => (
                <p key={detail} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Our Location</h3>
          <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="w-8 h-8 text-[#14B8A6] mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Riverside Drive, Kofisi</p>
              <p className="text-gray-500 text-xs">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Prefer to talk directly?</h3>
          <p className="text-white/90 mb-6">
            Call us now to discuss your requirements with our team.
          </p>
          <a
            href="tel:+254758269725"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#14B8A6] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <FaPhone className="w-4 h-4 mr-2" />
            +254 758 269 725
          </a>
        </div>
      </div>
    </>
  );
}
