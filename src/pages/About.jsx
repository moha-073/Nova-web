import AboutHero from "../components/about/AboutHero";
import CoreValues from "../components/about/CoreValues";
import AboutCTA from "../components/about/CTA";
import MissionVision from "../components/about/MissionVision";
import MyApproach from "../components/about/My Approach";
import OurStory from "../components/about/OurStory";
import WhyWorkWithUs from "../components/about/WhyWorkWithUs";


const About = () => {
  return (
    <>
      <AboutHero /> 
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyWorkWithUs />
      <MyApproach />
      <AboutCTA />
    </>
  )
}

export default About;