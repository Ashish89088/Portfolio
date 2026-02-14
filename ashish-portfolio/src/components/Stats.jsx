import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats({ stats }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div className="stats" ref={ref}>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            {inView && (
              <h2>
                <CountUp end={item.value} duration={2} />+
              </h2>
            )}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}