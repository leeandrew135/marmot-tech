import React, { useState } from "react";
import "../assets/styles/oldStyles/style.css";
import "../assets/styles/oldStyles/styleservices.css";
import logo from "../assets/images/oldImages/MarmotLogo.png";
import WebsiteIcon from "../assets/images/oldImages/WebsiteIcon.png";
import SoftwareIcon from "../assets/images/oldImages/SoftwareIcon.png";
import WebAppIcon from "../assets/images/oldImages/WebApp.png";
import ServiceBanner from "../assets/images/oldImages/ServiceBanner.png";

const PageServices = () => {
  const [infoText, setInfoText] = useState("Hover Over/Click An Icon");

  const handleHover = (type) => {
    const descriptions = {
      web: "We design custom websites tailored to showcase your business online. Our approach combines modern design principles with user-friendly interfaces, ensuring your site not only looks professional but also functions seamlessly across all devices.",
      soft: "Our team develops customized software solutions designed to streamline operations and enhance efficiency for your business. From inventory management to customer relations, we provide tailored software that meets your specific needs and integrates smoothly with your existing systems.",
      webapp:
        "We create dynamic web applications that offer powerful functionality and real-time performance across browsers. Whether it's a booking system, an interactive customer service platform, or a comprehensive management tool, our webapps are built to improve engagement and optimize your business processes.",
    };
    setInfoText(descriptions[type]);
  };

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
      <div id="services-mainsection" className="mainsection">
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

        <div className="title">Services</div>
        <hr style={{ border: "3px solid white" }} />
        <img
          src={ServiceBanner}
          alt="ServiceBanner"
          className="serviceBanner"
        />

        <div className="ourServices">Our Services</div>
        <hr style={{ border: "2px solid white", width: 421, marginTop: 30 }} />

        <div className="table-container">
          <table className="icon-table">
            <thead>
              <tr align="center">
                <th className="icon-title">Websites</th>
                <th></th>
                <th className="icon-title">Software</th>
                <th></th>
                <th className="icon-title">Web-Apps</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <td>
                  <div className="icon">
                    <img
                      src={WebsiteIcon}
                      className="icon-img"
                      alt="Website Icon"
                      onMouseOver={() => handleHover("web")}
                    />
                  </div>
                </td>
                <td className="table-spacers"></td>
                <td>
                  <div className="icon">
                    <img
                      src={SoftwareIcon}
                      className="icon-img"
                      alt="Software Icon"
                      onMouseOver={() => handleHover("soft")}
                    />
                  </div>
                </td>
                <td className="table-spacers"></td>
                <td>
                  <div className="icon">
                    <img
                      src={WebAppIcon}
                      className="icon-img"
                      alt="Web App Icon"
                      onMouseOver={() => handleHover("webapp")}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">{infoText}</div>
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

export default PageServices;
