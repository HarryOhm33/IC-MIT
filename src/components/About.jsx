import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaCogs } from "react-icons/fa"; // Added FaCogs for Mechanical Engineering

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
            className="mt-4 text-lg text-gray-700 max-w-6xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The 1st International Conference on Mechanical & Industrial
            Technologies (IC-MIT 2025) is going to be held in the Department of
            Mechanical Engineering, MIT Muzaffarpur, Bihar India during May
            24-25, 2025. The conference will offer an international forum for
            researchers, academics, scientists, professional technologists, and
            industry experts to present and disseminate their research, studies,
            contributions, advancements, and innovative concepts pertinent to
            Mechanical Engineering. The program will include invited
            presentations, regular sessions of contributed papers, and keynote
            addresses on a variety of topics by distinguished experts in their
            fields. Aspiring authors are asked to contribute novel works that
            are not currently being submitted elsewhere. Each article will be
            blind subject to peer review, with acceptance criteria considering
            quality, originality, technical content, and significance.
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
                Muzaffarpur Institute Of Technology
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
                  target="_blank"
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
                Darbhanga College Of Engineering
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
                  href="https://www.dce-darbhanga.org/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  DCE Official Website
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* About Mechanical Engineering Department */}
        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full shadow-md">
              <FaCogs className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600">
              About Mechanical Engineering Department
            </h3>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Since its inception in 1960-61, the Department of Mechanical
            Engineering has been a cornerstone of MIT Muzaffarpur. Known for its
            strong academic foundation and practical learning approach, the
            department offers a 4-year B. Tech program in Mechanical Engineering
            and two M. Tech programs in Machine Design and Thermal Engineering.
            With a team of highly qualified faculty members and well-equipped
            laboratories, the department ensures students gain a deep
            understanding of core mechanical concepts like Thermodynamics,
            Machine Design, Manufacturing, and Fluid Mechanics.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Students are encouraged to go beyond textbooks, exploring hands-on
            learning in workshops and real-world industrial applications. The
            department boasts modern laboratories, providing practical exposure
            to various mechanical processes and systems. Some of the key labs in
            the college are:
          </p>
          <ul className="mt-4 text-gray-700 text-sm space-y-2">
            <li>🔧 Central Research Facility Lab</li>
            <li>🔧 Computational Lab (Vasistha Narayan Singh Lab)</li>
            <li>🔧 Engineering Mechanics Lab</li>
            <li>🔧 Dynamics of Machinery Lab</li>
            <li>🔧 Internal Combustion Engine Lab</li>
            <li>🔧 Steam Power System Lab</li>
            <li>🔧 Refrigeration & Air Conditioning Lab</li>
            <li>🔧 Heat & Mass Transfer Lab</li>
            <li>🔧 Engineering Graphics Lab</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Beyond academics, the department actively promotes research and
            innovation, encouraging students to work on real-world engineering
            challenges, industrial projects, and model development. With a
            strong focus on both theory and practical applications, the
            Mechanical Engineering Department at MIT Muzaffarpur continues to
            shape future engineers, preparing them for successful careers in
            industry, research, and entrepreneurship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
