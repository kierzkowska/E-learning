import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, name }) => {
  return (
    <div className="learn3__blog-container_article">
      <div className="learn3__blog-container_article-image">
        <img src={imgUrl} alt="people" />
      </div>
      <div className="learn3__blog-container_article-content">
        <div>
         <p>{date}</p>
         <h3>{title}</h3>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Article;
