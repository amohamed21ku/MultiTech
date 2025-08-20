
// Updated Footer.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-content">
          <div className="footer-company">
            <div className="footer-logo">
              <img src="/src/assets/logo.png" alt="MultiTech Logo" className="footer-logo-img" />
              <div>
                <span className="footer-company-name">MultiTech</span>
                <div className="footer-company-tagline">Technology Solutions</div>
              </div>
            </div>
            <p className="footer-description">
              Leading telecommunications and IT company delivering cutting-edge security solutions and
              integrated technology services since 2004. ISO certified with 500+ successful projects.
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/company/multitechksa" className="social-link">
                <Linkedin />
              </a>
              <a href="https://twitter.com/Multitech23" className="social-link">
                <Twitter />
              </a>
              <a href="https://wa.me/00966549100951" className="social-link whatsapp">
                <MessageCircle />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Security Solutions</a></li>
              <li><a href="#" className="footer-link">IT Infrastructure</a></li>
              <li><a href="#" className="footer-link">Telecommunications</a></li>
              <li><a href="#" className="footer-link">Consulting Services</a></li>
              <li><a href="#" className="footer-link">System Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Phone />
                <span>+966 5549 100 951</span>
              </div>
              <div className="footer-contact-item">
                <Mail />
                <span>info@multitech.com.sa</span>
              </div>
              <div className="footer-contact-item">
                <MapPin />
                <span>Saudi Arabia</span>
              </div>
              <div className="footer-contact-item">
                <Clock />
                <span>Sun-Thu: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Multi Technology Company. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;