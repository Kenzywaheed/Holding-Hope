import React from 'react';
import { Heart, Sparkles, Sun } from 'lucide-react';

export default function Hero3DSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background soft glow orbs */}
      <div className="bg-ambient-orb-1" />
      <div className="bg-ambient-orb-2" />

      <div className="container-peace">
        <div className="hero-grid-container">
          {/* Left Column: Maternal Inspiration & Core Introduction */}
          <div className="hero-left-column">
            {/* Soft badge */}
            <div style={{ marginBottom: '18px' }}>
              <span className="peace-badge peace-badge-sage animate-breath">
                <Sun size={14} className="text-honey-500" />
                A Sanctuary of Hope & Understanding
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                color: 'var(--text-primary)',
                marginBottom: '18px',
                lineHeight: 1.18
              }}
            >
              Embraced with Love, <br />
              <span style={{ color: 'var(--sage-500)' }}>Guided by Grace.</span>
            </h1>

            {/* Peaceful subtext */}
            <p
              style={{
                fontSize: '1.14rem',
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                maxWidth: '540px',
                lineHeight: 1.7
              }}
            >
              Every child with Down Syndrome is a gift—a unique light of joy, empathy, and boundless potential. Whether you are just beginning this journey or walking it with experience, know that you are not alone. Discover how mothers nurture, teach, and celebrate every beautiful step of this path, together.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-cta-buttons"
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '36px'
              }}
            >
              <a href="#mothers-guide" className="btn-peaceful btn-peaceful-primary">
                <Heart size={18} />
                <span>Mother's Teaching Journey</span>
              </a>

              <a href="#knowledge-base" className="btn-peaceful btn-peaceful-secondary">
                <Sparkles size={18} />
                <span>Explore Medical Facts</span>
              </a>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div
              className="hero-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                gap: '12px',
                maxWidth: '520px'
              }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 16px',
                  border: '1px solid var(--border-soft)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--sage-600)', fontFamily: 'Quicksand' }}>
                  47
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  Chromosomes
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Trisomy 21 = extra chr 21
                </div>
              </div>

              <div
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 16px',
                  border: '1px solid var(--border-soft)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--sky-600)', fontFamily: 'Quicksand' }}>
                  1 in 1,000
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  Global Births
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  WHO estimate
                </div>
              </div>

              <div
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 16px',
                  border: '1px solid var(--border-soft)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--honey-600)', fontFamily: 'Quicksand' }}>
                  60+ Years
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  Life Expectancy
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Up from 25 yrs in 1983
                </div>
              </div>
            </div>

            {/* Source Citation for Trust and Evidence-Based Transparency */}
            <div
              style={{
                marginTop: '10px',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                maxWidth: '520px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Sources: WHO, CDC, US Congressional Records (2025)</span>
            </div>
          </div>

          {/* Right Column: Clean Mother & Child Artwork (mother.png) */}
          <div
            className="hero-image-column"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            {/* Soft Ambient Halo Background Glow */}
            <div className="hero-halo-glow" />

            {/* Maximized mother.png Artwork */}
            <img
              src="/mother.png"
              alt="Mother lovingly holding her child with Down Syndrome"
              className="animate-float hero-mother-artwork"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid-container {
          display: grid;
          grid-template-columns: 1fr 1.28fr;
          align-items: center;
          gap: clamp(32px, 4vw, 56px);
        }
        .hero-mother-artwork {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 960px;
          max-height: 860px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 26px 52px rgba(82, 121, 111, 0.25));
          transition: var(--transition-smooth);
          transform: scale(1.08);
        }
        .hero-halo-glow {
          position: absolute;
          width: clamp(400px, 58vw, 840px);
          height: clamp(400px, 58vw, 840px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 240, 236, 0.96) 0%, rgba(254, 245, 220, 0.58) 55%, rgba(255, 255, 255, 0) 72%);
          filter: blur(52px);
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 1023px) {
          .hero-grid-container {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-left-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-cta-buttons {
            justify-content: center;
          }
          .hero-stats-grid {
            margin: 0 auto;
          }
          .hero-mother-artwork {
            max-width: min(100%, 720px) !important;
            max-height: 720px !important;
            margin: 0 auto;
            transform: scale(1.04) !important;
          }
        }
        @media (max-width: 640px) {
          .hero-mother-artwork {
            max-width: min(100%, 580px) !important;
            max-height: 600px !important;
            margin: 0 auto;
            transform: scale(1.03) !important;
          }
        }
        @media (max-width: 420px) {
          .hero-mother-artwork {
            max-width: 100% !important;
            max-height: 520px !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
    </section>
  );
}
