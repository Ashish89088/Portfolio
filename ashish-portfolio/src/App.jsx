import About from "./components/About";
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
      <About />
      <Experience />
      <Projects />
      <Metrics />
      <Github />
      <Leetcode />
      <Contact
        email="ashish@email.com"
        linkedin="https://linkedin.com/in/ashish"
        github="https://github.com/ashish"
      />
    </>
  );
}

export default App;