import HeroSection from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/ContactUs";
import FAQ from "@/components/Faq";
import Blog from "@/components/Blog";
import OurWork from "@/components/OurWork";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      <FAQ />
      <Blog/>
      <Footer/>
    </div>
  );
}
