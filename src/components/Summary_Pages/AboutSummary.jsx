import { Link } from "react-router-dom";
import { FaUniversity, FaGraduationCap, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title with animation */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-600 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The 1st International Conference on Mechanical & Industrial
          Technologies (IC-MIT 2025) is a premier event organized by Muzaffarpur
          Institute of Technology, Darbhanga College of Engineering, and the
          Indian Society for Technical Education.
        </motion.p>

        {/* Card Wrapper */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MIT Muzaffarpur Card */}
          <motion.div
            className="p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl border border-blue-100"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaUniversity className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">
                Muzaffarpur Institute of Technology (MIT)
              </h3>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in 1954, MIT is one of the oldest and most prestigious
              technical institutions in Eastern India. It offers undergraduate
              and postgraduate programs in various engineering disciplines.
            </p>
          </motion.div>

          {/* DCE Darbhanga Card */}
          <motion.div
            className="p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl border border-blue-100"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaGraduationCap className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">
                Darbhanga College of Engineering (DCE)
              </h3>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in 2008, DCE is a government engineering college
              offering programs in Civil, Mechanical, Electrical, and Computer
              Science.
            </p>
          </motion.div>

          {/* Mechanical Engineering Department Card */}
          <motion.div
            className="p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl border border-blue-100"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaCogs className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">
                Mechanical Engineering Department
              </h3>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The Department of Mechanical Engineering at MIT Muzaffarpur offers
              B.Tech and M.Tech programs with state-of-the-art facilities,
              including advanced CNC machines, 3D printers, and computational
              labs.
            </p>
          </motion.div>
        </div>

        {/* Read More Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/about"
            onClick={scrollToTop}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:scale-105"
          >
            <span className="text-lg font-semibold">Read More</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSummary;
