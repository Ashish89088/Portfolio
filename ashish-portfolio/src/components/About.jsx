export default function About({ about }) {
  if (!about) return null;

  const { name, headline, description, resume, cta } = about;

  return (
    <section id="about">
      <h1>Hi, I’m {name}.</h1>

      <h3>{headline}</h3>

      <p style={{ marginTop: "15px", maxWidth: "600px" }}>
        {description}
      </p>

      <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
        {/* Primary CTA */}
        <a href={cta.primary.link} className="btn">
          {cta.primary.label}
        </a>

        {/* Secondary CTAs */}
        {cta.secondary.map((item, index) => (
          <a
            key={index}
            href={resume.path}
            className="btn-secondary"
            {...(item.type === "download"
              ? { download: resume.filename }
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
