import React from "react";
import { Helmet } from "react-helmet-async";
import "../Css/Careers.css";
import certificateImg from "/img/Certificate.jpg";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      <Helmet>
        {/* ✅ Page Title */}
        <title>
          Join Our Growing Construction Team | Careers | Markodraft Builders
        </title>

        {/* ✅ Basic SEO */}
        <meta
          name="description"
          content="Build your career with us. We offer exciting opportunities in building construction, design, and sales with professional growth."
        />
        <meta
          name="keywords"
          content="careers Markodraft, construction jobs Tirunelveli, civil engineering internship Tamilnadu, building construction jobs, construction career opportunities, internship construction company, join Markodraft Builders"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.markodraft.com/careers" />

        {/* ✅ Open Graph - Facebook & Instagram */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Join Our Growing Construction Team | Careers | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="Build your career with us. We offer exciting opportunities in building construction, design, and sales with professional growth."
        />
        <meta property="og:url" content="https://www.markodraft.com/careers" />
        <meta
          property="og:image"
          content="https://www.markodraft.com/img/logo.png"
        />
        <meta property="og:site_name" content="Markodraft Builders" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Google Maps - Local Business Schema */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Markodraft Builders",
      "url": "https://www.markodraft.com",
      "logo": "https://www.markodraft.com/img/logo.png",
      "image": "https://www.markodraft.com/img/logo.png",
      "description": "Build your career with us. We offer exciting opportunities in building construction, design, and sales with professional growth.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tirunelveli",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61576484825469",
        "https://www.instagram.com/markodraftindia/?hl=en"
      ]
    }
  `}</script>
      </Helmet>

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

      <section className="careers-body">
        <div className="careers-container">
          <h2>Join Our Team</h2>
          <p>
            At Mark-O-Draft, we value talent, innovation, and dedication. We
            provide opportunities to work on diverse projects in construction
            and real estate while growing in a collaborative and professional
            environment.
          </p>

          <div className="careers-internship">
            <h3>Internship Opportunities</h3>
            <p>
              Mark-O-Draft offers a 03-month Civil Engineering Internship
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

          <div className="careers-certificate">
            <h3>Professional Certification</h3>
            <p>
              After successfully completing the 3-month internship, interns will
              receive a professional certificate from Mark-O-Draft recognizing
              their skills and contribution. This certificate enhances your
              career prospects in the construction and engineering industry.
            </p>
            <img
              src={certificateImg}
              alt="Internship Certificate"
              className="certificate-img"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

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
