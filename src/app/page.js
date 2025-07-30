import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import Destinations from "@/components/Destination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import VillaListings from "@/components/VillaListings";
import Why_us from "@/components/Why_us";

export default function Home() {
  return (
    <div className="font-Geist bg-gray-50/40">
      <Hero />
      <Destinations/>
      <Why_us/>
      <CTA/>
      <VillaListings/>
      <Services/>
      <Testimonial/>
      <CTA2/>
      <Footer/>
    </div>
  );
}
