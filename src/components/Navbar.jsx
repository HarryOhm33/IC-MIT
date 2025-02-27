import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-blue-700 text-2xl font-bold">IC-MIT 2025</h1>

        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#call-for-papers" className="hover:text-blue-500">
            Call for Papers
          </a>
          <a href="#dates" className="hover:text-blue-500">
            Important Dates
          </a>
          <a href="#registration" className="hover:text-blue-500">
            Registration
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white p-4 space-y-4 text-center text-gray-700 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#home"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#call-for-papers"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            Call for Papers
          </a>
          <a
            href="#dates"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            Important Dates
          </a>
          <a
            href="#registration"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            Registration
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-500"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
