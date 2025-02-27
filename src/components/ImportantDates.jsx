import { motion } from "framer-motion";

export default function ImportantDates() {
  return (
    <section id="dates" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Important Dates
        </motion.h2>

        {/* Dates List */}
        <motion.div
          className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="text-lg space-y-3 text-gray-700">
            <li>📌 **Abstract Submission Deadline:** April 15, 2025</li>
            <li>📌 **Notification of Acceptance:** April 20, 2025</li>
            <li>📌 **Early Bird Registration Deadline:** April 30, 2025</li>
            <li>📌 **Conference Dates:** May 24 - 26, 2025</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
