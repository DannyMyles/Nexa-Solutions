import Image from "next/image";
import { Metadata } from "next";
import { FaCheck, FaAward, FaUsers, FaRocket, FaBullseye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | NexaGen Solutions Limited",
  description: "Learn about NexaGen Solutions Limited - your trusted ERPNext implementors in Kenya. Discover our mission, team, and why choose us.",
};



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
      <section className="relative pt-40 pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Enhanced background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-14 left-6 w-56 h-56 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-[#13ACB3]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-4 w-72 h-72 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-[#13ACB3]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-[#13ACB3]/10 rounded-full blur-3xl"></div>
        </div>
        {/* Pattern overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20, 184, 166 / 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        {/* Diagonal texture */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgb(20, 184, 166) 35px, rgb(20, 184, 166) 36px)`,
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 max-w-4xl mx-auto">
            Simplify operations. Scale faster. Stay in control.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We&apos;re more than an ERP provider—we&apos;re your technology partner for ERPNext and Frappe implementations.
            We design practical systems with clear scope, tailored workflows, and support that keeps improving after go-live.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="w-14 h-14 bg-[#13ACB3]/10 rounded-xl flex items-center justify-center mb-6">
                <FaBullseye className="w-7 h-7 text-[#13ACB3]" />
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
              <div className="w-14 h-14 bg-[#13ACB3]/10 rounded-xl flex items-center justify-center mb-6">
                <FaRocket className="w-7 h-7 text-[#13ACB3]" />
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
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Our Values</span>
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
                <div className="w-14 h-14 mx-auto bg-[#13ACB3]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#13ACB3]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/solutions/erpsystem.jpg"
          alt="ERP system background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Why Choose NexaGen Solutions Limited</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
                Partner-level delivery for real business outcomes
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                You don&apos;t need more features—you need a system that works with your team.
                We combine proven ERPNext expertise with audit-first scoping and long-term support so your ERP becomes an advantage.
              </p>

              <div className="space-y-4">
                {[
                  "Proven expertise: 10+ implementations and hands-on ERPNext delivery",
                  "Tailored solutions—not one-size-fits-all configurations",
                  "Audit-first scoping to reduce risk, waste, and costly rework",
                  "Structured delivery across setup, migration, training, and go-live",
                  "Support that stays: optimization and reliability after deployment",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-5 h-5 bg-[#13ACB3] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="ml-3 text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>


            <div className="relative">
              <div className="absolute inset-0 bg-[#13ACB3]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#13ACB3] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Discovery</h4>
                      <p className="text-gray-600 text-sm">We map your workflows and confirm where ERP will create the biggest impact</p>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#13ACB3] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Design</h4>
                      <p className="text-gray-600 text-sm">We define scope, integrations, and a rollout plan aligned to your goals</p>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#13ACB3] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Implement</h4>
                      <p className="text-gray-600 text-sm">We configure ERPNext, migrate data, and prepare your team for a stable go-live</p>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#13ACB3] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Support</h4>
                      <p className="text-gray-600 text-sm">We train continuously and optimize your system as your business grows</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#13ACB3] to-[#109298]">
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
              className="inline-flex items-center px-8 py-4 bg-white text-[#13ACB3] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us
            </a>

            <a
              href="/solutions/accounting-software"
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
