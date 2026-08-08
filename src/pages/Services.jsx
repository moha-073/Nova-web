import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import TechStack from "../components/services/TechStack";
import PricingPreview from "../components/services/PricingPreview";
import CTA from "../components/services/CTA";


const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <TechStack />
      <PricingPreview />
      <CTA />
    </>
  )
}

export default Services;