import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Products Manufactured Daily" },
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 4.7, suffix: "★", label: "Customer Rating" },
];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(startValue + (end - startValue) * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toFixed(end % 1 !== 0 ? 1 : 0)}</span>;
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#101010] relative overflow-hidden">
      {/* Cardboard texture pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-texture" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#A56F3D"/>
              <circle cx="2" cy="2" r="0.5" fill="#8B5A2F"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-texture)" />
        </svg>
      </div>

      {/* Box outline decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-[#A56F3D]/20 opacity-50" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#4A5D3E]/20 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A56F3D] uppercase tracking-wider border-l-4 border-[#A56F3D] pl-4 inline-block">
            By The Numbers
          </span>
          <h2 className="mt-6 text-[#F8F9FA]">Proven Track Record</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group relative"
            >
              {/* Geometric background */}
              <div className="absolute inset-0 border-2 border-[#A56F3D]/10 group-hover:border-[#A56F3D]/30 transition-colors" />
              <div className="relative p-8">
                <div className="text-5xl lg:text-6xl text-[#A56F3D] mb-3 tracking-tight">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="h-1 bg-[#A56F3D] origin-left mx-auto w-16"
                />
                <p className="text-[#D4D1CC] mt-4">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
