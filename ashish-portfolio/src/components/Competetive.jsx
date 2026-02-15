import Github from "./Github";
import Leetcode from "./Leetcode";

export default function Competitive({ competitive }) {
  const {
    competitiveTitle,
    competitiveProfiles,
    hackathonTitle,
    hackathons,
    communityTitle,
    communityProfiles
  } = competitive;

  return (
    <section id="competitive" className="competitive">

      {/* Competitive Profiles */}
      <h2>{competitiveTitle}</h2>
      <div className="competitive-links">
        {competitiveProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="competitive-card"
          >
            <strong>{profile.platform}</strong>
            <p>{profile.description}</p>
          </a>
        ))}
      </div>

      {/* Hackathons */}
      <h2 className="section-space">{hackathonTitle}</h2>
      <div className="competitive-links">
        {hackathons.map((hack, index) => (
          <a
            key={index}
            href={hack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="competitive-card"
          >
            <strong>{hack.name}</strong>
            <p>{hack.description}</p>
          </a>
        ))}
      </div>

      {/* Community */}
      <h2 className="section-space">{communityTitle}</h2>
      <div className="competitive-links">
        {communityProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="competitive-card"
          >
            <strong>{profile.platform}</strong>
            <p>{profile.description}</p>
          </a>
        ))}
      </div>

      <Github />
      <Leetcode />

    </section>
  );
}