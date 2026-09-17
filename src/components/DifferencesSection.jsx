import React, { useState } from 'react';
import { differencesData } from '../data/differencesData';
import { Sparkles, Heart, Award, Compass, Users, Star, Quote } from 'lucide-react';

export default function DifferencesSection() {
  const [selectedSpotlight, setSelectedSpotlight] = useState(0);

  return (
    <section id="differences" className="section-peace" style={{ backgroundColor: 'var(--color-canvas-subtle)' }}>
      <div className="container-peace">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <span className="peace-badge peace-badge-lavender" style={{ marginBottom: '14px' }}>
            <Users size={14} className="text-lavender-500" />
            Human Individuality & Neurodiversity
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            {differencesData.header.title}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {differencesData.header.subtitle}
          </p>

          <div
            style={{
              marginTop: '16px',
              fontStyle: 'italic',
              color: 'var(--sage-700)',
              fontSize: '0.96rem'
            }}
          >
            "{differencesData.header.keyThought}"
          </div>
        </div>

        {/* 3 Diversity Dimensions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          {differencesData.diversityDimensions.map((dim, idx) => (
            <div
              key={idx}
              className="peace-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sage-600)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Dimension {idx + 1}
                </div>

                <h3 style={{ fontSize: '1.34rem', marginBottom: '8px' }}>
                  {dim.title}
                </h3>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '14px' }}>
                  {dim.tagline}
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {dim.summary}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {dim.variations.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      style={{
                        background: 'var(--color-canvas)',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3px' }}>
                        ✦ {v.archetype}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {v.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiring Real-World Trailblazers Spotlight */}
        <div
          className="peace-card"
          style={{
            padding: '36px',
            background: 'white',
            boxShadow: 'var(--shadow-medium)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="peace-badge peace-badge-honey" style={{ marginBottom: '10px' }}>
              <Star size={14} className="text-honey-600" />
              Living Proof of Boundless Potential
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
              Inspiring Spotlights: Beyond Any Boundary
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem' }}>
              Select a trailblazer to discover how individuals with Down Syndrome are reshaping athletics, arts, and business.
            </p>
          </div>

          {/* Selector Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}
          >
            {differencesData.realWorldSpotlights.map((spotlight, idx) => (
              <button
                key={spotlight.name}
                onClick={() => setSelectedSpotlight(idx)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedSpotlight === idx ? '2px solid var(--honey-500)' : '1px solid var(--border-soft)',
                  background: selectedSpotlight === idx ? 'var(--honey-50)' : 'transparent',
                  color: selectedSpotlight === idx ? 'var(--honey-600)' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {spotlight.name}
              </button>
            ))}
          </div>

          {/* Active Spotlight Card */}
          {differencesData.realWorldSpotlights[selectedSpotlight] && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '28px',
                alignItems: 'center',
                background: 'var(--color-canvas-subtle)',
                padding: '30px',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                <span className={`peace-badge peace-badge-${differencesData.realWorldSpotlights[selectedSpotlight].badgeColor}`} style={{ marginBottom: '14px' }}>
                  {differencesData.realWorldSpotlights[selectedSpotlight].category}
                </span>

                <h4 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {differencesData.realWorldSpotlights[selectedSpotlight].name}
                </h4>

                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--sage-700)', marginBottom: '16px' }}>
                  {differencesData.realWorldSpotlights[selectedSpotlight].achievement}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {differencesData.realWorldSpotlights[selectedSpotlight].story}
                </p>
              </div>

              <div
                style={{
                  background: 'white',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--honey-500)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <Quote size={28} className="text-honey-500" style={{ opacity: 0.6, marginBottom: '8px' }} />
                <div style={{ fontSize: '1.08rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  "{differencesData.realWorldSpotlights[selectedSpotlight].quote}"
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  — {differencesData.realWorldSpotlights[selectedSpotlight].name}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
