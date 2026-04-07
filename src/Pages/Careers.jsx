import React from "react";
import "../Css/Careers.css"; 
import certificateImg from "/img/Certificate.jpg"; 
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      {/* Careers Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-title">CAREERS</h1>
          <p className="careers-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="careers-separator">»</span> Careers
          </p>
        </div>
      </section>

      {/* Careers Body */}  
      <section className="careers-body">
        <div className="careers-container">
          <h2>Join Our Team</h2>
          <p>
            At Mark-O-Draft, we value talent, innovation, and dedication. We
            provide opportunities to work on diverse projects in construction
            and real estate while growing in a collaborative and professional
            environment.
          </p>

          {/* Internship Section */}
          <div className="careers-internship">
            <h3>Internship Opportunities</h3>
            <p>
              Mark-O-Draft offers a 03-month Civil Engineering Internship**
              designed to give students hands-on experience in real construction
              projects. Gain practical knowledge, work with our experts, and
              prepare for a successful career in the construction industry.
            </p>

            <div className="internship-cards">
              <div className="internship-card">
                <div className="internship-icon">🏗️</div>
                <h4>Hands-On Experience</h4>
                <p>
                  Work directly on live construction sites and understand
                  real-world processes.
                </p>
              </div>
              <div className="internship-card">
                <div className="internship-icon">📝</div>
                <h4>Project Management</h4>
                <p>
                  Learn to plan, schedule, and execute projects efficiently with
                  industry-standard tools.
                </p>
              </div>
              <div className="internship-card">
                <div className="internship-icon">📜</div>
                <h4>Professional Certification</h4>
                <p>
                  Receive a Mark-O-Draft certificate upon completion to boost
                  your career prospects.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          <div className="careers-certificate">
            <h3>Professional Certification</h3>
            <p>
              After successfully completing the 3-month internship, interns will
              receive a professional certificate from Mark-O-Draft
              recognizing their skills and contribution. This certificate
              enhances your career prospects in the construction and engineering
              industry.
            </p>
            <img
              src={certificateImg}
              alt="Internship Certificate"
              className="certificate-img"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()} // prevent right-click
            />
          </div>

          {/* Contact Section */}
          <div className="careers-contact">
            <h3>Contact Us</h3>
            <p>
              For internship applications or career inquiries, reach out to us:
            </p>
            <ul>
              <li>
                Phone: <a href="tel:8190859587">+91 81908 59587</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:markodraftindia@gmail.com">
                  markodraftindia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
