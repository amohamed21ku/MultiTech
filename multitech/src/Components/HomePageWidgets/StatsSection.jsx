
// Updated StatsSection.jsx
import React from "react";
import { Calendar, Award, Users, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "20+", label: "Years of Excellence", icon: <Calendar /> },
    { number: "500+", label: "Projects Completed", icon: <Award /> },
    { number: "50+", label: "Expert Team Members", icon: <Users /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star /> },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
