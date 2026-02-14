export default function Projects() {
  return (
    <section id="projects">
      <h2>Selected Work</h2>

      <div className="project-card">
        <h3>MiniRedis — In-Memory Key Value Store</h3>
        <p>
          Built a Redis-inspired in-memory database in C++ supporting SET, GET, DEL,
          TTL expiration, and LRU eviction. Focused on hashing strategies,
          memory management, and performance tradeoffs.
        </p>
      </div>

      <div className="project-card">
        <h3>Hospital Admin Dashboard — MERN Stack</h3>
        <p>
          Designed and implemented a scalable hospital search and booking platform.
          Built REST APIs and optimized MongoDB queries for real-time data retrieval.
        </p>
      </div>

      <div className="project-card">
        <h3>Flight Check-in Automation — Salesforce</h3>
        <p>
          Developed an Auto-Launched Flow validating booking PNR and enforcing
          time-based check-in logic to improve operational efficiency.
        </p>
      </div>
    </section>
  );
}