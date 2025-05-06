import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Tanishq Lodha</h1>
        <div className="links">
          <a href="mailto:dtanishq26@gmail.com">Mail</a>
          <a href="https://www.linkedin.com/in/tanishq-lodha-8b4702200" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/tanishq9582" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <motion.section className="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>About Me</h2>
        <p>B.Tech Mechanical Engineering student at VIT Vellore, passionate about the intersection of engineering and technology with a growing focus on software, AI, and real-world systems.</p>
      </motion.section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python, Java, C++, MATLAB</li>
          <li>HTML, CSS, JavaScript</li>
          <li>SolidWorks, Fusion360, Power BI</li>
          <li>Salesforce, MS Office, VS Code</li>
        </ul>
      </section>

      <motion.section className="projects" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <h2>Projects</h2>
        <div className="card">
          <h3><a href="https://github.com/tanishq9582/Plant-Disease-Detection" target="_blank" rel="noreferrer">Plant Disease Detection</a></h3>
          <p>AI-powered tool achieving 90% accuracy using DenseNet121 and TensorFlow for plant disease classification. Built with Flask and JS frontend.</p>
        </div>
      </motion.section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="card">
          <h3>Warar Energy (Aug-Dec 2023)</h3>
          <p>Designed production layout, tested 3-wheeler EVs, and contributed to factory line efficiency as Production Head.</p>
          <a href="https://drive.google.com/file/d/1smWI1ZklAqZM1DAVgFXCyLJN_ax2Tc3M/view" target="_blank" rel="noreferrer">Certificate</a>
        </div>
        <div className="card">
          <h3>Hindustan Zinc Ltd. (Jun-Jul 2024)</h3>
          <p>Interned in smelter operations, improved vacuum pump system layout, and enhanced plant efficiency.</p>
          <a href="https://drive.google.com/file/d/1w9mbMYktphRiDOZuzYU4YM9pc83_K5w9/view" target="_blank" rel="noreferrer">Certificate</a>
        </div>
      </section>

      <motion.section className="contributions" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
        <h2>Contributions</h2>
        <ul>
          <li><strong>SAE-VIT:</strong> Led projects and organized competitions in automotive innovation.</li>
          <li><strong>IEEE-VIT:</strong> Conducted technical workshops and seminars for student growth.</li>
          <li><strong>NGO-Anokha:</strong> Managed outreach stalls and fundraising activities.</li>
        </ul>
      </motion.section>

      <footer>
        <p>&copy; 2025 Tanishq Lodha. Made with React.</p>
      </footer>
    </div>
  );
}

export default App;
