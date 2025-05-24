import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/oldStyles/style.css"; // import "../css/style.css";
import "../assets/styles/oldStyles/styleAboutUs.css"; // import "../css/styleAboutUs.css";
// import logo from "../images/MarmotLogo.png";
import logo from "../assets/images/oldImages/MarmotLogo.png";
import banner from "../assets/images/oldImages/MarmotBanner.png";
import andrew from "../assets/images/oldImages/Andrew.png";

const PageAbout = () => {
  useEffect(() => {
    // Mimic `showSidebar()` functionality if needed
    const showSidebar = () => {
      const sidebar = document.getElementById("sidebar");
      const sidebar2 = document.getElementById("sidebar2");
      if (sidebar && sidebar2) {
        sidebar.style.display =
          sidebar.style.display === "block" ? "none" : "block";
        sidebar2.style.display =
          sidebar2.style.display === "block" ? "none" : "block";
      }
    };

    const button = document.getElementById("sidebarButton");
    if (button) {
      button.addEventListener("click", showSidebar);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", showSidebar);
      }
    };
  }, []);

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

      {/* Main Section */}
      <div id="about-MainSection" className="mainsection">
        <div id="navBar" className="navBar">
          {["Home", "About Us", "Services", "Benefits", "Contact Us"].map(
            (text) => (
              <a
                key={text}
                href={`/${text.replace(/\s+/g, "").toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div
                  className="navbar-button"
                  style={text === "Home" ? { marginTop: "15vh" } : {}}
                >
                  <div className="navbar-button-text">{text}</div>
                </div>
              </a>
            )
          )}
        </div>

        <div id="navBar2" className="navBar2" onClick={() => {}} />

        {/* Hamburger Button */}
        <div>
          <button
            id="sidebarButton"
            className="sidebarButton"
            style={{ position: "absolute" }}
          >
            <hr style={lineStyle(0)} />
            <hr style={lineStyle(-25)} />
            <hr style={lineStyle(25)} />
          </button>
        </div>

        {/* Title & Banner */}
        <div className="title">About Us</div>
        <hr style={{ border: "3px solid white" }} />
        <img className="AU_Banner" src={banner} alt="About Us Banner" />

        {/* Paragraph 1 */}
        <div className="AU_Paragraph">
          <p>
            Founded by two ambitious university students, MarmotTech isn't just
            about delivering projects; it's about applying our firsthand
            experience and knowledge to make a real impact in the world around
            us. Our mission is simple: to empower local businesses with
            cutting-edge technology that sets them apart and propels them
            towards success.
          </p>
        </div>

        {/* Profiles */}
        <div
          className="profileContainer"
          style={{ right: "50%", paddingRight: "5%" }}
        >
          <Link to="/andrewlee">
            <img src={andrew} width="100%" alt="Andrew Lee" />
          </Link>
          <Link to="/andrewlee">
            <div className="profileText">
              <p>
                Andrew Lee
                <br />
                Computer Science
                <br />
                Western University
              </p>
            </div>
          </Link>
        </div>

        <div
          className="profileContainer"
          style={{ left: "50%", paddingLeft: "5%" }}
        >
          <img src={andrew} width="100%" alt="Yuval Rashish" />
          <div className="profileText">
            <p>
              Yuval Rashish
              <br />
              Computer Science
              <br />
              Conestoga College
            </p>
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="AU_MainText">
          <p>
            At Marmot Tech, we believe that every business deserves the chance
            to thrive. That's why we're here—to partner with you on your journey
            to success, providing the digital tools and solutions you need to
            stand out from the competition and reach new heights.
          </p>
        </div>
      </div>
    </>
  );
};

// Helper function for hamburger lines
const lineStyle = (offset) => ({
  color: "white",
  width: "60%",
  position: "absolute",
  marginTop: `${offset}%`,
  left: "50%",
  transform: "translateX(-50%)",
});

export default PageAbout;
