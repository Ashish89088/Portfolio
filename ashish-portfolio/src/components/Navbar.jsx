import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close menu after clicking
  };

  return (
    <nav className="navbar">
      {/* Logo or Left */}
      <div className="nav-header">
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
        </div>
      </div>

      {/* Links */}
      <div className={`nav-left ${isOpen ? "show" : ""}`}>
        {sectionList.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
            className={active === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Theme Button */}
      <button className="theme-toggle btn" onClick={toggleDarkMode}>
        {isDark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}