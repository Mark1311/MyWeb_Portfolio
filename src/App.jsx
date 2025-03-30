import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBarSection from "./Components/SideBarSection";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import "./style.css";
import './script'

function App() {
  return (
    <>
      <main>
        <SideBarSection />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
