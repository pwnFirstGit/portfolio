import {
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiStreamlit,
} from "react-icons/si";

const skills = [
  { icon: <SiPython />,     name: "Python",     color: "#3776AB" },
  { icon: <SiReact />,      name: "React",      color: "#61DAFB" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiFastapi />,    name: "FastAPI",    color: "#009688" },
  { icon: <SiStreamlit />,  name: "Streamlit",  color: "#FF4B4B" },
  { icon: <SiDocker />,     name: "Docker",     color: "#2496ED" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiRedis />,      name: "Redis",      color: "#DC382D" },
  { icon: <SiHtml5 />,      name: "HTML",       color: "#E34F26" },
  { icon: <SiCss3 />,       name: "CSS",        color: "#1572B6" },
  { icon: <SiGit />,        name: "Git",        color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .skills-track {
          animation: scroll 22s linear infinite;
          display: flex;
          gap: 24px;
          width: max-content;
        }
        .skills-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={styles.wrapper}>
        <div className="skills-track">
          {[...skills, ...skills].map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name, color }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,255,213,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ ...styles.icon, color }}>{icon}</div>
      <p>{name}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    overflow: "hidden",
    marginTop: "40px",
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  },
  card: {
    background: "rgba(30,30,30,0.9)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "20px 26px",
    minWidth: "110px",
    textAlign: "center",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },
  icon: {
    fontSize: "34px",
    marginBottom: "8px",
  },
};