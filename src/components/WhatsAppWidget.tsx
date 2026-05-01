'use client';

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { services } from "@/data/services";

export default function WhatsAppWidget() {
  const phoneNumber = "+254758269725";
  const [selectedService, setSelectedService] = useState("");

  const getMessage = () => {
    if (!selectedService) {
      return "Hello! I have a question about your services.";
    }
    const service = services.find((s) => s.value === selectedService);
    return `Hello! I'm interested in ${service?.label || "your services"}.`;
  };

  const handleClick = () => {
    const message = getMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Service Selector Dropdown */}
      <div className="absolute bottom-full right-0 mb-3 w-64 p-3 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Select a service
        </label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#25D366] text-gray-700"
        >
          {services.slice(1).map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleClick}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

        <FaWhatsapp
          size={36}
          className="relative transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us!
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>
    </div>
  );
}
