import { motion } from "framer-motion";

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🎓 Committee
        </motion.h2>

        {/* Chief Patron */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Chief Patron</h3>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Dr. Pratima, I.A.S
            </span>{" "}
            – <i> Secretary </i>, Department of Science, Technology and
            Technical Education, Patna
          </p>
        </motion.div>

        {/* Patron */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Patron</h3>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Shri Ahmad Mahmood, I.A.S
            </span>{" "}
            – <i>Director </i>, Department of Science, Technology and Technical
            Education, Patna
          </p>
        </motion.div>

        {/* Chairpersons */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Chairpersons</h3>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Prof. (Dr.) M. K. Jha
            </span>{" "}
            –<i> Principal</i>, MIT Muzaffarpur
          </p>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Prof. (Dr.) Sandeep Tiwari
            </span>{" "}
            –<i> Principal</i>, DCE Darbhanga
          </p>
        </motion.div>

        {/* Conference Convener */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Conference Convener
          </h3>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Dr. Ashish K Srivastava
            </span>{" "}
            – <i> Associate Professor</i>, MIT Muzaffarpur
          </p>
        </motion.div>

        {/* Organising Secretary */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Organising Secretary
          </h3>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">Dr. Alok Ranjan</span>{" "}
            – MIT Muzaffarpur
          </p>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">Mr. Ankit Kumar</span>{" "}
            – DCE Darbhanga
          </p>
        </motion.div>

        {/* Organizing Members */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Organizing Members
          </h3>
          <div className="mt-2">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Irshad Alam
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Hemant Kr Choudhary
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Gulshan Kumar
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Irfan Haider
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Manhar Kumar Sah
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Jigesh Yadav
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Pramod Kumar
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Pappu Kumar
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mrs. Shalini Anand
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Vikash Kumar
                </span>
                ,<i> AP, ME, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mrs. Priyanka Chopra
                </span>
                ,<i> AP, CE, MIT Muzaffarpur</i>
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Mr. Rishabh Sharma
                </span>
                ,<i> AP, CE, MIT Muzaffarpur</i>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
