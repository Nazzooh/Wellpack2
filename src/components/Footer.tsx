import { motion } from "motion/react";
import { Package, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden border-t-4 border-[#A56F3D]">
      {/* Corrugated pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-corrugated" width="8" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="40" fill="#A56F3D"/>
              <rect x="4" y="0" width="4" height="40" fill="#8B5A2F"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-corrugated)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#A56F3D] border-2 border-[#A56F3D] flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl text-white">Well Pack</div>
                <div className="text-[#A56F3D]">Packaging Solutions</div>
              </div>
            </div>
            <p className="text-[#D4D1CC] mb-6">
              Manufacturing superior corrugated carton boxes and custom packaging
              solutions for industries across Kerala and beyond.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#A56F3D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#D4D1CC]">4.7 Rating</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-6 border-b-2 border-[#A56F3D] inline-block pb-2">Our Products</h3>
            <ul className="space-y-3">
              {[
                "Printed Corrugated Boxes",
                "Non-Printed Boxes",
                "Custom Packaging",
                "Industrial Solutions",
                "Bulk Orders",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 border-2 border-[#A56F3D] group-hover:bg-[#A56F3D] transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white mb-6 border-b-2 border-[#A56F3D] inline-block pb-2">Industries</h3>
            <ul className="space-y-3">
              {[
                "E-Commerce",
                "Food & Beverage",
                "Electronics",
                "Pharmaceuticals",
                "Manufacturing",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#D4D1CC] hover:text-[#A56F3D] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 border-2 border-[#A56F3D] group-hover:bg-[#A56F3D] transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6 border-b-2 border-[#A56F3D] inline-block pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+916282370094"
                  className="flex items-start gap-3 text-[#D4D1CC] hover:text-[#A56F3D] transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 62823 70094</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=5R99+QW+Feroke,+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#D4D1CC] hover:text-[#A56F3D] transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    Madathilpadam, Feroke<br />
                    Karuvanthiruthy<br />
                    Kerala 673631
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#D4D1CC]">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@wellpack.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-[#1A1A1A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#D4D1CC] text-center md:text-left">
              © {new Date().getFullYear()} Well Pack. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[#D4D1CC]">
              <a href="#" className="hover:text-[#A56F3D] transition-colors border-b border-transparent hover:border-[#A56F3D]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#A56F3D] transition-colors border-b border-transparent hover:border-[#A56F3D]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric box decoration */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-24 h-24 border-2 border-[#A56F3D]/20 opacity-50"
      />
    </footer>
  );
}
