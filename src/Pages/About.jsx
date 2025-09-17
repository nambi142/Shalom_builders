import React from "react";
import "../Css/About.css"; // custom About CSS
import {
  FaBuilding,
  FaUsers,
  FaSmile,
  FaAward,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>
            <a href="/">Home</a> » <span>About Us</span>
          </p>
        </div>
      </section>

      {/* Company Section */}
      <section className="company-section">
        <div className="company-container">
          <div className="company-left">
            <h2>Our Company</h2>
            <p>
              At Shalom Builders, we believe in creating structures that last a
              lifetime. With a commitment to quality craftsmanship and customer
              satisfaction, we specialize in delivering residential, commercial,
              and industrial projects that stand as a symbol of trust and
              excellence.
            </p>

            <p>
              Whether it’s building your dream home, renovating spaces, or
              undertaking large-scale projects, our experienced team ensures
              every detail is crafted to perfection.
            </p>

            <p>
              In addition to construction, Shalom Builders is also a trusted
              name in <strong>Real Estate</strong>. We help clients buy, sell,
              and invest in properties with transparency and professionalism.
              From premium residential plots to commercial spaces, we guide you
              through every step to make property ownership simple, secure, and
              rewarding.
            </p>
          </div>
          <div className="company-right">
            <img
              src="/img/about-us.jpg"
              alt="Shalom Builders"
              className="company-img"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          {/* Heading */}
          <div className="team-heading">
            <h3 className="team-subtitle">Our Team</h3>
            <h2 className="team-title">Meet Our Professional Experts</h2>
            <p className="team-intro">
              Our dedicated professionals are the backbone of Shalom Builders.
              With years of experience and a commitment to excellence, our team
              ensures that every project is completed with precision,
              innovation, and trust. Together, we bring your vision to life.
            </p>
          </div>

          {/* Team Member 1 */}
          <div className="team-profile">
            <div className="team-left">
              <img src="public/img/profile1.jpg" alt="Jason Sir" />
            </div>
            <div className="team-right">
              <h2 className="team-name">Pushparaj jaison</h2>
              <h4 className="team-role">Proprietor</h4>
              <p className="team-description">
                A construction engineer is a professional responsible for
                planning, design, managing, and overseeing construction
                projects. They play a crucial role in ensuring projects are
                executed efficiently, safely, and in compliance with engineering
                standards and regulations.
              </p>

              <ul className="team-info">
                <li>
                  <strong>Mobile Number:</strong>{" "}
                  <a href="tel:+917449152333">+91 74491 52333</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Shalombuilderstvl@gmail.com">
                    Shalombuilderstvl@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Experience:</strong> 15 Years
                </li>
                <li>
                  <strong>Availability:</strong> Full Time
                </li>
              </ul>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-profile">
            <div className="team-left">
              <img src="/img/DSC05037.JPG" alt="Micaiah Sharon" />
            </div>
            <div className="team-right">
              <h2 className="team-name">Micaiah Sharon</h2>
              <h4 className="team-role">Project Manager</h4>
              <p className="team-description">
                A construction project manager coordinates design, resources,
                and deadlines to deliver projects on time and within budget
                while ensuring quality and client satisfaction.
              </p>

              <ul className="team-info">
                <li>
                  <strong>Mobile Number:</strong>{" "}
                  <a href="tel:+918190859587">+91 81908 59587</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:micaiahsharon@gmail.com">
                    micaiahsharon@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Experience:</strong> 02 Years
                </li>
                <li>
                  <strong>Availability:</strong> Full Time
                </li>
              </ul>

              <div className="team-socials">
                <a
                  href="https://www.instagram.com/micaiah_sharon/?igsh=MWl4YjNscGZtNXhhNQ%3D%3D#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/micaiah-s-90b1271a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://wa.me/918190859587"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <h3 className="achievements-subtitle">Our Company Achievements</h3>
          <h2 className="achievements-title">
            Building Trust, Delivering Excellence
          </h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <FaBuilding className="achievement-icon" />
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="achievement-card">
              <FaUsers className="achievement-icon" />
              <h3>150+</h3>
              <p>Team Members</p>
            </div>
            <div className="achievement-card">
              <FaSmile className="achievement-icon" />
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="achievement-card">
              <FaAward className="achievement-icon" />
              <h3>25+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
