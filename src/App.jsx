import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Home component with About summary
import About from "./components/About"; // Full About page
import CallForPapers from "./components/CallForPapers";
import RegistrationFees from "./components/RegistrationFees";
import Committee from "./components/Committee";
import Venue from "./components/Venue";
import ContactFooter from "./components/ContactFooter";
import Error404 from "./components/Error404"; // Import the 404 Error Page

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="bg-gray-50">
          <Navbar />
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* Dedicated Tabs */}
            <Route path="/about" element={<About />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/registration" element={<RegistrationFees />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/venue" element={<Venue />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<Error404 />} />
          </Routes>
          <ContactFooter />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
