import Hero from "./Hero";
import AboutSummary from "./Summary_Pages/AboutSummary"; // Summarized About section
import CallForPapersSummary from "./Summary_Pages/CallForPapersSummary"; // Summarized Call for Papers
import ImportantDates from "./ImportantDates"; // Important Dates
import RegistrationSummary from "./Summary_Pages/RegistrationSummary"; // Summarized Registration
import CommitteeSummary from "./Summary_Pages/CommitteeSummary"; // Summarized Committee
import EditorialBoard from "./EditorialBoard"; // Editorial board
import Publication from "./Summary_Pages/PublicationSummary"; // Publication Section
import InternationalAdvisoryBoard from "./IAB";
import NationalAdvisoryBoard from "./NAB";
import Venue from "./Venue";
import KeynoteSpeaker from "./KeynoteSpeakers";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Summary Section */}
      <section id="about" className="bg-white scroll-section">
        <AboutSummary />
      </section>

      {/* Committee Summary Section */}
      <section id="committee" className="bg-blue-50 scroll-section">
        <CommitteeSummary />
      </section>

      <section id="iab" className="bg-blue-50 scroll-section">
        <InternationalAdvisoryBoard />
      </section>

      <section id="nab" className="bg-blue-50 scroll-section">
        <NationalAdvisoryBoard />
      </section>

      <section id="keynote" className="bg-blue-50 scroll-section">
        <KeynoteSpeaker />
      </section>

      {/* Editorial Board Section */}
      <section id="editorial-board" className="bg-blue-50 scroll-section">
        <EditorialBoard />
      </section>

      {/* Call for Papers Summary Section */}
      <section id="call-for-papers" className="bg-white scroll-section">
        <CallForPapersSummary />
      </section>

      {/* Publication Summary Section */}
      <section id="publication" className="bg-blue-50 scroll-section">
        <Publication />
      </section>

      {/* Important Dates Section */}
      <section id="important-dates" className="bg-blue-50 scroll-section">
        <ImportantDates />
      </section>

      {/* Registration Summary Section */}
      <section id="registration" className="bg-white scroll-section">
        <RegistrationSummary />
      </section>

      <section id="venue" className="bg-white scroll-section">
        <Venue />
      </section>
    </div>
  );
}

export default Home;
