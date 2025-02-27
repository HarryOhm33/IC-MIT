import { motion } from "framer-motion";

export default function RegistrationFees() {
  return (
    <section id="registration" className="py-16 bg-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Registration Fees
        </motion.h2>

        {/* Pricing Table */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-3">Category</th>
                <th className="p-3">Early Bird (Before April 30, 2025)</th>
                <th className="p-3">
                  Late Registration (After April 30, 2025)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="p-3">Students (India - Offline)</td>
                <td className="p-3">₹2500</td>
                <td className="p-3">₹3500</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Academicians (India - Offline)</td>
                <td className="p-3">₹4000</td>
                <td className="p-3">₹5000</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Industry/Research Lab (India - Offline)</td>
                <td className="p-3">₹7000</td>
                <td className="p-3">₹8000</td>
              </tr>
              <tr className="border-t bg-gray-100">
                <td className="p-3">Students (Foreign - Online)</td>
                <td className="p-3">$130</td>
                <td className="p-3">$150</td>
              </tr>
              <tr className="border-t bg-gray-100">
                <td className="p-3">Academicians (Foreign - Online)</td>
                <td className="p-3">$150</td>
                <td className="p-3">$250</td>
              </tr>
              <tr className="border-t bg-gray-100">
                <td className="p-3">
                  Industry/Research Lab (Foreign - Online)
                </td>
                <td className="p-3">$180</td>
                <td className="p-3">$280</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
