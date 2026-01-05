export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={styles.grid}>
        {/* Project 1 */}
        <div style={styles.card}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
        }} 
    >
          <h3>Housing Prices Prediction</h3>

          <p>
            A machine learning project focused on predicting housing prices
            using regression techniques and advanced models.
          </p>

          <ul style={styles.list}>
            <li>Collected and preprocessed housing data from Kaggle.</li>
            <li>Performed EDA to identify correlations and key features.</li>
            <li>Trained Linear Regression, Random Forest, and XGBoost models.</li>
            <li>Applied GridSearchCV to reduce overfitting.</li>
            <li>Visualized model performance using plots.</li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> Python, Pandas, NumPy, Scikit-learn,
            XGBoost, Matplotlib, Seaborn
          </p>

          <div style={styles.buttons}>
            <a
              href="https://github.com/pwnFirstGit"
              target="_blank"
              rel="noreferrer"
              style={styles.githubBtn}
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com"
              style={styles.demoBtn}
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div  style={styles.card}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
        }}
        >
          <h3>Resume Builder Web Application</h3>

          <p>
            A full-stack web application that allows users to create, manage,
            and download professional resumes.
          </p>

          <ul style={styles.list}>
            <li>Built RESTful APIs using Node.js and Express.js.</li>
            <li>Created dynamic resume templates with EJS.</li>
            <li>Designed secure MySQL schema for user data.</li>
            <li>Implemented authentication and validation.</li>
            <li>Enabled PDF resume export.</li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> Node.js, Express.js, EJS, MySQL, HTML,
            CSS, JavaScript
          </p>

          <div style={styles.buttons}>
            <a
              href="https://github.com/pwnFirstGit"
              target="_blank"
              rel="noreferrer"
              style={styles.githubBtn}
            >
              GitHub
            </a>

            <a
              href="https://www.google.com"
              style={styles.demoBtn}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  },
 
    card: {
    backgroundColor: "#1c1c1c",
    padding: "26px",
    borderRadius: "14px",
    border: "1px solid #2f2f2f",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },


  list: {
    paddingLeft: "18px",
    marginBottom: "12px",
  },
  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "16px",
  },
  githubBtn: {
  textDecoration: "none",
  padding: "10px 16px",
  backgroundColor: "#2a2a2a",
  color: "#fff",
  borderRadius: "8px",
  border: "1px solid #3a3a3a",
  transition: "all 0.2s ease",
},

demoBtn: {
  textDecoration: "none",
  padding: "10px 16px",
  backgroundColor: "#007acc",
  color: "#fff",
  borderRadius: "8px",
  transition: "all 0.2s ease",
},

};
