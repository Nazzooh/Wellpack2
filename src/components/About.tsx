import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Box, Printer, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Custom Packaging",
    description: "Tailored solutions for your specific product requirements",
  },
  {
    icon: Printer,
    title: "Printed Boxes",
    description: "High-quality printing for brand visibility and recognition",
  },
  {
    icon: Layers,
    title: "Non-Printed Boxes",
    description: "Cost-effective standard packaging for various applications",
  },
  {
    icon: Sparkles,
    title: "Quality Assured",
    description: "Superior corrugated materials ensuring product protection",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Corrugated Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-corrugated" width="6" height="30" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="3" height="30" fill="#A56F3D"/>
              <rect x="3" y="0" width="3" height="30" fill="#8B5A2F"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-corrugated)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#A56F3D] uppercase tracking-wider border-l-4 border-[#A56F3D] pl-4">
                About Well Pack
              </span>
              <h2 className="mt-6 mb-6 text-[#101010]">
                Manufacturing Excellence Since Day One
              </h2>
              <p className="text-[#5A5A5A] mb-6">
                Well Pack specializes in manufacturing high-quality corrugated carton boxes
                and custom packaging solutions. Located in Feroke, Kerala, we serve
                commercial and industrial clients across multiple industries with
                precision-engineered packaging products.
              </p>
              <p className="text-[#5A5A5A] mb-8">
                Our commitment to quality, timely delivery, and customer satisfaction
                has earned us a stellar reputation in the packaging industry. From
                standard boxes to custom-designed solutions, we deliver excellence
                in every product.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A56F3D]/10 border-2 border-[#A56F3D]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A56F3D] group-hover:border-[#A56F3D] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-[#A56F3D] group-hover:text-[#F8F9FA] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-[#101010] mb-1">{feature.title}</h3>
                      <p className="text-[#5A5A5A]">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden border-4 border-[#101010] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjQxMzI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Packaging Factory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/70 to-transparent" />
            </div>

            {/* Floating Card with geometric shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border-4 border-[#A56F3D]"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#A56F3D] flex items-center justify-center">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-[#101010]">Industry Leader</div>
                  <div className="text-[#5A5A5A]">in Kerala</div>
                </div>
              </div>
              {/* Corner fold accent */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <polygon points="32,0 32,32 0,0" fill="#8B5A2F"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
