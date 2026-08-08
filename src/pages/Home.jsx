import Footer from "../components/layout/Footer.jsx";
import CTA from "../components/home/CTA.jsx";
import TestimonialSlider from "../components/home/TestimonialsSlider.jsx";
import Services from "../components/home/ServicesPreview.jsx";
import Features from "../components/home/Features.jsx";
import Hero from "../components/home/Hero.jsx"
import Stats from "../components/home/Stats.jsx"
import Process from "../components/home/Process.jsx";


const Home = () => {
  return(
    <>
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Process />
      <TestimonialSlider />
      <CTA />
      <Footer />
    </>
  );
};
export default Home;