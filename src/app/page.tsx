"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  FaTools, 
  FaChartLine, 
  FaCogs, 
  FaPlug, 
  FaHeadset, 
  FaArrowRight,
  FaBuilding,
  FaShoppingCart,
  FaIndustry,
  FaTruck,
  FaHospital,
  FaHotel,
  FaWallet,
  FaFileInvoice,
  FaWarehouse,
  FaUsers,
  FaChartBar
} from "react-icons/fa";
import ClientCarousel from "@/components/ClientCarousel";

const services = [
  {
    icon: FaTools,
    title: "ERPNext Implementation",
    description: "End-to-end implementation of ERPNext tailored to your business needs, ensuring smooth migration and adoption.",
  },
  {
    icon: FaChartLine,
    title: "Business Process Analysis",
    description: "Comprehensive analysis of your workflows to optimize operations and maximize efficiency.",
  },
  {
    icon: FaCogs,
    title: "System Customization",
    description: "Custom extensions and modules built to match your unique business requirements.",
  },
  {
    icon: FaPlug,
    title: "Integration Services",
    description: "Seamless integration with existing systems, APIs, and third-party applications.",
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support",
    description: "Dedicated support and maintenance to keep your ERP running smoothly.",
  },
];

const industries = [
  { icon: FaBuilding, name: "Manufacturing" },
  { icon: FaShoppingCart, name: "Retail & E-commerce" },
  { icon: FaIndustry, name: "Distribution" },
  { icon: FaTruck, name: "Logistics" },
  { icon: FaHospital, name: "Healthcare" },
  { icon: FaHotel, name: "Hospitality" },
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

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Decorative blur orbs - hidden on mobile for better performance */}
          <div className="absolute inset-0 opacity-40 hidden md:block">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
          </div>
          {/* Geometric pattern overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0" style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20, 184, 166 / 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-[#14B8A6]/10 rounded-full mb-5 md:mb-6">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#14B8A6] rounded-full mr-2"></span>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-[#14B8A6] whitespace-nowrap">
                  ERPNext & Frappe Certified Partners
                </span>
              </div>

              {/* Main Heading - Fixed for mobile */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Transform Your Business with
                <span className="block text-[#14B8A6] mt-2 sm:mt-3"> Smart ERP Solutions</span>
              </h1>

              {/* Subheading - Fixed text wrapping */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-8 lg:mb-10 leading-relaxed px-2 sm:px-0">
                Nexa Solutions is your trusted ERPNext implementor. We deliver comprehensive 
                ERP solutions that streamline operations, boost productivity, and drive growth for 
                businesses across Kenya and beyond.
              </p>

              {/* CTA Buttons - Stack on mobile, row on tablet+ */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#14B8A6] text-white font-semibold rounded-full hover:bg-[#0D9488] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm md:text-base"
                >
                  Get Started
                  <FaArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Image Showcase - Hidden on tablet and mobile */}
            <div className="hidden lg:block flex-1">
              <div className="relative" style={{ perspective: '1000px' }}>
                <div className="relative transform rotate-y-[-5deg] rotate-x-[2deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0" style={{ transformStyle: 'preserve-3d' }}>
                  <Image
                    src="/images/web.webp"
                    alt="ERPNext Dashboard"
                    width={650}
                    height={450}
                    className="rounded-lg w-full h-auto drop-shadow-2xl"
                    style={{ 
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))',
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent blur-xl rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Section - Fixed spacing */}
          <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 lg:pt-12 border-t border-gray-200">
            <div className="text-center mb-6 md:mb-8 lg:mb-10">
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#14B8A6] uppercase tracking-wider mb-2">
                TRUSTED BY BUSINESSES ACROSS INDUSTRIES
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                Powering Growth for 10+ Companies
              </h3>
            </div>

            {/* Industry Icons - Responsive grid */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-10 px-2">
              {industries.map((industry, index) => (
                <div 
                  key={industry.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:border-[#14B8A6] hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <industry.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#14B8A6] flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">{industry.name}</span>
                </div>
              ))}
            </div>

            {/* Client Carousel */}
            <div className="max-w-5xl mx-auto px-2 md:px-0">
              <ClientCarousel clients={clients} autoPlay={true} autoPlayInterval={4000} />
            </div>

            {/* Stats Counter - Responsive grid with better mobile layout */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100">
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14B8A6]">10+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14B8A6]">10+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14B8A6]">5+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14B8A6]">5+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Core Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 md:mt-4">
              Comprehensive ERPNext solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 md:p-8 bg-gray-50 rounded-2xl card-hover border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#14B8A6] transition-colors">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-[#14B8A6] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-[#14B8A6] font-semibold hover:text-[#0D9488] transition-colors text-sm md:text-base"
            >
              View All Services
              <FaArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Expertise Across Sectors
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 md:mt-4">
              We understand the unique challenges of different industries and tailor our solutions accordingly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group p-4 md:p-6 bg-white rounded-xl text-center card-hover border border-gray-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#14B8A6]/10 transition-colors">
                  <industry.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-[#14B8A6] transition-colors" />
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-xs md:text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Why Choose Nexa Solutions</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 md:mb-6">
                Your Partner in Digital Transformation
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                With years of experience in ERPNext implementation and a deep understanding of 
                African business landscapes, we help organizations streamline operations, 
                reduce costs, and achieve measurable growth.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#14B8A6]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Certified Experts</h4>
                    <p className="text-xs md:text-sm text-gray-600">Team certified in ERPNext & Frappe implementation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#14B8A6]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Local Understanding</h4>
                    <p className="text-xs md:text-sm text-gray-600">Deep knowledge of Kenya & East Africa market</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#14B8A6]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">End-to-End Support</h4>
                    <p className="text-xs md:text-sm text-gray-600">From implementation to ongoing maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#14B8A6]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl">
                    <p className="text-2xl md:text-4xl font-bold text-[#14B8A6]">10+</p>
                    <p className="text-xs md:text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl">
                    <p className="text-2xl md:text-4xl font-bold text-[#14B8A6]">5+</p>
                    <p className="text-xs md:text-sm text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl">
                    <p className="text-2xl md:text-4xl font-bold text-[#14B8A6]">5+</p>
                    <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl">
                    <p className="text-2xl md:text-4xl font-bold text-[#14B8A6]">5+</p>
                    <p className="text-xs md:text-sm text-gray-600">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed px-4">
            Let's discuss how ERPNext can streamline your operations and drive growth. 
            Our team is ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm md:text-base"
            >
              Get in Touch
              <FaArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}