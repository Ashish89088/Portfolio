export default function Projects({ projects = [] }) {
  return (
    <section id="projects">
      <h2>Personal Projects</h2>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>
            {project.title}
            {project.subtitle && ` — ${project.subtitle}`}
          </h3>

          {/* Description as bullet list */}
          <ul style={{ marginTop: "10px" }}>
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          {project.tech?.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="tech-badge"
                >
                  {techItem}
                </span>
              ))}
            </div>
          )}

          {/* GitHub link (optional) */}
          {project.github && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Code
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
