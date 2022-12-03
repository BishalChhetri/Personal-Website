import React from "react";
import "../styles/Header.css";
import Bars from "../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <span className="stroke-text logo">BISHAL.</span>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span="true"
              smooth="true"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="projects"
              span="true"
              smooth="true"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="skills"
              span="true"
              smooth="true"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testinomials"
              span="true"
              smooth="true"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              span="true"
              smooth="true"
            >
              Connect
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
