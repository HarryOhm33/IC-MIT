import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null); // Ref for the mobile menu
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // For programmatic navigation

  // Handle scroll to detect if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    document.addEventListener("mousedown", handleClickOutside);

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
        "committee",
        "editorial-board",
        "call-for-papers",
        "publication",
        "dates",
        "registration",
        "venue",
        "contact",
      ];

      let foundSection = "home"; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport (even if it's short)
          if (rect.top <= 200 && rect.bottom >= 100) {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and scrolling
  const handleNavigation = (to) => {
    const navbar = document.querySelector("nav"); // Select the navbar
    const navbarHeight = navbar ? navbar.offsetHeight : 70; // Get navbar height dynamically

    // Determine the offset based on screen width
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    const offset = isMobile ? -navbarHeight + 420 : -navbarHeight;

    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      setTimeout(() => {
        const target = document.getElementById(to);
        if (target) {
          const y =
            target.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const target = document.getElementById(to);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all ${
        isScrolled ? "py-0" : "py-1"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <h1
          className="text-blue-600 text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          IC-MIT 2025
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-900">
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About Us" },
            { to: "committee", label: "Committee" },
            { to: "editorial-board", label: "Editorial Board" },
            { to: "call-for-papers", label: "Call for Papers" },
            { to: "publication", label: "Publication" },
            { to: "dates", label: "Important Dates" },
            { to: "registration", label: "Registration" },
            { to: "venue", label: "Venue" },
            { to: "contact", label: "Contact" },
          ].map((item) => (
            <div
              key={item.to}
              className={`hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
                activeSection === item.to ? "text-blue-600" : ""
              }`}
              onClick={() => handleNavigation(item.to)}
            >
              {item.label}
            </div>
          ))}
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
          ref={mobileMenuRef}
          className="md:hidden bg-white p-4 space-y-4 text-center text-gray-900 shadow-lg border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About Us" },
            { to: "committee", label: "Committee" },
            { to: "editorial-board", label: "Editorial Board" },
            { to: "call-for-papers", label: "Call for Papers" },
            { to: "publication", label: "Publication" },
            { to: "dates", label: "Important Dates" },
            { to: "registration", label: "Registration" },
            { to: "venue", label: "Venue" },
            { to: "contact", label: "Contact" },
          ].map((item) => (
            <div
              key={item.to}
              className={`block hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
                activeSection === item.to ? "text-blue-600" : ""
              }`}
              onClick={() => handleNavigation(item.to)}
            >
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
