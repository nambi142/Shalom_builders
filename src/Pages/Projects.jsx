// src/Pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            At Shalom Builders, we have successfully completed a variety of
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
