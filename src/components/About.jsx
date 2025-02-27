import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa"; // Icons for visual appeal

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* About Conference */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-yellow-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About the Conference
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            IC-MIT 2025 is an international forum for researchers, academics,
            and industry professionals to discuss advancements in Mechanical &
            Industrial Technologies.
          </motion.p>
        </motion.div>

        {/* About MIT Muzaffarpur and DCE Darbhanga */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About MIT Muzaffarpur */}
          <motion.div
            className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-400 rounded-full shadow-md">
                <FaUniversity className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400">
                MIT Muzaffarpur
              </h3>
            </div>
            <p className="mt-4 text-gray-300">
              Established in 1954, MIT Muzaffarpur is one of the oldest
              technical institutions in eastern India. It operates under the
              Department of Science, Technology, and Technical Education, Bihar
              Government, and is affiliated with Bihar Engineering University,
              Patna.
            </p>
          </motion.div>

          {/* About DCE Darbhanga */}
          <motion.div
            className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-400 rounded-full shadow-md">
                <FaGraduationCap className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400">
                DCE Darbhanga
              </h3>
            </div>
            <p className="mt-4 text-gray-300">
              Darbhanga College of Engineering, established in 2008, is a
              government-owned institution affiliated with Bihar Engineering
              University, Patna. It offers undergraduate programs in Civil,
              Mechanical, Electrical & Electronics, Computer Science, Cyber
              Security, and Fire Technology & Safety Engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
