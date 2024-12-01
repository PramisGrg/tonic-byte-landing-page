import MaxwidthContainer from "@/app/layout/maxwidth-container";
import React from "react";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="text-white bg-secondary pt-12">
      <MaxwidthContainer>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cold-1 gap-20 pb-4 border-b ">
          <div className="space-y-2 md:block flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">Tonic Byte</h1>
              <p>Zero Km-17, Pokhara</p>
            </div>
            <span className="flex gap-4">
              <IoCall className="w-8 h-8 text-green-600" />
              <span className="flex items-center">Call us</span>
            </span>
          </div>
          <div className="space-y-10">
            <section className="space-y-4">
              <h1 className="text-xl font-bold">Company</h1>
              <ul className="space-y-4">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h1 className="text-xl font-bold">Work with Us</h1>
              <ul>
                <li>Careers</li>
              </ul>
            </section>
          </div>
          <div>
            <section className="space-y-4">
              <h1 className="text-xl font-bold">Services</h1>
              <ul className="space-y-4">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Computing</li>
                <li>Digital Marketing</li>
                <li>UI/UX design</li>
                <li>Database Management</li>
              </ul>
            </section>
          </div>
          <div>
            <section className="space-y-4">
              <h1 className="text-xl font-bold">Connect with Us</h1>
              <ul className="space-y-4">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>X</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="text-center py-6 text-gray-300">
          Copyright 2024, Tonic Byte Technology Inc.
        </div>
      </MaxwidthContainer>
    </div>
  );
};

export default Footer;
