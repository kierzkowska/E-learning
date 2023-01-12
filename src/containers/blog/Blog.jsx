import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { people1, people2, people3, people4, people5 } from "./imports.js";

const Blog = () => {
  return (
    <div className="learn3__blog section__padding" id="blog">
      <div className="learn3__blog-heading">
        <h1 className="gradient__text">
          If you are still not convinced, read our reviews!
        </h1>
      </div>
      <div className="learn3__blog-container">
        <div className="learn3__blog-container_groupA">
          <Article imgUrl={people5} date="Dec 21, 2022" title="Platform has been supporting my success since GCSE. Flashcards available on the go allow me to go through the material on my own during my studies." name="John, Berlin"/>
        </div>
        <div className="learn3__blog-container_groupB">
          <Article imgUrl={people1} date="Dec 21, 2022" title="The platform enabled me to move from passive learning to active recall." name="Andrew, New York" />
          <Article imgUrl={people3} date="Dec 21, 2022" title="Really great application!" name="Kasia, Warsaw"/>
          <Article imgUrl={people4} date="Dec 21, 2022" title="Thanks to this platform, I remember information faster." name="Amanda, Los Angeles"/>
          <Article imgUrl={people2} date="Dec 21, 2022" title="The best app in the whole world!" name="Basia, Radom"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
