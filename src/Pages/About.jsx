import React from "react";
import "../Css/About.css"; 
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
            <h2>About</h2>
            <p>
              At <strong>Shalom Builders</strong>, we are passionate about
              building more than just structures – we build trust, value, and
              long-term relationships. As a top-rated construction company in
              Tirunelveli, we specialize in
              <strong> residential, commercial, and government projects</strong>,
              offering complete end-to-end solutions from design to handover.
              With a team of experienced civil engineers, architects, and
              skilled workers, we combine <strong>modern technology</strong>,
              quality materials, and innovative design to deliver projects that
              are durable, cost-effective, and aesthetically appealing.
            </p>

            <h3>Why Clients Choose Us</h3>
            <ul>
              <li>Expertise in residential & commercial building projects</li>
              <li>Turnkey construction solutions – from planning to interiors</li>
              <li>Use of standard materials & modern techniques</li>
              <li>Transparent pricing & on-time completion</li>
              <li>Personalized designs to suit every client’s needs</li>
            </ul>
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
            <img src="/img/profile1.jpg" alt="Pushparaj Jaison" />
          </div>
          <div className="team-right">
            <h2 className="team-name">Pushparaj Jaison</h2>
            <h4 className="team-role">Proprietor</h4>
            <p className="team-description">
              With a vision to deliver quality-driven construction and interior solutions, <strong>Mr. Jaison</strong>  leads shalom builders with dedication, integrity, and a client-first approach. He ensures every project is completed with excellence, transparency, and timely execution. He Brings strong expertise in construction management, business development, and client relations. With a commitment to quality, innovation, and transparency, he ensures every project is delivered on time with the highest standards
            </p>

            <ul className="team-info">
              <li>
                <strong>Mobile:</strong>{" "}
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
            <img src="/img/profile2.jpg" alt="Micaiah Sharon" />
          </div>
          <div className="team-right">
            <h2 className="team-name">Micaiah Sharon</h2>
            <h4 className="team-role">Project Manager</h4>
            <p className="team-description">
              Mr. Micaiah plays a key role in supporting the planning,
              coordination, and execution of projects. By assisting in data
              management, reporting, and resource allocation, he ensures
              smooth day-to-day operations at site.
            </p>

            <h4 className="team-role-sub">Key Skills & Qualities:</h4>
            <ul className="team-skills">
              <li>Assists in project scheduling and documentation</li>
              <li>Supports data entry, analysis, and progress tracking</li>
              <li>Coordinates between teams, vendors, and clients</li>
              <li>Ensures quality checks and compliance with standards</li>
              <li>Skilled in time management and on-site coordination</li>
              <li>Contributes to a collaborative and efficient work environment</li>
            </ul>

            <ul className="team-info">
              <li>
                <strong>Mobile:</strong>{" "}
                <a href="tel:+918190859587">+91 81908 59587</a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:micaiahsharon@gmail.com">
                  micaiahsharon@gmail.com
                </a>
              </li>
              <li>
                <strong>Experience:</strong> 2 Years
              </li>
              <li>
                <strong>Availability:</strong> Full Time
              </li>
            </ul>

            <div className="team-socials">
              <a
                href="https://www.instagram.com/micaiah_sharon"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/micaiah-s-90b1271a4"
                target="_blank"
                rel="noreferrer"
              >
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
