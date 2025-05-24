import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PageHome,
  PageAbout,
  PageServices,
  PageBenefits,
  PageContact,
  PageAndrew,
  PageYuval,
} from "./pages";
import "./index.css";
import "./App.css";

function App() {
  // STATE VARIABLE
  const [mode, setMode] = useState("dark");

  // TOGGLE LIGHT/DARK MODE
  const handleModeChange = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  // SCROLLS TO TOP LEFT OF PAGE
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter basename="/marmot-tech">
      <div id="mainDiv">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/services" element={<PageServices />} />
          <Route path="/benefits" element={<PageBenefits />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/andrewlee" element={<PageAndrew />} />
          <Route path="/yuavlrashish" element={<PageYuval />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
