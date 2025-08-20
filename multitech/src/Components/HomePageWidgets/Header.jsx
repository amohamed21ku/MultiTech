
// Updated Header.jsx with Navigation
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ activeSection = "home", onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Media", path: "media" },
    { name: "About Us", path: "about" },
    { name: "Contact Us", path: "contact" }
  ];

  const handleNavClick = (path, e) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Navigate to page
    if (onNavigate) {
      onNavigate(path);
    } else {
      // Fallback navigation method
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: path } }));
    }
  };

  return (
    <nav className={`header ${scrollY > 50 ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-section glow-effect floating">
            <div className="logo-container animated-border patterned">
              <img
                src="/src/assets/logo.png"
                alt="MultiTech Logo"
                className="logo-img high-contrast large"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="logo-text">
              <span className="company-name large">MultiTech</span>
              <div className="company-tagline">Technology Solutions</div>
            </div>
          </div>

          <div className="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <a
                  key={item.name}
                  href={`#${item.path}`}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleNavClick(item.path, e)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.path}`}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(item.path, e)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;