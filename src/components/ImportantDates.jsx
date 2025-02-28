import { motion } from "framer-motion";

export default function ImportantDates() {
  return (
    <section id="dates" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📅 Important Dates
        </motion.h2>

        {/* Dates List */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="text-lg space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">📌</span>
              <span>
                {" "}
                <span className="text-blue-600 font-semibold">
                  Abstract Submission Deadline:
                </span>{" "}
                April 15, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">📌</span>
              <span>
                {" "}
                <span className="text-blue-600 font-semibold">
                  Notification of Acceptance:
                </span>{" "}
                April 20, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">📌</span>
              <span>
                {" "}
                <span className="text-blue-600 font-semibold">
                  Early Bird Registration Deadline:
                </span>{" "}
                April 30, 2025
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">📌</span>
              <span>
                {" "}
                <span className="text-blue-600 font-semibold">
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
