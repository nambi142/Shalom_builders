import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="nf-wrapper">
      {/* Animated construction tape stripes */}
      <div className="nf-tape nf-tape--top"></div>
      <div className="nf-tape nf-tape--bottom"></div>

      <div className="nf-content">
        {/* Hard hat icon */}
        <div className="nf-icon">
          <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="70" width="100" height="14" rx="7" fill="#F5A623" />
            <path
              d="M20 70 Q20 30 60 25 Q100 30 100 70 Z"
              fill="#F5A623"
            />
            <path
              d="M30 70 Q30 42 60 38 Q90 42 90 70 Z"
              fill="#E8941A"
            />
            <rect x="54" y="18" width="12" height="22" rx="4" fill="#D4820F" />
          </svg>
        </div>

        <div className="nf-code">
          <span>4</span>
          <span className="nf-zero">0</span>
          <span>4</span>
        </div>

        <h1 className="nf-title">UNDER CONSTRUCTION</h1>
        <p className="nf-sub">
          Looks like this page is still being built.<br />
          Our crew is on it — but this area is off-limits for now.
        </p>

        <div className="nf-divider">
          <span></span><span>⚠</span><span></span>
        </div>

        <p className="nf-redirect">
          Redirecting you to home in <strong>{count}s</strong>
        </p>

        <div className="nf-actions">
          <button className="nf-btn nf-btn--primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
          <button className="nf-btn nf-btn--outline" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative crane arm */}
      <div className="nf-crane">
        <div className="nf-crane__mast"></div>
        <div className="nf-crane__jib"></div>
        <div className="nf-crane__cable"></div>
        <div className="nf-crane__hook">🪝</div>
      </div>
    </div>
  );
}

export default NotFound;