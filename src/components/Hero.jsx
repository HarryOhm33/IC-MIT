import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "../assets/hero_img.png"; // Ensure the correct path

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-12">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          1st International Conference on Mechanical & Industrial Technologies
          <span className="text-yellow-400"> (IC-MIT 2025)</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Jointly organized by MIT Muzaffarpur & Darbhanga College of
          Engineering
        </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-6 py-3 rounded-lg text-lg transition-all duration-300"
        >
          Learn More
        </button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 mt-8 lg:mt-0"
      >
        <img
          src={heroImage}
          alt="Conference Banner"
          className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
