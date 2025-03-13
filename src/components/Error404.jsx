import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error404() {
  const navigate = useNavigate();

  // Automatically redirect to home after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center px-6">
      {/* Animated Container */}
      <motion.div
        className="bg-white/40 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 404 Number */}
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold text-blue-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        {/* Countdown Message */}
        <motion.p
          className="mt-2 text-sm md:text-base text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Redirecting to the home page in{" "}
          <span className="font-semibold text-blue-600">10 seconds</span>...
        </motion.p>

        {/* Optional Illustration
        <motion.img
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-found-8956801-7316670.png"
          alt="Page Not Found"
          className="w-60 mt-6 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        /> */}

        {/* Go Home Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/"
            className="relative inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:scale-105 overflow-hidden group"
          >
            <span className="absolute w-0 h-0 bg-white opacity-10 group-hover:w-48 group-hover:h-48 transition-all duration-500 ease-out rounded-full"></span>
            <span className="text-lg font-semibold relative">Go Home</span>
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
