import { IndustriesServed } from "../components/IndustriesServed";
import { ScrollReveal } from "../components/ScrollReveal";

export function IndustriesPage() {
    return (
        <div className="pt-24 min-h-screen bg-[#F8F9FA]">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-16">
                <ScrollReveal>
                    <h1 className="text-[#101010] text-5xl lg:text-6xl font-light mb-6">
                        Industries <span className="text-[#A56F3D]">Served</span>
                    </h1>
                    <p className="text-[#5A5A5A] text-xl leading-relaxed max-w-2xl font-light mb-12">
                        Tailored packaging solutions for diverse sectors, ensuring safety and compliance across all verticals.
                    </p>
                </ScrollReveal>
            </div>
            <IndustriesServed />
        </div>
    );
}
