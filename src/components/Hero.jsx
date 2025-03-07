import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../public/assets/hero_img.webp"; // Ensure the correct path
import Particles from "react-tsparticles";

const Hero = () => {
  const particlesInit = async (engine) => {
    console.log("Particles Initialized!"); // Debugging
    await engine.init(); // Initialize the engine
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-white text-gray-900 px-6 md:px-12 pt-32 lg:pt-16"
      style={{ scrollMarginTop: "80px" }} // Ensures smooth scrolling without overlap
    >
      {/* Particle Animation Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false }, // Prevent it from taking the full screen
            background: { color: "transparent" }, // Set background to transparent
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#3b82f6" }, // Blue particles
              links: {
                color: "#3b82f6", // Blue links
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
              },
              number: {
                value: 80,
                density: { enable: true, area: 800 },
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 z-10" // z-10 to ensure text is above particles
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          1st International Conference on Mechanical & Industrial Technologies
          <span className="text-blue-600">
            <br /> (IC-MIT 2025)
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-6"
        >
          Jointly organized by Muzaffarpur Institute Of Technology, Darbhanga
          College of Engineering, and Indian Society For Technical Education
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 z-10" // z-10 to ensure image is above particles
      >
        <motion.img
          src={heroImage}
          alt="Conference Banner"
          className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:max-w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
