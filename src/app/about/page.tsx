import { Metadata } from "next";
import { FaCheck, FaAward, FaUsers, FaRocket, FaBullseye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Nexa Solutions",
  description: "Learn about Nexa Solutions - your trusted ERPNext and Frappe implementors in Kenya. Discover our mission, team, and why choose us.",
};

const team = [ 
  {
    name: "Daniel Kariuki",
    role: "Technical Lead",
    email: "dk@nexasolutions.com",
    phone: "+254 716 357 560",
    bio: "Technical expert specializing in ERPNext customization, integration, and complex system architecture.",
  },
  {
    name: "Muhadi Wawire",
    role: "ErpNext Consultant",
    email: "md@nexasolutions.com",
    phone: "+254 758 269 725",
    bio: "Visionary leader with extensive experience in ERP implementation and business transformation across East Africa.",
  },
   {
    name: "James Satia",
    role: "Process Analyst",
    email: "sjm@nexasolutions.com",
    phone: "+254 708 355 982",
    bio: "Operations specialist focused on process optimization and ensuring seamless project delivery.",
  },
];

const values = [
  {
    icon: FaBullseye,
    title: "Client-Centricity",
    description: "We put our clients at the center of everything we do, tailoring solutions to their unique needs.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description: "We strive for excellence in every project, maintaining the highest standards of quality and professionalism.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "We work closely with our clients as partners, fostering long-term relationships built on trust.",
  },
  {
    icon: FaRocket,
    title: "Innovation",
    description: "We embrace innovation and continuously evolve our solutions to meet changing business needs.",
  },
];

export default function AboutPage() {
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
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Empowering Businesses with Smart ERP Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nexa Solutions is a leading ERPNext and Frappe implementation partner, dedicated to 
              helping businesses across Kenya and East Africa transform their operations through 
              intelligent ERP solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-6">
                <FaBullseye className="w-7 h-7 text-[#14B8A6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with streamlined, efficient, and scalable ERP solutions that 
                drive operational excellence and sustainable growth. We are committed to simplifying 
                business processes through technology, enabling our clients to focus on what they 
                do best — growing their businesses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-6">
                <FaRocket className="w-7 h-7 text-[#14B8A6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading ERPNext implementation partner in East Africa, recognized for 
                delivering innovative solutions that transform businesses and create lasting value. 
                We aim to make enterprise-grade ERP accessible to businesses of all sizes, from 
                startups to large enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl text-center card-hover border border-gray-100"
              >
                <div className="w-14 h-14 mx-auto bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#14B8A6]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Why Choose Nexa Solutions</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Trusted ERP Partner
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We bring together technical expertise, industry knowledge, and a commitment to 
                delivering results. Our team combines deep ERPNext technical skills with a thorough 
                understanding of East African business environments.
              </p>

              <div className="space-y-4">
                {[
                  "Certified ERPNext & Frappe implementors",
                  "Proven track record with successful deployments",
                  "Tailored solutions for African business contexts",
                  "Comprehensive end-to-end implementation services",
                  "Dedicated ongoing support and maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-5 h-5 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#14B8A6]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#14B8A6] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Discovery</h4>
                      <p className="text-gray-600 text-sm">We understand your business processes and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#14B8A6] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Design</h4>
                      <p className="text-gray-600 text-sm">We create a tailored solution architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#14B8A6] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Implement</h4>
                      <p className="text-gray-600 text-sm">We deploy and configure your ERPNext system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#14B8A6] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Support</h4>
                      <p className="text-gray-600 text-sm">We provide ongoing training and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Meet the Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our experienced team is dedicated to helping your business succeed with the right ERP solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 card-hover border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#14B8A6] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      <a href={`mailto:${member.email}`} className="hover:text-[#14B8A6] transition-colors">
                        {member.email}
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">{member.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Get in touch with us today to discuss how we can help transform your business with ERPNext.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a
              href="mailto:info@nexasolutions.com"
              className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
