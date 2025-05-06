import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// MORE ICONS AT
// https://fontawesome.com/search
// https://fontawesome.com/search?ip=brands&o=r
import {
  faReact,
  faDocker,
  faPython,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faSquareGithub,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.css";

// Full Stack Web Development
const labelsFirst = [
  "React",
  "React Native",
  "Vue.js",
  "JavaScript",
  "Express.js",
  "Node.js",
  "Axios (HTTP)",
  "RESTful APIs",
  "HTML5",
  "CSS3",
  "AWS DynamoDB",
  "MySQL",
  "SQLite",
  "PHP",
];

// Object Oriented Design
const labelsSecond = [
  "Java",
  "C",
  "C++",
  "Python",
  "UML",
  "SOLID Principles",
  "Javadoc",
  "Doxygen",
];

// Software Engineering Fundamentals
const labelsThird = [
  "Git",
  "Version Control",
  "Agile Methodologies",
  "Software Development Lifecycle",
  "Project Planning",
  "Documentation",
  "Team Project Experience",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Full Stack Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              From internal dashboards to mobile apps, I build software
              solutions using modern web technologies. I have developed full
              stack systems to power small businesses, integrating frontend
              interfaces with cloud hosted databases and RESTful APIs.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Object Oriented Design */}
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Object Oriented Design</h3>
            <p>
              I write clean and modular code with a strong focus on object
              oriented principles and design. Through coursework and projects in
              Java, C, C++, and Python, I’ve developed systems that emphasise on
              readability, reusability, and logical structure.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Software Engineering Fundamentals */}
          <div className="skill">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <h3>Software Engineering Fundamentals</h3>
            <p>
              I implement key software engineering practices to build reliable
              and maintainable software. From version control to working in
              agile teams, I have contributed to collaborative projects from
              planning through deployment.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
