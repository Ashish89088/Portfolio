export default function Hero() {
  return (
    <section id="about">
      <h1>Hi, I’m Ashish.</h1>
      <h3>Salesforce Developer | C++ System Builder | MERN Engineer</h3>

      <p style={{ marginTop: "15px", maxWidth: "600px" }}>
        I build scalable backend systems and automation-driven CRM solutions.
        Currently working as a Salesforce Developer in an MNC, with strong
        foundations in data structures, system design, and performance-focused engineering.
      </p>

      <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
        <a href="#projects" className="btn">
          View Projects
        </a>

        <a href="/My_Resume_2026.pdf" download className="btn-secondary">
          Download Resume
        </a>
        <a href="/My_Resume_2026.pdf" target="_blank" className="btn-secondary">
          View Resume
        </a>
      </div>
    </section>
  );
}