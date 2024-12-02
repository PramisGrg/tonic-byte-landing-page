import Navbar from "@/components/navbar";
import Hero from "@/components/hero-section";
import { OfferSection } from "@/components/what-we-offer";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OfferSection />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
