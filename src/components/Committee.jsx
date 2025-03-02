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
          🎓 Advisory Boards and Committee
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
            – Principle, DCE Darbhanga
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
                Dr. Grzegorz Krolczyk
              </span>
              ,<i> Professor</i>, Opole University of Technology, Poland
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
                  Dr. Alok Kumar Das
                </span>
                ,<i> Professor</i>, IIT, ISM Dhanbad
              </li>
              <li>
                🔹{" "}
                <span className="text-blue-600 font-semibold">
                  Dr. Prabir Kumar Saha
                </span>
                ,<i> Associate Professor</i>, IIT Patna
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
                ,<i> Assistant Professor</i>, IIT Ropar
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
