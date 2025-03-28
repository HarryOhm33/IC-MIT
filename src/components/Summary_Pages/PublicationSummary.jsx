import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { journals } from "../../../public/assets/journals"; // Update the import path

export default function Publication() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get featured journals (first 5 entries)
  const featuredJournals = journals.slice(0, 5);

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
            All accepted papers will be published in proceedings indexed by{" "}
            <span className="text-blue-600 font-semibold">Scopus</span> and{" "}
            <span className="text-blue-600 font-semibold">Web of Science</span>.
            Selected papers will be published in these renowned journals:
          </p>

          {/* Featured Journal Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJournals.map((journal) => (
              <motion.div
                key={journal.id}
                className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-200 rounded-lg">
                    <span className="text-blue-700 font-bold">J</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">
                      {journal.name}
                    </h3>
                    <p className="text-sm text-blue-600 mt-2">
                      ISSN: {journal.issn}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {journal.indexing.map((index, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded"
                        >
                          {index}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/publications"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="text-lg font-semibold">
                View Complete Journal List
              </span>
              <svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-gray-500 text-center">
            * Publication charges may apply as per individual journal policies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
