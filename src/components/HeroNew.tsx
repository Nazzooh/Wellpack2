import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, FileText, Star, Shield, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

const easing = [0.22, 1, 0.36, 1];

export function HeroNew() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#101010] to-[#1A1A1A]"
    >
      {/* Elegant Grid Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="elegant-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#A56F3D" opacity="0.4"/>
              <circle cx="0" cy="0" r="0.5" fill="#A56F3D" opacity="0.3"/>
              <circle cx="80" cy="0" r="0.5" fill="#A56F3D" opacity="0.3"/>
              <circle cx="0" cy="80" r="0.5" fill="#A56F3D" opacity="0.3"/>
              <circle cx="80" cy="80" r="0.5" fill="#A56F3D" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegant-grid)" />
        </svg>
      </motion.div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(165,111,61,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F9FA]" />

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-12"
            style={{ opacity }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easing }}
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#A56F3D]/20 bg-[#A56F3D]/5 backdrop-blur-sm"
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-[#A56F3D]"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[#A56F3D] text-xs uppercase tracking-[0.25em] font-light">
                ISO-Certified Excellence
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: easing }}
                className="text-white"
              >
                <span className="block text-6xl sm:text-7xl lg:text-8xl mb-4 font-light tracking-[-0.04em]">
                  Premium
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl font-light tracking-[-0.04em]">
                  <span className="bg-gradient-to-r from-[#C89563] via-[#A56F3D] to-[#8B5A2F] bg-clip-text text-transparent">
                    Corrugated
                  </span>
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl mt-4 font-light tracking-[-0.04em]">
                  Packaging
                </span>
              </motion.h1>
            </div>

            {/* Elegant Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easing }}
              className="text-[#D4D1CC] text-xl lg:text-2xl max-w-xl leading-[1.8] font-light"
            >
              Engineered packaging solutions combining protection, 
              aesthetics, and sustainability for discerning businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: easing }}
              className="flex flex-wrap gap-5"
            >
              <motion.a
                href="#products"
                className="group relative overflow-hidden bg-gradient-to-r from-[#A56F3D] to-[#8B5A2F] text-white px-10 py-5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: easing }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#B87333] to-[#A56F3D]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: easing }}
                />
                <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-light">
                  <span>Explore Products</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative overflow-hidden bg-transparent text-white px-10 py-5 border border-white/20 hover:border-[#A56F3D]/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: easing }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#A56F3D]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: easing }}
                />
                <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-light">
                  <FileText className="w-4 h-4" />
                  <span>Request Quote</span>
                </span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: easing }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: Shield, label: "ISO-Grade", value: "Standards", color: "#A56F3D" },
                { icon: Truck, label: "Express", value: "Delivery", color: "#4A5D3E" },
                { icon: Star, label: "4.7★", value: "Reviews", color: "#B87333" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    ease: easing
                  }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 border border-white/10 flex items-center justify-center"
                    whileHover={{ 
                      borderColor: item.color,
                      backgroundColor: `${item.color}10`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </motion.div>
                  <div>
                    <div className="text-white text-base font-light">{item.label}</div>
                    <div className="text-[#D4D1CC] text-xs uppercase tracking-[0.15em] font-light">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Advanced Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easing }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container with Parallax */}
              <motion.div 
                className="relative overflow-hidden shadow-2xl"
                style={{ y, scale }}
              >
                <div className="absolute inset-0 border border-[#A56F3D]/20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762381294795-8fa0e7f3e90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFja2VkJTIwY2FyZGJvYXJkJTIwYm94ZXN8ZW58MXx8fHwxNzY0MTM2OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium corrugated boxes"
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 via-transparent to-transparent" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#A56F3D]/30" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#A56F3D]/30" />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: easing }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute -bottom-12 -left-12 bg-white/95 backdrop-blur-sm p-10 shadow-2xl border-t-2 border-[#A56F3D]"
              >
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <motion.div 
                      className="text-5xl text-[#A56F3D] font-light tracking-tighter"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.4, ease: easing }}
                    >
                      1000+
                    </motion.div>
                    <div className="text-[#5A5A5A] text-xs uppercase tracking-[0.2em] mt-2 font-light">
                      Daily Units
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4D1CC] to-transparent" />
                  <div className="text-center">
                    <motion.div 
                      className="text-5xl text-[#4A5D3E] font-light tracking-tighter"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.6, ease: easing }}
                    >
                      100+
                    </motion.div>
                    <div className="text-[#5A5A5A] text-xs uppercase tracking-[0.2em] mt-2 font-light">
                      Clients
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Geometric Element */}
              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-32 h-32 border border-[#B87333]/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
