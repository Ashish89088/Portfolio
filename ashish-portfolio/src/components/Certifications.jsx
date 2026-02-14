export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="cert-org">{cert.organization}</p>
            <p className="cert-date">{cert.date}</p>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Credential →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}