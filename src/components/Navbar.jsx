import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "call-for-papers",
        "dates",
        "registration",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1
          className="text-yellow-400 text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          IC-MIT 2025
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a
            href="#home"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "home" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "about" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#call-for-papers"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "call-for-papers" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("call-for-papers")}
          >
            Call for Papers
          </a>
          <a
            href="#dates"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "dates" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("dates")}
          >
            Important Dates
          </a>
          <a
            href="#registration"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "registration" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("registration")}
          >
            Registration
          </a>
          <a
            href="#contact"
            className={`hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "contact" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 p-4 space-y-4 text-center text-gray-300 shadow-lg border-t border-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <a
            href="#home"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "home" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "about" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#call-for-papers"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "call-for-papers" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("call-for-papers")}
          >
            Call for Papers
          </a>
          <a
            href="#dates"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "dates" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("dates")}
          >
            Important Dates
          </a>
          <a
            href="#registration"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "registration" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("registration")}
          >
            Registration
          </a>
          <a
            href="#contact"
            className={`block hover:text-yellow-400 transition-colors duration-300 ${
              activeSection === "contact" ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
