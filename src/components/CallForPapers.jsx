import { motion } from "framer-motion";

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          📢 Call for Papers
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Researchers, academicians, and industry professionals are invited to
          submit their original research papers in the following areas.
        </motion.p>

        {/* Conference Tracks */}
        <motion.div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            📌 Conference Tracks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              {
                title: "Materials Processing and Manufacturing Techniques",
                topics: [
                  "Additive Manufacturing and 3D Printing",
                  "Advanced Welding and Joining Technologies",
                  "Bio-Compatible and Bio-Degradable Material",
                  "Bio-Medical Aspects of Material",
                  "Composite Materials: Design and Applications",
                  "Conventional and Non-Conventional Machining Processes",
                  "Materials Characterization Techniques",
                  "Metal Forming and Machining Processes",
                  "Nano-materials in Mechanical Engineering",
                  "Robotics in Manufacturing",
                  "Sustainable and Green Manufacturing",
                  "Self-healing Material",
                  "Smart Materials and Structures",
                  "Surface Integrity in Machining",
                  "Tribology and Surface Engineering",
                ],
              },
              {
                title: "Fluid Flow and Thermal Engineering",
                topics: [
                  "Advanced HVAC Systems",
                  "Combustion and Fuel Technologies",
                  "Cryogenics and Refrigeration",
                  "Computational Fluid Dynamics",
                  "Electric and Hybrid Vehicles",
                  "Fluid Mechanics and Flow Analysis",
                  "Heat Transfer Using Extended Surfaces",
                  "Heat Exchangers and Cooling Technologies",
                  "Heat Transfer and Thermal Management",
                  "Thermodynamics and Energy Efficiency",
                  "Turbo-machinery and Propulsion Systems",
                  "Renewable Energy Systems",
                  "Internal Combustion",
                ],
              },
              {
                title: "Design and Simulations",
                topics: [
                  "Mechanical System Design and Optimization Techniques",
                  "Vibration Analysis and Control System",
                  "Dynamics of Machinery",
                  "Mechatronics",
                  "Finite Element Analysis",
                  "CAD/CAM and Simulation Techniques",
                  "Structural Health Monitoring",
                  "Design for Manufacturability and Assembly",
                ],
              },
              {
                title: "Industrial Technologies",
                topics: [
                  "Industry 4.0 and Smart Manufacturing",
                  "Cyber-security in Industrial Systems",
                  "Industrial AI and Machine Learning",
                  "Lightweight Materials for Transportation",
                  "Human-Machine Collaboration",
                ],
              },
            ].map((track, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-blue-600">
                  {track.title}
                </h4>
                <ul className="mt-2 text-gray-700 space-y-2">
                  {track.topics.map((topic, idx) => (
                    <li key={idx}>✔️ {topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            📄 Submission Guidelines
          </h3>

          <p className="mt-3 text-gray-700">
            Authors must submit their research papers in{" "}
            <strong>PDF format</strong> via the online submission portal. All
            submissions will undergo a <strong>double-blind peer review</strong>{" "}
            process.
          </p>

          {/* Deadline Box */}
          <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200 text-blue-800 text-center shadow-md">
            <p className="font-semibold text-lg">
              📅 <strong>Submission Deadline:</strong> April 15, 2025
            </p>
            <p className="font-semibold text-lg mt-2">
              📢 <strong>Notification of Acceptance:</strong> April 20, 2025
            </p>
          </div>

          {/* Download Template Button */}
          <div className="mt-6 text-center">
            <a
              href="/assets/paper-template.docx"
              download="ICMIT_Paper_Template.docx"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              📥 Download Paper Template
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
