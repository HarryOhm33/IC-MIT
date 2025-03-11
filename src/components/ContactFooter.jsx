import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-white text-gray-900 py-12 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Contact Section */}
        <motion.div
          className="text-center bg-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            For any queries, feel free to reach out:
          </p>

          {/* Convener and Organizing Secretary in Card View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Convener Card */}
            <div className="p-6 rounded-lg shadow-sm border border-blue-100 bg-transparent">
              <h3 className="text-xl font-semibold text-blue-600">Convener</h3>
              <p className="mt-2 text-gray-700">
                <strong>Dr. Ashish Kr. Srivastava</strong>
              </p>
              <p className="mt-1 flex items-center gap-2 text-gray-700">
                <FaPhone className="text-blue-600" />
                <a
                  href="tel:+918707396833"
                  className="hover:text-blue-600 transition duration-300"
                >
                  +91 8707396833
                </a>
              </p>
              <p className="mt-1 flex items-center gap-2 text-gray-700">
                <FaEnvelope className="text-blue-600" />
                <a
                  href="mailto:ashish.srivastava@mitmuzaffarpur.org"
                  className="hover:text-blue-600 transition duration-300"
                >
                  ashish.srivastava@mitmuzaffarpur.org
                </a>
              </p>
            </div>

            {/* Organizing Secretary Card */}
            <div className="p-6 rounded-lg shadow-sm border border-blue-100 bg-transparent">
              <h3 className="text-xl font-semibold text-blue-600">
                Organizing Secretary
              </h3>
              <p className="mt-2 text-gray-700">
                <strong>Dr. Alok Ranjan</strong>
              </p>
              <p className="mt-1 flex items-center gap-2 text-gray-700">
                <FaPhone className="text-blue-600" />
                <a
                  href="tel:+916205661810"
                  className="hover:text-blue-600 transition duration-300"
                >
                  +91 6205661810
                </a>
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Prof. Ankit Kumar</strong>
              </p>
              <p className="mt-1 flex items-center gap-2 text-gray-700">
                <FaPhone className="text-blue-600" />
                <a
                  href="tel:+917250840578"
                  className="hover:text-blue-600 transition duration-300"
                >
                  +91 7250840578
                </a>
              </p>
            </div>
          </div>

          {/* Location and Email Side by Side in Desktop View */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" />
              MIT Muzaffarpur, Bihar, India
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:conference.me@mitmuzaffarpur.org"
                className="hover:text-blue-600 transition duration-300"
              >
                conference.me@mitmuzaffarpur.org
              </a>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Footer Links with React Scroll */}
        <motion.div
          className="flex flex-wrap justify-center w-full max-w-full gap-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About" },
            { to: "committee", label: "Committee" },
            { to: "editorial-board", label: "Editorial Board" },
            { to: "call-for-papers", label: "Call for Papers" },
            { to: "publication", label: "Publication" },
            { to: "dates", label: "Important Dates" },
            { to: "registration", label: "Registration" },
            { to: "venue", label: "Venue" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-blue-600 transition duration-300 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Social Media Links */}
        <motion.div
          className="flex flex-wrap justify-center w-full max-w-full gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaFacebook, href: "https://facebook.com/icmit2025" },
            { icon: FaTwitter, href: "https://twitter.com/icmit2025" },
            { icon: FaLinkedin, href: "https://linkedin.com/icmit2025" },
            { icon: FaInstagram, href: "https://instagram.com/icmit2025" },
            { icon: FaYoutube, href: "https://youtube.com/icmit2025" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-blue-600 hover:text-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-500 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© 2025 IC-MIT Conference | MIT Muzaffarpur & DCE Darbhanga</p>
        </motion.div>
      </div>
    </footer>
  );
}
