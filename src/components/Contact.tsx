import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Madathilpadam, Feroke", "Karuvanthiruthy", "Kerala 673631"],
    link: "https://maps.app.goo.gl/A1nBoFLzDQxTn9u76",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 62823 70094"],
    link: "tel:+916282370094",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Open Now", "Closes at 5:30 PM"],
    status: "open",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#101010] relative overflow-hidden">
      {/* Corrugated pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-corrugated" width="6" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect x="0" y="0" width="3" height="40" fill="#A56F3D"/>
              <rect x="3" y="0" width="3" height="40" fill="#8B5A2F"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-corrugated)" />
        </svg>
      </div>

      {/* Box outlines */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#A56F3D]/20" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#4A5D3E]/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A56F3D] uppercase tracking-wider border-l-4 border-[#A56F3D] pl-4 inline-block">
            Get In Touch
          </span>
          <h2 className="mt-6 mb-6 text-[#F8F9FA]">Visit Our Facility</h2>
          <p className="text-[#D4D1CC] max-w-3xl mx-auto">
            Located in Feroke, Kerala, we welcome clients to visit our manufacturing
            facility and discuss their packaging requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#1A1A1A] p-8 border-4 border-[#A56F3D]/10 hover:border-[#A56F3D]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#A56F3D]/10 h-full relative">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-10 h-10">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <polygon points="40,0 40,40 0,0" fill="#A56F3D" opacity="0.1"/>
                  </svg>
                </div>

                <div className="w-14 h-14 bg-[#A56F3D]/10 border-2 border-[#A56F3D]/20 flex items-center justify-center mb-6 group-hover:bg-[#A56F3D] group-hover:border-[#A56F3D] transition-all duration-300">
                  <info.icon className="w-7 h-7 text-[#A56F3D] group-hover:text-[#F8F9FA] transition-colors duration-300" />
                </div>
                
                <h3 className="text-[#F8F9FA] mb-4">{info.title}</h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className={`${
                        detailIndex === 0 && info.status === "open"
                          ? "text-[#4A5D3E]"
                          : "text-[#D4D1CC]"
                      }`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>

                {info.link && (
                  <a
                    href={info.link}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-[#A56F3D] hover:text-[#C89563] transition-colors border-b-2 border-[#A56F3D]/30 hover:border-[#A56F3D]"
                  >
                    <span>{info.icon === MapPin ? "Get Directions" : "Call Now"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-hidden border-4 border-[#A56F3D]"
        >
          <div className="bg-[#1A1A1A] p-6 flex items-center justify-between border-b-4 border-[#A56F3D]">
            <div>
              <h3 className="text-[#F8F9FA] mb-2">Find Us on the Map</h3>
              <p className="text-[#D4D1CC]">Plus Code: 5R99+QW Feroke, Kerala</p>
            </div>
            <a
              href="https://maps.google.com/?q=5R99+QW+Feroke,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#A56F3D] hover:bg-[#8B5A2F] text-[#F8F9FA] px-6 py-3 border-2 border-[#A56F3D] transition-colors"
            >
              <Navigation className="w-5 h-5" />
              <span>Navigate</span>
            </a>
          </div>
          <div className="bg-[#5A5A5A] h-96 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.214989038118!2d75.81726277487317!3d11.169477551821185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65160e381229f%3A0xad82378e7b8eceae!2sWellpack%20Industries!5e1!3m2!1sen!2sin!4v1764166315792!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Well Pack Location"
            />
          </div>
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-[#1A1A1A] border-4 border-[#A56F3D] px-8 py-4 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-[#A56F3D] fill-[#A56F3D]" : "text-[#A56F3D]"
                  }`}
                />
              ))}
            </div>
            <div className="text-[#F8F9FA]">
              <span className="mr-2">4.7</span>
              <span className="text-[#D4D1CC]">(3 reviews)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
