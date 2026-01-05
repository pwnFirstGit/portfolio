import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={styles.row}>
        <Skill icon={<SiCplusplus />} name="C++" color="#00599C" />
        <Skill icon={<SiPython />} name="Python" color="#3776AB" />
        <Skill icon={<SiJavascript />} name="JavaScript" color="#F7DF1E" />
        <Skill icon={<SiReact />} name="React" color="#61DAFB" />
        <Skill icon={<SiNodedotjs />} name="Node.js" color="#339933" />
        <Skill icon={<SiMysql />} name="MySQL" color="#4479A1" />
        <Skill icon={<SiGit />} name="Git" color="#F05032" />
        <Skill icon={<SiHtml5 />} name="HTML" color="#E34F26" />
        <Skill icon={<SiCss3 />} name="CSS" color="#1572B6" />
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
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,255,213,0.35)";
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
  row: {
    display: "flex",
    gap: "24px",
    marginTop: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  card: {
    background: "rgba(30,30,30,0.9)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "20px 26px",
    minWidth: "110px",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "34px",
    marginBottom: "8px",
  },
};
