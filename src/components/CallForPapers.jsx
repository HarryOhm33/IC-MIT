import { motion } from "framer-motion";

export default function CallForPapers() {
  return (
    <section
      id="call-for-papers"
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
          📢 Call for Papers
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Researchers, academicians, and industry professionals are invited to
          submit their original research papers in the following areas.
        </motion.p>

        {/* Conference Themes */}
        <motion.div
          className="mt-10 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            📌 Conference Themes
          </h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔️ Material Science and Engineering</li>
            <li>✔️ Materials Manufacturing and Processing</li>
            <li>✔️ Nanotechnology & Smart Materials</li>
            <li>✔️ Thermal and Fluid Engineering</li>
            <li>✔️ Additive Manufacturing</li>
            <li>✔️ Industrial Automation</li>
            <li>✔️ Advanced Control Techniques</li>
          </ul>
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div
          className="mt-10 bg-gray-850/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h3 className="text-2xl font-semibold text-yellow-300">
            📄 Submission Guidelines
          </h3>

          {/* Description */}
          <p className="mt-3 text-gray-300">
            Authors must submit their research papers in{" "}
            <strong>PDF format</strong> via the online submission portal. All
            submissions will undergo a<strong> double-blind peer review</strong>{" "}
            process.
          </p>

          {/* Deadline Box */}
          <div className="mt-4 p-4 bg-yellow-700/40 backdrop-blur-md rounded-lg border border-yellow-400 text-yellow-200 text-center shadow-md">
            <p className="font-semibold text-lg">
              📅 <strong>Submission Deadline:</strong> April 15, 2025
            </p>
            <p className="font-semibold text-lg mt-2">
              📢 <strong>Notification of Acceptance:</strong> April 20, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
