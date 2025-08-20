
// ServiceCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  return (
    <div className={`service-detail-card fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
      <div className="service-detail-icon">
        <img src={service.icon} alt={service.title} className="service-icon-image" />
      </div>
      
      <div className="service-detail-content">
        <h3 className="service-detail-title">{service.title}</h3>
        <p className="service-detail-description">{service.description}</p>
        
        {service.features && (
          <ul className="service-detail-features">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="service-detail-feature">
                <span className="feature-bullet">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <button className="service-detail-btn">
          <span>Learn More</span>
          <ArrowRight className="btn-icon" />
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;