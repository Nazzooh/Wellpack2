import { motion } from "motion/react";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Navigation,
  Send,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const easing = [0.22, 1, 0.36, 1];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    boxType: "",
    sizeQuantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*New Enquiry from Well Pack Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Box Type:* ${formData.boxType}%0A*Size/Quantity:* ${formData.sizeQuantity}%0A*Message:* ${formData.message}`;

    window.open(
      `https://wa.me/916282370094?text=${whatsappMessage}`,
      "_blank",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Madathilpadam, Feroke",
        "Karuvanthiruthy",
        "Kerala 673631",
      ],
      link: "https://maps.app.goo.gl/A1nBoFLzDQxTn9u76",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 62823 70094"],
      link: "tel:+916282370094",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Open Now", "Closes at 5:30 PM"],
      status: "open",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@wellpack.com"],
      link: "mailto:info@wellpack.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-40 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Get In Touch
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
          </div>
          <h2 className="text-[#101010] text-6xl lg:text-7xl mb-8 font-light tracking-[-0.02em]">
            Start Your
            <br />
            Packaging Journey
          </h2>
          <p className="text-[#5A5A5A] text-xl leading-[1.8] font-light max-w-2xl mx-auto">
            Connect with us to discuss your requirements. We'll
            respond promptly with tailored solutions designed
            for your success.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: easing }}
                >
                  <div className="bg-white p-10 border-l-2 border-transparent hover:border-[#A56F3D] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="w-16 h-16 border border-[#A56F3D]/20 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#A56F3D]/5 to-transparent"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#A56F3D",
                          boxShadow: "0 10px 25px -5px rgba(165, 111, 61, 0.4)"
                        }}
                        transition={{
                          duration: 0.5,
                          ease: easing,
                        }}
                      >
                        <info.icon className="w-8 h-8 text-[#A56F3D] group-hover:text-[#101010] transition-colors duration-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-[#101010] text-xl mb-4 font-light">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p
                              key={i}
                              className={`font-light ${
                                i === 0 &&
                                info.status === "open"
                                  ? "text-[#4A5D3E]"
                                  : "text-[#5A5A5A]"
                              }`}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.link && (
                          <a
                            href={info.link}
                            target={
                              info.icon === MapPin
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.icon === MapPin
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-2 mt-5 text-[#A56F3D] hover:text-[#8B5A2F] transition-colors group/link"
                          >
                            <span className="text-xs uppercase tracking-[0.2em] font-light">
                              {info.icon === MapPin
                                ? "Directions"
                                : info.icon === Phone
                                  ? "Call"
                                  : "Email"}
                            </span>
                            <motion.svg
                              className="w-4 h-4"
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </motion.svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* WhatsApp CTA */}
            <ScrollReveal delay={0.4}>
              <motion.a
                href="https://wa.me/916282370094"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white p-8 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: easing }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7, ease: easing }}
                />
                <MessageCircle className="w-6 h-6 relative z-10" />
                <span className="uppercase tracking-[0.2em] font-light relative z-10">
                  Chat on WhatsApp
                </span>
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Right Side - Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-14 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.1)] border-t-2 border-[#A56F3D] space-y-8"
            >
              <h3 className="text-[#101010] text-4xl mb-10 font-light tracking-tight">
                Send Enquiry
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 font-light"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 font-light"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="boxType"
                    className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                  >
                    Box Type *
                  </label>
                  <select
                    id="boxType"
                    name="boxType"
                    required
                    value={formData.boxType}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 font-light"
                  >
                    <option value="">Select box type</option>
                    <option value="Custom Printed Boxes">
                      Custom Printed Boxes
                    </option>
                    <option value="Plain Shipping Boxes">
                      Plain Shipping Boxes
                    </option>
                    <option value="Heavy-Duty Industrial">
                      Heavy-Duty Industrial
                    </option>
                    <option value="Die-Cut Packaging">
                      Die-Cut Packaging
                    </option>
                    <option value="E-commerce Boxes">
                      E-commerce Boxes
                    </option>
                    <option value="Partition Inserts">
                      Partition Inserts
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="sizeQuantity"
                    className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                  >
                    Size/Quantity *
                  </label>
                  <input
                    type="text"
                    id="sizeQuantity"
                    name="sizeQuantity"
                    required
                    placeholder="e.g. 12x10x8 inches, 1000 units"
                    value={formData.sizeQuantity}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 font-light"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#101010] mb-4 uppercase tracking-[0.2em] text-xs font-light"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border border-[#E8DDD0] focus:border-[#A56F3D] focus:outline-none bg-[#F8F9FA] text-[#101010] transition-all duration-500 resize-none font-light"
                  placeholder="Any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#A56F3D] to-[#8B5A2F] hover:from-[#B87333] hover:to-[#A56F3D] text-white px-10 py-6 transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7, ease: easing }}
                />
                <span className="uppercase tracking-[0.25em] font-light relative z-10">
                  Submit Enquiry
                </span>
                <Send className="w-5 h-5 relative z-10" />
              </motion.button>
            </form>
          </ScrollReveal>
        </div>

        {/* Map Section */}
        <ScrollReveal
          delay={0.6}
          className="mt-32 shadow-2xl border border-[#A56F3D]/20 overflow-hidden"
        >
          <div className="bg-[#101010] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-3xl mb-2 font-light tracking-tight">
                Find Us on Map
              </h3>
              <p className="text-[#D4D1CC] font-light">
                Plus Code: 5R99+QW Feroke, Kerala
              </p>
            </div>
            <motion.a
              href="https://maps.app.goo.gl/A1nBoFLzDQxTn9u76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#A56F3D] hover:bg-[#8B5A2F] text-white px-10 py-5 transition-colors duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Navigation className="w-5 h-5" />
              <span className="uppercase tracking-[0.2em] text-sm font-light">
                Navigate
              </span>
            </motion.a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.214989038118!2d75.81726277487317!3d11.169477551821185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65160e381229f%3A0xad82378e7b8eceae!2sWellpack%20Industries!5e1!3m2!1sen!2sin!4v1764166315792!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Well Pack Location"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}