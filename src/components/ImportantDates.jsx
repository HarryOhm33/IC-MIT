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
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-600 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          📅 Important Dates
        </motion.h2>

        {/* Timeline */}
        <div className="mt-12 border-l-4 border-blue-600 pl-6 space-y-8">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-600 border-4 border-white rounded-full"></span>

              {/* Date & Event */}
              <p className="text-lg font-semibold text-blue-700">{item.date}</p>
              <p className="text-gray-700">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
