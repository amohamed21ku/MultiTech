// ServicesGrid.jsx
import React from "react";
import ServiceCard from "./ServicesCard";

const ServicesGrid = () => {
  const services = [
    {
      icon: "/src/assets/data_consultancy.png",
      title: "Data Consultancy",
      description: "We collaborate with our customers to analyze their unique requirements and develop a compelling business case for implementing an effective data management solution. Our expertise allows us to identify potential benefits and ROI that such solutions bring to organizations.",
      features: [
        "Business Case Analysis",
        "Solution Design",
        "Data Management Strategies",
        "ROI Optimization"
      ]
    },
    {
      icon: "/src/assets/system_integeration.png",
      title: "System Integration",
      description: "We offer comprehensive system integration services to help organizations optimize their IT infrastructure and achieve seamless connectivity between disparate systems. Our experts design customized integration solutions using industry-leading technologies.",
      features: [
        "System Analysis",
        "Custom Integration Solutions",
        "IoT Device Integration",
        "Cloud Application Connectivity"
      ]
    },
    {
      icon: "/src/assets/telecom.png",
      title: "Telecom Service",
      description: "We offer comprehensive telecom services including planning and design, roll out and integration, performance optimization, and 24/7 operation and maintenance support for core, wireless, and data networks.",
      features: [
        "Network Planning & Design",
        "Roll Out & Integration",
        "Performance Optimization",
        "24/7 O&M Support"
      ]
    },
    {
      icon: "/src/assets/IT.png",
      title: "IT and Network",
      description: "We provide comprehensive IT services and networking solutions for enterprises and small businesses, including data center services, network security, and disaster recovery solutions.",
      features: [
        "Data Center Services",
        "Network Infrastructure",
        "Security Solutions",
        "Backup & Recovery"
      ]
    },
    {
      icon: "/src/assets/osp.png",
      title: "OSP (Outside Plant)",
      description: "We provide comprehensive OSP solutions with our dedicated team of experts who possess deep understanding of planning, designing, and implementing fiber optic and copper cabling systems.",
      features: [
        "Fiber Optic Systems",
        "Copper Cabling",
        "Conduit Installations",
        "Trenching Services"
      ]
    },
    {
      icon: "/src/assets/audio.png",
      title: "Audio Visual",
      description: "Multi-tech is your premier destination for Audio-Visual solutions with strong engineering background that provides great support for all aspects of your AV projects.",
      features: [
        "AV System Design",
        "Installation Services",
        "System Integration",
        "Technical Support"
      ]
    },
    {
      icon: "/src/assets/construction.png",
      title: "Construction",
      description: "Multi-tech is a dynamic construction company fully equipped to handle projects of any scale and complexity, offering total solutions and execution as turnkey projects.",
      features: [
        "Commercial Projects",
        "Residential Development",
        "Industrial Construction",
        "Infrastructure Development"
      ]
    },
    {
      icon: "/src/assets/IT.png",
      title: "MEP",
      description: "We take pride in offering comprehensive Mechanical, Electrical, and Plumbing services with highly skilled engineers, designers, and technicians specializing in innovative solutions.",
      features: [
        "Mechanical Systems",
        "Electrical Infrastructure",
        "Plumbing Solutions",
        "Design & Installation"
      ]
    }
  ];

  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="services-grid-header">
          <h2 className="section-title text-center">All Services</h2>
          <p className="section-description text-center">
            Comprehensive solutions across all technology domains
          </p>
        </div>

        <div className="services-detail-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;