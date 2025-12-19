import { HeroNew } from "../components/HeroNew";
import { ProductCategories } from "../components/ProductCategories";
import { WhyChoose } from "../components/WhyChoose";
import { Reviews } from "../components/Reviews";
import { FactoryShowcase } from "../components/FactoryShowcase";
import { IndustriesServed } from "../components/IndustriesServed";

export function HomePage() {
    return (
        <>
            <HeroNew />
            <ProductCategories />
            <FactoryShowcase />
            <WhyChoose />
            <IndustriesServed />
            <Reviews />
        </>
    );
}
