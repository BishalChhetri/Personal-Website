import React from "react";
import Header from "./Header";
import "../styles/Front.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import tick from "../assets/tick.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Front = () => {
  const transition = { type: "tween", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="front" id="home">
      <div className="blur front-blur"></div>
      <div className="left-f">
        <Header />
        <div className="the-info">
          <motion.div
            initial={{ left: mobile ? "155px" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
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
            <span>
              <NumberCounter
                end={10}
                start={0}
                delay="0.5"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>Skills</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={2}
                start={0}
                delay="0.5"
                preFix="+"
                postFix="years"
              ></NumberCounter>
            </span>
            <span>Work Experience</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter
                end={10}
                start={0}
                delay="0.5"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>Projects</span>
          </div>
        </div>

        <div className="front-buttons">
          <button className="btn" onClick={() => window.location.reload(true)}>
            Get Started
          </button>
          <button className="btn">
            <Link to="projects" span="true" smooth="true">
              Learn More
            </Link>
          </button>
        </div>
      </div>

      <div className="right-f">
        <button
          className="btn"
          onClick={() => (window.location = "mailto:kcbisal1@gmail.com")}
        >
          Send Email
        </button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Computer Engineer</span>
            <span>2021</span>
          </div>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "30rem" }}
          transition={transition}
          className="calories"
        >
          <img src={tick} alt="" />

          <span>Accessibility</span>
          <span>Free</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Front;
