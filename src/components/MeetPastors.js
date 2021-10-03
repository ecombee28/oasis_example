import React from "react";
import "../styles/meetPastors.css";
import bruce from "../images/bruce.png";

const MeetPastors = () => {
  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="left-container">
          <h3>Meet The Pastors</h3>
          <p>
            This is where you could introduce yourself. This is where you could
            introduce yourself. This is where you could introduce yourself. This
            is where you could introduce yourself. This is where you could
            introduce yourself. This is where you could introduce yourself. This
            is where you could introduce yourself
          </p>
          <button className="sermon-btn">
            Take a Peek at the Latest Sermons
          </button>
        </div>
        <div className="right-container">
          <img src={bruce} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default MeetPastors;
