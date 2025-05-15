import React from "react";
import mtportal from "../assets/images/demo_mtportal.png";
import quaq from "../assets/images/demo_quaq.png";
import "../assets/styles/Project.css";

const MarmotTech = () => {
  return (
    <div className="projects-container" id="marmottech">
      <div className="projects-grid">
        {/* MTPortal */}
        <div className="project">
          <a
            href="https://github.com/TheSevenCs/MTPortal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mtportal} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/TheSevenCs/MTPortal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>MTPortal</h2>
          </a>
          <p>
            The MarmotTech Employee Portal is an internal application designed
            exclusively for our company to streamline workflows, enhance
            productivity, and improve communication. Developed using Vue.js,
            Axios, Node.js/Express.js, and AWS DynamoDB.
          </p>
        </div>
        {/* QUAQ */}
        <div className="project">
          <a
            href="https://github.com/TheSevenCs/QUAQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={quaq} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/TheSevenCs/QUAQ"
            target="_blank"
            rel="noreferrer"
          >
            <h2>QUAQ</h2>
          </a>
          <p>
            This web app serves as a one-stop platform for organising schedules,
            tracking progress, managing resources, and improving communication,
            all within a user-friendly interface. Currently undergoing
            development with React, Axios, Node.js/Express.js, and AWS DynamoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarmotTech;
