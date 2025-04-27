import { motion } from "framer-motion";
import keynoteSpeakersImage from "../../public/assets/keynote-speakers.jpg";

export default function KeynoteSpeaker() {
  return (
    <section
      id="keynote"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
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
          🎤 Keynote Speakers
        </motion.h2>

        {/* Keynote Speaker Details */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <img
              src={keynoteSpeakersImage}
              alt="Keynote Speakers List"
              className="rounded-lg w-full max-w-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
