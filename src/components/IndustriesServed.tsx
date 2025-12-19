import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Utensils, 
  Zap, 
  Shirt, 
  Home,
  Cpu
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const easing = [0.22, 1, 0.36, 1];

const industries = [
  { icon: Utensils, name: "Food & FMCG", description: "FDA-approved solutions" },
  { icon: Shirt, name: "Textile & Garments", description: "Protective transit" },
  { icon: Home, name: "Home Appliances", description: "Heavy-duty protection" },
  { icon: Zap, name: "Electronics", description: "ESD-safe packaging" },
  { icon: Cpu, name: "Industrial Hardware", description: "High-strength boxes" },
  { icon: ShoppingBag, name: "E-commerce", description: "Branded unboxing" },
];

export function IndustriesServed() {
  return (
    <section id="industries" className="py-40 bg-white relative overflow-hidden">
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FA]/30 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Sectors We Serve
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
          </div>
          <h2 className="text-[#101010] text-6xl lg:text-7xl mb-8 font-light tracking-[-0.02em] max-w-4xl mx-auto">
            Trusted Across<br />Diverse Industries
          </h2>
          <p className="text-[#5A5A5A] text-xl leading-[1.8] font-light max-w-2xl mx-auto">
            Specialized packaging solutions crafted for unique industry 
            requirements and exacting standards.
          </p>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-32">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <div className="bg-[#F8F9FA] p-10 text-center h-full border border-transparent hover:border-[#A56F3D]/20 hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.06)] transition-all duration-700">
                  {/* Icon Container */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-8 border border-[#A56F3D]/20 flex items-center justify-center relative bg-gradient-to-br from-white to-[#F8F9FA]"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#A56F3D",
                      borderColor: "#A56F3D",
                      boxShadow: "0 15px 35px -10px rgba(165, 111, 61, 0.4)"
                    }}
                    transition={{ duration: 0.6, ease: easing }}
                  >
                    <industry.icon className="w-12 h-12 text-[#A56F3D] group-hover:text-[#101010] transition-colors duration-600" />
                    
                    {/* Corner Accent */}
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#A56F3D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-[#101010] text-lg mb-3 font-light tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="text-[#5A5A5A] text-sm font-light">
                    {industry.description}
                  </p>

                  {/* Hover Line */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-[#A56F3D] to-transparent mt-8 mx-auto origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easing }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Premium CTA Section */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-br from-[#101010] to-[#1A1A1A] p-20 relative overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div style={{
                backgroundImage: `repeating-linear-gradient(45deg, #A56F3D 0, #A56F3D 1px, transparent 0, transparent 30px)`,
              }} className="w-full h-full" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h3 
                className="text-white text-4xl lg:text-5xl mb-8 font-light tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easing }}
              >
                Don't See Your Industry?
              </motion.h3>
              <motion.p 
                className="text-[#D4D1CC] text-lg mb-12 leading-[1.8] font-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: easing }}
              >
                We specialize in creating bespoke packaging solutions for businesses 
                across all sectors. Contact us to discuss your unique requirements.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: easing }}
              >
                <motion.a
                  href="#contact"
                  className="bg-gradient-to-r from-[#A56F3D] to-[#8B5A2F] hover:from-[#B87333] hover:to-[#A56F3D] text-white px-12 py-6 transition-all duration-500"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="uppercase tracking-[0.25em] text-sm font-light">Request Custom Quote</span>
                </motion.a>
                <motion.a
                  href="tel:+916282370094"
                  className="border border-white/20 hover:border-[#A56F3D] text-white px-12 py-6 hover:bg-[#A56F3D]/10 transition-all duration-500"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="uppercase tracking-[0.25em] text-sm font-light">Call Now</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Accent Lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
