
// Updated ServicesPreview.jsx
import React from "react";
import { Shield, Zap, Globe, CheckCircle } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: <Shield />,
      title: "Security Solutions",
      description: "Comprehensive security consulting, smart operation centers, and integrated protection systems.",
      features: ["Smart Operation Centers", "Video Intelligence", "Access Control", "Risk Assessment"],
      color: "blue",
    },
    {
      icon: <Zap />,
      title: "IT Infrastructure",
      description: "Complete IT solutions including network infrastructure, data centers, and cloud services.",
      features: ["Network Design", "Data Centers", "Cloud Solutions", "System Integration"],
      color: "cyan",
    },
    {
      icon: <Globe />,
      title: "Telecommunications",
      description: "Advanced telecom solutions including fiber networks and wireless infrastructure.",
      features: ["Fiber Networks", "Wireless Solutions", "GSM Implementation", "Network Optimization"],
      color: "blue",
    },
  ];

  return (
    <section className="services-preview">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Our Expertise</div>
          <h2 className="section-title">Integrated Technology Solutions</h2>
          <p className="section-description">
            We integrate disparate systems and data to provide situational awareness and foster collaboration
            across government, industrial, and commercial sectors.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="service-feature">
                    <CheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="service-btn">
                <span>Learn More</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
