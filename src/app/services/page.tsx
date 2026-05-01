import { Metadata } from "next";
import { 
  FaTools, 
  FaChartLine, 
  FaCogs, 
  FaPlug, 
  FaHeadset, 
  FaWarehouse, 
  FaShoppingCart, 
  FaTruck, 
  FaIndustry,
  FaGlobe,
  FaCheck,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Nexa Solutions",
  description: "Explore our ERPNext implementation services including business process analysis, customization, integration, and ongoing support for businesses in Kenya.",
};

const services = [
  {
    icon: FaTools,
    title: "ERPNext Implementation",
    description: "Complete implementation of ERPNext tailored to your business requirements, from initial setup to full deployment.",
    features: [
      "System configuration and setup",
      "Data migration from legacy systems",
      "User training and onboarding",
      "Go-live support and stabilization",
      "Post-implementation review",
    ],
    benefits: [
      "Reduced implementation time and costs",
      "Minimal disruption to operations",
      "Optimized system performance",
      "Comprehensive knowledge transfer",
    ],
  },
  {
    icon: FaChartLine,
    title: "Business Process Analysis",
    description: "In-depth analysis of your current workflows to identify optimization opportunities and design efficient processes.",
    features: [
      "Process mapping and documentation",
      "Gap analysis",
      "Process optimization recommendations",
      "Workflow automation design",
      "Performance benchmarks",
    ],
    benefits: [
      "Improved operational efficiency",
      "Reduced manual processes",
      "Better resource utilization",
      "Clear process visibility",
    ],
  },
  {
    icon: FaCogs,
    title: "System Customization",
    description: "Custom extensions and modifications to make ERPNext work exactly how your business needs it to.",
    features: [
      "Custom fields and doctypes",
      "App development",
      "Report customization",
      "Dashboard development",
      "UI/UX modifications",
    ],
    benefits: [
      "Perfect system fit",
      "Improved user adoption",
      "Better reporting capabilities",
      "Enhanced user experience",
    ],
  },
{
    icon: FaPlug,
    title: "Integration Services",
    description: "Seamless integration of ERPNext with your existing systems, third-party applications, and APIs.",
    features: [
      "API development and integration",
      "KRA Integration (eTIMS, iTax)",
      "MPESA Payment Integration",
      "eTIMS - Electronic Tax Invoice Management System",
      "Payment gateway integration",
      "E-commerce platform integration",
      "CRM and accounting integration",
      "Custom webhook setup",
      "Custom API integrations",
    ],
    benefits: [
      "Unified business data",
      "Automated data flow",
      "Reduced duplicate entry",
      "Real-time synchronization",
      "Tax compliance automation",
      "Seamless payment processing",
    ],
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support & Maintenance",
    description: "Dedicated support services to keep your ERPNext system running smoothly and efficiently.",
    features: [
      "Technical support desk",
      "System updates and upgrades",
      "Performance monitoring",
      "Security patches",
      "Backup and recovery",
    ],
    benefits: [
      "Peace of mind",
      "System reliability",
      "Security compliance",
      "Latest features access",
    ],
  },
];

const industries = [
  { 
    icon: FaWarehouse, 
    name: "Manufacturing", 
    description: "Track production, manage inventory, streamline supply chains" 
  },
  { 
    icon: FaShoppingCart, 
    name: "Retail & E-commerce", 
    description: "Manage POS, inventory, and multi-channel sales" 
  },
  { 
    icon: FaTruck, 
    name: "Distribution", 
    description: "Optimize logistics, warehouse, and fleet management" 
  },
  { 
    icon: FaIndustry, 
    name: "Healthcare", 
    description: "Patient records, appointments, inventory control" 
  },
  { 
    icon: FaGlobe, 
    name: "Services", 
    description: "Project management, CRM, and resource planning" 
  },
];

const clients = [
  { name: "Creams on Cakes", description: "Bakery & Confectionery" },
  { name: "Spices Restaurant", description: "Food & Beverage" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Comprehensive ERPNext Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From implementation to ongoing support, we provide end-to-end ERPNext services 
              tailored to your business needs. Let us help you transform your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-16 h-16 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <FaCheck className="w-4 h-4 text-[#14B8A6] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-0" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h4 className="font-semibold text-gray-900 mb-6">Business Benefits</h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start p-4 bg-white rounded-xl">
                          <div className="w-6 h-6 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FaCheck className="w-3 h-3 text-[#14B8A6]" />
                          </div>
                          <span className="ml-3 text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Expertise Across Industries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We have experience implementing ERPNext solutions for a wide range of industries, 
              each with unique requirements and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-6 bg-white rounded-xl card-hover border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Companies We've Helped
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We're proud to have worked with amazing businesses across various industries, 
              helping them achieve operational excellence with ERPNext.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="p-8 bg-gray-50 rounded-2xl text-center card-hover"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-[#14B8A6]">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our proven methodology ensures successful implementation and maximum ROI for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business requirements and processes" },
              { step: "02", title: "Design", description: "We create a tailored implementation plan" },
              { step: "03", title: "Implement", description: "We configure and deploy your ERPNext system" },
              { step: "04", title: "Support", description: "We provide ongoing training and maintenance" },
            ].map((item) => (
              <div key={item.step} className="relative p-6 bg-white rounded-xl border border-gray-100">
                <div className="text-4xl font-bold text-[#14B8A6]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Let's discuss how our ERPNext services can help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
