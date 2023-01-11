import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import books from "../../assets/books.png";

const Header = () => {
  return (
    <div className="learn3__header section__padding" id="home">
      <div className="learn3__header-content">
        <h1 className="gradient__text">
          Make big topics easier to learn with flashcards and practice tests
        </h1>
        <p>
          Join over 60 million students around the world who use science-based
          flashcards, practice tests and games to achieve their goals at school,
          university and beyond.
        </p>
        <div className="learn3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="learn3__header-content__people">
          <img src={people} alt="people" />
          <p>2,100 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className="learn3__header-image">
          <img src={books} alt="books" />
        </div>
    </div>
  );
};

export default Header;
