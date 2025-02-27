import { motion } from "framer-motion";

export default function RegistrationFees() {
  return (
    <section
      id="registration"
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
          💰 Registration Fees
        </motion.h2>

        {/* Pricing Table */}
        <motion.div
          className="mt-8 bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-yellow-400">
                <th className="p-4 text-lg">Registration Category</th>
                <th className="p-4 text-lg">
                  Early Bird (Before April 30, 2025)
                </th>
                <th className="p-4 text-lg">
                  Late Registration (After April 30, 2025)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {/* Indian National (Offline) */}
              <tr className="border-t border-gray-700">
                <td className="p-4 font-bold text-yellow-400" colSpan="3">
                  🇮🇳 Indian National (Only Offline)
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🎓 Students</td>
                <td className="p-4">₹2500</td>
                <td className="p-4">₹3500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">📚 Academician/Faculty</td>
                <td className="p-4">₹4000</td>
                <td className="p-4">₹5000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🏢 Industry/Research Lab</td>
                <td className="p-4">₹7000</td>
                <td className="p-4">₹8000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">👥 Accompanying Person</td>
                <td className="p-4">₹2500</td>
                <td className="p-4">₹3500</td>
              </tr>

              {/* Indian National (Online) */}
              <tr className="border-t border-gray-700">
                <td className="p-4 font-bold text-yellow-400" colSpan="3">
                  🇮🇳 Indian National (Only Online)
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🎓 Students</td>
                <td className="p-4">₹1500</td>
                <td className="p-4">₹2500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">📚 Academician/Faculty</td>
                <td className="p-4">₹3000</td>
                <td className="p-4">₹4000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🏢 Industry/Research Lab</td>
                <td className="p-4">₹5000</td>
                <td className="p-4">₹6000</td>
              </tr>

              {/* Foreign National (Offline) */}
              <tr className="border-t border-gray-700">
                <td className="p-4 font-bold text-yellow-400" colSpan="3">
                  🌍 Foreign National (Offline)
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🎓 Student</td>
                <td className="p-4">$30</td>
                <td className="p-4">$60</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">📚 Academician/Faculty</td>
                <td className="p-4">$50</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🏢 Industry/Research Lab</td>
                <td className="p-4">$80</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">👥 Accompanying Person</td>
                <td className="p-4">$50</td>
                <td className="p-4">$50</td>
              </tr>

              {/* Foreign National (Online) */}
              <tr className="border-t border-gray-700">
                <td className="p-4 font-bold text-yellow-400" colSpan="3">
                  🌍 Foreign National (Online)
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🎓 Student</td>
                <td className="p-4">$130</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">📚 Academician/Faculty</td>
                <td className="p-4">$150</td>
                <td className="p-4">$250</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">🏢 Industry/Research Lab</td>
                <td className="p-4">$180</td>
                <td className="p-4">$280</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        {/* Payment Details */}
        <div className="mt-6 text-center text-gray-300">
          <h3 className="text-xl font-bold text-yellow-400">Payment Details</h3>
          <p>
            Account No: <span className="text-white">10352068714</span>
          </p>
          <p>Account Name: IND SOC TECH EDU CHA MIT</p>
          <p>Branch: Lakshmi Chowk, Muzaffarpur</p>
          <p>
            IFSC Code: <span className="text-white">SBIN0004603</span>
          </p>
          <p>Bank Name: State Bank of India</p>

          {/* Register Link */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeX9Z5ufOunq30T5X3Q-BJeqPc7Kr5-GzQYGSCoVuvecMYCSQ/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
