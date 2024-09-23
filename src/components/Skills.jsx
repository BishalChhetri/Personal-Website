import React from "react";
import "../styles/Skills.css";
import { workData } from "../data/workData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <span className="stroke-text">Work</span>
        <span>AND</span>
        <span className="stroke-text">Experience</span>
      </div>

      <div className="skills-categories">
        {workData.map((work, i) => (
          <div className="category" key={i}>
            {work.image}
            <span>{work.heading}</span>
            <span>{work.details}</span>
            {work.heading == "About" ? (
              <div className="mt-5 flex items-center m-auto"></div>
            ) : (
              <Link
                onClick={() => {}}
                to="testinomials"
                span="true"
                smooth="true"
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className="join-now"
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
