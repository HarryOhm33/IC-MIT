import { motion } from "framer-motion";

export default function EditorialBoard() {
  return (
    <section id="editorial-board" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📝 Editorial Board Members
        </motion.h2>

        {/* Editorial Board Members */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Sergej Hloch
              </span>
              , Technical University of Kosice, Slovakia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Amit Rai Dixit
              </span>
              , IIT, ISM Dhanbad
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Showkat Ahmad Bhawani
              </span>
              , Universiti Malaysia Sarawak, Malaysia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Ashish Kumar Srivastava
              </span>
              , MIT Muzaffarpur
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">Dr. Akash Nag</span>
              , VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Tanmay Tiwari
              </span>
              , University of Akron, USA
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Raj Kumar Sahu
              </span>
              , NIT Raipur
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Ajay Kumar
              </span>
              , JECRC University Rajasthan
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Miss. Avril Zhang
              </span>
              , Taiyuan University of Technology, China
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
