import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  MarmotTech,
} from "./components";
import FadeIn from "./components/FadeIn";
// import "./index.scss";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // STATE VARIABLE
  const [mode, setMode] = useState("dark"); // Removed TypeScript annotation

  // TOGGLE LIGHT/DARK MODE
  const handleModeChange = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  // SCROLLS TO TOP LEFT OF PAGE
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <MarmotTech />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
