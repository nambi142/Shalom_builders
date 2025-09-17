// src/Pages/Gallery.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import "../Css/Gallery.css";

const Gallery = () => {
  const { id } = useParams(); // project id from URL
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "Project-data", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setProject(snap.data());
        } else {
          console.warn("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const openImage = (src, index) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (project.images.length > 0) {
      const prevIndex =
        (selectedIndex - 1 + project.images.length) % project.images.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(project.images[prevIndex]);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (project.images.length > 0) {
      const nextIndex = (selectedIndex + 1) % project.images.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(project.images[nextIndex]);
    }
  };

  // Loading Spinner
  if (loading)
    return (
      <div className="gallery-loading">
        <div className="spinner"></div>
        <p>Loading gallery...</p>
      </div>
    );

  if (!project) return <p>Project not found.</p>;

  return (
    <div>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-title">{project.title} - Gallery</h1>
          <p className="gallery-breadcrumb">
            <Link to="/" className="gallery-home-link">Home</Link>
            <span className="gallery-separator"> » </span> 
            <Link to="/projects" className="gallery-home-link">Projects</Link>
            <span className="gallery-separator"> » </span> {project.title}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-body">
        <div className="gallery-container">
          <div className="gallery-grid">
            {project.images && project.images.length > 0 ? (
              project.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${project.title} ${index + 1}`}
                  className="gallery-item"
                  onClick={() => openImage(src, index)}
                />
              ))
            ) : (
              <p>No images available for this project.</p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close">&times;</span>

          {/* Previous Arrow */}
          <span className="lightbox-arrow prev" onClick={showPrev}>
            &#10094;
          </span>

          {/* Next Arrow */}
          <span className="lightbox-arrow next" onClick={showNext}>
            &#10095;
          </span>

          <img src={selectedImage} alt="Zoomed" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
