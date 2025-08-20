// ServicesPage.jsx - Main Services Page Component
// src/Components/ServicePage.jsx
import React from "react";
import Header from "./HomePageWidgets/Header";
import ServiceHero from "./ServicesPageWidgets/ServiceHero";
import ServicesContact from "./ServicesPageWidgets/ServicesContact";
import ServiceCard from "./ServicesPageWidgets/ServicesCard";
import ServicesGrid from "./ServicesPageWidgets/ServicesGrid";
import ServicesOverview from "./ServicesPageWidgets/ServicesOverview";
import PartnersSection from "./ServicesPageWidgets/PartnersSection";
import Footer from "./HomePageWidgets/Footer";


const ServicesPage = ({ onNavigate }) => {
  return (
    <div className="services-page">
      <Header activeSection="services" onNavigate={onNavigate} />
      <ServiceHero />
      <ServicesOverview />
      <ServicesGrid />
      <PartnersSection />
      <ServicesContact />
      <Footer />
    </div>
  );
};

export default ServicesPage;