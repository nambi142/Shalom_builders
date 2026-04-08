import React, { useEffect, useRef } from "react";
import {
  MdEmail,
  MdPhone,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Css/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

  // animate each footer block when it comes into view
  useEffect(() => {
    const items = footerRef.current?.querySelectorAll(".footer-animate") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // scroll to top with smooth fallback
  const scrollToTop = () => {
    // preferred smooth API
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // fallback smooth (simple)
    const scrollStep = () => {
      const pos =
        document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (pos > 0) {
        window.requestAnimationFrame(scrollStep);
        window.scrollTo(0, Math.floor(pos - pos / 8));
      }
    };
    scrollStep();
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-about footer-animate">
          <div className="footer-logo">
            <img src="\img\companylogo.jpeg" alt="Mark-O-Draft Logo" />
            <h2>Mark-O-Draft</h2>
          </div>
          <p>
            Welcome to Mark-O-Draft – Trusted Construction & Interior Solutions
            At Tirunelveli and Tamilnadu, we specialize in delivering
            high-quality construction services, residential projects, commercial
            buildings, and modern interior design solutions.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61576484825469"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/markodraftindia/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/markodraft-builders-constructions/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact footer-animate">
          <h3>CONTACT US</h3>
          <ul className="contact-info">  
            <li>
              <a
                href="https://www.google.com/maps/search/shalom+builders+tirunelveli/"
                target="_blank"
                rel="noreferrer"
              >
                <ImOffice className="icon" /> 9, Nachinikinyar Street
                Kokkirakulam Palayamkottai, Tirunelveli, TamilNadu - 627009
              </a>
            </li>
            <li>
              <a href="tel:9442152333">
                <MdPhone className="icon" /> +91 8190859587
              </a>
            </li>
            <li>
              <a href="mailto: markodraftindia@gmail.com">
                <MdEmail className="icon" /> markodraftindia@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links footer-animate">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="footer-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/service" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/careers" className="footer-link">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {year} All Rights Reserved | Muthu Nambi Dev</p>

        {/* note: type="button" prevents accidental form-submits if inside a form */}
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <MdKeyboardArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
