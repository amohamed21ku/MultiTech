// AboutHero.jsx
import React, { useEffect, useState } from "react";
import { ChevronDown, Award, Users, Calendar } from "lucide-react";

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="about-hero-image" style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1, 58, 81, 0.7), rgba(1, 58, 81, 0.5)), url('/WhatsApp%20Image%202023-10-25%20at%209.44.01%20AM%20-2-.jpeg')`
        }}></div>
        <div className="animated-elements" id="about-animated-elements"></div>
      </div>

      <div className="about-hero-content">
        <div className={`about-hero-text ${isLoaded ? 'loaded' : ''}`}>
          <div className="about-hero-badge">Since 2004</div>
          
          <h1 className="about-hero-title">
            <span className="title-part">Leading Technology</span>
            <span className="title-highlight">Solutions Provider</span>
          </h1>
          
          <div className="about-hero-subtitle">
            Excellence • Innovation • Trust • Growth
          </div>
          
          <p className="about-hero-description">
            Multi Technology Company stands as a beacon of innovation in Saudi Arabia's 
            telecommunications and IT landscape, delivering cutting-edge solutions since 2004.
          </p>

          <div className="about-hero-stats">
            <div className="hero-stat">
              <Calendar className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="hero-stat">
              <Award className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="hero-stat">
              <Users className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Team</div>
              </div>
            </div>
          </div>
          
          <div className="about-hero-buttons">
            <button className="btn-primary">
              <span>Discover Our Story</span>
            </button>
            <button className="btn-secondary">
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown />
      </div>
    </section>
  );
};
export default AboutHero;