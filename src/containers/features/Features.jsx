import React from "react";
import "./features.css";
import {Feature} from "../../components";

const featuresData = [
  {
    title: "Instantly Improving",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .",
  },
  {
    title: "Send us a message",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .",
  },
  {
    title: "The Future is now",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .",
  },
];
const Features = () => {
  return (
    <div className="learn3__features section__padding" id="features">
      <div className="learn3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="learn3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
