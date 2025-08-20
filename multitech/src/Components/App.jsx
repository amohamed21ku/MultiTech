import React, { useState } from 'react'
import HomePage from './HomePage'
// import ServicesPage from './ServicePage'
import AboutUsPage from './AboutUs'

import '../CSS/App.css'
import ServicesPage from './ServicePage';

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation handler function
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Render the appropriate page component based on currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutUsPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
        // return <div>Services Page - Coming Soon</div>;
      case 'media':
        return <div>Media Page - Coming Soon</div>;
      case 'contact':
        return <div>Contact Page - Coming Soon</div>;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
    {/* <ServicesPage /> */}
      {renderCurrentPage()}
    </>
  )
}

export default App;