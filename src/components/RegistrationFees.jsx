import { motion } from "framer-motion";

export default function RegistrationFees() {
  return (
    <section id="registration" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          💰 Registration Fees
        </motion.h2>

        {/* Pricing Table */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-600">
                <th className="p-4 text-lg">Registration Category</th>
                <th className="p-4 text-lg">
                  Early Bird (Before April 30, 2025)
                </th>
                <th className="p-4 text-lg">
                  Late Registration (From May 1, 2025)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Indian National */}
              <tr className="border-t border-gray-200">
                <td className="p-4 font-bold text-blue-600" colSpan="3">
                  🇮🇳 Indian National
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">🔬 Research Scholar</td>
                <td className="p-4">₹2500</td>
                <td className="p-4">₹3500</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">📚 Faculty Member</td>
                <td className="p-4">₹4000</td>
                <td className="p-4">₹5000</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">🏢 Industry Person</td>
                <td className="p-4">₹7000</td>
                <td className="p-4">₹8000</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">👥 Accompanying Person</td>
                <td className="p-4">₹3000</td>
                <td className="p-4">₹3000</td>
              </tr>

              {/* Foreign National */}
              <tr className="border-t border-gray-200">
                <td className="p-4 font-bold text-blue-600" colSpan="3">
                  🌍 Foreign National
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">🔬 Research Scholar</td>
                <td className="p-4">$30</td>
                <td className="p-4">$60</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">📚 Faculty Person</td>
                <td className="p-4">$50</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">🏢 Industry Person</td>
                <td className="p-4">$80</td>
                <td className="p-4">$150</td>
              </tr>
            </tbody>
          </table>

          {/* ISTE Discount Notice */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-300 rounded-lg text-blue-700 text-center">
            ⭐ **20% Discount** available for valid **ISTE membership
            certificate holders**.
          </div>
        </motion.div>

        {/* Payment Details */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-blue-600">Payment Details</h3>
          <p className="mt-2 text-gray-700">
            Account No: <span className="font-semibold">10352068714</span>
          </p>
          <p className="text-gray-700">
            Account Name: IND SOC TECH EDU CHA MIT
          </p>
          <p className="text-gray-700">Branch: Lakshmi Chowk, Muzaffarpur</p>
          <p className="text-gray-700">
            IFSC Code: <span className="font-semibold">SBIN0004603</span>
          </p>
          <p className="text-gray-700">Bank Name: State Bank of India</p>

          {/* Register Link */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeX9Z5ufOunq30T5X3Q-BJeqPc7Kr5-GzQYGSCoVuvecMYCSQ/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
