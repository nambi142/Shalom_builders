import React from "react";
import "../Css/Home.css";
import { FaTools, FaClock, FaUsers, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    {
      img: "public/project-img/jam-nagar.jpg",
      title: "Modern Luxury Villa",
      category: "Architecture | Building",
    },
    {
      img: "public/project-img/IMG20240729131020.jpg",
      title: "Modern Farmhouse",
      category: "Interior | Design",
    },
    {
      img: "public/project-img/shed-works-ground.jpg",
      title: "Shed Roof",
      category: "Architecture | Landscape",
    },
    {
      img: "public/project-img/terres-roofing.jpg",
      title: "Rooftop Terrace",
      category: "Luxury | Outdoor",
    },
  ];

  return (
    <div>
      {/* ---------- HERO VIDEO ---------- */}
      <div className="home-hero">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/video/ADVIDEO-Copy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="features-section">
        <div className="features-inner">
          <h2 className="features-title">Your Best Choose</h2>

          {/* Decorative line + House icon */}
          <div className="title-deco">
            <span className="deco-line"></span>
            <span className="deco-icon">
              <FaHome className="deco-house-icon" />
            </span>
            <span className="deco-line"></span>
          </div>

          <p className="features-subtitle">
            At <strong>Shalom Builders</strong>, we specialize in delivering
            high-quality, on-time, and trusted construction services. Our team
            of experienced professionals ensures every project meets excellence
            with precision and care.
          </p>

          {/* Services row */}
          <div className="services-row">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaTools className="feature-icon" />
              </div>
              <h3 className="feature-title">Best Quality</h3>
              <p className="feature-disc">
                We use premium materials and modern methods to ensure durability
                and superior finish.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaClock className="feature-icon" />
              </div>
              <h3 className="feature-title">On Time</h3>
              <p className="feature-disc">
                Projects are always delivered within the agreed timeline without
                compromising quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title">Experienced</h3>
              <p className="feature-disc">
                Our expert team brings years of industry experience to every
                project we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROJECT SECTION ---------- */}
      <section className="featured-project">
        <div className="featured-overlay">
          <h2 className="featured-title">FEATURED PROJECT</h2>

          <div className="featured-slider">
            <div className="featured-track">
              {/* Render projects twice for infinite loop */}
              {[...Array(2)].map((_, idx) =>
                projects.map((project, i) => (
                  <div className="project-card" key={`${idx}-${i}`}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="featured-img"
                    />
                    <div className="featured-hover">
                      <h3 className="featured-name">{project.title}</h3>
                      <p className="featured-category">{project.category}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Button */}
          <div className="featured-btn-wrap">
            <Link to="/Projects">
              <button className="featured-btn">ALL PROJECTS</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
