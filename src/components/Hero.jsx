import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Overlay Gradient */}
      <div className="hero-overlay"></div>

      {/* Background Image */}
      <div
        className="hero-background"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/gMqc21t4/191230189-3739112682862090-9220374159950932563-n.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="hero-content-container">
        <div className="hero-text">
          <div className="hero-date-tag">
            <span>September 8–10, 2025</span>
          </div>

          <h1 className="hero-title">
            <span className="highlight">Chandigarh</span> University <br />
            Model United Nations Conference 2025
          </h1>

          <p className="hero-subtitle">
            Join us for three days of diplomacy, debate, and dialogue as we
            tackle the world's most pressing challenges together.
          </p>

          <div className="hero-buttons">
            <a href="#registration" className="btn-primary">
              Register Now
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="bounce">
          <a href="#about" className="scroll-link">
            <span className="scroll-text">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
