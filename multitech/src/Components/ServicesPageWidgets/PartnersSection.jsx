// PartnersSection.jsx
import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "STRAX INTELLIGENCE GROUP",
      logo: "src/assets/partners/STRAX.jpg", // You'll need to add these logos to your public folder
    },
    {
      name: "WEYTEC",
      logo: "/src/assets/partners/WEYTEC.jpg",
    },
    {
      name: "International New INTE Technical Est",
      logo: "/partners/inte-logo.png",
    },
    {
      name: "Jakob Rope Systems",
      logo: "/partners/jakob-logo.png",
    },
    {
      name: "Arktis",
      logo: "/partners/arktis-logo.png",
    },
    {
      name: "HAVERKAMP",
      logo: "/partners/haverkamp-logo.png",
    },
    {
      name: "ARMORCORE",
      logo: "/partners/armorcore-logo.png",
    },
    {
      name: "Golden Element",
      logo: "/partners/golden-element-logo.png",
    },
    {
      name: "RBH ACCESS",
      logo: "/partners/rbh-logo.png",
    },
    {
      name: "Albedo",
      logo: "/partners/albedo-logo.png",
    },
    {
      name: "Awiros",
      logo: "/partners/awiros-logo.png",
    },
    {
      name: "Wallmax",
      logo: "/partners/wallmax-logo.png",
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-header">
          <h2 className="section-title text-center">Our Network of Partners and Suppliers</h2>
          <p className="section-description text-center">
            Trusted partnerships that drive innovation and excellence in every project
          </p>
        </div>

        <div className="partners-scroll-container">
          <div className="partners-scroll-track">
            {/* First set of partners */}
            <div className="partners-row">
              {partners.map((partner, index) => (
                <div key={`partner-1-${index}`} className="partner-card">
                  <div className="partner-logo-container">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="partner-logo"
                      onError={(e) => {
                        // Fallback to a placeholder or hide image
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="partner-name">{partner.name}</div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="partners-row">
              {partners.map((partner, index) => (
                <div key={`partner-2-${index}`} className="partner-card">
                  <div className="partner-logo-container">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="partner-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="partner-name">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          overflow: hidden;
        }

        .partners-header {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .section-description {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .partners-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .partners-scroll-track {
          display: flex;
          animation: scroll-right 60s linear infinite;
        }

        .partners-row {
          display: flex;
          flex-shrink: 0;
          gap: 40px;
          padding-right: 40px;
        }

        .partner-card {
          min-width: 280px;
          padding: 30px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .partner-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .partner-logo-container {
          width: 120px;
          height: 80px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: 12px;
          padding: 15px;
        }

        .partner-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: brightness(0.8);
          transition: filter 0.3s ease;
        }

        .partner-card:hover .partner-logo {
          filter: brightness(1);
        }

        .partner-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
          line-height: 1.4;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .partners-scroll-container:hover .partners-scroll-track {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .partner-card {
            min-width: 240px;
            padding: 25px 15px;
          }
          
          .partners-row {
            gap: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;