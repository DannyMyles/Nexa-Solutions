import { Metadata } from "next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaMapPin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Nexa Solutions",
  description: "Get in touch with Nexa Solutions for ERPNext implementation services. Contact us at Riverside Drive, Kofisi, Nairobi.",
};

const team = [
  {
    name: "Daniel Kariuki",
    role: "Technical Lead",
    email: "dk@nexasolutions.com",
    phone: "+254 716 357 560",
    initials: "DK"
  },
  {
    name: "Muhadi Wawire",
    role: "ERPNext Consultant",
    email: "md@nexasolutions.com",
    phone: "+254 758 269 725",
    initials: "MW"
  },
  {
    name: "James Satia",
    role: "Process Analyst",
    email: "sjm@nexasolutions.com",
    phone: "+254 708 355 982",
    initials: "JS"
  },
];

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

export default function ContactPage() {

  return (
    <div className="flex flex-col">
{/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Enhanced background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#14B8A6] uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Get in Touch
            </h1>
<p className="text-lg text-gray-600 leading-relaxed">
              Ready to transform your business with ERPNext? We&apos;d love to hear from you. 
              Reach out to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

{/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form - Left Column */}
            <ContactForm />
            
{/* Contact Info - Right Column */}
            <div className="space-y-8">
              {/* Get In Touch - Enhanced Header */}
              <div className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-3">
                    Get In Touch
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    Have questions about ERPNext implementation? Our team is here to help you transform your business processes.
                  </p>
                </div>
              </div>
              
              {/* Contact Info Cards - Modern Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300 card-hover"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#14B8A6] transition-colors">
                      <info.icon className="w-5 h-5 text-[#14B8A6] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
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

{/* Map - Enhanced Section */}
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199999999997!2d36.835!3d-1.255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117e0e5e3a3b%3A0x1234567890abcdef!2sOccidental%20House%2C%20Baricho%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Nexa Solutions Location Map"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
                
                {/* Location Card Overlay - Modern Design */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-80">
                  <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#14B8A6] p-2.5 rounded-xl text-white flex-shrink-0 shadow-md">
                        <FaMapPin size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 mb-0.5">
                          Nexa Solutions
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Riverside Drive, Kofisi
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Riverside+Drive+Kofisi+Nairobi+Kenya" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0D9488] px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm text-white w-full sm:w-auto justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to talk directly?</h3>
                <p className="text-white/90 mb-5 text-sm">
                  Call us now to discuss your requirements with our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+254758269725"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-white text-[#14B8A6] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <FaPhone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/254758269725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
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
                className="p-6 bg-white rounded-xl card-hover border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#14B8A6] font-medium text-sm mb-4">{member.role}</p>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-[#14B8A6] transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-[#14B8A6] transition-colors"
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
