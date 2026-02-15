// export default function Certifications({ certifications }) {
//   return (
//     <section id="certifications" className="certifications">
//       <h2>Certifications</h2>

//       <div className="cert-grid">
//         {certifications.map((cert, index) => (
//           <div key={index} className="cert-card">
//             <h3>{cert.title}</h3>
//             <p className="cert-org">{cert.organization}</p>
//             <p className="cert-date">{cert.date}</p>
//             <p className="cert-credentials">{cert.credentials}</p>

//             {cert.link && (
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cert-link"
//               >
//                 View Credential →
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

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

            {cert.credentials && (
              <p className="cert-credentials">
                Credential ID: {cert.credentials}
              </p>
            )}

            <div className="cert-actions">
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

              {cert.file && (
                <a
                  href={cert.file}
                  download
                  className="cert-download"
                >
                  Download Certificate ↓
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}