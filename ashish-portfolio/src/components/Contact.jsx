export default function Contact({ contact }) {
  const { title, description, links } = contact;

  return (
    <section id="contact" className="contact">
      <h2>{title}</h2>

      <div className="contact-container">
        <p>{description}</p>

        <div className="contact-info">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="contact-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}