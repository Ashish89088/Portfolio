// import { useEffect, useState } from "react";

// export default function Leetcode() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.body.classList.contains("dark"));
//     });

//     observer.observe(document.body, { attributes: true });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section>
//       <h2>Problem Solving</h2>

//       <img
//         src={`https://leetcard.jacoblin.cool/ashishsah89088?theme=${
//           isDark ? "dark" : "light"
//         }&font=Karma`}
//         alt="LeetCode Stats"
//         style={{ width: "100%", marginTop: "30px" }}
//       />
//     </section>
//   );
// }

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
    <section>
      <h2>Problem Solving & Contest Performance</h2>

      {/* Main Stats Card */}
      <img
        src={`https://leetcard.jacoblin.cool/${username}?theme=${
          isDark ? "dark" : "light"
        }&font=Karma&ext=contest`}
        alt="LeetCode Stats"
        style={{ width: "100%", marginTop: "30px" }}
      />
      
    </section>
  );
}