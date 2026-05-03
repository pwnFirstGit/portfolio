

export default function About() {
  const bullets = [
    "B.Tech Computer Science and Engineering (AI) student at IIIT Manipur.",
    "Interests in Machine Learning, Data Science, and Full-Stack Web Development.",
    "Hands-on experience with Python, C++, JavaScript, FastAPI, React, Node.js, PostgreSQL, Redis, and Docker.",
    "Built AIDE — an autonomous AI agent that reads GitHub issues, fixes code using LLM + RAG, and opens draft PRs automatically.",
    "Built an Adaptive Authentication System with a real-time risk engine (IP, device, geolocation, time signals) that triggers OTP verification on suspicious logins — fully deployed to production.",
    "Developed a Resume Builder web app with RESTful APIs, dynamic EJS templates, and PDF export.",
    "Skilled in LLM agent design, RAG pipelines, risk-based security systems, and full-stack application development.",
    "Former school and house captain with strong leadership and teamwork experience.",
    "Motivated by continuous learning and building tools that solve real-world developer problems.",
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <ul>
        {bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}