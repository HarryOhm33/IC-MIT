import { motion } from "framer-motion";

export default function Committee() {
  return (
    <section id="committee" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Conference Committee & Organizers
        </motion.h2>

        {/* Chief Patrons */}
        <motion.div
          className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Chief Patron</h3>
          <p className="mt-2 text-gray-700">
            🎓 **Dr. Pratima, I.A.S** – Secretary, DSTTE
          </p>
        </motion.div>

        {/* Patrons */}
        <motion.div
          className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Patron</h3>
          <p className="mt-2 text-gray-700">
            🎓 **Shri Ahmad Mahmood, I.A.S** – Director, DSTTE
          </p>
        </motion.div>

        {/* Chairpersons */}
        <motion.div
          className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Chairpersons</h3>
          <p className="mt-2 text-gray-700">
            🎓 **Prof. (Dr.) M. K. Jha** – Principal, MIT Muzaffarpur
          </p>
          <p className="mt-2 text-gray-700">
            🎓 **Prof. (Dr.) Sandeep Tiwari** – DCE Darbhanga
          </p>
        </motion.div>

        {/* Conference Convener */}
        <motion.div
          className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Conference Convener
          </h3>
          <p className="mt-2 text-gray-700">
            🎓 **Dr. Ashish K Srivastava** – MIT Muzaffarpur
          </p>
        </motion.div>

        {/* Organizing Members */}
        <motion.div
          className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Organizing Members
          </h3>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>🔹 **Dr. Alok Ranjan** – MIT Muzaffarpur</li>
            <li>🔹 **Mr. Ankit Kumar** – DCE Darbhanga</li>
            <li>🔹 **Prof. Sergej Hloch** – Technical University of Kosice</li>
            <li>
              🔹 **Prof. Jana Petrů** – VŠB-Technical University of Ostrava
            </li>
            <li>🔹 **Dr. Akash Nag** – VŠB-Technical University of Ostrava</li>
            <li>🔹 **Dr. Tanmay Tiwari** – University of Akron, Ohio</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
