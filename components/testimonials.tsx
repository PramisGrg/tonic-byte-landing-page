import React from "react";
import Marquee from "./animata/container/marquee";
import MaxwidthContainer from "@/app/layout/maxwidth-container";
import { Quote } from "lucide-react";

const testimonials = [
  {
    person: "Nisha Sakya",
    tittle: "Founder @ Himalayan Trail",
    description:
      "Tonic Byte with a sleek, user-friendly website that exceeded our expectations. Their team was professional, responsive, and clearly passionate about delivering top-notch solutions. We couldn't be happier with the results!",
  },
  {
    person: "Nisha Sakya",
    tittle: "Founder @ Himalayan Trail",
    description:
      "Tonic Byte transformed our online presence with a sleek, user-friendly website Their team was professional, responsive, and clearly passionate about delivering top-notch solutions. We couldn't be happier with the results!",
  },
  {
    person: "Nisha Sakya",
    tittle: "Founder @ Himalayan Trail",
    description:
      "Tonic Byte transformed  our online presence with a sleek, user-friendly websiteheir team was professional, responsive, and clearly passionate about delivering top-notch solutions. We couldn't be happier with the results!",
  },
  {
    person: "Nisha Sakya",
    tittle: "Founder @ Himalayan Trail",
    description:
      "Tonic Byte transformed our online presence with a sleek, user-friendly website that exceeded our expectations. Their tessional, responsive, and clearly passionate about delivering top-notch solutions. We couldn't be happier with the results!",
  },
];

const Testimonials = () => {
  return (
    <MaxwidthContainer>
      <div className="lg:py-20 md:py-10 py-8 space-y-10">
        <div className="text-center space-y-4 font-bold">
          <h1 className="text-4xl">
            Hear from our Happy
            <span className="text-primary">customers !!</span>
          </h1>
          <p className="text-gray-400 font-normal">
            Explore with our happy clients what Tonic Byte provide to your dream
          </p>
        </div>
        <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden bg-background">
          <Marquee className="" pauseOnHover applyMask={false}>
            {testimonials.map((one) => (
              <div className="bg-secondary text-white p-4 w-80 space-y-4 rounded-md h-full">
                <Quote className="text-primary" />
                <p className="">{one.description}</p>
                <div>
                  <p className="font-bold text-primary">{one.person}</p>
                  <p className="text-sm text-gray-400">{one.tittle}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </MaxwidthContainer>
  );
};

export default Testimonials;
