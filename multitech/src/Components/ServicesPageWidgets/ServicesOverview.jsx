
// ServicesOverview.jsx
import React from "react";
import { Target, Users, Award, Zap } from "lucide-react";

const ServicesOverview = () => {
  const highlights = [
    { icon: <Target />, title: "End-to-End Solutions", description: "Complete project lifecycle management" },
    { icon: <Users />, title: "Expert Team", description: "Highly skilled professionals" },
    { icon: <Award />, title: "ISO Certified", description: "Quality assurance standards" },
    { icon: <Zap />, title: "Rapid Deployment", description: "Fast project delivery" }
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <div className="services-overview-grid">
          <div className="services-overview-content">
            <div className="section-badge">Our Expertise</div>
            <h2 className="section-title">
              Most Popular <span className="text-highlight">Services</span>
            </h2>
            <p className="section-description">
              Multi-Tech offers a comprehensive range of services in the telecom and IT sectors. 
              We specialize in managing projects from start to finish, encompassing site surveys, 
              site acquisition, design, civil work, installations, integration, optimization, 
              and final handover within agreed timelines.
            </p>

            <div className="services-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="service-highlight">
                  <div className="service-highlight-icon">{highlight.icon}</div>
                  <div className="service-highlight-content">
                    <h4 className="service-highlight-title">{highlight.title}</h4>
                    <p className="service-highlight-description">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-overview-visual">
            <div className="services-chart-container">
              <div className="services-chart">
                <img 
                  src="/Blue%20and%20White%20Circle%20Organizational%20Chart.png" 
                  alt="Services Overview Chart"
                  className="services-chart-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesOverview;