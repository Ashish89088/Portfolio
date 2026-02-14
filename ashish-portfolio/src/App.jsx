import Hero from "./components/Hero";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Github from "./components/Github";
import Leetcode from "./components/Leetcode";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Metrics />
      <Github />
      <Leetcode />
      <Contact />
    </>
  );
}

export default App;