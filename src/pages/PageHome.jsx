// src/pages/PageHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/oldStyles/style.css";
import "../assets/styles/oldStyles/stylehome.css";
import homeBanner from "../assets/images/oldImages/HomeBanner.png";
import smwIcon from "../assets/images/oldImages/smwIcon.png";
import issIcon from "../assets/images/oldImages/issIcon.png";

const PageHome = () => {
  const showSidebar = () => {
    document.getElementById("navBar").style.left = "0";
  };

  return (
    <>
      {/* Sidebar */}
      <div id="sidebar" className="sidebar">
        <a href="/" className="sidebar-link">
          Home
        </a>
        <Link to="/about" className="sidebar-link">
          About Us
        </Link>
        <a href="/services" className="sidebar-link">
          Services
        </a>
        <a href="/benefits" className="sidebar-link">
          Benefits
        </a>
        <a href="/contact" className="sidebar-link">
          Contact Us
        </a>
      </div>
      <div id="sidebar2" className="sidebar2" />

      <div className="mainsection" id="home-mainsection">
        {/* MOBILE NAVBAR */}
        <div id="navBar" className="navBar">
          {["Home", "About Us", "Services", "Benefits", "Contact Us"].map(
            (text, i) => (
              <Link
                key={i}
                to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="navbar-button"
                  style={i === 0 ? { marginTop: "15vh" } : {}}
                >
                  <div className="navbar-button-text">{text}</div>
                </div>
              </Link>
            )
          )}
        </div>
        <div id="navBar2" className="navBar2" onClick={showSidebar}></div>

        {/* PAGE BANNER + MENU BUTTON */}
        <div>
          <img
            className="homeBanner"
            src={homeBanner}
            alt="homeBanner"
            style={{ display: "inline-block" }}
          />
          <div>
            <button
              id="sidebarButton"
              className="sidebarButton"
              style={{ position: "absolute" }}
              onClick={showSidebar}
            >
              <hr style={hamburgerStyle(0)} />
              <hr style={hamburgerStyle(-25)} />
              <hr style={hamburgerStyle(25)} />
            </button>
          </div>
        </div>

        {/* TITLE + PARAGRAPHS */}
        <div className="homeTitle">
          Empowering Local Businesses to Thrive Online
        </div>

        <div className="homeFrame1Container">
          <div className="homeFrame1Text">
            Founded by two ambitious university students, MarmotTech isn't just
            about delivering projects; it's about applying our firsthand
            experience and knowledge to make a real impact in the world around
            us. Our mission is simple: to empower local businesses with
            cutting-edge technology that sets them apart and propels them
            towards success.
          </div>
        </div>

        {/* ICON FRAME */}
        <div className="homeFrame2Container">
          <div
            className="homeFrame2TextContainer"
            style={{ top: "7.5%", left: "7.5%" }}
          >
            <div className="homeFrame2Text" style={{ textAlign: "left" }}>
              Sleek
              <br />
              Modern
              <br />
              Websites
            </div>
          </div>
          <div
            className="homeFrame2TextContainer"
            style={{ bottom: "7.5%", right: "7.5%" }}
          >
            <div className="homeFrame2Text" style={{ textAlign: "right" }}>
              Innovative
              <br />
              Software
              <br />
              Solutions
            </div>
          </div>
          <img
            className="homeFrame2Icon"
            src={smwIcon}
            alt="smw icon"
            style={{ top: "7.5%", right: "7.5%" }}
          />
          <img
            className="homeFrame2Icon"
            src={issIcon}
            alt="iss icon"
            style={{ bottom: "7.5%", left: "7.5%" }}
          />
        </div>

        {/* FINAL PARAGRAPH */}
        <div className="homeParagraph">
          With a focus on creativity, innovation, and customer satisfaction, we
          take pride in our ability to transform ideas into reality. Whether
          it's designing a visually stunning website or developing custom
          software tailored to specific needs, we're committed to delivering
          results that exceed expectations.
          <br />
          <br />
          Let's create something extraordinary together. <br />
          Welcome to Marmot Tech.
        </div>
      </div>
    </>
  );
};

const hamburgerStyle = (offsetPercent) => ({
  color: "white",
  width: "60%",
  position: "absolute",
  marginTop: offsetPercent === 0 ? "0%" : `${offsetPercent}%`,
  left: "50%",
  transform: "translateX(-50%)",
});

export default PageHome;
