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
                <th className="p-4 text-lg">Category</th>
                <th className="p-4 text-lg">
                  Early Bird (Before April 30, 2025)
                </th>
                <th className="p-4 text-lg">
                  Late Registration (After April 30, 2025)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-700">
                <td className="p-4">
                  🎓{" "}
                  <span className="text-yellow-400">
                    Students (India - Offline)
                  </span>
                </td>
                <td className="p-4">₹2500</td>
                <td className="p-4">₹3500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">
                  📚{" "}
                  <span className="text-yellow-400">
                    Academicians (India - Offline)
                  </span>
                </td>
                <td className="p-4">₹4000</td>
                <td className="p-4">₹5000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">
                  🏢{" "}
                  <span className="text-yellow-400">
                    Industry/Research Lab (India - Offline)
                  </span>
                </td>
                <td className="p-4">₹7000</td>
                <td className="p-4">₹8000</td>
              </tr>
              <tr className="border-t border-gray-700 bg-gray-900/40">
                <td className="p-4">
                  🌍{" "}
                  <span className="text-yellow-400">
                    Students (Foreign - Online)
                  </span>
                </td>
                <td className="p-4">$130</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t border-gray-700 bg-gray-900/40">
                <td className="p-4">
                  🎓{" "}
                  <span className="text-yellow-400">
                    Academicians (Foreign - Online)
                  </span>
                </td>
                <td className="p-4">$150</td>
                <td className="p-4">$250</td>
              </tr>
              <tr className="border-t border-gray-700 bg-gray-900/40">
                <td className="p-4">
                  🏢{" "}
                  <span className="text-yellow-400">
                    Industry/Research Lab (Foreign - Online)
                  </span>
                </td>
                <td className="p-4">$180</td>
                <td className="p-4">$280</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
