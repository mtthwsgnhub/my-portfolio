import './App.css';
import { useState } from 'react';

function App() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="page">

      <section className="landing">
        <h1 className="wc-title">Welcome to My Website!</h1>
        <p className="wc-text">
          This website was created by a student web developer using the React frontend framework.
          This will be hosted on GitHub. The purpose of this website is to serve as my submission for a Performance Task.
        </p>
      </section>

      <section className="about">

        <img
          src="https://i.pinimg.com/236x/34/2f/9d/342f9d37aa01a09aa7b8a540a0c49153.jpg"
          className="muscleduck"
        />

        <h2>About Me</h2>

        <p>
          I am currently a 3rd year student taking the course of Bachelor of Science in Information Technology (BSIT).
          I am still learning about web development and improving my skills in HTML, CSS, JavaScript, and React.
          I enjoy building clean and responsive websites and continuously improving my skills.
        </p>

        <blockquote className="quote">
          “Driving is my serenity — calm, focused, and peaceful.”
        </blockquote>

      </section>

      <section className="skills">

        <h2>Acquired Skills</h2>

        <div className="skill-list">

          <div className="skill-item">
            <h3>Basics of Programming</h3>
            <p>2021 - 2022</p>
          </div>

          <div className="skill-item">
            <h3>Python Skills</h3>
            <p>2023 - 2024</p>
          </div>

          <div className="skill-item">
            <h3>SAP S/4HANA</h3>
            <p>2023 - 2025</p>
          </div>

          <div className="skill-item">
            <h3>Web Development</h3>
            <p>2025 - Present</p>
          </div>

          <div className="skill-item">
            <h3>Amateur Ethical Hacking Skills</h3>
            <p>2025 - Present</p>
          </div>

        </div>

      </section>

      <section className="portfolio">

        <h2>Projects</h2>

        <div className="project-tabs">

          <div
            className={`tab ${activeProject === 1 ? "active" : ""}`}
            onClick={() => setActiveProject(1)}
          >
            <h3>Project 1</h3>
            <p>A Multi-Platform Inventory POS and E-Commerce System with Virtual 3D Model Viewing Using Augmented Reality.</p>
          </div>

          <div
            className={`tab ${activeProject === 2 ? "active" : ""}`}
            onClick={() => setActiveProject(2)}
          >
            <h3>Project 2</h3>
            <p>Portfolio Website using React framework</p>
          </div>

          <div
            className={`tab ${activeProject === 3 ? "active" : ""}`}
            onClick={() => setActiveProject(3)}
          >
            <h3>Project 3</h3>
            <p>OPLAN: Mobile Legends: Bang Bang 1000 Stars Achievement System</p>
          </div>

          <div
            className={`tab ${activeProject === 4 ? "active" : ""}`}
            onClick={() => setActiveProject(4)}
          >
            <h3>Project 4</h3>
            <p>NBA: Basketball Analysis for Player Statistics</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;