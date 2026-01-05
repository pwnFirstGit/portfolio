export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <h2>Pawan Kumar Dangi</h2>

        <ul style={styles.menu}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

          
        </ul>
      </div>
    </nav>
  );
}





const styles = {
    nav: {
    background: "rgba(18, 18, 18, 0.7)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    },

  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px 20px 20px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    alignItems: "center",
  },
  resumeBtn: {
    padding: "6px 12px",
    border: "1px solid #007acc",
    borderRadius: "6px",
    color: "#007acc",
    textDecoration: "none",
    fontWeight: "500",
  },
};
