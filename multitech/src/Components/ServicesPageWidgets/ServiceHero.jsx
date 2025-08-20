// ServicesHero.jsx
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ServicesHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-overview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-hero">
      <div className="services-hero-background">
        <video 
          className="services-hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/istockphoto-845922404-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="services-hero-overlay"></div>
        <div className="animated-elements" id="services-animated-elements"></div>
      </div>

      <div className="services-hero-content">
        <div className={`services-hero-text ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="services-hero-title">
            <span className="title-part">Comprehensive</span>
            <span className="title-highlight">Technology Services</span>
          </h1>
          
          <div className="services-hero-subtitle">
            End-to-End Solutions • Expert Implementation • Proven Results
          </div>
          
          <p className="services-hero-description">
            From telecommunications and IT infrastructure to security solutions and system integration, 
            we deliver complete technology services tailored to your business needs.
          </p>
          
          <div className="services-hero-buttons">
            <button className="btn-primary" onClick={scrollToServices}>
              <span>Explore All Services</span>
            </button>
            <button className="btn-secondary" onClick={() => {
              const contactSection = document.querySelector('.services-contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <span>Get Consultation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToServices}>
        <ChevronDown />
      </div>
    </section>
  );
};

export default ServicesHero;