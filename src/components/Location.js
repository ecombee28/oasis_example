import React from "react";
import "../styles/location.css";
import map from "../images/map.png";

const Location = () => {
  return (
    <div className="location-container">
      <div className="left">
        <h2>Come See Us</h2>
        <br />
        <p>6301 W Thomas Rd</p>
        <p>Phoenix, AZ 85033</p>
        <br />
        <p>(623)555-1234</p>
        <p>Bruce.Orner@oasislifeaz.com</p>
        <button className="location-btn">Prayer Request</button>
      </div>
      <div className="right">
        <img src={map} alt="" className="map-img" />
      </div>
    </div>
  );
};

export default Location;
