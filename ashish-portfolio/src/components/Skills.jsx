export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-row">
            <div className="skill-category-title">
              {category}
            </div>

            <div className="skill-badges">
              {items.map((skill, index) => (
                <span key={index} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}