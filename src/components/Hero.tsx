import { motion } from "motion/react";
import { ArrowRight, Package, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#101010]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JydWdhdGVkJTIwY2FyZGJvYXJkJTIwYm94ZXMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY0MTM1OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corrugated boxes warehouse"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/95 to-[#101010]/80" />
      </div>

      {/* Corrugated Texture Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="corrugated" width="8" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect x="0" y="0" width="4" height="40" fill="#A56F3D"/>
              <rect x="4" y="0" width="4" height="40" fill="#8B5A2F"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corrugated)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#A56F3D]/10 border-2 border-[#A56F3D]/30 px-5 py-2 mb-8"
          >
            <Package className="w-4 h-4 text-[#A56F3D]" />
            <span className="text-[#A56F3D] uppercase tracking-wider">Premium Packaging Solutions</span>
          </motion.div>

          {/* Main Heading - Bold Geometric */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F8F9FA] mb-6"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-3 tracking-tight">
              Well Pack
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-[#A56F3D] tracking-tight">
              Corrugated Excellence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#D4D1CC] text-xl sm:text-2xl mb-8 max-w-2xl leading-relaxed"
          >
            Manufacturing superior corrugated carton boxes and custom packaging solutions
            for commercial and industrial products across multiple industries.
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 mb-10"
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
            <span className="text-[#F8F9FA]">4.7</span>
            <span className="text-[#D4D1CC]">(3 reviews)</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group bg-[#A56F3D] hover:bg-[#8B5A2F] text-[#F8F9FA] px-8 py-4 transition-all duration-300 flex items-center gap-2 border-2 border-[#A56F3D]">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+916282370094"
              className="bg-transparent hover:bg-[#F8F9FA]/5 text-[#F8F9FA] px-8 py-4 border-2 border-[#F8F9FA]/20 hover:border-[#A56F3D] transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91 62823 70094</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Geometric Box Outlines - Die-cut inspired */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-1/4 w-32 h-32 border-2 border-[#A56F3D]/30 hidden lg:block"
        style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%)" }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-32 bottom-1/4 w-20 h-20 border-2 border-[#4A5D3E]/30 hidden lg:block"
      />
      
      {/* Folded corner accent */}
      <div className="absolute bottom-0 right-0 w-40 h-40 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#A56F3D]/10">
          <polygon points="100,100 100,60 60,100" fill="currentColor"/>
          <line x1="100" y1="60" x2="60" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      </div>
    </section>
  );
}
