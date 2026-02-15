import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Timeline({ timeline }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Career Timeline</h2>

      <div className="timeline-container">
        {timeline.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={index}
              className={`timeline-item ${item.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="timeline-content clickable"
                onClick={() => toggleItem(index)}
              >
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="timeline-description"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}