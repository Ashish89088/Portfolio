export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="card">
        <h3>MiniRedis (C++)</h3>
        <p>
          Built an in-memory key-value store supporting SET, GET, DEL,
          TTL expiry, and LRU cache implementation.
        </p>
      </div>

      <div className="card">
        <h3>Hospital Admin Dashboard (MERN)</h3>
        <p>
          Admin dashboard enabling patients to find nearest hospitals,
          book consultations, and schedule lab tests.
        </p>
      </div>

      <div className="card">
        <h3>Salesforce Flight Check-In Flow</h3>
        <p>
          Auto-launched flow validating booking PNR and flight check-in timing logic.
        </p>
      </div>
    </section>
  );
}