import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa"; // Icons for visual appeal

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-900">
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
            className="text-4xl font-bold text-blue-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About the Conference
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The 1st International Conference on Mechanical & Industrial
            Technologies (IC-MIT 2025) will be held at MIT Muzaffarpur, Bihar,
            India on May 24-25, 2025. The conference serves as a platform for
            researchers, academics, scientists, and professionals to present
            innovative contributions in Mechanical & Industrial Engineering.
          </motion.p>
        </motion.div>

        {/* About MIT Muzaffarpur and DCE Darbhanga */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About MIT Muzaffarpur */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full shadow-md">
                <FaUniversity className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">
                MIT Muzaffarpur
              </h3>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in 1954, Muzaffarpur Institute of Technology (MIT) is
              one of the oldest and most prestigious technical institutions in
              Eastern India. The institute is fully funded by the Government of
              Bihar and is affiliated with Bihar Engineering University (BEU),
              Patna.
            </p>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              <li>
                🎓 Offers undergraduate programs in Civil, Mechanical,
                Electrical, Computer Science, Electronics, and more.
              </li>
              <li>
                📚 Provides postgraduate programs in Geotechnical,
                Transportation, Thermal, Electrical Energy, and Advanced
                Electronics.
              </li>
              <li>
                🏆 Encourages research activities and hosts workshops,
                placements, alumni meets, and technical events.
              </li>
              <li>
                🔗 Website:{" "}
                <a
                  href="https://www.mitmuzaffarpur.org"
                  className="text-blue-600 hover:underline"
                >
                  MIT Official Website
                </a>
              </li>
            </ul>
          </motion.div>

          {/* About DCE Darbhanga */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full shadow-md">
                <FaGraduationCap className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">
                DCE Darbhanga
              </h3>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Darbhanga College of Engineering (DCE), established in 2008, is a
              government engineering college affiliated with Bihar Engineering
              University (BEU), Patna. It was previously known as JMIT
              (Jagannath Mishra Institute of Technology).
            </p>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              <li>
                🏗️ Offers undergraduate programs in Civil, Mechanical,
                Electrical & Electronics, Computer Science, Cyber Security, and
                Fire & Safety Engineering.
              </li>
              <li>
                🎓 Provides postgraduate programs in Power Systems Engineering.
              </li>
              <li>
                🔗 Website:{" "}
                <a
                  href="https://dcedarbhanga.org"
                  className="text-blue-600 hover:underline"
                >
                  DCE Official Website
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
