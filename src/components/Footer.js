import React from "react";
import "../styles/footer.css";
import logo from "../images/logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-location">
        <img src={logo} alt="" className="footer-logo" />
        <p>6301 W Thomas Rd</p>
        <p>Phoenix, AZ 85033</p>

        <p>(623)555-1234</p>
        <p>Bruce.Orner@oasislifeaz.com</p>
      </div>
      <div className="footer-hyperlink">
        <h2>Service Times</h2>
        <ul>
          <li>Sunday Morning - 10:30am</li>
          <li>Sunday Evening - 5:00pm</li>
          <li>Wednesday Bible Study - 6:30pm</li>
        </ul>
      </div>
      <div className="footer-social">
        <FontAwesomeIcon
          icon={faFacebook}
          className="footer-social-icon facebook"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="footer-social-icon youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
