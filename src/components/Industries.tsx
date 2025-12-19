import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  ShoppingBag, 
  Utensils, 
  Zap, 
  Pill, 
  Shirt, 
  Home,
  Cpu,
  Factory
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-Commerce", color: "#A56F3D" },
  { icon: Utensils, name: "Food & Beverage", color: "#4A5D3E" },
  { icon: Zap, name: "Electronics", color: "#B87333" },
  { icon: Pill, name: "Pharmaceuticals", color: "#8B5A2F" },
  { icon: Shirt, name: "Textile & Apparel", color: "#A56F3D" },
  { icon: Home, name: "Home & Furniture", color: "#4A5D3E" },
  { icon: Cpu, name: "Technology", color: "#B87333" },
  { icon: Factory, name: "Manufacturing", color: "#101010" },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#E8DDD0] relative overflow-hidden">
      {/* Folded paper texture */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industries-fold" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#101010" strokeWidth="1"/>
              <line x1="100" y1="0" x2="0" y2="100" stroke="#101010" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industries-fold)" />
        </svg>
      </div>

      {/* Geometric box outlines */}
      <motion.div
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-40 h-40 border-4 border-[#A56F3D]/20"
      />
      <motion.div
        animate={{
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-32 h-32 border-4 border-[#4A5D3E]/20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A56F3D] uppercase tracking-wider border-l-4 border-[#A56F3D] pl-4 inline-block">
            Industries We Serve
          </span>
          <h2 className="mt-6 mb-6 text-[#101010]">
            Packaging Solutions Across Sectors
          </h2>
          <p className="text-[#5A5A5A] max-w-3xl mx-auto">
            Our corrugated boxes serve diverse industries with specialized packaging
            requirements. Whatever your sector, we have the expertise to deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white hover:bg-[#F8F9FA] p-8 text-center border-4 border-[#101010]/5 hover:border-[#A56F3D]/30 hover:shadow-xl transition-all duration-300 cursor-pointer relative">
                {/* Corner fold accent */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 32 32" className="w-full h-full">
                    <polygon points="32,0 32,32 0,0" style={{ fill: industry.color }} opacity="0.2"/>
                  </svg>
                </div>

                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 border-4 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow"
                  style={{ borderColor: industry.color }}
                >
                  <industry.icon className="w-8 h-8" style={{ color: industry.color }} />
                </motion.div>
                <h3 className="text-[#101010]">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#101010] p-12 text-white shadow-2xl border-t-4 border-[#A56F3D] relative">
            {/* Corrugated edge effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A56F3D] via-[#B87333] to-[#A56F3D]" />
            
            <h3 className="mb-4">Don't See Your Industry?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-[#D4D1CC]">
              We work with businesses across all sectors to create custom packaging solutions.
              Contact us to discuss your specific requirements.
            </p>
            <a
              href="tel:+916282370094"
              className="inline-block bg-[#A56F3D] hover:bg-[#8B5A2F] text-[#F8F9FA] px-8 py-4 border-2 border-[#A56F3D] transition-colors duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
