import React from "react";
import MeetPastors from "./components/MeetPastors";
import "./styles/home.css";
import Believe from "./components/Believe";
import UpcomingEvents from "./components/UpcomingEvents";
import Contact from "./components/Contact";
import Location from "./components/Location";

export const Home = () => {
  return (
    <div>
      <div className="blackout">
        {/* <img src={BackgroundImage} alt="" className="landing_img" /> */}
        <div className="landing_text">Worship With Us</div>
      </div>
      <div className="main-wrapper">
        <section className="meet-pastors">
          <div className="join-live-container">
            <div className="join-us">
              <h2>Join Us Live</h2>
              <p>
                We would love for you to join us live every Sunday at 10:30am
              </p>
              <p style={{ fontSize: "1rem" }}>
                "For where two or three are gathered together in my name, there
                am I in the midst of them"<span> - Matthew 18:20</span>
              </p>
              <div className="btn-wrapper">
                <button className="join-live-btn">Join Live</button>
                <button className="join-live-btn">Give</button>
              </div>
            </div>

            <div className="recent-service">
              <h2>Latest Service</h2>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/U89zkUZPd5w`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <MeetPastors />
        <Believe />
        <UpcomingEvents />
        <Contact />
        <Location />
      </div>
    </div>
  );
};
