

// AboutUsPage.jsx
import React from "react";
import Header from "./HomePageWidgets/Header";
import AboutHero from "./AboutUs/Hero";
import CompanyIntroduction from "./AboutUs/CompanyInto";
import VisionMission from "./AboutUs/VissionMission";
import CompanyValues from "./AboutUs/CompanyValues";
import AboutContact from "./AboutUs/Contact"; 
import Footer from "./HomePageWidgets/Footer";

import '../CSS/AboutUs.css'


const AboutUsPage = ({ onNavigate }) => {
  return (
    <div className="about-us-page">
      <Header activeSection="about" onNavigate={onNavigate} />
      <AboutHero />
      <CompanyIntroduction />
      <VisionMission />
      <CompanyValues />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default AboutUsPage;

