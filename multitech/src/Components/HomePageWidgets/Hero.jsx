
// Updated Hero.jsx
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);

  useEffect(() => setIsLoaded(true), []);

  const slides = [
    {
      title: "Excellence in Technology Solutions",
      subtitle: "Reliability • Innovation • Customer-Centricity",
      description: "Leading telecommunications and IT company delivering cutting-edge security solutions and integrated technology services since 2004.",
      cta: "Explore Our Solutions",
    },
    {
      title: "Secure Your Future",
      subtitle: "Advanced Security • Smart Integration • Proven Results",
      description: "From smart operation centers to comprehensive security consulting, we protect what matters most to your organization.",
      cta: "Security Solutions",
    },
    {
      title: "Innovation at Its Core",
      subtitle: "ISO Certified • Expert Team • Continuous Improvement",
      description: "With over 500 successful projects and 20+ years of experience, we're your trusted technology partner in Saudi Arabia.",
      cta: "Learn More",
    },
  ];

  const slide = slides[currentSlide];

  // Generate animated dots
  useEffect(() => {
    const animatedElements = document.querySelector('.animated-elements');
    if (animatedElements && animatedElements.children.length === 0) {
      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.className = `animated-dot ${Math.random() > 0.5 ? 'type-1' : 'type-2'}`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        dot.style.animationDuration = `${3 + Math.random() * 2}s`;
        animatedElements.appendChild(dot);
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-overlay"></div>
        <div className="animated-elements"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-part">Excellence in</span>
            <span className="title-highlight">Technology Solutions</span>
          </h1>

          <div className="hero-subtitle">{slide.subtitle}</div>

          <p className="hero-description">{slide.description}</p>

          <div className="hero-buttons">
            <button className="btn-primary">
              <span>{slide.cta}</span>
            </button>
            <button className="btn-secondary">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown />
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


export default Hero;
