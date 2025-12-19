import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Package, Printer, Boxes, Warehouse } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    icon: Printer,
    title: "Printed Corrugated Boxes",
    description: "Custom-designed boxes with high-quality printing for brand identity and product marketing.",
    features: ["Multi-color printing", "Custom branding", "Various sizes", "Durable materials"],
    color: "#A56F3D",
  },
  {
    icon: Package,
    title: "Non-Printed Boxes",
    description: "Cost-effective standard packaging solutions for shipping, storage, and industrial use.",
    features: ["Multiple sizes", "Quick delivery", "Bulk orders", "Budget-friendly"],
    color: "#4A5D3E",
  },
  {
    icon: Boxes,
    title: "Custom Packaging",
    description: "Tailored packaging solutions designed to meet your specific product and industry requirements.",
    features: ["Custom dimensions", "Special coatings", "Unique designs", "Industry-specific"],
    color: "#B87333",
  },
  {
    icon: Warehouse,
    title: "Industrial Solutions",
    description: "Heavy-duty corrugated packaging for commercial and industrial products across sectors.",
    features: ["High strength", "Load capacity", "Weather resistant", "Stackable design"],
    color: "#8B5A2F",
  },
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Die-cut shapes background */}
      <div className="absolute top-20 right-20 w-40 h-40 border-4 border-[#E8DDD0] opacity-30 hidden lg:block" 
           style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)" }} />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-[#E8DDD0] opacity-30 hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A56F3D] uppercase tracking-wider border-l-4 border-[#A56F3D] pl-4 inline-block">
            Our Products
          </span>
          <h2 className="mt-6 mb-6 text-[#101010]">
            Comprehensive Packaging Solutions
          </h2>
          <p className="text-[#5A5A5A] max-w-3xl mx-auto">
            From standard boxes to custom-designed packaging, we offer a complete range
            of corrugated solutions to protect and present your products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F8F9FA] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-[#101010]/5 hover:border-[#A56F3D]/20 h-full relative">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <polygon points="48,0 48,48 0,0" fill={product.color} opacity="0.1"/>
                  </svg>
                </div>

                {/* Icon with border */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 border-4 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500"
                       style={{ borderColor: product.color }}>
                    <product.icon className="w-8 h-8" style={{ color: product.color }} />
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "4rem" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="h-1 mt-4"
                    style={{ backgroundColor: product.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-[#101010] mb-4">{product.title}</h3>
                <p className="text-[#5A5A5A] mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 text-[#101010]"
                    >
                      <div className="w-2 h-2 border-2" style={{ borderColor: product.color }} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  className="mt-6 flex items-center gap-2"
                  style={{ color: product.color }}
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 overflow-hidden shadow-2xl border-4 border-[#101010]"
        >
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1585221330389-24fb30535ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjYXJkYm9hcmQlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzY0MTM1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Custom packaging"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="mb-2">Quality You Can Trust</h3>
              <p className="text-[#E8DDD0] max-w-2xl">
                Every box we manufacture undergoes rigorous quality checks to ensure
                your products receive the protection they deserve.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
