import React from 'react';
import { Heart, Sun, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#25332f',
        color: '#e5efe9',
        padding: '70px 0 35px',
        position: 'relative'
      }}
    >
      <div className="container-peace">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="Holding Hope Logo"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                  filter: 'brightness(1.1) drop-shadow(0 2px 6px rgba(0,0,0,0.2))'
                }}
              />
              <span style={{ fontFamily: 'Quicksand', fontWeight: 700, fontSize: '1.4rem', color: '#ffffff' }}>
                Holding Hope
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#a3c7b2', lineHeight: 1.7, marginBottom: '20px' }}>
              A peaceful sanctuary dedicated to celebrating children with Down Syndrome, empowering mothers with practical teaching wisdom, and illuminating the boundless potential of every soul.
            </p>
            <div style={{ fontSize: '0.86rem', color: '#cbe0d4', fontStyle: 'italic' }}>
              "Extra chromosome, extraordinary love."
            </div>
          </div>

          {/* Quick Jump Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '18px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#hero" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Mother & Child Sanctuary</a></li>
              <li><a href="#mothers-guide" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Mother's Teaching Journey</a></li>
              <li><a href="#activity-planner" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Home Activity Planner</a></li>
              <li><a href="#knowledge-base" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Medical & Genetics Guide</a></li>
              <li><a href="#differences" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Individual Differences</a></li>
              <li><a href="#routine-builder" style={{ color: '#cbe0d4', textDecoration: 'none' }}>Visual Daily Schedule</a></li>
            </ul>
          </div>

          {/* Medical Disclaimer & Compassionate Note */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '18px' }}>
              Compassionate Note & Disclaimer
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#a3c7b2', lineHeight: 1.6, marginBottom: '14px' }}>
              This platform is created with deep love for educational empowerment and community support. It is designed to complement—not replace—professional medical, pediatric, and therapeutic counsel. Always consult your healthcare specialists for individualized medical care.
            </p>
            <div style={{ fontSize: '0.84rem', color: '#f4a261', fontWeight: 600 }}>
              World Down Syndrome Day is celebrated globally on March 21 (3/21).
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(163, 199, 178, 0.2)',
            paddingTop: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#a3c7b2'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with peaceful intention, empathy & love</span>

          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
