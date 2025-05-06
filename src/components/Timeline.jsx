import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.css";
import "../assets/styles/MT.css";
import logoMT from "../assets/images/mt-banner.png";
import { Margin } from "@mui/icons-material";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container" style={{ paddingBottom: "0" }}>
        {/* <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technology Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management,
              Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Staff Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>Full-stack Development, API Development, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>Automation, Data Governance, Statistical Analysis</p>
          </VerticalTimelineElement>
        </VerticalTimeline> */}

        <div className="container-mt">
          {/* MARMOT TECH DESCRIPTION */}
          <div className="container-text">
            <h1 className="text-header">
              Empowering Local Businesses to Thrive Online{" "}
            </h1>
            <div>
              <p style={{ marginTop: "0" }}>
                Founded by two ambitious university students, MarmotTech isn't
                just about delivering projects; it's about applying our
                firsthand experience and knowledge to make a real impact in the
                world around us. Our mission is simple: to empower local
                businesses with cutting-edge technology that sets them apart and
                propels them towards success.
              </p>
              <p style={{ marginBottom: "0" }}>
                As a co-founder and full stack developer at MarmotTech, I have
                led projects through the entire software development lifecycle.
                From requirements gathering and wireframing to development and
                deployment. Our work includes full stack web and mobile
                applications with integrated databases, built using modern
                technologies like React, Vue.js, and AWS DynamoDB. In addition
                to technical leadership, I have mentored junior developers and
                conducted outreach to understand client needs, helping shape our
                solutions to real business challenges.
              </p>
            </div>
          </div>

          {/* MARMOT TECH LOGO */}
          <a href="https://www.marmot-tech.ca/" className="logo">
            <img src={logoMT} className="marmot-image zoom"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
