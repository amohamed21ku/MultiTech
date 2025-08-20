// Fixed HomePage.jsx
import React from "react";
import Header from "./HomePageWidgets/Header";
import Hero from "./HomePageWidgets/Hero";
import StatsSection from "./HomePageWidgets/StatsSection";
import CompanyOverview from "./HomePageWidgets/CompanyOverview";
import ServicesPreview from "./HomePageWidgets/ServicesPreview";
import ContactSection from "./HomePageWidgets/ContactSection";
import Footer from "./HomePageWidgets/Footer";

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      <Header activeSection="home" onNavigate={onNavigate} />
      <Hero />
      <StatsSection />
      <CompanyOverview />
      <ServicesPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;