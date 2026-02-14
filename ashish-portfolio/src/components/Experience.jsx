export default function Experience({ experience = [] }) {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      {experience.map((job) => (
        <div key={job.id} className="project-card">
          <h3>
            {job.role} — {job.company}
          </h3>

          <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
            {job.duration}
          </p>

          <ul>
            {job.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
