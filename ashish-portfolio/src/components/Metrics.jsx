export default function Metrics() {
  return (
    <section id="metrics">
      <h2>Performance & Impact</h2>

      <div className="metrics-grid">
        <div className="metric">
          <h3>40%+</h3>
          <p>Reduction in CRM automation execution time using optimized Apex logic.</p>
        </div>

        <div className="metric">
          <h3>10k+</h3>
          <p>Records processed efficiently using bulkified triggers and flow design.</p>
        </div>

        <div className="metric">
          <h3>O(1)</h3>
          <p>Average lookup time achieved in MiniRedis using hash-based storage.</p>
        </div>

        <div className="metric">
          <h3>LRU</h3>
          <p>Implemented LRU eviction to maintain memory efficiency in in-memory store.</p>
        </div>
      </div>
    </section>
  );
}