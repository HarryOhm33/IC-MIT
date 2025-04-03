import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "committee",
      "iab",
      "nab",
      "keynote",
      "editorial-board",
      "call-for-papers",
      "publication",
      "dates",
      "registration",
      "venue",
      "contact",
    ];

    const handleScroll = () => {
      let foundSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const handleNavigation = (to) => {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar?.offsetHeight || 70;
    const offset = -navbarHeight + 50; // Adjusted offset for all screen sizes

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(to, offset), 100);
    } else {
      scrollToSection(to, offset);
    }
    setIsOpen(false);
  };

  const scrollToSection = (to, offset) => {
    const target = document.getElementById(to);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1
            className="text-blue-600 text-2xl font-bold cursor-pointer hover:text-blue-700 transition-colors"
            onClick={() => handleNavigation("home")}
          >
            ICMIT - 2025
          </h1>

          {/* Hamburger Menu Button (Always visible) */}
          <button
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile-style Menu (Now used for all screen sizes) */}
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className="absolute w-full bg-white border-t border-gray-100 shadow-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About Us" },
              { to: "committee", label: "Committee" },
              { to: "iab", label: "International Advisory Board" },
              { to: "nab", label: "National Advisory Board" },
              { to: "keynote", label: "Keynote Speakers" },
              { to: "editorial-board", label: "Editorial Board" },
              { to: "call-for-papers", label: "Call for Papers" },
              { to: "publication", label: "Publication" },
              { to: "dates", label: "Important Dates" },
              { to: "registration", label: "Registration" },
              { to: "venue", label: "Venue" },
              { to: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavigation(item.to)}
                className={`
    w-full px-4 py-3 rounded-lg
    transition-all duration-200
    text-center
    ${
      activeSection === item.to
        ? "text-blue-600 font-semibold" // Removed background and border
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-l-4 hover:border-blue-200"
    }
  `}
              >
                <span className="block">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
