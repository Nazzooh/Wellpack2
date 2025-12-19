import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const factoryStages = [
  {
    label: "Corrugation",
    description: "State-of-the-art high-speed corrugation excellence",
    image: "https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY0MTAwMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    label: "Printing",
    description: "Advanced multi-color flexographic precision",
    image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjQxMzI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    label: "Cutting & Creasing",
    description: "Precision die-cutting technology",
    image: "https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JydWdhdGVkJTIwY2FyZGJvYXJkJTIwYm94ZXMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY0MTM1OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    label: "Assembly",
    description: "Automated box forming systems",
    image: "https://images.unsplash.com/photo-1762381294795-8fa0e7f3e90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFja2VkJTIwY2FyZGJvYXJkJTIwYm94ZXN8ZW58MXx8fHwxNzY0MTM2OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    label: "Quality Control",
    description: "Rigorous multi-point inspection",
    image: "https://images.unsplash.com/photo-1585221330389-24fb30535ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjYXJkYm9hcmQlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzY0MTM1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    label: "Dispatch",
    description: "Secure bundling and logistics",
    image: "https://images.unsplash.com/photo-1755606396356-bdd7cd95df75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzY0MTM2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function FactoryShowcase() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="factory" ref={ref} className="py-40 bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] relative overflow-hidden">
      {/* Elegant Grid with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.01]"
        style={{ y }}
      >
        <div style={{
          backgroundImage: `linear-gradient(rgba(165,111,61,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(165,111,61,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} className="w-full h-full" />
      </motion.div>

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(165,111,61,0.05),transparent_70%)]" />

      <div className="max-w-[1920px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="max-w-5xl mx-auto text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Manufacturing Process
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
          </div>
          <h2 className="text-white text-6xl lg:text-7xl mb-8 font-light tracking-[-0.02em]">
            Precision at<br />Every Stage
          </h2>
          <p className="text-[#D4D1CC] text-xl leading-[1.8] font-light max-w-2xl mx-auto">
            End-to-end production capabilities with state-of-the-art technology
            ensuring excellence throughout the manufacturing journey.
          </p>
        </ScrollReveal>

        {/* Elegant Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            onClick={() => scroll("left")}
            className="w-16 h-16 border border-[#A56F3D]/30 hover:border-[#A56F3D] hover:bg-[#A56F3D]/10 flex items-center justify-center backdrop-blur-sm transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            <ChevronLeft className="w-6 h-6 text-[#A56F3D]" />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className="w-16 h-16 border border-[#A56F3D]/30 hover:border-[#A56F3D] hover:bg-[#A56F3D]/10 flex items-center justify-center backdrop-blur-sm transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            <ChevronRight className="w-6 h-6 text-[#A56F3D]" />
          </motion.button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {factoryStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easing }}
              className="flex-shrink-0 w-[450px] snap-start group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ y: -12 }}
            >
              <div className="relative h-full bg-[#1A1A1A]/50 backdrop-blur-sm overflow-hidden border border-[#A56F3D]/10 hover:border-[#A56F3D]/30 transition-all duration-700">
                {/* Image */}
                <div className="relative h-[550px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1, ease: easing }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={stage.image}
                      alt={stage.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Elegant Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/60 to-transparent" />

                  {/* Stage Number */}
                  <motion.div
                    className="absolute top-10 left-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: easing }}
                  >
                    <div className="w-20 h-20 border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
                      <span className="text-white text-3xl font-light tracking-tighter">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>

                  {/* Top Accent */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: easing }}
                  />
                </div>

                {/* Content */}
                <div className="p-10 space-y-5">
                  <h3 className="text-white text-3xl font-light tracking-tight">
                    {stage.label}
                  </h3>
                  <p className="text-[#D4D1CC] leading-[1.8] font-light">
                    {stage.description}
                  </p>

                  {/* Progress Line */}
                  <div className="pt-6">
                    <div className="h-px bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#A56F3D] to-[#B87333]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: easing }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Progress Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {factoryStages.map((_, index) => (
            <motion.div
              key={index}
              className="h-px w-12 bg-[#A56F3D]/20 cursor-pointer"
              whileHover={{ backgroundColor: "#A56F3D" }}
              animate={{
                backgroundColor: activeIndex === index ? "#A56F3D" : "rgba(165, 111, 61, 0.2)",
                scaleY: activeIndex === index ? 2 : 1,
              }}
              transition={{ duration: 0.4, ease: easing }}
              onClick={() => {
                setActiveIndex(index);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 460,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>

        {/* Factory Visit CTA */}
        <ScrollReveal delay={0.8} className="mt-32">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-16 text-center">
            <h3 className="text-white text-4xl lg:text-5xl mb-6 font-light tracking-tight">
              Experience Manufacturing Excellence
            </h3>
            <p className="text-[#D4D1CC] text-lg mb-10 font-light max-w-2xl mx-auto leading-[1.8]">
              Visit our state-of-the-art facility in Feroke, Kerala.
              Witness the precision and quality that goes into every box we manufacture.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/about"
                className="border border-white/20 text-white px-12 py-6 hover:bg-white hover:text-[#101010] transition-all duration-500"
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">About Us</span>
              </Link>
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-[#A56F3D] to-[#8B5A2F] hover:from-[#B87333] hover:to-[#A56F3D] text-white px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">Schedule Factory Visit</span>
              </motion.a>
              <motion.a
                href="https://wa.me/916282370094"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-[#A56F3D] text-white hover:bg-[#A56F3D]/10 px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">WhatsApp Inquiry</span>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}