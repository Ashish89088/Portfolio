// export default function Contact({
//   email,
//   linkedin,
//   github,
// }) {
//   return (
//     <footer id="contact" className="footer">
//       <div className="footer-container">
//         <div className="footer-left">
//           <h3>Let’s Connect</h3>
//           <p>
//             Open to backend, systems, and high-performance engineering roles.
//           </p>
//         </div>

//         <div className="footer-right">
//           <a href={`mailto:${email}`}>{email}</a>
//           <a href={linkedin} target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//           <a href={github} target="_blank" rel="noopener noreferrer">
//             GitHub
//           </a>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         © {new Date().getFullYear()} Ashish Sah. All rights reserved.
//       </div>
//     </footer>
//   );
// }

export default function Contact({ contact }) {
  if (!contact) return null;

  const { name, headline, email, socials, phone, availability } = contact;

  return (
    <footer id="contact" className="footer">
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
