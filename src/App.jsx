import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import Gallery from "./Pages/Gallery";
import UploadProjects from "./Pages/upload";
import ScrollToTop from "./Components/ScrollToTop"; 

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      <UploadProjects />
    </div>
  );
}

export default App;


























