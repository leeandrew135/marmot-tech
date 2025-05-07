import React from "react";
import "../assets/styles/oldStyles/style.css";
import "../assets/styles/oldStyles/stylecontact.css";
import logo from "../assets/images/oldImages/MarmotLogo.png";
import ContactBanner from "../assets/images/oldImages/ContactBanner.png";
import EmailIcon from "../assets/images/oldImages/Email.png";

const PageContact = () => {
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
      <div id="contact-mainsection" className="mainsection">
        <div id="navBar" className="navBar">
          {["/", "/about", "/services", "/benefits", "/contact"].map(
            (path, i) => {
              const labels = [
                "Home",
                "About Us",
                "Services",
                "Benefits",
                "Contact Us",
              ];
              return (
                <a href={path} key={path} style={{ textDecoration: "none" }}>
                  <div
                    className="navbar-button"
                    style={i === 0 ? { marginTop: "15vh" } : {}}
                  >
                    <div className="navbar-button-text">{labels[i]}</div>
                  </div>
                </a>
              );
            }
          )}
        </div>

        <div
          id="navBar2"
          className="navBar2"
          onClick={() => window.showSidebar?.()}
        />

        <button
          id="sidebarButton"
          className="sidebarButton"
          style={{ position: "absolute" }}
          onClick={() => window.showSidebar?.()}
        >
          <hr style={hrStyle(0)} />
          <hr style={hrStyle(-25)} />
          <hr style={hrStyle(25)} />
        </button>

        {/* Page Title */}
        <div className="title">Contact Us</div>
        <hr style={{ border: "3px solid white" }} />

        <div className="banner_container">
          <img
            className="ContactBanner"
            src={ContactBanner}
            alt="Contact Banner"
          />
        </div>

        {/* Email Section */}
        <div className="email-title">Email Us!</div>

        <div className="contactContainer">
          <a href="mailto:marmot.technological@gmail.com">
            <img className="email-icon" src={EmailIcon} alt="Email Icon" />
            <div className="email-box">
              <div className="email-text">marmot.technological@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

const hrStyle = (offsetPercent) => ({
  color: "white",
  width: "60%",
  position: "absolute",
  marginTop: `${offsetPercent}%`,
  left: "50%",
  transform: "translateX(-50%)",
});

export default PageContact;
