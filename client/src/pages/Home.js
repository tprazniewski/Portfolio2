import React from "react";
import "../stylesheets/home.css";
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header/>
      <div className="introduction flex-width-center"style={{ backgroundImage: `url(./bg.svg)` }}>
        <div>
          <h1>Tomasz</h1>
          <div className="intro-content d-flex justify-content-between ">
            <p> Mern Stack <br /> Full Stack Developer </p>
            <button className="primary-button font-bold"> Get Started </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
