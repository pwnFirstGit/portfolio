
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact With Me</h2>

      <div style={styles.wrapper}>
        {/* LEFT SIDE: FORM */}
        <div style={styles.formBox}>
          <p style={styles.description}>
            If you have any questions, opportunities, or collaborations in mind,
            feel free to reach out. I’m always open to learning and building
            meaningful projects.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
          >

            
            <input type="hidden" name="form-name" value="contact" />

            <label>Your Name</label>
            <input type="text" name="name" required />

            <label>Your Email</label>
            <input type="email" name="email" required />

            <label>Your Message</label>
            <textarea name="message" rows="5" required />

            <button type="submit" >Send Message</button>
          </form>
        </div>

        {/* RIGHT SIDE: CONTACT DETAILS */}
        <div class="contact_right" style={{...styles.infoBox, paddingLeft: "10rem"}}>
            

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
            <p>India</p>
          </div>

         <div style={styles.socials}>
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                style={styles.icon}
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com/in/pawan-kumar-dangi-b56b8a2ab
/"
                target="_blank"
                rel="noreferrer"
                style={styles.icon}
            >
                <FaLinkedin />
            </a>

            <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                style={styles.icon}
            >
                <FaTwitter />
            </a>
         </div>

        </div>
      </div>
    </section>
  );
}



const styles = {

  icon: {
    fontSize: "22px",
    color: "#cfcfcf",
    background: "rgba(255,255,255,0.05)",
    padding: "12px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    },

  iconHover: {
    color: "#00ffd5",
    transform: "translateY(-3px)",
    boxShadow: "0 0 15px rgba(0,255,213,0.5)",
    },

  wrapper: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "40px",
    marginTop: "40px",
  },

  formBox: {
    background: "rgba(20,20,20,0.85)",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #2f2f2f",
  },

  description: {
    marginBottom: "20px",
    color: "#cfcfcf",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

    infoBox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    marginLeft: "40px",
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
    marginTop: "20px",
  }

};
