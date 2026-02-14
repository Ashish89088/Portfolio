import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import portfolio from "./data/portfolio.json";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Competitive from "./components/Competetive";
import Certifications from "./components/Certifications";
import Timeline from "./components/Timeline";

function App() {

  return (
    <>
      <Navbar navbar={portfolio.navbar} />
      <About about={portfolio.about} stats={portfolio.stats} />
      {/* <Timeline timeline={portfolio.timeline} /> */}
      <Contact contact={portfolio.contact} />
      <Skills skills={portfolio.skills} />
      <Experience experience={portfolio.experience} />
      <Projects projects={portfolio.projects} />
      <Certifications certifications={portfolio.certifications} />
      <Metrics metrics={portfolio.metrics} />
      <Competitive competitive={portfolio.competitive} />
      <Footer footer={portfolio.footer}/>
      {/* <Certifications certifications={portfolio.certifications} /> */}
    </>
  );
}

export default App;