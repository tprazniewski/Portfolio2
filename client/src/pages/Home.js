import React from "react";
import "../stylesheets/home.css";

function Home() {
  return (
    <div>
      <div className="introduction flex-width-center"style={{ backgroundImage: `url(./bg.svg)` }}>
        <div>
          <h1>Tomasz</h1>
          <div className="intro-content">
            <p> Mern Stack <br /> Full Stack Developer </p>
            <button className="primary-button font-bold"> Get Started </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
