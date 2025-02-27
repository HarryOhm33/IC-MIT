import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section id="venue" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Venue & Travel Information
        </motion.h2>

        {/* How to Reach */}
        <motion.div
          className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            How to Reach MIT Muzaffarpur
          </h3>
          <p className="mt-2 text-gray-700">
            The conference will be held at **MIT Muzaffarpur, Bihar, India**.
            Below are the details on how to reach:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              ✈️ **By Air:** The nearest airport is **Jai Prakash Narayan
              International Airport, Patna**, about 2-3 hours away by taxi.
            </li>
            <li>
              🚆 **By Rail:** The nearest railway station is **Muzaffarpur
              Railway Station**, just 10-15 minutes from the venue.
            </li>
            <li>
              🚗 **By Road:** Muzaffarpur is well connected by road with Patna,
              Darbhanga, and other major cities.
            </li>
          </ul>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Nearby Places to Visit
          </h3>
          <p className="mt-2 text-gray-700">
            If you have time, explore these nearby attractions:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              🏛️ **Vaishali (63 KM)** – An ancient city of the Licchavi
              Republic.
            </li>
            <li>
              🐅 **Valmiki Tiger Reserve (150 KM)** – A beautiful wildlife
              sanctuary.
            </li>
            <li>
              🛕 **Nalanda University (163 KM)** – One of the world’s oldest
              universities.
            </li>
            <li>
              🌿 **Rajgir (160 KM)** – A historic city associated with Buddhism
              & Jainism.
            </li>
            <li>
              🌍 **Bodh Gaya (190 KM)** – The place where Lord Buddha attained
              enlightenment.
            </li>
            <li>🏔️ **Nepal (160 KM)** – Explore cross-border attractions.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
