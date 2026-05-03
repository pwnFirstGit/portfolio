const projects = [

  {
    number: "01",
    title: "Adaptive Authentication System",
    subtitle: "Intelligent Risk-Based Auth",
    description:
      "A production-level full-stack authentication service with an intelligent risk engine that detects suspicious login activity in real time and verifies identity via OTP email when risk is detected.",
    highlights: [
      "Risk engine scores every login: new device, location change, unusual time, failed attempts",
      "Score 0–29 → allow, 30–99 → OTP email, 100+ → block completely",
      "OTP delivery via SendGrid, stored and expired through Redis",
      "JWT sessions, bcrypt passwords, device fingerprinting",
      "Dashboard with full login history and per-login risk scores",
      "Fully deployed to production on Render (frontend + backend)",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "JWT", "SendGrid", "Docker"],
    accentColor: "#7b61ff",
    github: "https://github.com/pwnFirstGit/Adaptive-Auth-System",
    demo: "https://adaptive-auth-frontend.onrender.com",
    liveBackend: "https://adaptive-auth-system.onrender.com/docs",
  },

  {
    number: "02",
    title: "Autonomous Intelligent Engineer",
    subtitle: "AI-Powered DevOps Agent",
    description:
      "An autonomous AI agent that watches GitHub issues, clones the affected repository, diagnoses bugs using RAG-powered code retrieval, patches the code, and automatically opens a draft pull request — all without human intervention.",
    highlights: [
      "GitHub webhook → clone → RAG index → plan → fix → draft PR",
      "Intelligent code retrieval using vector-based RAG",
      "Autonomous agent loop: plan → edit → validate → commit",
      "Supports Ollama, Gemini, Groq, Anthropic, OpenAI, Grok",
      "FastAPI backend + Streamlit UI + Docker Compose deployment",
      "Manual fix mode via Streamlit without GitHub webhooks",
    ],
    stack: ["FastAPI", "Streamlit", "RAG", "LLM Agents", "Docker", "GitHub API", "Python"],
    accentColor: "#00ffd5",
    github: "https://github.com/pwnFirstGit/Autonomous-Intelligent-Engineer",
    demo: "https://github.com/pwnFirstGit/Autonomous-Intelligent-Engineer/blob/main/README.md",
  
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={styles.list}>
        {projects.map((p) => (
          <ProjectCard key={p.number} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ number, title, subtitle, description, highlights, stack, accentColor, github, demo }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={styles.cardInner}>
        {/* Left */}
        <div style={styles.left}>
          <p style={{ fontSize: "12px", color: accentColor, marginBottom: "4px" }}>{number} — {subtitle}</p>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.desc}>{description}</p>

          <div style={styles.stackWrap}>
            {stack.map((s) => (
              <span key={s} style={styles.pill}>{s}</span>
            ))}
          </div>

          <div style={styles.btnRow}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" style={styles.githubBtn}>
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" style={styles.demoBtn}>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right */}
        <div style={styles.right}>
          <p style={styles.featuresLabel}>Key Features</p>
          <ul style={styles.featuresList}>
            {highlights.map((h, i) => (
              <li key={i} style={styles.featureItem}>
                <span style={{ color: accentColor, flexShrink: 0 }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginTop: "24px",
  },
  card: {
    backgroundColor: "#1c1c1c",
    border: "1px solid #2f2f2f",
    borderRadius: "14px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardInner: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
  },
  left: {
    padding: "26px",
    borderRight: "1px solid #2a2a2a",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  right: {
    padding: "26px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#eaeaea",
    lineHeight: 1.3,
  },
  desc: {
    color: "#cfcfcf",
    fontSize: "14px",
    lineHeight: 1.7,
  },
  stackWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  pill: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "8px",
    background: "#2a2a2a",
    color: "#cfcfcf",
    border: "1px solid #3a3a3a",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
    marginTop: "4px",
  },
  githubBtn: {
    textDecoration: "none",
    padding: "10px 16px",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    borderRadius: "8px",
    border: "1px solid #3a3a3a",
    fontSize: "14px",
  },
  demoBtn: {
    textDecoration: "none",
    padding: "10px 16px",
    backgroundColor: "#007acc",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px",
  },
  featuresLabel: {
    fontSize: "12px",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "14px",
  },
  featuresList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  featureItem: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    color: "#cfcfcf",
    lineHeight: 1.6,
    alignItems: "flex-start",
  },
};