import { motion } from "motion/react";
import {
  Package,
  Clock,
  Palette,
  Shield,
  TrendingUp,
  DollarSign
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: Package,
    title: "Bulk Production",
    description: "High-volume manufacturing capacity with unwavering consistency and precision timing.",
    metric: "10K+",
    metricLabel: "Units Daily",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "Streamlined processes ensuring swift production without quality compromise.",
    metric: "24-48h",
    metricLabel: "Lead Time",
  },
  {
    icon: Palette,
    title: "Complete Customization",
    description: "Bespoke dimensions, premium printing, and tailored design solutions.",
    metric: "∞",
    metricLabel: "Possibilities",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "High-strength corrugated engineering ensuring maximum protection.",
    metric: "ISO",
    metricLabel: "Certified",
  },
  {
    icon: TrendingUp,
    title: "Brand Excellence",
    description: "Professional design consultation creating impactful packaging experiences.",
    metric: "100%",
    metricLabel: "Support",
  },
  {
    icon: DollarSign,
    title: "Direct Pricing",
    description: "Factory-direct competitive rates delivering exceptional value.",
    metric: "30%",
    metricLabel: "Savings",
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-40 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
      {/* Elegant Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8DDD0]/20 to-transparent" />

      <div className="max-w-[1920px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Our Distinction
            </span>
          </div>
          <h2 className="text-[#101010] text-6xl lg:text-7xl mb-8 font-light tracking-[-0.02em]">
            Excellence<br />Through Details
          </h2>
          <p className="text-[#5A5A5A] text-xl leading-[1.8] font-light max-w-2xl">
            Direct manufacturer advantages harmonized with professional service
            and unwavering quality standards.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <div className="bg-white p-12 h-full border-l-2 border-transparent hover:border-[#A56F3D] transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                  {/* Icon & Metric */}
                  <div className="flex items-start justify-between mb-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#A56F3D]/5 to-transparent border border-[#A56F3D]/20 flex items-center justify-center"
                      whileHover={{
                        backgroundColor: "#A56F3D",
                        borderColor: "#A56F3D",
                        scale: 1.1,
                        boxShadow: "0 10px 30px -10px rgba(165, 111, 61, 0.5)"
                      }}
                      transition={{ duration: 0.5, ease: easing }}
                    >
                      <feature.icon className="w-8 h-8 text-[#A56F3D] group-hover:text-[#101010] transition-colors duration-500" />
                    </motion.div>

                    <div className="text-right">
                      <motion.div
                        className="text-4xl text-[#A56F3D] font-light tracking-tighter"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: easing }}
                      >
                        {feature.metric}
                      </motion.div>
                      <div className="text-[#5A5A5A] text-[10px] uppercase tracking-[0.2em] mt-2 font-light">
                        {feature.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-[#101010] text-2xl mb-5 font-light tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#5A5A5A] leading-[1.8] font-light">
                    {feature.description}
                  </p>

                  {/* Elegant Line */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-[#A56F3D] to-transparent mt-8 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: easing }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Premium Stats Bar */}
        <ScrollReveal delay={0.6} className="mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-[#101010] p-1">
            {[
              { value: "15+", label: "Years Mastery" },
              { value: "1000+", label: "Daily Output" },
              { value: "100+", label: "Trusted Partners" },
              { value: "4.7★", label: "Excellence Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
                whileHover={{ y: -5 }}
                className="bg-white p-12 text-center group cursor-pointer"
              >
                <motion.div
                  className="text-6xl text-[#A56F3D] mb-3 font-light tracking-tighter"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: easing }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#5A5A5A] text-xs uppercase tracking-[0.25em] font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Conversion CTA */}
        <ScrollReveal delay={0.8} className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#F8F9FA] to-white p-16 border-l-4 border-[#A56F3D]">
            <h3 className="text-[#101010] text-4xl lg:text-5xl mb-6 font-light tracking-tight">
              Ready to elevate your packaging?
            </h3>
            <p className="text-[#5A5A5A] text-lg mb-10 font-light max-w-2xl mx-auto leading-[1.8]">
              Partner with Kerala's leading corrugated box manufacturer.
              Get your custom quote today and experience the Well Pack difference.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-[#A56F3D] to-[#7a5726] hover:from-[#B87333] hover:to-[#A56F3D] text-white px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">Get Custom Quote</span>
              </motion.a>
              <motion.a
                href="tel:+916282370094"
                className="border-2 border-[#A56F3D] text-[#A56F3D] hover:bg-[#7a5726] hover:text-white px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">Call: +91 62823 70094</span>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}