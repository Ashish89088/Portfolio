import { useEffect, useState } from "react";

export default function Leetcode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const username = "ashishsah89088"; // replace this

  return (
    <div id="leetcode">
      <h2>Problem Solving & Contest Performance</h2>

      {/* Main Stats Card */}
      <img
        src={`https://leetcard.jacoblin.cool/${username}?theme=${
          isDark ? "dark" : "light"
        }&font=Karma&ext=contest`}
        alt="LeetCode Stats"
        style={{ width: "60%" }}
      />
      
    </div>
  );
}