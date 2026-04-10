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
            <img src="/img/companylogo-removebg-preview.png" alt="Mark-O-Draft Logo" />
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
                href="https://share.google/iQQZjdYpztAQweMS2"
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

        {/* Google Map */}
        <div className="footer-map footer-animate">
          <h3>FIND US</h3>
          <div className="map-container">
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.96677340519!2d77.71244250000001!3d8.7244113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411fb80e0f601%3A0xacc6a25a7f8df91!2sMarkodraft%20Builders%20and%20constructions!5e1!3m2!1sen!2sin!4v1775795379511!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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