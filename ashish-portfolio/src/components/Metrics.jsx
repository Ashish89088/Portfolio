export default function Metrics({ metrics = [] }) {
  return (
    <section id="metrics">
      <h2>Performance & Impact</h2>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className="metric">
            <h3>{metric.value}</h3>
            <p>{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
