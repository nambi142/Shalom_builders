// src/Pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Css/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const colRef = collection(db, "Project-data");
        const snap = await getDocs(colRef);

        if (!snap.empty) {
          const list = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProjects(list);
        } else {
          console.warn("No projects found in Firestore");
        }
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {/* ✅ SEO Helmet */}
      <Helmet>
        {/* ✅ Page Title */}
        <title>
          Construction Projects in Tirunelveli | Markodraft Builders Portfolio
        </title>

        {/* ✅ Basic SEO */}
        <meta
          name="description"
          content="Explore our completed residential and commercial construction projects in Tirunelveli, Tamil Nadu. Markodraft Builders delivers quality homes, interiors, electrical, masonry, and plumbing works."
        />

        <meta
          name="keywords"
          content="construction projects Tirunelveli, builders portfolio Tamil Nadu, residential projects Tirunelveli, commercial construction projects, interior works, electrical wiring, masonry works, plumbing services Markodraft"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://markodraft.com/projects" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Construction Projects in Tirunelveli | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="View our completed residential and commercial construction projects in Tirunelveli. Quality homes, interiors, and full building services by Markodraft Builders."
        />
        <meta property="og:url" content="https://markodraft.com/projects" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/brand.jpeg"
        />
        <meta property="og:site_name" content="Markodraft Builders" />
        <meta property="og:locale" content="en_IN" />

        <meta
          name="twitter:image"
          content="https://markodraft.com/img/favicon_io/favicon-32x32.png"
        />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Markodraft Builders",
      "url": "https://markodraft.com",
      "logo": "https://markodraft.com/favicon-32x32.png",
      "image": "https://markodraft.com/favicon-32x32.png",
      "description": "Markodraft Builders provides residential and commercial construction services in Tirunelveli including interiors, electrical, masonry and plumbing works.",
      "areaServed": {
        "@type": "City",
        "name": "Tirunelveli"
      },
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

      {/* Projects Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">PROJECTS</h1>
          <p className="projects-breadcrumb">
            <Link to="/" className="projects-home-link">
              Home
            </Link>
            <span className="projects-separator"> » </span> Projects
          </p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="projects-body">
        <div className="projects-container">
          <h2 className="projects-heading">Our Recent Works</h2>
          <p className="projects-intro">
            At Markodraft, we have successfully completed a variety of
            residential, commercial, and real estate projects. Each project
            reflects our commitment to quality, design, and customer
            satisfaction.
          </p>

          <div className="p-projects-grid">
            {loading ? (
              <div className="loader-container">
                <div className="loader"></div>
                <p>Loading projects...</p>
              </div>
            ) : projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              projects.map((project) => (
                <div className="p-project-card" key={project.id}>
                  <div className="p-project-img">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-project-card-content">
                    <h3 className="p-project-title">{project.title}</h3>
                    <p className="p-project-desc">{project.description}</p>
                    <Link
                      to={`/gallery/${project.id}`}
                      className="p-project-btn"
                    >
                      View Gallery →
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
