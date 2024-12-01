"use client";
import MaxwidthContainer from "@/app/layout/maxwidth-container";
import taskDoneAnimation from "@/public/animation/animation.json";
import Lottie from "lottie-react";
import { GiRoad } from "react-icons/gi";
import { ShieldCheck, ListCheck, UserRound, Hammer, Check } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

const whyChooseUs = [
  {
    icon: <GiRoad />,
    tittle: "Roadmaps",
    description:
      "provide a strategic vision for software development, outlining the key milestones, features, and deliverables over time.",
  },
  {
    icon: <ShieldCheck />,
    tittle: "Secure and Scalable",
    description:
      "ensuring that data and systems remain protected against breaches, vulnerabilities, and unauthorized access.",
  },
  {
    icon: <Check />,
    tittle: "Qualtiy Software",
    description:
      "ensures that the delivered solution is reliable, efficient, and meets or exceeds user expectations.",
  },
  {
    icon: <UserRound />,
    tittle: "User-centric",
    description:
      "places the end user at the heart of the software design and development process.",
  },
];

const listAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 * index,
      easeInOut,
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <MaxwidthContainer>
      <div className="lg:py-20 md:py-10 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="lg:text-4xl font-bold md:text-2xl text-xl">
            Why choose <span className="text-primary">Us</span> ?
          </h1>
          <p className="text-gray-400">
            We are on a mission to empower everyone including individuals, small
            businesses, large-scale businesses and enterprise industry to turn
            great ideas into reality by planning, execution and quality
            assurance in Nepal by providing following solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-xl">
            <ul className="flex justify-center h-full space-y-8 flex-col">
              {whyChooseUs.map((choose, index) => (
                <motion.li
                  variants={listAnimationVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  key={choose.tittle}
                  className="flex gap-4"
                >
                  <p className="border rounded-full p-2 flex items-center justify-center w-10 h-10">
                    {choose.icon}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl text-primary">{choose.tittle}</p>
                    <p className="text-base text-gray-700">
                      {choose.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div className="max-h-[550px]">
            <Lottie
              animationData={taskDoneAnimation}
              style={{ height: "100%", width: "100%" }}
            />
          </motion.div>
        </div>
      </div>
    </MaxwidthContainer>
  );
};

export default WhyChooseUs;
