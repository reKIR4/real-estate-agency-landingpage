import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyTypes from "@/components/PropertyTypes";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CoverageMap from "@/components/CoverageMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CoverageMap />
      <Contact />
      <Footer />
    </>
  );
}
