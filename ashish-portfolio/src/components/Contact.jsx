// export default function Contact() {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <p>Email: ashish@email.com</p>
//       <p>LinkedIn: linkedin.com/in/ashish</p>
//       <p>GitHub: github.com/ashish</p>
//     </section>
//   );
// }

export default function Contact({
  email,
  linkedin,
  github,
}) {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Let’s Connect</h3>
          <p>
            Open to backend, systems, and high-performance engineering roles.
          </p>
        </div>

        <div className="footer-right">
          <a href={`mailto:${email}`}>{email}</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ashish Sah. All rights reserved.
      </div>
    </footer>
  );
}