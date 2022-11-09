import React from "react";
import "../stylesheets/home.css";
import Header from "../components/Header";
import Carouse from "../components/Carouse";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-width-center"
        style={{ background: `url(./bg.svg)` }}
      >
        <div>
          <h1>Tomasz</h1>
          <div className="intro-content d-flex justify-content-between ">
            <p>
              {" "}
              Mern <br /> Full Stack <br /> Developer{" "}
            </p>
            <a href="TomaszCV.pdf" download="Tomasz Prazniewski.pdf">
              <button style={{ padding: "10px" }}>Get CV</button>
            </a>
          </div>
        </div>
      </div>
      <Carouse />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#071a28"
            fill-opacity="1"
            d="M0,192L34.3,186.7C68.6,181,137,171,206,138.7C274.3,107,343,53,411,32C480,11,549,21,617,58.7C685.7,96,754,160,823,170.7C891.4,181,960,139,1029,138.7C1097.1,139,1166,181,1234,181.3C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4 ">
            <div className="n-box1 p-5 test">
              <h1> Yes You are right...</h1>
              <br />
              <p> I am a JavaScript buff...</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./jsbuff.svg"
                alt="imaggeeee"
                height="200"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box1 p-5">
              <p>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.” – Martin
                Fowler
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mt-5 n-box1 py-5 devstack">
        <div className="text-center">
          <h3 className="text-center "> My Development stack</h3>
          <hr></hr>
          <img src="./developer.svg" alt="img" height="200" width="200" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div>
              <h3> Front End </h3>
              <hr />
              <p>JavaScript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Angular</p>
              <p>HTML</p>
              <p>Next.js</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <h3> Back End </h3>
              <hr />
              <p>Node</p>
              <p>Python</p>
              <p>TypeScript</p>
              <p>Java</p>
              <p>Ruby</p>
              <p>MongoDB</p>
              <p>SQL</p>
              <p>FireBase</p>
            </div>
          </div>
          <div className="col-md-4 text-end">
            <div>
              <h3> UI/UX Styling </h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>BootStrap</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
