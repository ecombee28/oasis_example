import React from "react";
import "../styles/upcoming.css";
import Picnic from "../images/picnic.jpg";
import baptism from "../images/baptism.jpg";

const UpcomingEvents = () => {
  return (
    <div className="upcoming-container">
      <h2>Upcoming Events</h2>
      <div className="upcoming-wrapper">
        <div className="event-box">
          <div className="event-box-msg">
            <h3>Oasis Life Family Picnic</h3>
            <p>
              <span>Where:</span> Oasis Life Church
            </p>
            <p>
              <span>When:</span> Sunday, October 20th at 12:00pm
            </p>
            <p>
              <span>Who:</span> Everyone!
            </p>
            <p>
              <span>What:</span> Join us for our annual fall family picnic where
              we enjoy good food and good laughs
            </p>
          </div>
          <img src={Picnic} alt="" className="event-box-img" />
        </div>

        <div className="event-box">
          <div className="event-box-msg">
            <h3>Baptism</h3>
            <p>
              <span>Where:</span> Oasis Life Church
            </p>
            <p>
              <span>When:</span> Sunday, November 10th at 10:30am
            </p>
            <p>
              <span>Who:</span> Everyone!
            </p>
            <p>
              <span>What:</span> If you have never been baptised or would like
              to get re-baptised this your chance.
            </p>
          </div>
          <img src={baptism} alt="" className="event-box-img" />
        </div>

        <div className="event-box">
          <div className="event-box-msg">
            <h3>Oasis Life Family Picnic</h3>
            <p>
              <span>Where:</span> Oasis Life Church
            </p>
            <p>
              <span>When:</span> Sunday, October 20th at 12:00pm
            </p>
            <p>
              <span>Who:</span> Everyone!
            </p>
            <p>
              <span>What:</span> Join us for our annual fall family picnic where
              we enjoy good food and good laughs
            </p>
          </div>
          <img src={Picnic} alt="" className="event-box-img" />
        </div>

        <button className="upcoming-btn">
          See what else is on the Calender
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
