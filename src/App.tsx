import { Navbar } from "./components/Navbar";
import { HeroNew } from "./components/HeroNew";
import { ProductCategories } from "./components/ProductCategories";
import { WhyChoose } from "./components/WhyChoose";
import { FactoryShowcase } from "./components/FactoryShowcase";
import { IndustriesServed } from "./components/IndustriesServed";
import { Reviews } from "./components/Reviews";
import { ContactForm } from "./components/ContactForm";
import { FooterNew } from "./components/FooterNew";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <HeroNew />
      <ProductCategories />
      <WhyChoose />
      <FactoryShowcase />
      <IndustriesServed />
      <Reviews />
      <ContactForm />
      <FooterNew />
    </div>
  );
}
