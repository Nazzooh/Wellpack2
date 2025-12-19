import { motion } from "motion/react";
import { Star, User, Quote, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "E-commerce Director",
    rating: 5,
    date: "2 months ago",
    text: "Exceptional quality corrugated solutions. The bulk shipment boxes exceeded our expectations in durability and presentation. Delivery was prompt, pricing competitive.",
    verified: true,
  },
  {
    name: "Priya Menon",
    role: "Food Products Manager",
    rating: 5,
    date: "3 months ago",
    text: "Highly professional collaboration. They assisted us in designing custom printed boxes for our premium food line. Print quality is outstanding, boxes are remarkably durable.",
    verified: true,
  },
  {
    name: "Anand Sharma",
    role: "Industrial Supply Director",
    rating: 4,
    date: "4 months ago",
    text: "Excellent manufacturing facility with consistent reliability. Competitive pricing structure and punctual delivery schedules. Perfectly suited for our industrial requirements.",
    verified: true,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-40 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
      {/* Elegant Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(165,111,61,0.04),transparent_70%)]" />

      <div className="max-w-[1920px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
            <span className="text-[#A56F3D] text-xs uppercase tracking-[0.3em] font-light">
              Client Testimonials
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A56F3D] to-transparent" />
          </div>
          <h2 className="text-[#101010] text-6xl lg:text-7xl mb-12 font-light tracking-[-0.02em]">
            Client Experiences
          </h2>

          {/* Rating Summary */}
          <motion.div
            className="inline-flex flex-col items-center gap-6 bg-white p-12 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.08)] border border-[#A56F3D]/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: easing }}
                >
                  <Star
                    className={`w-8 h-8 ${i < 4 ? "text-[#A56F3D] fill-[#A56F3D]" : "text-[#A56F3D]"
                      }`}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex items-baseline gap-3">
              <motion.span
                className="text-6xl text-[#101010] font-light tracking-tighter"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: easing }}
              >
                4.7
              </motion.span>
              <span className="text-[#5A5A5A] text-lg font-light">out of 5</span>
            </div>
            <div className="flex items-center gap-2 text-[#5A5A5A] font-light">
              <CheckCircle2 className="w-5 h-5 text-[#4A5D3E]" />
              <span>Based on 3 verified reviews</span>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="group h-full"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <div className="bg-white p-12 h-full hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 border-l-2 border-transparent hover:border-[#A56F3D]">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <Quote className="w-14 h-14 text-[#A56F3D]/15" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating
                          ? "text-[#A56F3D] fill-[#A56F3D]"
                          : "text-[#D4D1CC]"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#101010] text-lg leading-[1.8] mb-10 font-light">
                    "{review.text}"
                  </p>

                  {/* Author Section */}
                  <div className="pt-8 border-t border-[#E8DDD0]">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#A56F3D]/10 to-transparent border border-[#A56F3D]/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-[#A56F3D]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-[#101010] font-light">{review.name}</h4>
                          {review.verified && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: easing }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#4A5D3E]" />
                            </motion.div>
                          )}
                        </div>
                        <p className="text-[#5A5A5A] text-sm font-light">{review.role}</p>
                        <p className="text-[#5A5A5A] text-xs mt-1 font-light">{review.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-[#A56F3D] to-transparent mt-8 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: easing }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <ScrollReveal delay={0.5} className="text-center">
          <motion.div
            className="inline-flex items-center gap-5 bg-white px-10 py-6 shadow-lg border border-[#E8DDD0]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="text-left">
              <div className="text-[#101010] tracking-tight font-light">Verified on</div>
              <div className="text-[#5A5A5A] text-sm font-light">Google Reviews</div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Client Success CTA */}
        <ScrollReveal delay={0.7} className="mt-32">
          <div className="bg-gradient-to-r from-[#F8F9FA] to-white p-16 border-l-4 border-[#A56F3D] text-center">
            <h3 className="text-[#101010] text-4xl lg:text-5xl mb-6 font-light tracking-tight">
              Join 100+ Satisfied Clients
            </h3>
            <p className="text-[#5A5A5A] text-lg mb-10 font-light max-w-2xl mx-auto leading-[1.8]">
              Experience the quality and service that earned us a 4.7-star rating.
              From e-commerce to industrial packaging, we deliver excellence every time.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-[#A56F3D] to-[#8B5A2F] hover:from-[#B87333] hover:to-[#A56F3D] text-white px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">Start Your Order</span>
              </motion.a>
              <motion.a
                href="tel:+916282370094"
                className="border-2 border-[#A56F3D] text-[#A56F3D] hover:bg-[#A56F3D] hover:text-white px-12 py-6 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="uppercase tracking-[0.25em] text-sm font-light">Speak to Expert</span>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}