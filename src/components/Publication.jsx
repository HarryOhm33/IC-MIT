import { motion } from "framer-motion";

export default function Publication() {
  return (
    <section
      id="publication"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="publication-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          id="publication-heading"
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📚 Publication
        </motion.h2>

        {/* Publication Details */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            All the presented and selected quality papers will be sent to the{" "}
            <span className="text-blue-600 font-semibold">Web of Science</span>{" "}
            and <span className="text-blue-600 font-semibold">Scopus</span>{" "}
            indexed proceedings for possible publication. All the abstracts will
            be published as a conference proceeding with a separate{" "}
            <span className="text-blue-600 font-semibold">ISBN number</span>.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            The journal list will be updated soon…
          </p>
        </motion.div>
      </div>
    </section>
  );
}
