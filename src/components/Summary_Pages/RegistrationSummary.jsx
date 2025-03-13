import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaUserGraduate, FaBuilding } from "react-icons/fa";

function RegistrationSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="registration"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Registration
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Register now to secure your spot at IC-MIT 2025. Early bird discounts
          are available for a limited time. Choose your category and complete
          the registration process.
        </motion.p>

        {/* Card Wrapper */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Research Scholar",
              price: "₹2,500",
              regularPrice: "₹3,500",
              icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
            },
            {
              title: "Faculty Member",
              price: "₹4,000",
              regularPrice: "₹5,000",
              icon: <FaUser className="text-blue-600 text-3xl" />,
            },
            {
              title: "Industry Person",
              price: "₹7,000",
              regularPrice: "₹8,000",
              icon: <FaBuilding className="text-blue-600 text-3xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Early Bird:</strong> {item.price}
                <br />
                <strong>Regular:</strong> {item.regularPrice}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note for Full Details */}
        <motion.p
          className="mt-8 text-gray-700 text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          *Above is partial information. For full details, including payment
          info and registration, click below.*
        </motion.p>

        {/* View More Button */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/registration"
            onClick={scrollToTop}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition duration-300 shadow-lg hover:scale-105"
          >
            <span className="text-lg font-semibold">View More</span>
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

export default RegistrationSummary;
