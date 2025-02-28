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
          🎓 Conference Committee
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
            – Secretary, DSTTE
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
            – Director, DSTTE
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
            – Principal, MIT Muzaffarpur
          </p>
          <p className="mt-2 text-gray-700">
            🎓{" "}
            <span className="text-blue-600 font-semibold">
              Prof. (Dr.) Sandeep Tiwari
            </span>{" "}
            – DCE Darbhanga
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
            – MIT Muzaffarpur
          </p>
        </motion.div>

        {/* International Advisory Board */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
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
              , University of Akron, USA
            </li>
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
                Dr. Ing. Robert Čep
              </span>
              , VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Jana Petrů
              </span>
              , VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Grzegorz Krolczyk
              </span>
              , Opole University of Technology, Poland
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Dmitry Eskin
              </span>
              , Brunel University of London, UK
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Anton FICAI
              </span>
              , National University of Science and POLITECHNICA Bucharest,
              Romania
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Kapil Gupta
              </span>
              , University of Johannesburg, South Africa
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Alessandro RUGGIERO
              </span>
              , University of Salerno, Fisciano
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Velaphi Msomi
              </span>
              , University of South Africa
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Alokesh Pramanik
              </span>
              , Curtin University, Australia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">Dr. Akash Nag</span>
              , VŠB-Technical University of Ostrava, Czechia
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Munish Kumar Gupta
              </span>
              , Opole University of Technology, Poland
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
                Dr. Showkat Ahmad Bhawani
              </span>
              , Universiti Malaysia Sarawak, Malaysia
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

        {/* National Advisory Board */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            National Advisory Board
          </h3>
          <ul className="mt-2 text-gray-700 space-y-2">
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
                Dr. Manabendra Pathak
              </span>
              , IIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Om Prakash
              </span>
              , NIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Andalib Tariq
              </span>
              , IIT Roorkee
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Vaibhava Srivastava
              </span>
              , BHU, Varanasi
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Ranjan Das
              </span>
              , NIT Agartala
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Amit Kumar
              </span>
              , NIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Karali Patra
              </span>
              , IIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Alok Kumar Das
              </span>
              , IIT, ISM Dhanbad
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Prabir Kumar Saha
              </span>
              , IIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Himanshu Pathak
              </span>
              , IIT Mandi
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Koushik Das
              </span>
              , NIT Meghalaya
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Abhishek Singh
              </span>
              , NIT Patna
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
                Dr. Chandrakant Nirala
              </span>
              , IIT Ropar
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Sagnik Pal
              </span>
              , NIT Agartala
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Yogesh Kumar
              </span>
              , NIT Patna
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">Dr. Prabhansu</span>
              , NIT Surat
            </li>
            <li>
              🔹{" "}
              <span className="text-blue-600 font-semibold">
                Dr. Sabindra Kachhap
              </span>
              , NIT Manipur
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
