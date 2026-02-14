import { motion } from "framer-motion";

export default function Timeline({ timeline }) {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Career Timeline</h2>

      <div className="timeline-container">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.type}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}