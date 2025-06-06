import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { journals } from "../../../public/assets/journals"; // Update the import path
import Abstract_P from "../../../public/assets/Abstract_Proceedings.pdf";

export default function Publication() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredJournals = journals.slice(0, 5);

  return (
    <section
      id="publication"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="publication-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          id="publication-heading"
          className="text-4xl font-bold text-blue-700 text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📚 Publication
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-3xl shadow-xl border border-blue-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              All accepted papers will be published in proceedings indexed by{" "}
              <span className="text-blue-600 font-semibold">Scopus</span> and{" "}
              <span className="text-blue-600 font-semibold">
                Web of Science
              </span>
              . Selected papers will be published in these renowned journals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredJournals.map((journal) => (
                <motion.div
                  key={journal.id}
                  className="p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all border border-blue-100"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-200 rounded-lg">
                      <span className="text-blue-700 font-bold text-xl">J</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        {journal.name}
                      </h3>
                      <p className="text-sm text-blue-700 mt-2">
                        ISSN: {journal.issn}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {journal.indexing.map((index, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-blue-800 bg-blue-100 px-2 py-1 rounded-full"
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

            <p className="text-sm text-gray-600 text-center mt-6">
              * Publication charges may apply as per individual journal policies
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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

            <a
              href={Abstract_P} // Replace with actual path
              download
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="text-lg font-semibold">
                Download Abstract Proceedings
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
