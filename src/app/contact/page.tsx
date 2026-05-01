import { Metadata } from "next";
import { FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Nexa Solutions",
  description: "Get in touch with Nexa Solutions for ERPNext implementation services. Contact us at Riverside Drive, Kofisi, Nairobi.",
};

export default function ContactPage() {
  const team = [
     {
      name: "Daniel Kariuki",
      role: "Technical Lead",
      email: "dk@nexasolutions.com",
      phone: "+254 716 357 560"
    },
    {
      name: "Muhadi Wawire",
      role: "ErpNext Consultant",
      email: "md@nexasolutions.com",
      phone: "+254 758 269 725"
    },
   
    {
      name: "James Satia",
      role: "Process Analyst",
      email: "sjm@nexasolutions.com",
      phone: "+254 708 355 982"
    },
  ];

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
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to transform your business with ERPNext? We'd love to hear from you. 
              Reach out to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Team Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Direct Contacts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Reach out directly to any of our team members for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-white rounded-xl card-hover border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#14B8A6] font-medium text-sm mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-sm text-gray-600 hover:text-[#14B8A6] transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-sm text-gray-600 hover:text-[#14B8A6] transition-colors"
                  >
                    <FaPhone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
