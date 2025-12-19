import { FactoryShowcase } from "../components/FactoryShowcase";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";

export function AboutPage() {
    return (
        <div className="pt-24 min-h-screen bg-[#F8F9FA]">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-16">
                <ScrollReveal>
                    <h1 className="text-[#101010] text-5xl lg:text-6xl font-light mb-8">
                        About <span className="text-[#A56F3D]">WellPack</span>
                    </h1>
                    <p className="text-[#5A5A5A] text-xl leading-relaxed max-w-3xl mb-16 font-light">
                        We are Kerala's premier corrugated box manufacturer, dedicated to delivering specific dimensions and premium quality packaging solutions. With over 15 years of mastery, we combine direct manufacturer pricing with professional design excellence.
                    </p>
                </ScrollReveal>
            </div>
            <FactoryShowcase />

            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 gap-16">
                        <ScrollReveal>
                            <h2 className="text-3xl text-[#101010] mb-6 font-light">Our Mission</h2>
                            <p className="text-[#5A5A5A] text-lg leading-relaxed font-light">
                                To empower businesses with packaging that not only protects their products but elevates their brand value. We believe in sustainable practices, rapid turnarounds, and building lasting partnerships through reliability and trust.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <h2 className="text-3xl text-[#101010] mb-6 font-light">Why We Lead</h2>
                            <ul className="space-y-4">
                                {[
                                    "State-of-the-art Manufacturing Facility",
                                    "Expert Design Consultation",
                                    "Strict Quality Control Protocols",
                                    "Sustainable Material Sourcing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#5A5A5A] font-light">
                                        <span className="w-1.5 h-1.5 bg-[#A56F3D] rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
