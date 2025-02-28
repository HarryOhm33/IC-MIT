import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add event listener for clicks outside the mobile menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "call-for-papers",
        "dates",
        "registration",
        "venue",
        "committee",
        "editorial-board",
        "contact",
      ];

      let foundSection = "home"; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = section;
            break;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1
          className="text-blue-600 text-2xl font-bold cursor-pointer"
          onClick={() => setActiveSection("home")}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            IC-MIT 2025
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-900">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "home" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "about" ? "text-blue-600" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="call-for-papers"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "call-for-papers" ? "text-blue-600" : ""
            }`}
          >
            Call for Papers
          </Link>
          <Link
            to="dates"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "dates" ? "text-blue-600" : ""
            }`}
          >
            Important Dates
          </Link>
          <Link
            to="registration"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "registration" ? "text-blue-600" : ""
            }`}
          >
            Registration
          </Link>
          <Link
            to="committee"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "committee" ? "text-blue-600" : ""
            }`}
          >
            Committee
          </Link>
          <Link
            to="editorial-board"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "editorial-board" ? "text-blue-600" : ""
            }`}
          >
            Editorial Board
          </Link>
          <Link
            to="venue"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "venue" ? "text-blue-600" : ""
            }`}
          >
            Venue
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "contact" ? "text-blue-600" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={mobileMenuRef} // Attach the ref to the mobile menu
          className="md:hidden bg-white p-4 space-y-4 text-center text-gray-900 shadow-lg border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "home" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "about" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="call-for-papers"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "call-for-papers" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Call for Papers
          </Link>
          <Link
            to="dates"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "dates" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Important Dates
          </Link>
          <Link
            to="registration"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "registration" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Registration
          </Link>
          <Link
            to="committee"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "committee" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Committee
          </Link>
          <Link
            to="editorial-board"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "editorial-board" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Editorial Board
          </Link>
          <Link
            to="venue"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "venue" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Venue
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
              activeSection === "contact" ? "text-blue-600" : ""
            }`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
