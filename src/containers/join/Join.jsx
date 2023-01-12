import React from "react";
import "./join.css";
import team from "../../assets/team.png";

const Join = () => {
  return (
    <div className="learn3__join section__padding" id="join">
      <div className="learn3__join-image">
        <img src={team} alt="team" />
      </div>
      <div className="learn3__join-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Join us to build the next generation of unstoppable students.</h1>
        <p>Find the right job helping 60 million students achieve.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Join;
