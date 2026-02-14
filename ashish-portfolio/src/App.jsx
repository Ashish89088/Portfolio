import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Github from "./components/Github";
import Leetcode from "./components/Leetcode";
import portfolio from "./data/portfolio.json";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

function App() {

  return (
    <>
      <Navbar navbar={portfolio.navbar} />
      <About about={portfolio.about} />
      <Skills skills={portfolio.skills} />
      <Experience experience={portfolio.experience} />
      <Projects projects={portfolio.projects} />
      <Certifications certifications={portfolio.certifications} />
      <Metrics metrics={portfolio.metrics} />
      <Github />
      <Leetcode />
      <Contact contact={portfolio.contact}/>
      {/* <Certifications certifications={portfolio.certifications} /> */}
    </>
  );
}

export default App;