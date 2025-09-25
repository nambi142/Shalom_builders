import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import "../Css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Close menu when clicking a nav link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        {/* First Row */}
        <div className="header-top">
          {/* Left Side - keep desktop content exactly as before */}
          <div className="header-left">
            <span className="header-item">
              <FaMapMarkerAlt className="icon" /> Pallivasal complex, 1
              upstairs, Water Tank Rd, Palayamkottai, Tirunelveli, Tamil Nadu
              627011
            </span>
            <span className="pipe">|</span>
            <span>
              <a href="tel:9442152333" className="header-item">
                {" "}
                <FaPhoneAlt className="icon" /> Ph-9442152333
              </a>
            </span>
            <span className="pipe">|</span>
            <span className="header-item">
              <FaClock className="icon" /> Mon-Sat: 9am - 6pm
            </span>
          </div>

          {/* Right Side (social) - unchanged visually for desktop; centered on mobile via CSS */}
          <div className="header-right">
            <span className="follow-text">Follow us:</span>
            <a
              href="https://www.facebook.com/people/Shalom-Builders/61562863956813/#"
              className="social-icon"
              aria-label="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <span className="pipe">|</span>
            <a
              href="https://www.instagram.com/shalombuilderstvl/"
              className="social-icon"
              aria-label="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <span className="pipe">|</span>
            <a
              href="mailto:Shalombuilderstvl@gmail.com"
              className="social-icon"
              aria-label="email"
            >
              <SiGmail />
            </a>
            <span className="pipe">|</span>
            <a
              href="https://www.linkedin.com/in/shalom-builders-6a066a355/?originalSubdomain=in"
              className="social-icon"
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Second Row (sticky on scroll) */}
        <div className="header-bottom">
          {/* Logo + Company Name */}
          <div className="logo-container">
            <img src="/img/logo.png_prev_ui.png" alt="Company Logo" />
            <div className="company-text">
              <h2>SHALOM BUILDERS</h2>
              <h3>
                IN GOD WE TRUST 
              </h3>
            </div>
          </div>
          {/* Nav (desktop horizontal / mobile slide-out) */}

          <nav
            ref={navRef}
            className={`nav-menu ${menuOpen ? "open" : ""}`}
            aria-hidden={!menuOpen && window.innerWidth <= 992}
          >
            <Link to="/" className="nav-link" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={handleNavClick}>
              About
            </Link>
            <Link to="/projects" className="nav-link" onClick={handleNavClick}>
              Projects
            </Link>
            <Link to="/service" className="nav-link" onClick={handleNavClick}>
              Services
            </Link>
            <Link to="/careers" className="nav-link" onClick={handleNavClick}>
              Careers
            </Link>
            <Link to="/contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </Link>
          </nav>
          {/* Hamburger (visible on mobile/smaller screens) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Overlay to close when clicking outside (only for mobile when menuOpen) */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
