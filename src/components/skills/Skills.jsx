import React from "react";
import "./Skills.css";
import { programsData } from "../../data/programsData";
import DownArrow from "../../assets/downArrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <span className="stroke-text">Work</span>
        <span>AND</span>
        <span className="stroke-text">Experience</span>
      </div>

      <div className="skills-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <FontAwesomeIcon icon={faAngleDoubleDown} className="join-now" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
