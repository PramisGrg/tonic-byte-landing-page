import { NavigationMenuDemo } from "@/components/navbar";
import { BackgroundLinesDemo } from "@/components/hero-section";
import { Bento } from "@/components/what-we-offer";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <BackgroundLinesDemo />
      <Bento />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
