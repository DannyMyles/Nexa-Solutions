import { Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaMapPin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | NexaGen Solutions Limited",
  description: "Get in touch with NexaGen Solutions Limited for ERPNext implementation services. Contact us at Riverside Drive, Kofisi, Nairobi.",
};


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

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string };
}) {
  const intent = searchParams?.intent;
  const formTitle =
    intent === "demo" ? "Book a Guided Demo" : "Send Us a Message";

  const formDescription =
    intent === "demo"
      ? "Tell us a bit about your workflow. We’ll arrange a guided demo tailored to how your team operates."
      : "Fill out the form below and we’ll get back to you as soon as possible.";



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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#13ACB3] uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Get in Touch
            </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
              Ready to move faster with ERPNext? Talk to us today—book a guided demo, see the platform in action,
              and leave with a clear next-step plan.
            </p>



          </div>
        </div>
      </section>

{/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form - Left Column */}
            <ContactForm
              initialService={intent === "demo" ? "demo" : ""}
              initialMessage={
                intent === "demo"
                  ? "We would like to see a guided demo and understand how the platform fits our workflow."
                  : ""
              }
              title={formTitle}
              description={formDescription}
            />

            
{/* Contact Info - Right Column */}
            <div className="space-y-8">
              {/* Get In Touch - Enhanced Header */}
              <div className="relative bg-gradient-to-br from-[#13ACB3] to-[#109298] rounded-2xl p-8 text-white overflow-hidden">
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
                    className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-[#13ACB3] hover:shadow-lg transition-all duration-300 card-hover"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#13ACB3]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#13ACB3] transition-colors">
                      <info.icon className="w-5 h-5 text-[#13ACB3] group-hover:text-white transition-colors" />
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
              <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
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
                  title="NexaGen Solutions Location Map"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
                
                {/* Location Card Overlay - Modern Design */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-80">
                  <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#13ACB3] p-2.5 rounded-xl text-white flex-shrink-0 shadow-md">
                        <FaMapPin size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 mb-0.5">
                          NexaGen Solutions Limited
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Riverside Drive, Kofisi
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Riverside+Drive+Kofisi+Nairobi+Kenya" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#13ACB3] hover:bg-[#109298] px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm text-white w-full sm:w-auto justify-center"
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
              <div className="bg-gradient-to-br from-[#13ACB3] to-[#109298] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to talk directly?</h3>
                <p className="text-white/90 mb-5 text-sm">
                  Call us now to discuss your goals—and get a clear recommended next step.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+254758269725"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-white text-[#13ACB3] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
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
    </div>
  );
}
