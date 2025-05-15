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
  FadeIn,
} from "../components";

const PageAndrew = () => {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Andrew Lee";
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
        {/* <Contact /> */}
      </FadeIn>
      <Footer />
    </div>
  );
};

export default PageAndrew;
