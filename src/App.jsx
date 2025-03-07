import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CallForPapers from "./components/CallForPapers";
import ImportantDates from "./components/ImportantDates";
import RegistrationFees from "./components/RegistrationFees";
import Committee from "./components/Committee";
import Venue from "./components/Venue";
import ContactFooter from "./components/ContactFooter";
import EditorialBoard from "./components/EditorialBoard";
import Publication from "./components/Publication";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Committee />
      <EditorialBoard />
      <CallForPapers />
      <Publication />
      <ImportantDates />
      <RegistrationFees />
      <Venue />
      <ContactFooter />
    </div>
  );
}

export default App;
