// src/Pages/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../Css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

 
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000); 
      return () => clearTimeout(timer);
    }
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_kab7kgp", // Service ID
        "template_cbl7xub", // Template ID
        form.current,
        "Gb8mUmlWFlBcxZX4d" // Public Key
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error); // log full error
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-breadcrumb">
            <Link to="/" className="contact-home-link">
              Home
            </Link>
            <span className="contact-separator"> » </span> Contact
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-body">
        <div className="contact-container">
          <h2>Contact Us</h2>

          {/* Contact Info Boxes */}
          <div className="contact-info-grid">
            {/* Phone */}
            <div className="contact-info-box">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:9442152333">+91 94421 52333</a>
              </p>
              <p>
                <a href="tel:+917449152333">+91 74491 52333</a>
              </p>
            </div>

            {/* Email */}
            <div className="contact-info-box">
              <div className="contact-icon">
                <FiMail />
              </div>
              <h3>Contact Email</h3>
              <p>
                <a href="mailto:Shalombuilderstvl@gmail.com">
                  Shalombuilderstvl@gmail.com
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="contact-info-box">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <h3>Our Location</h3>
              <p>
                Pallivasal complex, 1 Upstairs, <br />
                Water Tank Rd, Palayamkottai, <br />
                Tirunelveli, Tamil Nadu 627011
              </p>
            </div>

            {/* Business Hours */}
            <div className="contact-info-box">
              <div className="contact-icon">
                <FiClock />
              </div>
              <h3>Business Hours</h3>
              <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday – Closed</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-wrapper">
            {/* Left - Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name" 
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email" 
                  placeholder="Email Address"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone" 
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10-digit phone number"
                  maxLength="10"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-row full">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit Now"}
              </button>
              {message && <p className="form-status">{message}</p>}
            </form>

            {/* Right - Image */}
            <div className="contact-image">
              <img
                src="/img/nathan-waters-j7q-Z9DV3zw-unsplash.jpg"
                alt="Contact Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
