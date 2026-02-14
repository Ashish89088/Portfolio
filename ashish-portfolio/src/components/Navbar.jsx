// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="navbar">
//       <div className="nav-links">
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//         <a href="#about">About</a>
//         <a href="#metrics">Performance</a>
//         <a href="#contact">Contact</a>
//       </div>
//       <button className="btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

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
        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#metrics" className={active === "metrics" ? "active" : ""}>
          Performance
        </a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </div>

      <button className="theme-toggle btn" onClick={toggleDarkMode}>
        {isDark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}