import { motion } from "framer-motion";

export default function Committee() {
  return (
    <section
      id="committee"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🎓 Conference Committee & Organizers
        </motion.h2>

        {/* Chief Patron */}
        <motion.div
          className="mt-8 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            Chief Patron
          </h3>
          <p className="mt-2 text-gray-300">
            🎓{" "}
            <span className="text-yellow-300 font-semibold">
              Dr. Pratima, I.A.S
            </span>{" "}
            – Secretary, DSTTE
          </p>
        </motion.div>

        {/* Patron */}
        <motion.div
          className="mt-6 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">Patron</h3>
          <p className="mt-2 text-gray-300">
            🎓{" "}
            <span className="text-yellow-300 font-semibold">
              Shri Ahmad Mahmood, I.A.S
            </span>{" "}
            – Director, DSTTE
          </p>
        </motion.div>

        {/* Chairpersons */}
        <motion.div
          className="mt-6 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            Chairpersons
          </h3>
          <p className="mt-2 text-gray-300">
            🎓{" "}
            <span className="text-yellow-300 font-semibold">
              Prof. (Dr.) M. K. Jha
            </span>{" "}
            – Principal, MIT Muzaffarpur
          </p>
          <p className="mt-2 text-gray-300">
            🎓{" "}
            <span className="text-yellow-300 font-semibold">
              Prof. (Dr.) Sandeep Tiwari
            </span>{" "}
            – DCE Darbhanga
          </p>
        </motion.div>

        {/* Conference Convener */}
        <motion.div
          className="mt-6 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            Conference Convener
          </h3>
          <p className="mt-2 text-gray-300">
            🎓{" "}
            <span className="text-yellow-300 font-semibold">
              Dr. Ashish K Srivastava
            </span>{" "}
            – MIT Muzaffarpur
          </p>
        </motion.div>

        {/* Organizing Members */}
        <motion.div
          className="mt-6 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            Organizing Members
          </h3>
          <ul className="mt-2 text-gray-300 space-y-2">
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Dr. Alok Ranjan
              </span>{" "}
              – MIT Muzaffarpur
            </li>
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Mr. Ankit Kumar
              </span>{" "}
              – DCE Darbhanga
            </li>
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Prof. Sergej Hloch
              </span>{" "}
              – Technical University of Kosice
            </li>
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Prof. Jana Petrů
              </span>{" "}
              – VŠB-Technical University of Ostrava
            </li>
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Dr. Akash Nag
              </span>{" "}
              – VŠB-Technical University of Ostrava
            </li>
            <li>
              🔹{" "}
              <span className="text-yellow-300 font-semibold">
                Dr. Tanmay Tiwari
              </span>{" "}
              – University of Akron, Ohio
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
