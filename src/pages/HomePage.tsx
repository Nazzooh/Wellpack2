import { HeroNew } from "../components/HeroNew";
import { ProductCategories } from "../components/ProductCategories";
import { WhyChoose } from "../components/WhyChoose";
import { Reviews } from "../components/Reviews";
import { FactoryShowcase } from "../components/FactoryShowcase";
import { IndustriesServed } from "../components/IndustriesServed";
import { SEO } from "../components/SEO";

export function HomePage() {
    return (
        <>
            <SEO
                title="Wellpack | Premium Industrial Packaging Solutions"
                description="Expert manufacturing of high-quality industrial packaging, corrugated boxes, and protective shipping solutions for global industries."
            />
            <HeroNew />
            <ProductCategories />
            <FactoryShowcase />
            <WhyChoose />
            <IndustriesServed />
            <Reviews />
        </>
    );
}
