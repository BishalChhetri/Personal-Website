import React from "react";
import "../styles/Project.css";
import { projectsData } from "../data/projectsData";
import whiteTick from "../assets/whiteTick.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="blur project-blur-1"></div>
      <div className="blur project-blur-2"></div>
      <div className="skills-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">SOME</span>
        <span>PROJECT</span>
        <span className="stroke-text">WORK</span>
      </div>

      <div className="projects">
        {projectsData.map((project, i) => (
          <div className="project" key={i}>
            <img
              src={i === 0 ? project1 : i === 1 ? project2 : project3}
              alt=""
            />
            <span>{project.name}</span>
            <span></span>
            <div className="features">
              {project.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">Live Demo</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
