// ServicesPage.jsx - Main Services Page Component
import React from "react";
import Header from "./HomePageWidgets/Header";
import ServicesHero from  "./ServicesWidgets/ServicesHero"
import ServicesOverview from "./ServicesWidgets/ServicesOverview";
import ServicesGrid from "./ServicesWidgets/ServicesGrid";
import ServicesContact from "./ServicesWidgets/ServicesContact";
import Footer from "./HomePageWidgets/Footer";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Header activeSection="services" />
      <ServicesHero />
      <ServicesOverview />
      <ServicesGrid />
      <ServicesContact />
      <Footer />
    </div>
  );
};

export default ServicesPage;