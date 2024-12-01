"use client";
import MaxwidthContainer from "@/app/layout/maxwidth-container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const listAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 * i,
      ease: "easeInOut",
    },
  }),
};

const whatWeOffer = [
  {
    tittle: "Web Development",
    description: "Building modern and scalable web applications.",
  },
  {
    tittle: "Cloud Computing",
    description:
      "Leveraging the cloud for efficient data storage and processing.",
  },
  {
    tittle: "Mobile Development",
    description: "Creating mobile apps for Android and iOS platforms.",
  },
  {
    tittle: "Data Analytics",
    description:
      "Transforming raw data into meaningful insights for businesses.",
  },
  {
    tittle: "AI Solutions",
    description:
      "Implementing AI to enhance business operations and decision-making.",
  },
];

export const Cell = ({
  tittle,
  description,
}: {
  tittle: string;
  description: string;
}) => {
  return (
    <div className="size-full rounded-lg center hover:scale-105 hover:bg-blue-50 transition-all duration-300 ease-in-out shadow-md p-6 text-xl">
      <div className="font-bold text-primary text-xl">{tittle}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </div>
    </div>
  );
};

export const Bento = () => {
  return (
    <MaxwidthContainer>
      <div className="lg:space-y-20 md:space-y-12 space-y-6 py-14">
        <div className="text-center space-y-4">
          <h1 className=" font-bold lg:text-4xl md:text-2xl text-xl">
            What We <span className="text-primary">Offer</span> ?
          </h1>
          <p className="text-gray-400 ">
            At Tonic Byte, we provide innovative technology solutions tailored
            to meet the evolving needs of businesses in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {whatWeOffer.map((item, i) => (
            <motion.div
              variants={listAnimation}
              initial="hidden"
              whileInView="visible"
              custom={i}
              key={i}
              className={cn(
                "p-1 rounded-lg h-32",
                i < 3 && "md:col-span-2",
                i === 2 && "md:col-span-4",
                i > 2 && "md:col-span-2"
              )}
            >
              <Cell tittle={item.tittle} description={item.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </MaxwidthContainer>
  );
};
