import React from "react";
import Header from "../Header/Header";
import "./Front.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import tick from "../../assets/tick.png";
import Calories from "../../assets/calories.png";

const Front = () => {
  return (
    <div className="front">
      <div className="left-f">
        <Header />
        <div className="the-info">
          <div></div>
          <span> Full Stack Web Developer</span>
        </div>

        <div className="info-text">
          <div>
            <span className="stroke-text">Skilled </span>
            <span>Passionate</span>
          </div>
          <div>
            <span>Web Developer </span>
          </div>
          <div>
            <span>
              Developer with extensive experience in a variety of front end &
              back end languages and databases.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+ 10</span>
            <span>Skills</span>
          </div>
          <div>
            <span>+ 2 years</span>
            <span>Work Experience</span>
          </div>
          <div>
            <span>+ 10</span>
            <span>Projects</span>
          </div>
        </div>

        <div className="front-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-f">
        <button className="btn">Email</button>

        <div className="heart-rate">
          <img src={Calories} alt="" />
          <div>
            <span>Computer Engineer</span>
            <span>2021</span>
          </div>
        </div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={tick} alt="" />

          <span>Accessibility</span>
          <span>Free</span>
        </div>
      </div>
    </div>
  );
};

export default Front;
