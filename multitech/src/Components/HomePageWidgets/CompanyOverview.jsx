
// Updated CompanyOverview.jsx
import React from "react";
import { Shield, Building, Target, Eye, ArrowRight } from "lucide-react";

const CompanyOverview = () => {
  const features = [
    {
      icon: <Shield />,
      title: "Security Excellence",
      description: "ISO 14001:2015, 45001:2018, 9001:2016 certified for comprehensive security solutions.",
    },
    {
      icon: <Building />,
      title: "Established Trust",
      description: "Founded in 2004, licensed by Chamber of Commerce with proven track record.",
    },
    {
      icon: <Target />,
      title: "Mission-Driven",
      description: "Dedicated to delivering cost-effective, state-of-the-art technology solutions.",
    },
    {
      icon: <Eye />,
      title: "Vision Forward",
      description: "Becoming the trusted advisor and preferred solution provider for our customers.",
    },
  ];

  return (
    <section className="company-overview">
      <div className="container">
        <div className="overview-grid">
          <div>
            <div className="section-badge">About MultiTech</div>
            <h2 className="section-title">
              Pioneering Technology Excellence in{" "}
              <span className="text-highlight">Saudi Arabia</span>
            </h2>
            <p className="section-description">
              Multi Technology Company (Multitech) stands as a beacon of innovation in the
              telecommunications and IT landscape. Since our establishment in 2004, we've been
              dedicated to transforming how organizations approach security, connectivity, and
              technological infrastructure.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              <span>Discover Our Journey</span>
              <ArrowRight />
            </button>
          </div>

          <div className="overview-visual">
            <div className="values-card">
              <div className="values-content">
                <div className="values-header">
                  <h3>Our Core Values</h3>
                  <p>Built on principles that drive excellence</p>
                </div>

                <div className="values-list">
                  <div className="value-item reliability">
                    <span className="value-name">Reliability</span>
                    <div className="value-bar reliability">
                      <div className="value-progress reliability"></div>
                    </div>
                  </div>
                  <div className="value-item innovation">
                    <span className="value-name">Innovation</span>
                    <div className="value-bar innovation">
                      <div className="value-progress innovation"></div>
                    </div>
                  </div>
                  <div className="value-item customer-focus">
                    <span className="value-name">Customer Focus</span>
                    <div className="value-bar customer-focus">
                      <div className="value-progress customer-focus"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-element floating-1"></div>
            <div className="floating-element floating-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompanyOverview;
