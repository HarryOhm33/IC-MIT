import { motion } from "framer-motion";

export default function InternationalAdvisoryBoard() {
  return (
    <section id="iab" className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🌍 International Advisory Board
        </motion.h2>

        {/* International Advisory Board */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            International Advisory Board
          </h3>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Tirumalai S. Srivatsan
              </span>
              ,<i> Professor (Emeritus)</i>, The University of Akron, USA
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Sergej Hloch
              </span>
              ,<i> Professor</i>, Technical University of Kosice, Slovakia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Ing. Robert Čep
              </span>
              ,<i> Professor</i>, VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Jana Petrů
              </span>
              ,<i> Professor</i>, VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. C. S. Rakurty
              </span>
              ,<i> Sr. Res. Engi-Manager</i>, The M. K. Morse Co., USA
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Dmitry Eskin
              </span>
              ,<i> Professor</i>, Brunel University of London, UK
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Anton FICAI
              </span>
              ,<i> Professor</i>, National University of Science and
              POLITECHNICA Bucharest, Romania
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Kapil Gupta
              </span>
              ,<i> Professor</i>, University of Johannesburg, South Africa
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Alessandro Ruggiero
              </span>
              ,<i> Professor</i>, University of Salerno, Fisciano
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Velaphi Msomi
              </span>
              ,<i> Associate Professor</i>, University of South Africa
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Alokesh Pramanik
              </span>
              ,<i> Senior Lecturer</i>, Curtin University, Australia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">Dr. Akash Nag</span>
              ,<i> Assistant Professor</i>, VŠB-Technical University of Ostrava,
              Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Munish Kumar Gupta
              </span>
              ,<i> Assistant Professor</i>, Opole University of Technology,
              Poland
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Tanmay Tiwari
              </span>
              ,<i> Assistant Professor</i>, University of Akron, USA
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Showkat Ahmad Bhawani
              </span>
              ,<i> Assistant Professor</i>, Universiti Malaysia Sarawak,
              Malaysia
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
