import React from "react";
import "../home/Home.css";
import Card from "../../components/card/Card";

export default function Home() {
  function bookInfoHandler(params) {
    console.log(params);
  }
  return (
    <div className="container">
      <div className="wrapper">
        <Card bookInfoHandler={bookInfoHandler} />
      </div>
    </div>
  );
}
