import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaCogs } from "react-icons/fa"; // Added FaCogs for Mechanical Engineering
import { useState } from "react";

export default function About() {
  const [mitExpanded, setMitExpanded] = useState(false);
  const [mechExpanded, setMechExpanded] = useState(false);

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
                Muzaffarpur Institute of Technology (MIT)
              </h3>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The Muzaffarpur Institute of Technology (MIT) is one of the oldest
              and most prestigious technical institutions in Eastern India.
              Established in 1954, MIT operates under the Government of Bihar
              and is affiliated with Bihar Engineering University (BEU), Patna.
            </p>

            {!mitExpanded && (
              <button
                onClick={() => setMitExpanded(true)}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read More ▼
              </button>
            )}

            {mitExpanded && (
              <>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  With a legacy spanning over 70 years, MIT follows the motto
                  <span className="italic">
                    {" "}
                    "Work is above everything else"{" "}
                  </span>
                  . The institute offers eight undergraduate programs,
                  including:
                </p>
                <ul className="mt-4 text-gray-700 text-sm space-y-2">
                  <li>⚙️ Mechanical Engineering - 60 seats</li>
                  <li>🏗️ Civil Engineering - 60 seats</li>
                  <li>⚡ Electrical Engineering - 60 seats</li>
                  <li>
                    📡 Electronics and Communication Engineering - 40 seats
                  </li>
                  <li>🖥️ Computer Science and other disciplines</li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  For research and higher studies, MIT provides six postgraduate
                  programs in various engineering disciplines:
                </p>
                <ul className="mt-4 text-gray-700 text-sm space-y-2">
                  <li>
                    🔥 Mechanical (Thermal Engineering - 18, Machine Design -
                    18)
                  </li>
                  <li>
                    🏗️ Civil (Geotechnical Engineering - 30, Transportation
                    Engineering - 18)
                  </li>
                  <li>⚡ Electrical (Electrical Energy System - 18)</li>
                  <li>
                    📡 Electronics (Advanced Electronics and Communication
                    Engineering - 18)
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  MIT Muzaffarpur has a distinguished alumni network that
                  inspires and supports students in their academic and
                  professional journeys.
                </p>
                <p className="mt-4">
                  🔗 Website:{" "}
                  <a
                    href="https://www.mitmuzaffarpur.org"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MIT Official Website
                  </a>
                </p>
              </>
            )}

            {mitExpanded && (
              <button
                onClick={() => setMitExpanded(false)}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read Less ▲
              </button>
            )}
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
              About Mechanical Engineering Department, MIT Muzaffarpur
            </h3>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">
            The Department of Mechanical Engineering was started from the
            session 1960-61. Currently, the department is offering a 4-year
            B.Tech Program in Mechanical Engineering with an intake capacity of
            60. From the session 2017, the department has started the M.Tech
            program in the field of "Machine Design and Thermal Engineering,"
            with an intake capacity of 18 each.
          </p>

          {/* Read More Button (Only on Mobile) */}
          {!mechExpanded && (
            <button
              onClick={() => setMechExpanded(true)}
              className="mt-4 md:hidden text-blue-600 font-semibold hover:underline"
            >
              Read More ▼
            </button>
          )}

          {/* Expanded Content */}
          <div className={`${mechExpanded ? "block" : "hidden"} md:block`}>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The department also encompasses the Central Research Facility lab,
              consisting of cutting-edge equipment such as:
            </p>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>Advance CNC</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>3D Printer</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>Stir Casting Machine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>PIN on Disc Wear Test Machine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>CNC Wire-Cut EDM</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>Disc Polishing Machine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>Optical Microscope</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔧</span>
                <span>Vicker Micro Hardness Tester</span>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Additionally, the department features a Computational Lab
              (Vasistha Narayan Singh Research Lab) for designing and performing
              numerical and analytical work in software like SolidWorks, Matlab,
              ANSYS 19.2 R1, and more.
            </p>
          </div>

          {/* Show "Read Less" Button when expanded */}
          {mechExpanded && (
            <button
              onClick={() => setMechExpanded(false)}
              className="mt-4 md:hidden text-blue-600 font-semibold hover:underline"
            >
              Read Less ▲
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
