import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserTie, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

function CommitteeSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="committee"
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Committee
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our conference is guided by an esteemed leadership team. Meet the key
          individuals driving IC-MIT 2025.
        </motion.p>

        {/* Card Wrapper */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeData.map(({ title, name, position, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/90 backdrop-blur-lg rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mt-4">
                  {title}
                </h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  <strong>{name}</strong>
                  <br />
                  {position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Committee Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/committee"
            onClick={scrollToTop}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>View Full Committee</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const committeeData = [
  {
    title: "Chief Patron",
    name: "Dr. Pratima, IAS",
    position:
      "Secretary, Department of Science, Technology, and Technical Education, Patna.",
    icon: FaUserTie,
  },
  {
    title: "Patron",
    name: "Shri Ahmad Mahmood, IAS",
    position:
      "Additional Secretary cum Director, Department of Science, Technology, and Technical Education, Patna.",
    icon: FaUserTie,
  },
  {
    title: "Chairpersons",
    name: "Prof. (Dr.) Mithilesh Kumar Jha & Prof. (Dr.) Sandeep Tiwari",
    position: "Principal, MIT Muzaffarpur & Principal, DCE Darbhanga.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Conference Convener",
    name: "Dr. Ashish Kumar Srivastava",
    position:
      "Associate Professor & Head, Department of Mechanical Engineering, MIT Muzaffarpur.",
    icon: FaUserGraduate,
  },
];

export default CommitteeSummary;
