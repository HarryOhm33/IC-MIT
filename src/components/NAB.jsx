import { motion } from "framer-motion";

export default function NationalAdvisoryBoard() {
  return (
    <section id="nab" className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🇮🇳 National Advisory Board
        </motion.h2>

        {/* National Advisory Board */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            National Advisory Board
          </h3>
          <div className="mt-2">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Amit Rai Dixit
                </span>
                ,<i> Professor</i>, IIT, ISM Dhanbad
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Manabendra Pathak
                </span>
                ,<i> Professor</i>, IIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Om Prakash
                </span>
                ,<i> Professor</i>, NIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Andalib Tariq
                </span>
                ,<i> Professor</i>, IIT Roorkee
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Vaibhava Srivastava
                </span>
                ,<i> Professor</i>, BHU, Varanasi
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Ranjan Das
                </span>
                ,<i> Professor</i>, NIT Agartala
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Amit Kumar
                </span>
                ,<i> Professor</i>, NIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Karali Patra
                </span>
                ,<i> Professor</i>, IIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Himanshu Pathak
                </span>
                ,<i> Associate Professor</i>, IIT Mandi
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Koushik Das
                </span>
                ,<i> Associate Professor</i>, NIT Meghalaya
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Abhishek Singh
                </span>
                ,<i> Associate Professor</i>, NIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Raj Kumar Sahu
                </span>
                ,<i> Assistant Professor</i>, NIT Raipur
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Chandrakant Nirala
                </span>
                ,<i> Associate Professor</i>, IIT Ropar
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Sagnik Pal
                </span>
                ,<i> Assistant Professor</i>, NIT Agartala
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Yogesh Kumar
                </span>
                ,<i> Assistant Professor</i>, NIT Patna
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Prabhansu
                </span>
                ,<i> Assistant Professor</i>, NIT Surat
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Sabindra Kachhap
                </span>
                ,<i> Assistant Professor</i>, NIT Manipur
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
