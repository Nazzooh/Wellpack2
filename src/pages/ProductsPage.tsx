import { ProductCategories } from "../components/ProductCategories";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function ProductsPage() {
    return (
        <div className="pt-24 min-h-screen bg-[#F8F9FA]">
            <SEO
                title="Industrial Corrugated Boxes & Packaging Solutions"
                description="Explore our range of high-quality corrugated boxes, protective packaging, and custom shipping solutions designed for global industries."
            />
            <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-16">
                <ScrollReveal>
                    <h1 className="text-[#101010] text-5xl lg:text-6xl font-light mb-6">
                        Our <span className="text-[#A56F3D]">Collection</span>
                    </h1>
                    <p className="text-[#5A5A5A] text-xl leading-relaxed max-w-2xl font-light mb-12">
                        Explore our comprehensive range of high-quality corrugated solutions, designed for durability and brand impact.
                    </p>
                </ScrollReveal>
            </div>
            <ProductCategories />

            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-16 text-center">
                    <h2 className="text-3xl text-[#101010] mb-6 font-light">Need a Custom Size?</h2>
                    <p className="text-[#5A5A5A] mb-8 font-light">We specialize in bespoke manufacturing for any specification.</p>
                    <Link to="/contact" className="inline-block bg-[#101010] text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-[#A56F3D] transition-colors duration-300">
                        Request Custom Quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
