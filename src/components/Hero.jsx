export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1>
          Hello,<br />
          This is <span style={styles.name}>Pawan</span>,<br />
          I'm a <span style={styles.role}>Software Engineer</span>
        </h1>

        <p style={styles.text}>
          A 3rd year undergraduate student passionate about software and web
          development. I enjoy building real-world applications and learning
          modern technologies.
        </p>

        <div style={styles.buttons}>
          <a href="#contact" style={styles.contactBtn}>Contact Me</a>
          <a
            href="/resume_new.pdf"
            download
            style={styles.resumeBtn}
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <pre style={styles.code}>
  <span style={styles.keyword}>const</span> developer = {"{"}
  {"\n"}  name: <span style={styles.string}>"Pawan Kumar Dangi"</span>,
  {"\n"}  role: [
    <span style={styles.string}>"Web Developer"</span>,{" "}
    <span style={styles.string}>"ML Engineer"</span>
  ],
  {"\n"}  skills: [
  <span style={styles.skill}>"React"</span>,{" "}
  <span style={styles.skill}>"Node"</span>,{" "}
  <span style={styles.skill}>"Python"</span>,{" "}
  <span style={styles.skill}>"MySQL"</span>,{" "}
  <span style={styles.skill}>"Express"</span>
],

  {"\n"}  learner: <span style={styles.boolean}>true</span>,
  {"\n"}  problemSolver: <span style={styles.boolean}>true</span>,
  {"\n"}  hireable: <span style={styles.boolean}>true</span>,
  {"\n"}{"}"};
</pre>

      </div>
    </section>
  );
}


const styles = {

  skill: {
    color: "#f2f207ff",
    fontWeight: "500",
    textShadow: "0 0 6px rgba(0, 234, 255, 0.6)",
    },


  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "40px",
    alignItems: "center",
    minHeight: "80vh",
  },
  left: {},
  name: {
    color: "#ff4ecd",
  },
  role: {
    color: "#00f5c4",
  },
  text: {
    marginTop: "20px",
    maxWidth: "500px",
    color: "#cfcfcf",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    marginTop: "30px",
  },
  contactBtn: {
    padding: "12px 20px",
    borderRadius: "30px",
    border: "1px solid #00f5c4",
    color: "#00f5c4",
    textDecoration: "none",
  },
  resumeBtn: {
    padding: "12px 20px",
    borderRadius: "30px",
    background: "linear-gradient(90deg, #ff4ecd, #7f5cff)",
    color: "#fff",
    textDecoration: "none",
  },
  right: {
    background: "rgba(20,20,20,0.9)",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #2f2f2f",
  },
  code: {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#00f5c4",
    whiteSpace: "pre-wrap",
  },
  keyword: {
    color: "#c792ea", // purple
    },

  string: {
    color: "#ff5370", // pink/red
    },

  array: {
    color: "#00f5c4", // cyan
    },

  boolean: {
    color: "#7CFC98", // green
    }

};
