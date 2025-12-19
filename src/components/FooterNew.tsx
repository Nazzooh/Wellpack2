import { motion } from "motion/react";
import { Package, Phone, MapPin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const easing = [0.22, 1, 0.36, 1];

export function FooterNew() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#101010] text-white relative overflow-hidden">
      {/* Elegant Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div style={{
          backgroundImage: `linear-gradient(#A56F3D 1px, transparent 1px), linear-gradient(90deg, #A56F3D 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} className="w-full h-full" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-16 py-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div 
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              <div className="relative">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#A56F3D] to-[#8B5A2F] flex items-center justify-center"
                  whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px rgba(165, 111, 61, 0.4))" }}
                  transition={{ duration: 0.6, ease: easing }}
                >
                  <Package className="w-9 h-9 text-white" />
                </motion.div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#B87333]" />
              </div>
              <div>
                <div className="text-2xl tracking-[-0.02em] font-light">WELL PACK</div>
                <div className="text-[#A56F3D] text-[10px] uppercase tracking-[0.25em] font-light">
                  Premium Packaging
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-[#D4D1CC] leading-[1.8] mb-10 max-w-sm font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            >
              Manufacturing superior corrugated solutions and bespoke packaging 
              excellence for discerning businesses since 2010.
            </motion.p>
            
            {/* Rating Card */}
            <motion.div 
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#A56F3D]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#A56F3D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-light">4.7 Excellence Rating</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-white text-xl mb-8 font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Products", href: "#products" },
                { name: "About", href: "#about" },
                { name: "Factory", href: "#factory" },
                { name: "Industries", href: "#industries" },
                { name: "Reviews", href: "#reviews" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: easing }}
                >
                  <a
                    href={item.href}
                    className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 flex items-center gap-3 group font-light"
                  >
                    <motion.div 
                      className="w-1 h-1 bg-[#A56F3D]"
                      whileHover={{ width: 12 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <motion.h3 
              className="text-white text-xl mb-8 font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              Our Products
            </motion.h3>
            <ul className="space-y-4">
              {[
                "Custom Printed Boxes",
                "Plain Shipping Boxes",
                "Industrial Heavy-Duty",
                "Die-Cut Packaging",
                "E-commerce Solutions",
                "Protective Inserts",
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: easing }}
                >
                  <a
                    href="#products"
                    className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 flex items-center gap-3 group font-light text-sm"
                  >
                    <motion.div 
                      className="w-1 h-1 bg-[#4A5D3E]"
                      whileHover={{ width: 12 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span>{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <motion.h3 
              className="text-white text-xl mb-8 font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              Contact Info
            </motion.h3>
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: easing }}
              >
                <a
                  href="https://maps.google.com/?q=5R99+QW+Feroke,+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-light leading-relaxed">
                    Madathilpadam, Feroke<br />
                    Karuvanthiruthy<br />
                    Kerala 673631
                  </span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: easing }}
              >
                <a
                  href="tel:+916282370094"
                  className="flex items-center gap-4 text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-light">+91 62823 70094</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: easing }}
                className="flex items-center gap-4 text-[#D4D1CC]"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-light">info@wellpack.com</span>
              </motion.li>
            </ul>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/916282370094"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white px-8 py-4 mt-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, ease: easing }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7, ease: easing }}
              />
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="text-sm uppercase tracking-[0.2em] font-light relative z-10">WhatsApp</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-[#D4D1CC] text-sm font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              © 2025 Well Pack. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            >
              <a href="#" className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 text-sm font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors duration-300 text-sm font-light">
                Terms of Service
              </a>
            </motion.div>
            <motion.p 
              className="text-[#5A5A5A] text-xs font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            >
              Crafted with precision
            </motion.p>
          </div>
        </div>
      </div>

      {/* Elegant Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-[#A56F3D] to-[#8B5A2F] hover:from-[#B87333] hover:to-[#A56F3D] text-white flex items-center justify-center shadow-2xl z-50 border border-[#A56F3D]/20"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
          rotate: showScrollTop ? 0 : -180,
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: easing }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
