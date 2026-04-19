import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
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

// Count-up hook — triggers when card scrolls into view
const useCountUp = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
};

// Individual animated card
const AchievementCard = ({ icon, target, suffix, label }) => {
  const { ref, count } = useCountUp(target);
  return (
    <div className="achievement-card" ref={ref}>
      {icon}
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-wrapper">
      {/* SEO Optimization */}
      <Helmet>
        <title>
          Discover our Journey as a Reliable Construction Company | Mark-O-Draft
        </title>

        <meta
          name="description"
          content="The team behind quality construction and interior projects at Mark-O-Draft. We provide affordable building solutions with expert guidance and free consultation in Tirunelveli and across Tamil Nadu."
        />

        <meta
          name="keywords"
          content="construction builders Tirunelveli, house building Tirunelveli, home construction Tamilnadu, home contractors Tirunelveli, building construction contractor, building construction company, construction cost per sq ft, low cost house construction, low budget house construction, house construction cost Tamilnadu, carpentry services, construction company Tirunelveli, affordable construction services, interior construction, exterior construction, elevation design, painting services, plastering work, curing construction work, column and footing construction"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://markodraft.com/about" />

        <meta
          property="og:title"
          content="Discover our Journey as a Reliable Construction Company | Mark-O-Draft"
        />

        <meta
          property="og:description"
          content="Affordable building solutions with expert guidance and free consultation. Trusted construction company in Tirunelveli."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markodraft.com/about" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/logo.png"
        />
      </Helmet>

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
              At <strong>Mark-O-Draft</strong>, we are a trusted{" "}
              <strong>construction company in Tirunelveli</strong>, Tamil Nadu,
              delivering high-qulity residential, commercial, govenment,
              industrial, warehouse, and cold storage construction service
              across Tamil Nadu. With 40+ satisfied coustomers, we provide
              complete end-toend construction solution from planning and
              architectural design to execution and final handover. In addtion
              to new construction, we offer electrical and plumbing woks,
              buiding renovation, remodeling, painting services granite and
              tiles installtion, flooring solutions, and coplete civil
              contraction services. Our experienced civill engineers,
              architects, solutions, and complete civil contracting services.
              Our experienced civil engineers, architects, and skilled
              professionals use modern construction technology and premium
              materials to build durable, cost-effective, and aesthetically
              appealing structures tailroed to every project.
            </p>
          </div>
          <div className="company-right">
            <img
              src="/img/about-us.jpg"
              alt="Mark-O-Draft"
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
            Our dedicated professionals are the backbone of Mark-O-Draft. With
            years of experience and a commitment to excellence, our team ensures
            that every project is completed with precision, innovation, and
            trust. Together, we bring your vision to life.
          </p>
        </div>

        <div className="team-profile">
          <div className="team-left">
            <img src="/img/jesuschrist.png" alt="Lord Jesus Christ" />
          </div>
          <div className="team-right">
            <h2 className="team-name">Lord Jesus Christ</h2>
            <h4 className="team-role">Our Cornerstone</h4>
            <p className="team-description">
              We dedicate all our work to Lord Jesus Christ, our cornerstone and
              eternal guiding light. Every brick we lay, every structure we
              build, and every promise we make to our clients is rooted in His
              teachings of love, integrity, and grace. His wisdom guides our
              decisions, His strength sustains our team, and His blessings
              overflow in every project we deliver.
            </p>
            <p className="team-description">
              At Mark-O-Draft, we believe that true excellence is not just built
              with cement and steel — it is built with faith, honesty, and
              purpose. Lord Jesus inspires us to serve every client as we would
              serve Him — with humility, dedication, and a heart full of
              gratitude.
            </p>
            <blockquote className="team-verse">
              "Unless the Lord builds the house, the builders labor in vain."
              <span> — Psalm 127:1</span>
            </blockquote>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-left">
            <img src="/img/MicaiahSharon.jpeg" alt="Micaiah Sharon" />
          </div>
          <div className="team-right">
            <h2 className="team-name">Micaiah Sharon</h2>
            <h4 className="team-role">Proprietor</h4>
            <p className="team-description">
              Mr. Micaiah Sharon is the Proprietor of the organization, bringing
              visionary leadership and entrepreneurial drive to every project.
              He oversees the overall business operations, client relationships,
              and strategic growth, ensuring that the company delivers
              excellence in every endeavor.
            </p>

            <h4 className="team-role-sub">Key Skills & Qualities:</h4>
            <ul className="team-skills">
              <li>Leads business strategy, growth, and overall operations</li>
              <li>Manages client relationships and business development</li>
              <li>
                Oversees project planning, execution, and quality standards
              </li>
              <li>Drives team performance and organizational culture</li>
              <li>Skilled in decision-making, negotiation, and leadership</li>
              <li>
                Committed to delivering value and building long-term
                partnerships
              </li>
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
            <AchievementCard
              icon={<FaBuilding className="achievement-icon" />}
              target={500}
              suffix="+"
              label="Projects Completed"
            />
            <AchievementCard
              icon={<FaUsers className="achievement-icon" />}
              target={150}
              suffix="+"
              label="Team Members"
            />
            <AchievementCard
              icon={<FaSmile className="achievement-icon" />}
              target={1000}
              suffix="+"
              label="Happy Clients"
            />
            <AchievementCard
              icon={<FaAward className="achievement-icon" />}
              target={25}
              suffix="+"
              label="Awards Won"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
