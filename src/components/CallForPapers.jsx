import { motion } from "framer-motion";

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📢 Call for Papers
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
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
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            📌 Conference Themes
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <div>✔️ Material Science and Engineering</div>
            <div>✔️ Automated & Digital Manufacturing</div>
            <div>✔️ Materials Manufacturing and Processing</div>
            <div>✔️ Materials properties measuring methods</div>
            <div>✔️ Smart Manufacturing and application</div>
            <div>✔️ Automation Technology</div>
            <div>✔️ Friction, Wear, and Lubrication</div>
            <div>✔️ Industrial Automation</div>
            <div>✔️ Nanotechnology & Smart Materials</div>
            <div>✔️ Advanced Control Techniques</div>
            <div>✔️ Thermal and Fluid Engineering</div>
            <div>✔️ Biocompatible Material</div>
            <div>✔️ Additive Manufacturing</div>
            <div>✔️ Natural Material</div>
            <div>✔️ Kinematics and Dynamics</div>
          </div>
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h3 className="text-2xl font-semibold text-blue-600">
            📄 Submission Guidelines
          </h3>

          {/* Description */}
          <p className="mt-3 text-gray-700">
            Authors must submit their research papers in{" "}
            <strong>PDF format</strong> via the online submission portal. All
            submissions will undergo a<strong> double-blind peer review</strong>{" "}
            process.
          </p>

          {/* Deadline Box */}
          <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200 text-blue-800 text-center shadow-md">
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
