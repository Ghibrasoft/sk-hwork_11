import React, { useState } from "react";
import "../card/Card.css";
import bookInfo from "../../data/bookInfo.json";
import image from "../../assets/poem.jpg";

export default function Card({ bookInfoHandler }) {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState(true);

  function clickHandler() {
    bookInfoHandler(bookInfo);
    setShow(!show);
  }

  return (
    <>
      <article className="card-wrapper">
        {/* select */}
        {show && (
          <button onClick={() => setLanguage(!language)} className="card-btn">
            {language ? "ENG" : "GEO"}
          </button>
        )}

        {/* title */}
        <div className="card-title">
          <h1>
            {show
              ? language
                ? bookInfo.title.geo
                : bookInfo.title.eng
              : "Click to show"}
          </h1>
        </div>

        {/* image */}
        {show ? <img src={image} alt="book" className="card-img" /> : null}

        {/* content */}
        <div className="card-body">
          <div className="book-author">
            <h3>{show ? (language ? "ავტორი:" : "Author:") : null}</h3>
            <span>
              {show
                ? language
                  ? bookInfo.author.geo
                  : bookInfo.author.eng
                : null}
            </span>
          </div>
          <div className="description">
            <h3>{show ? (language ? "აღწერა" : "description") : null}</h3>
            <p>
              {show
                ? language
                  ? bookInfo.description.geo
                  : bookInfo.description.eng
                : null}
            </p>
          </div>

          {/* characters */}
          <div className="characters-div">
            <h3>{show ? (language ? "პერსონაჟები:" : "Characters:") : null}</h3>
            <ul>
              {show
                ? language
                  ? bookInfo.characters.geo.map((char) => (
                      <li key={char}>{char}</li>
                    ))
                  : bookInfo.characters.eng.map((char) => (
                      <li key={char}>{char}</li>
                    ))
                : null}
            </ul>
          </div>
        </div>

        {/* footer */}
        <div className="card-footer">
          <button className="card-btn" onClick={clickHandler}>
            {show ? "Click to hide" : "Reveal mistery book"}
          </button>
        </div>
      </article>

      <div className="rects">
        <div className="rect rect-1"></div>
        <div className="rect circle-2"></div>
        <div className="rect rect-3"></div>
      </div>
    </>
  );
}
