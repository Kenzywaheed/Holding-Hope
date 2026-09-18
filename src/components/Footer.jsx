import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigatePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId, sectionId) => {
    if (onNavigatePage) {
      onNavigatePage(pageId, sectionId);
    } else {
      window.location.hash = sectionId;
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#25332f',
        color: '#e5efe9',
        padding: '60px 0 35px',
        position: 'relative'
      }}
    >
      <div className="container-peace">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '44px'
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

          {/* Quick Jump Links by Page */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '16px' }}>
              5-Step Learning Journey
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li>
                <button
                  onClick={() => handleNav(1, 'hero')}
                  style={{ background: 'none', border: 'none', color: '#cbe0d4', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit' }}
                >
                  Step 1: Sanctuary Welcome & Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav(2, 'mothers-guide')}
                  style={{ background: 'none', border: 'none', color: '#cbe0d4', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit' }}
                >
                  Step 2: Mother's Teaching Journey & Activities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav(3, 'mothers-toolkit')}
                  style={{ background: 'none', border: 'none', color: '#cbe0d4', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit' }}
                >
                  Step 3: Mama's Haven, Signs & Daily Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav(4, 'knowledge-base')}
                  style={{ background: 'none', border: 'none', color: '#cbe0d4', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit' }}
                >
                  Step 4: Medical Knowledge & Myths vs Facts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav(5, 'resources')}
                  style={{ background: 'none', border: 'none', color: '#cbe0d4', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit' }}
                >
                  Step 5: Support Networks & Circles
                </button>
              </li>
            </ul>
          </div>

          {/* Medical Disclaimer & Compassionate Note */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '16px' }}>
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
