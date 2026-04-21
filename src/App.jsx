import React from "react";
import "./Css/App.css";
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
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/upload" element={<UploadProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


























