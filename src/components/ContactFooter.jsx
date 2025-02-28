import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
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
          <p className="mt-2 flex justify-center items-center gap-2 text-gray-700">
            <FaEnvelope className="text-blue-600" />
            <a
              href="mailto:conference.me@mitmuzaffarpur.org"
              className="hover:text-blue-600 transition duration-300"
            >
              conference.me@mitmuzaffarpur.org
            </a>
          </p>
          <p className="mt-2 flex justify-center items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600" />
            MIT Muzaffarpur, Bihar, India
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center w-full max-w-full gap-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#call-for-papers", label: "Call for Papers" },
            { href: "#dates", label: "Important Dates" },
            { href: "#registration", label: "Registration" },
            { href: "#venue", label: "Venue" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-600 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center w-full max-w-full gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaFacebook, href: "#" },
            { icon: FaTwitter, href: "#" },
            { icon: FaLinkedin, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-blue-600 hover:text-blue-700 transition duration-300"
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
