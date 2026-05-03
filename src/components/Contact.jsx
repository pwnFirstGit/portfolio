import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Info</h2>

      <div style={styles.wrapper}>
        <div style={styles.infoItem}>
          <span>📧</span>
          <p>pawan230103011@iiitmanipur.ac.in</p>
        </div>

        <div style={styles.infoItem}>
          <span>📞</span>
          <p>+91 6267385961</p>
        </div>

        <div style={styles.infoItem}>
          <span>📍</span>
          <p>Indore, M.P. ,India</p>
        </div>

        <div style={styles.socials}>
          <a href="https://github.com/pwnFirstGit" target="_blank" rel="noreferrer" style={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/pawan-kumar-dangi-b56b8a2ab/" target="_blank" rel="noreferrer" style={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px",
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    fontSize: "16px",
  },

  socials: {
    display: "flex",
    gap: "16px",
    marginTop: "10px",
  },

  icon: {
    fontSize: "22px",
    color: "#cfcfcf",
    background: "rgba(255,255,255,0.05)",
    padding: "12px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
  },
};