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
          Explore Our Residential & Commercial Construction Projects |
          Markodraft Builders
        </title>

        {/* ✅ Basic SEO */}
        <meta
          name="description"
          content="View our completed construction projects showcasing quality homes, interiors, wired electrical, masonry and plumbing works by Markodraft Builders in Tirunelveli, Tamil Nadu."
        />
        <meta
          name="keywords"
          content="construction projects Tirunelveli, residential construction Tamil Nadu, commercial building projects, completed homes Tirunelveli, interior works, electrical wiring projects, masonry works, plumbing works, Markodraft Builders projects"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.markodraft.com/projects" />

        {/* ✅ Open Graph - Facebook & Instagram */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Explore Our Residential & Commercial Construction Projects | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="View our completed construction projects showcasing quality homes, interiors, wired electrical, masonry and plumbing works by Markodraft Builders in Tirunelveli, Tamil Nadu."
        />
        <meta property="og:url" content="https://www.markodraft.com/projects" />
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
            "description": "Markodraft Builders offers residential and commercial construction services including homes, interiors, electrical, masonry and plumbing works in Tirunelveli, Tamil Nadu.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tirunelveli",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interior Works"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electrical Wiring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Masonry Works"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plumbing Works"
                  }
                }
              ]
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
            At Mark-O-Draft, we have successfully completed a variety of
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
