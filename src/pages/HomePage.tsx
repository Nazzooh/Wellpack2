import { HeroNew } from "../components/HeroNew";
import { ProductCategories } from "../components/ProductCategories";
import { WhyChoose } from "../components/WhyChoose";
import { Reviews } from "../components/Reviews";

export function HomePage() {
    return (
        <>
            <HeroNew />
            <ProductCategories />
            <WhyChoose />
            <Reviews />
        </>
    );
}
