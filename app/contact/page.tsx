"use client";
import React from "react";
import MaxwidthContainer from "../layout/maxwidth-container";
import contactIllustrator from "@/public/contact-image.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const page = () => {
  return (
    <MaxwidthContainer>
      <section className="lg:py-20 md:py-16 py-8 md:space-y-24 space-y-20">
        <div className="flex md:space-y-4 space-y-2 flex-col justify-center items-center w-full">
          <h1 className="font-bold lg:text-6xl md:text-4xl text-3xl">
            Let us build <span className="text-primary">Together</span>
          </h1>
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center md:text-base text-gray-500"
          >
            Have questions, feedback, or need assistance? We are here to help!
            Reach out to us for inquiries about our tech solutions,
            partnerships, or support. Fill out the contact form below or email
            us directly, and our team will get back to you promptly. Let’s build
            something amazing together!
          </motion.p>
        </div>

        <aside className="grid md:grid-cols-2 grid-cols-1 gap-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full flex items-center order-1"
          >
            <Image
              className="object-cover"
              src={contactIllustrator}
              alt="This is contact illustrator"
              width={1000}
              height={1000}
            />
          </motion.div>
          <div className="md:space-y-6 space-y-4 order-2">
            <h1 className="md:text-3xl text-2xl">
              Simply fill this form to{" "}
              <span className="text-primary"> Contact Us</span>
            </h1>
            <div className="md:space-y-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-base font-bold" htmlFor="name">
                  Full Name
                </Label>
                <Input className="py-5" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label className="text-base font-bold" htmlFor="email">
                  Email
                </Label>
                <Input className="py-5" placeholder="Enter your email" />
              </div>
              <div className="flex space-y-2 flex-col">
                <Label className="text-base font-bold" htmlFor="message">
                  Any messages ?
                </Label>
                <textarea
                  className="border h-48 p-2 rounded-md"
                  placeholder="We would love to hear from you"
                />
              </div>
              <Button className="leading-tight py-4 font-bold">
                Send A Message
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </MaxwidthContainer>
  );
};

export default page;
