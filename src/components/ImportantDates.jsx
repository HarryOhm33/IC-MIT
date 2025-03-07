import { motion } from "framer-motion";

const dates = [
  { date: "April 15, 2025", event: "Abstract Submission Deadline" },
  { date: "April 20, 2025", event: "Notification of Acceptance" },
  { date: "April 30, 2025", event: "Early Bird Registration Deadline" },
  { date: "May 24 - 26, 2025", event: "Conference Dates" },
];

const ImportantDates = () => {
  return (
    <section
      id="dates"
      className="py-20 bg-white from-gray-50 to-gray-100 text-gray-900" // Gradient for smooth blending
    >
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
        <motion.ul
          className="mt-8 space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          viewport={{ once: true }}
        >
          {dates.map((item, index) => (
            <motion.li
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" // Added hover effect
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-blue-600 text-2xl">📌</span>
                <div>
                  <strong className="text-blue-600 font-semibold">
                    {item.date}
                  </strong>{" "}
                  - {item.event}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ImportantDates;
