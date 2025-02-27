import { motion } from "framer-motion";

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-16 bg-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Call for Papers
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center"
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
          className="mt-8 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Conference Themes
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700">
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
          className="mt-8 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Submission Guidelines
          </h3>
          <p className="mt-2 text-gray-700">
            Authors must submit their research papers in PDF format via the
            online submission portal. All submissions will undergo a
            **double-blind peer review** process.
          </p>
          <p className="mt-2 text-gray-700">
            📅 **Deadline for Abstract/Paper Submission:** April 15, 2025 📅
            **Notification of Acceptance:** April 20, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
