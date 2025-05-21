import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../public/assets/hero_img.webp";

const Hero = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = "/assets/FinalSchedule.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ICMIT-2025-Schedule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen text-gray-900 px-6 md:px-12 pt-32 lg:pt-16"
      style={{
        scrollMarginTop: "80px",
        backgroundImage: "url('/assets/mit.png')",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white"
        >
          1st International Conference on Mechanical & Industrial Technologies
          <span className="text-yellow-300">
            <br /> (IC-MIT 2025)
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-6 text-white"
        >
          Jointly organized by Muzaffarpur Institute Of Technology, Darbhanga
          College of Engineering, and Indian Society For Technical Education
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <motion.a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Learn More
          </motion.a>
          <motion.button
            onClick={handleDownload}
            className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 text-lg font-medium"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Download Schedule
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image (Conference Banner) */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 z-10"
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