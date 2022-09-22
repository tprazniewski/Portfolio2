import React from "react";
import Header from "../components/Header";
import "../stylesheets/projects.css";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import projectData from "../data/projectDAta";

function Projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box1 p-3">
            <div>
              <h1> Projects</h1>
              <p>
                "No Matter What People Tell You, Words And Ideas Can Change The
                World." – Robin Williams
              </p>
              <button className="primary-button"> Get Started</button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <img
              src="./blob.svg"
              alt="imaggeeee"
              height="600"
              className="w-400"
            />
            <MdOutlineLaptopChromebook
              color="white"
              size="200"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>
      <div className="container projects-list">
        <h3> Take a look of my projects</h3>
        <hr />

        <div className="row">
          {projectData.map((project) => {
            return (
              <div className="col-md-4">
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
