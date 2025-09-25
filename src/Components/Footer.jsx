import React, { useEffect, useRef } from "react";
import {
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdKeyboardArrowUp,
} from "react-icons/md";
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
      { threshold: 0.15 }
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
            <img src="/img/logo.png.png" alt="Shalom Builders Logo" />
            <h2>SHALOM BUILDERS</h2>
          </div>
          <p>
            Welcome to Shalom Builders – Trusted Construction & Interior
            Solutions At Tirunelveli and Tamilnadu, we specialize in delivering
            high-quality construction services, residential projects, commercial
            buildings, and modern interior design solutions.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/people/Shalom-Builders/61562863956813/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/shalombuilderstvl/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/shalom-builders-6a066a355/?originalSubdomain=in"
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
                <MdLocationOn className="icon" /> Pallivasal complex, 1
                upstairs, Water Tank Rd, Palayamkottai, Tirunelveli, Tamil Nadu
                627011
              </a>
            </li>
            <li>
              <a href="tel:9442152333">
                <MdPhone className="icon" /> +91 9442152333
              </a>
            </li>
            <li>
              <a href="mailto:Shalombuilderstvl@gmail.com">
                <MdEmail className="icon" /> Shalombuilderstvl@gmail.com
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
        <p>© {year} All Rights Reserved | Shalom Builders</p>

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
