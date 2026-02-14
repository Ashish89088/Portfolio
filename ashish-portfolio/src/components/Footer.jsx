export default function Footer({ footer }) {
  if (!footer) return null;

  const { name, headline, email, socials, phone, availability } = footer;

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Left side: headline & availability */}
        <div className="footer-left">
          <h3>Let’s Connect</h3>
          <p>{headline}</p>
          {availability && <p style={{ marginTop: "5px", fontStyle: "italic" }}>{availability}</p>}
        </div>

        {/* Right side: contact links */}
        <div className="footer-right">
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {phone && <a href={`tel:${phone}`}>{phone}</a>}

          {socials &&
            Object.entries(socials).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
