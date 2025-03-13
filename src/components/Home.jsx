import Hero from "./Hero";
import AboutSummary from "./Summary_Pages/AboutSummary"; // Summarized About section
import CallForPapersSummary from "./Summary_Pages/CallForPapersSummary"; // Summarized Call for Papers
import ImportantDates from "./ImportantDates"; // Important Dates
import RegistrationSummary from "./Summary_Pages/RegistrationSummary"; // Summarized Registration
import CommitteeSummary from "./Summary_Pages/CommitteeSummary"; // Summarized Committee
import EditorialBoard from "./EditorialBoard"; // Editorial board
import Publication from "./Publication"; // Publication Section

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

      {/* Editorial Board Section */}
      <section id="editorial-board" className="bg-blue-50 scroll-section">
        <EditorialBoard />
      </section>

      {/* Call for Papers Summary Section */}
      <section id="call-for-papers" className="bg-white scroll-section">
        <CallForPapersSummary />
      </section>

      {/* Publication Section */}
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
    </div>
  );
}

export default Home;
