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
          <div className="header-left">
            <span className="header-item">
              <FaMapMarkerAlt className="icon" /> 9, Nachinikinyar Street
              Kokkirakulam, Palayamkottai, Tirunelveli, Tamilnadu - 627009.
            </span>
            <span className="pipe">|</span>
            <span>
              <a href="tel:8190859587" className="header-item">
                {" "}
                <FaPhoneAlt className="icon" /> Ph-8190859587
              </a>
            </span>
            <span className="pipe">|</span>
            <span className="header-item">
              <FaClock className="icon" /> Mon-Sat: 9am - 6pm
            </span>
          </div>

          <div className="header-right">
            <span className="follow-text">Follow us:</span>
            <a
              href=" https://www.facebook.com/profile.php?id=61576484825469"
              className="social-icon"
              aria-label="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <span className="pipe">|</span>
            <a
              href="https://www.instagram.com/markodraftindia/?hl=en"
              className="social-icon"
              aria-label="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <span className="pipe">|</span>
            <a
              href="mailto: markodraftindia@gmail.com"
              className="social-icon"
              aria-label="email"
            >
              <SiGmail />
            </a>
            <span className="pipe">|</span>
            <a
              href="https://www.linkedin.com/company/markodraft-builders-constructions/"
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
            <img src="/img/companylogo-removebg-preview.png" alt="Company Logo" />
            <div className="company-text">
              <h2>Mark-O-Draft</h2>
              <h3>Builders & Constructions</h3>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav ref={navRef} className="nav-menu">
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

          {/* Hamburger — toggles to X when open */}
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Popup Overlay */}
      {menuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="mobile-nav-popup"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Popup Header */}
            <div className="popup-header">
              <div className="popup-logo">
                <img src="/img/companylogo-removebg-preview.png" alt="Logo" />
                <span>Mark-O-Draft</span>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="popup-nav">
              <Link to="/" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">01</span> Home
              </Link>
              <Link to="/about" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">02</span> About
              </Link>
              <Link to="/projects" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">03</span> Projects
              </Link>
              <Link to="/service" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">04</span> Services
              </Link>
              <Link to="/careers" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">05</span> Careers
              </Link>
              <Link to="/contact" className="popup-link" onClick={handleNavClick}>
                <span className="popup-link-num">06</span> Contact
              </Link>
            </nav>

            {/* Popup Footer */}
            <div className="popup-footer">
              <a href="tel:8190859587" className="popup-contact-item">
                <FaPhoneAlt /> +91 8190859587
              </a>
              <div className="popup-socials">
                <a href="https://www.facebook.com/profile.php?id=61576484825469" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebook /></a>
                <a href="https://www.instagram.com/markodraftindia/?hl=en" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></a>
                <a href="mailto:markodraftindia@gmail.com" aria-label="email"><SiGmail /></a>
                <a href="https://www.linkedin.com/company/markodraft-builders-constructions/" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;