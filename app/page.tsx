import { NavigationMenuDemo } from "@/components/navbar";
import { BackgroundLinesDemo } from "@/components/hero-section";
import { Bento } from "@/components/what-we-offer";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <BackgroundLinesDemo />
      <Bento />
      <Testimonials />
      <Footer />
    </div>
  );
}
