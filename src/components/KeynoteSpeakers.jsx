import { motion } from "framer-motion";

export default function KeynoteSpeaker() {
  return (
    <section id="keynote" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🎤 Keynote Speaker
        </motion.h2>

        {/* Keynote Speaker Details */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Keynote Speaker
          </h3>
          <p className="mt-2 text-gray-700">Will be updated shortly.</p>
        </motion.div>
      </div>
    </section>
  );
}
