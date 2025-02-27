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
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="mt-4 text-lg">
            For any queries, feel free to reach out:
          </p>
          <p className="mt-2 flex justify-center items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <a
              href="mailto:conference.me@mitmuzaffarpur.org"
              className="hover:underline"
            >
              conference.me@mitmuzaffarpur.org
            </a>
          </p>
          <p className="mt-2 flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            MIT Muzaffarpur, Bihar, India
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#call-for-papers" className="hover:text-yellow-400">
            Call for Papers
          </a>
          <a href="#dates" className="hover:text-yellow-400">
            Important Dates
          </a>
          <a href="#registration" className="hover:text-yellow-400">
            Registration
          </a>
          <a href="#venue" className="hover:text-yellow-400">
            Venue
          </a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-center text-sm"
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
