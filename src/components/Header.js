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

        <nav className={`nav`}>
          <ul className={`nav_list  ${mobile ? `show ` : `hide`}`}>
            <div className="hamburger" onClick={openNavMenu}>
              <div className="hamburger-block">X</div>
            </div>
            <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
              About
            </li>
            <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
              Sermons
            </li>
            <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
              Contact
            </li>
            <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
              Give
            </li>
            <div className="social-nav-links-wrapper">
              <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </li>
              <li className={`nav-link ${mobile ? `fade-in` : `fade-out`}`}>
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </li>
            </div>
          </ul>
        </nav>
        <div className="hamburger" onClick={openNavMenu}>
          <div className="hamburger-block"></div>
          <div className="hamburger-block"></div>
          <div className="hamburger-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
