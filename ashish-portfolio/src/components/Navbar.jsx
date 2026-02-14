import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );
  const sectionList = props?.navbar?.sectionList || [];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {sectionList.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </div>

      <button className="theme-toggle btn" onClick={toggleDarkMode}>
        {isDark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}