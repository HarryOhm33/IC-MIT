import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Venue & Travel Information
        </motion.h2>

        {/* How to Reach */}
        <motion.div
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            How to Reach MIT Muzaffarpur
          </h3>
          <p className="mt-2 text-gray-700">
            The conference will be held at{" "}
            <span className="text-blue-600 font-semibold">
              MIT Muzaffarpur, Bihar, India
            </span>
            . Below are the details on how to reach:
          </p>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              ✈️ <span className="text-blue-600 font-semibold">By Air:</span>{" "}
              The nearest airport is{" "}
              <span className="text-blue-600">
                Jai Prakash Narayan International Airport, Patna
              </span>
              , about 2-3 hours away by taxi.
            </li>
            <li>
              🚆 <span className="text-blue-600 font-semibold">By Rail:</span>{" "}
              The nearest railway station is{" "}
              <span className="text-blue-600">Muzaffarpur Railway Station</span>
              , just 10-15 minutes from the venue.
            </li>
            <li>
              🚗 <span className="text-blue-600 font-semibold">By Road:</span>{" "}
              Muzaffarpur is well connected by road with Patna, Darbhanga, and
              other major cities.
            </li>
          </ul>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
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

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              🏛️{" "}
              <span className="text-blue-600 font-semibold">
                Vaishali (63 KM):
              </span>{" "}
              An ancient city of the Licchavi Republic.
            </li>
            <li>
              🐅{" "}
              <span className="text-blue-600 font-semibold">
                Valmiki Tiger Reserve (150 KM):
              </span>{" "}
              A beautiful wildlife sanctuary.
            </li>
            <li>
              🛕{" "}
              <span className="text-blue-600 font-semibold">
                Nalanda University (163 KM):
              </span>{" "}
              One of the world’s oldest universities.
            </li>
            <li>
              🌿{" "}
              <span className="text-blue-600 font-semibold">
                Rajgir (160 KM):
              </span>{" "}
              A historic city associated with Buddhism & Jainism.
            </li>
            <li>
              🌍{" "}
              <span className="text-blue-600 font-semibold">
                Bodh Gaya (190 KM):
              </span>{" "}
              The place where Lord Buddha attained enlightenment.
            </li>
            <li>
              🏔️{" "}
              <span className="text-blue-600 font-semibold">
                Nepal (160 KM):
              </span>{" "}
              Explore cross-border attractions.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
