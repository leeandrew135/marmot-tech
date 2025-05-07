// src/pages/PageBenefits.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/oldStyles/style.css";
import "../assets/styles/oldStyles/stylebenefits.css";
import logo from "../assets/images/oldImages/MarmotLogo.png";
import benefitsRibbon from "../assets/images/oldImages/benefitsRibbon.png";
import buildTrustIcon from "../assets/images/oldImages/BuildTrust.png";
import increaseConvenienceIcon from "../assets/images/oldImages/IncreaseConvenience.png";
import expandReachIcon from "../assets/images/oldImages/ExpandReach.png";
import shortBanner from "../assets/images/oldImages/ShortBanner.png";
import longBanner from "../assets/images/oldImages/LongBanner.png";

const PageBenefits = () => {
  const showSidebar = () => {
    document.getElementById("navBar").style.left = "0";
  };

  const benefitsData = [
    {
      icon: buildTrustIcon,
      banner: shortBanner,
      text: "Gain credibility and trust amongst customers with a website.",
    },
    {
      icon: increaseConvenienceIcon,
      banner: longBanner,
      text: "Let your customers interact with your business at any time, making it easy for them discover what you have to offer.",
    },
    {
      icon: expandReachIcon,
      banner: shortBanner,
      text: "Tap into the online world and let your customers find you.",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div id="sidebar" className="sidebar">
        <a href="/" className="sidebar-link">
          Home
        </a>
        <a href="/about" className="sidebar-link">
          About Us
        </a>
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
      <div id="sidebar2" className="sidebar2">
        <img className="sidebarLogo" src={logo} alt="Contact Banner" />
      </div>

      <div id="benefits-MainSection" className="mainsection">
        {/* Sidebar navigation */}
        <div id="navBar" className="navBar">
          {["Home", "About Us", "Services", "Benefits", "Contact Us"].map(
            (item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="navbar-button"
                  style={i === 0 ? { marginTop: "15vh" } : {}}
                >
                  <div className="navbar-button-text">{item}</div>
                </div>
              </Link>
            )
          )}
        </div>
        <div id="navBar2" className="navBar2" onClick={showSidebar}></div>

        {/* Sidebar toggle button */}
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

        {/* Page title */}
        <div className="title" id="benefitsTitle">
          Discover the Benefits of Going Digital
        </div>

        {/* Ribbon */}
        <img id="benefitsRibbon" src={benefitsRibbon} alt="Benefits Ribbon" />

        {/* Benefits sections */}
        <div className="centeringContainer" id="centeringContainer">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="benefitsContainer"
              id={
                index === 0
                  ? "leftBenefit"
                  : index === 2
                  ? "rightBenefit"
                  : undefined
              }
            >
              <div className="centeringWrapper">
                <img
                  className="benefitsIcon"
                  src={benefit.icon}
                  alt={`Benefit ${index + 1}`}
                />
              </div>
              <div className="centeringWrapper">
                <div className="benefitsVerticalLine"></div>
              </div>
              <div className="benefitsBannerContainer">
                <img
                  className="benefitsBanner"
                  src={benefit.banner}
                  alt={`Banner ${index + 1}`}
                />
                <div className="bannerText">{benefit.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="paragraph" id="benefitsEndText">
          <p>Ready to take your business to the next level?</p>
        </div>
        <div className="benefitsHorizontalLine"></div>
        <div className="paragraph" id="benefitsEndText2">
          <p>Contact us for a free consultation.</p>
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

export default PageBenefits;
