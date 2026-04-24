import React from "react";
import { Helmet } from "react-helmet-async";
import "../Css/Careers.css";
import certificateImg from "/img/Certificate.jpg";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      <Helmet>
        {/* // Title */}
        <title>
          Construction Careers in Tirunelveli | Join Markodraft Builders Team
        </title>

        {/* // Basic SEO */}
        <meta
          name="description"
          content="Explore construction jobs and internships in Tirunelveli with Markodraft Builders. Join our team for opportunities in civil engineering, design, and building construction."
        />

        <meta
          name="keywords"
          content="construction jobs Tirunelveli, careers Markodraft Builders, civil engineering jobs Tamil Nadu, construction internships Tirunelveli, building construction careers, join construction company"
        />

        <meta name="robots" content="index, follow" />

        {/* // Canonical (fixed no www) */}
        {/* <link rel="canonical" href="https://markodraft.com/careers" /> */}

        {/* // Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Construction Careers in Tirunelveli | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="Join Markodraft Builders for careers in construction, civil engineering, and design. Grow your career in Tirunelveli."
        />
        <meta property="og:url" content="https://markodraft.com/careers" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/logo.png"
        />
        <meta property="og:site_name" content="Markodraft Builders" />
        <meta property="og:locale" content="en_IN" />

        {/* // Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Markodraft Builders" />
        <meta
          name="twitter:description"
          content="Explore construction jobs and internships in Tirunelveli with Markodraft Builders."
        />
        <meta
          name="twitter:image"
          content="https://markodraft.com/img/logo.png"
        />

        {/* // Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Markodraft Builders",
      "url": "https://markodraft.com",
      "logo": "https://markodraft.com/img/logo.png",
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
