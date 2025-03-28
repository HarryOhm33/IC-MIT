import { motion } from "framer-motion";
import { journals } from "../../public/assets/journals";

export default function Publication() {
  // Separate journals and book chapters
  const academicJournals = journals.filter((j) => j.id !== 14);
  const bookChapter = journals.find((j) => j.id === 14);

  return (
    <section
      id="publication"
      className="py-20 bg-white text-gray-900"
      aria-labelledby="publication-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
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

        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {/* All Journals Section */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                Publication Partners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicJournals.map((journal) => (
                  <motion.div
                    key={journal.id}
                    className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-200 rounded-lg">
                        <span className="text-blue-700 font-bold">J</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-blue-800">
                          {journal.name}
                        </h4>
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
            </div>

            {/* Book Chapter Section */}
            <motion.div
              className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-200 rounded-lg">
                  <span className="text-purple-700 font-bold">B</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-800">
                    {bookChapter.name}
                  </h4>
                  <p className="text-sm text-purple-600 mt-2">
                    {bookChapter.details}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <p className="mt-8 text-sm text-gray-500 text-center">
              * Publication charges may apply as per individual journal policies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
