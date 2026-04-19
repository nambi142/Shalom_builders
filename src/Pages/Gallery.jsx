// src/Pages/Gallery.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import "../Css/ViewGallery.css";

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
          <div className="gallery-hero-tag">Project Portfolio</div>
          <h1 className="gallery-title">{project.title} — <span>Gallery</span></h1>
          <p className="gallery-breadcrumb">
            <Link to="/" className="gallery-home-link">Home</Link>
            <span className="gallery-separator"> › </span>
            <Link to="/projects" className="gallery-home-link">Projects</Link>
            <span className="gallery-separator"> › </span>
            {project.title}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-body">
        <div className="gallery-container">

          {/* Section Header */}
          <div className="gallery-section-header">
            <div>
              <h2>Project Images</h2>
              <p>Click any image to view in full screen</p>
            </div>
            <span className="gallery-count-badge">
              {project.images ? project.images.length : 0} photos
            </span>
          </div>

          <div className="gallery-grid">
            {project.images && project.images.length > 0 ? (
              project.images.map((src, index) => (
                <div
                  key={index}
                  className="gallery-card"
                  onClick={() => openImage(src, index)}
                >
                  <img
                    src={src}
                    alt={`${project.title} ${index + 1}`}
                    className="gallery-item"
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-num">
                      IMG {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="gallery-card-expand">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
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

          {/* Top Bar */}
          <div className="lightbox-topbar" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-project-title">{project.title}</span>
            <span className="lightbox-counter">
              {selectedIndex + 1} / {project.images.length}
            </span>
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            />
          </div>

          {/* Previous Arrow */}
          <span className="lightbox-arrow prev" onClick={showPrev} />

          {/* Image */}
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" className="lightbox-img" />
          </div>

          {/* Next Arrow */}
          <span className="lightbox-arrow next" onClick={showNext} />

          {/* Thumbnail Strip */}
          <div className="lightbox-strip" onClick={(e) => e.stopPropagation()}>
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className={`lightbox-thumb ${i === selectedIndex ? "active" : ""}`}
                onClick={() => {
                  setSelectedIndex(i);
                  setSelectedImage(src);
                }}
              />
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Gallery;