
// ServicesContact.jsx
import React, { useState } from "react";
import { Send, Phone, Mail, Clock } from "lucide-react";

const ServicesContact = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section className="services-contact">
      <div className="services-contact-background"></div>
      
      <div className="container">
        <div className="services-contact-grid">
          <div className="services-contact-info">
            <h2 className="services-contact-title">Ready to Get Started?</h2>
            <p className="services-contact-description">
              Contact our experts to discuss your specific service requirements and discover 
              how we can help transform your technology infrastructure.
            </p>
            
            <div className="services-contact-items">
              <div className="services-contact-item">
                <div className="services-contact-item-icon">
                  <Mail />
                </div>
                <div className="services-contact-item-content">
                  <div className="services-contact-item-label">Email Us</div>
                  <div className="services-contact-item-value">admin@multitech.com.sa</div>
                  <div className="services-contact-item-value">info@multitech.com.sa</div>
                </div>
              </div>
              
              <div className="services-contact-item">
                <div className="services-contact-item-icon">
                  <Phone />
                </div>
                <div className="services-contact-item-content">
                  <div className="services-contact-item-label">Call Us</div>
                  <div className="services-contact-item-value">+966 5549 100 951</div>
                </div>
              </div>
              
              <div className="services-contact-item">
                <div className="services-contact-item-icon">
                  <Clock />
                </div>
                <div className="services-contact-item-content">
                  <div className="services-contact-item-label">Business Hours</div>
                  <div className="services-contact-item-value">Sun-Thu: 9:00 AM - 6:00 PM</div>
                  <div className="services-contact-item-value">Fri-Sat: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-contact-form-container">
            <h3 className="services-form-title">Contact Us</h3>
            <form onSubmit={handleSubmit} className="services-contact-form">
              <div className="services-form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="services-form-input"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="services-form-input"
                  required
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="services-form-input"
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="services-form-input"
                required
              />
              
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="services-form-textarea"
                required
              />
              
              <button type="submit" className="services-form-submit">
                <Send />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesContact;