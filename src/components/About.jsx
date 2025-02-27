import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Conference */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About the Conference
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          IC-MIT 2025 is an international forum for researchers, academics, and
          industry professionals to discuss advancements in Mechanical &
          Industrial Technologies.
        </motion.p>

        {/* About MIT Muzaffarpur */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            MIT Muzaffarpur
          </h3>
          <p className="mt-2 text-gray-700">
            Established in 1954, MIT Muzaffarpur is one of the oldest technical
            institutions in eastern India. It operates under the Department of
            Science, Technology, and Technical Education, Bihar Government, and
            is affiliated with Bihar Engineering University, Patna.
          </p>
        </motion.div>

        {/* About DCE Darbhanga */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            DCE Darbhanga
          </h3>
          <p className="mt-2 text-gray-700">
            Darbhanga College of Engineering, established in 2008, is a
            government-owned institution affiliated with Bihar Engineering
            University, Patna. It offers undergraduate programs in Civil,
            Mechanical, Electrical & Electronics, Computer Science, Cyber
            Security, and Fire Technology & Safety Engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
