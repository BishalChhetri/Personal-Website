import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <span className="stroke-text logo">BISHAL.</span>
      <ul className="header-menu">
        <li>Home</li>
        <li>About</li>
        <li>projects</li>
        <li>Why me?</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
