// Updated ContactSection.jsx
import React from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2 className="contact-title">Ready to Transform Your Technology?</h2>
            <p className="contact-description">
              Connect with our experts to discuss your specific requirements and discover how we
              can help secure and optimize your organization's technology infrastructure.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div>
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">+966 5549 100 951</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">info@multitech.com.sa</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div>
                  <div className="contact-label">Business Hours</div>
                  <div className="contact-value">Sun-Thu: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Request a Consultation</h3>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" className="form-input" required />
                <input type="text" placeholder="Last Name" className="form-input" required />
              </div>
              <input type="email" placeholder="Email Address" className="form-input" required />
              <input type="tel" placeholder="Phone Number" className="form-input" required />
              <textarea placeholder="Tell us about your project..." rows="4" className="form-textarea" required />
              <button type="submit" className="form-submit">
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

export default ContactSection;
