import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFileAlt, FaLightbulb, FaTools } from "react-icons/fa";

function CallForPapersSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="call-for-papers"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-600 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Call for Papers
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We invite researchers, academicians, and industry professionals to
          submit their original research papers for IC-MIT 2025. Explore the
          tracks and contribute to the advancement of mechanical and industrial
          technologies.
        </motion.p>

        {/* Cards Wrapper */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTools className="text-blue-600 text-2xl" />,
              title: "Materials Processing & Manufacturing",
              description:
                "Topics include additive manufacturing, advanced welding, robotics in manufacturing, sustainable and green manufacturing, and more.",
            },
            {
              icon: <FaLightbulb className="text-blue-600 text-2xl" />,
              title: "Fluid Flow & Thermal Engineering",
              description:
                "Topics include advanced HVAC systems, computational fluid dynamics, heat transfer, thermodynamics, and renewable energy systems.",
            },
            {
              icon: <FaFileAlt className="text-blue-600 text-2xl" />,
              title: "Design & Simulation Techniques",
              description:
                "Topics include mechanical system design, dynamic analysis, CAD/CAM, finite element analysis, and structural health monitoring.",
            },
          ].map((track, index) => (
            <motion.article
              key={index}
              className="p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">{track.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  {track.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {track.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Submission Guidelines */}
        <motion.section
          className="mt-12 bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Submission Guidelines
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Authors are invited to submit their original research papers in PDF
            format via the online submission portal. All submissions will
            undergo a double-blind peer review process.
          </p>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>
              <strong>Submission Deadline:</strong> April 15, 2025
            </li>
            <li>
              <strong>Notification of Acceptance:</strong> April 20, 2025
            </li>
            <li>
              <strong>Early Bird Registration Deadline:</strong> April 30, 2025
            </li>
          </ul>
        </motion.section>

        {/* View Full Call for Papers Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/call-for-papers"
            onClick={scrollToTop}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            aria-label="View Full Call for Papers"
          >
            <span className="text-lg font-semibold">Explore More</span>
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

export default CallForPapersSummary;
