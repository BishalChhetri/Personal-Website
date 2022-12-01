import React from "react";
import "./Project.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
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
        {plansData.map((plan, i) => (
          <div className="project" key={i}>
            <img
              src={i === 0 ? project1 : i === 1 ? project2 : project3}
              alt=""
            />
            <span>{plan.name}</span>
            <span></span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <a href={plan.sourceCode} target="_blank" rel="noopener noreferrer">
              <button className="btn">Source Code</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
