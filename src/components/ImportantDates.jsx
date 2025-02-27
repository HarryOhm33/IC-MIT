import { motion } from "framer-motion";

export default function ImportantDates() {
  return (
    <section
      id="dates"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📅 Important Dates
        </motion.h2>

        {/* Dates List */}
        <motion.div
          className="mt-8 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="text-lg space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📌</span>
              <span>
                {" "}
                <span className="text-yellow-400 font-semibold">
                  Abstract Submission Deadline:
                </span>{" "}
                April 15, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📌</span>
              <span>
                {" "}
                <span className="text-yellow-400 font-semibold">
                  Notification of Acceptance:
                </span>{" "}
                April 20, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📌</span>
              <span>
                {" "}
                <span className="text-yellow-400 font-semibold">
                  Early Bird Registration Deadline:
                </span>{" "}
                April 30, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📌</span>
              <span>
                {" "}
                <span className="text-yellow-400 font-semibold">
                  Conference Dates:
                </span>{" "}
                May 24 - 26, 2025
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
