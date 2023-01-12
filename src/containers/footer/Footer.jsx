import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="learn3__footer section__padding">
      <div className="learn3__footer-heading">
        <h1 className="gradient__text">Do you want to join us before others</h1>
      </div>
      <div className="learn3__footer-button">
        <p>Send Request</p>
      </div>
      <div className="learn3__footer-links">
        <div className="learn3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Warsaw 03-350 Targówek, All Rights Reserved</p>
        </div>
        <div className="learn3__footer-links_div">
          <h4>Social Media</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Twitter</p>
        </div>
        <div className="learn3__footer-links_div">
          <h4>About us</h4>
          <p>News</p>
          <p>Advertise with us</p>
          <p>How it works</p>
        </div>
        <div className="learn3__footer-links_div">
          <h4>Contact</h4>
          <p>Warsaw 03-350</p>
          <p>+48 123 432 322</p>
          <p>learningapp@host.pl</p>
        </div>
      </div>
      <div className="learn3__footer-copyright">
        <p>© 2022 APP All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
