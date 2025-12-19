import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const easing = [0.22, 1, 0.36, 1];

const products = [
  {
    name: "Custom Printed Boxes",
    feature: "Premium multi-color branding with flexographic excellence",
    image: "https://i.postimg.cc/pLyKgvTQ/Chat-GPT-Image-Nov-26-2025-07-25-54-PM.png",
  },
  {
    name: "Plain Shipping Boxes",
    feature: "Cost-effective bulk solutions for logistics efficiency",
    image: "https://images.unsplash.com/photo-1631010231931-d2c396b444ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGJveGVzJTIwcGxhaW58ZW58MXx8fHwxNzY0MTM2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Industrial Heavy-Duty",
    feature: "High-strength corrugated engineering for heavy loads",
    image: "https://images.unsplash.com/photo-1735917957609-71d7557552c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGR1dHklMjBjYXJkYm9hcmR8ZW58MXx8fHwxNzY0MTM2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Die-Cut Packaging",
    feature: "Bespoke shapes and precision-cut designs",
    image: "https://images.unsplash.com/photo-1585221330389-24fb30535ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjYXJkYm9hcmQlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzY0MTM1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "E-commerce Solutions",
    feature: "Optimized for unboxing experience and retail",
    image: "https://images.unsplash.com/photo-1755606396356-bdd7cd95df75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzY0MTM2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Protective Inserts",
    feature: "Internal dividers ensuring fragile item safety",
    image: "https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JydWdhdGVkJTIwY2FyZGJvYXJkJTIwYm94ZXMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY0MTM1OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ProductCategories() {
  return (
    <section id="products" className="py-40 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(165,111,61,0.03),transparent_70%)]" />
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Elegant Section Header */}
        <ScrollReveal className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Product Portfolio
            </span>
          </div>
          <h2 className="text-[#101010] text-6xl lg:text-7xl mb-8 font-light tracking-[-0.02em]">
            Packaging Excellence<br />Across Categories
          </h2>
          <p className="text-[#5A5A5A] text-xl leading-[1.8] font-light max-w-2xl">
            From custom-printed branding to industrial-strength solutions, 
            each product embodies precision engineering and aesthetic refinement.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group cursor-pointer h-full"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <div className="relative overflow-hidden bg-[#F8F9FA] h-full">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: easing }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Elegant Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-[#101010]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                    
                    {/* Hover Icon */}
                    <motion.div
                      className="absolute top-8 right-8 w-14 h-14 bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, x: -10, y: 10 }}
                      whileHover={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.4, ease: easing }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Top Accent Line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: easing }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-10 space-y-4">
                    <h3 className="text-[#101010] text-2xl font-light tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-[#5A5A5A] leading-relaxed font-light">
                      {product.feature}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <motion.div
                      className="h-px bg-gradient-to-r from-[#A56F3D] to-transparent origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: easing }}
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Elegant CTA */}
        <ScrollReveal delay={0.6} className="mt-32 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#101010] to-[#1A1A1A] text-white px-12 py-6 hover:from-[#A56F3D] hover:to-[#8B5A2F] transition-all duration-500 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm uppercase tracking-[0.25em] font-light">
              Request Custom Quote
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
