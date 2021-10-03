import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../images/logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const openNavMenu = () => {
    setMobile(!mobile);
    console.log(mobile);
  };

  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" className="logo" />
        <div className="hamburger" onClick={openNavMenu}>
          <p>Menu</p>
          <div className="hamburger-block"></div>
          <div className="hamburger-block"></div>
          <div className="hamburger-block"></div>
        </div>
        <nav className={`nav ${mobile ? `show` : `hide`}`}>
          <ul className="nav_list">
            <li className="nav-link">About</li>
            <li className="nav-link">Sermons</li>
            <li className="nav-link">Contact</li>
            <li className="nav-link">Give</li>
            <li className="facebook">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </li>
            <li className="youtube">
              <FontAwesomeIcon icon={faYoutube} className="icon" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
