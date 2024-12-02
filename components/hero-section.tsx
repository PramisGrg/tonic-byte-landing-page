"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["products", "reality"];

  return (
    <>
      <BackgroundLines className="flex items-center flex-col justify-center w-full px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Turn your software ideas into{" "}
          <FlipWords className="text-primary" words={words} />
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Our team of professionals are changing the traditional way of software
          development by providing customers and businesses with easy, scalable
          and fast software solutions.
        </p>
        <div className="pt-6"></div>
      </BackgroundLines>
    </>
  );
};

export default Hero;
