import React from 'react';
import { Compass, CheckCircle, Heart, Sparkles, AlertCircle } from 'lucide-react';

const milestones = [
  {
    skill: "Smiling Responsively",
    typicalRange: "1 to 3 months",
    downSyndromeRange: "1.5 to 4 months",
    note: "Children with Down syndrome develop strong, expressive social smiles early, delighting in eye-to-eye connection."
  },
  {
    skill: "Rolling Over (Front to Back)",
    typicalRange: "2 to 6 months",
    downSyndromeRange: "4 to 10 months",
    note: "Tummy time play and gentle side-lying practice strengthen oblique abdominal muscles for rolling."
  },
  {
    skill: "Sitting Without Support",
    typicalRange: "5 to 9 months",
    downSyndromeRange: "7 to 18 months",
    note: "Trunk hypotonia means sitting takes more practice. Floor play with a ring cushion provides stable support."
  },
  {
    skill: "Crawling on Hands & Knees",
    typicalRange: "6 to 11 months",
    downSyndromeRange: "9 to 24 months",
    note: "Some children army-crawl, belly-scoot, or bottom-shuffle first. Every form of independent mobility is a victory!"
  },
  {
    skill: "First Words & Functional Signs",
    typicalRange: "10 to 14 months",
    downSyndromeRange: "12 to 36 months",
    note: "Using baby sign language (Makaton/ASL) allows your child to express dozens of words months before speech muscles coordinate."
  },
  {
    skill: "Walking Independently",
    typicalRange: "9 to 17 months",
    downSyndromeRange: "14 to 40 months",
    note: "Wider stance and flexible ligaments provide stability. Barefoot exploration and push-walkers build steady steps."
  },
  {
    skill: "Self-Feeding with Spoon",
    typicalRange: "12 to 18 months",
    downSyndromeRange: "15 to 36 months",
    note: "Thick-handled, weighted ergonomic spoons and finger-feeding make mealtime fun and self-affirming."
  }
];

export default function MilestoneCompass() {
  return (
    <section id="milestones" className="section-peace" style={{ backgroundColor: 'white' }}>
      <div className="container-peace">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <span className="peace-badge peace-badge-sky" style={{ marginBottom: '14px' }}>
            <Compass size={14} className="text-sky-600" />
            Compassionate Perspective
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Developmental Milestone Compass
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Every child blooms on their own sacred calendar. Milestones are not race tracks or deadlines—they are gentle signposts celebrating your child's unique journey.
          </p>
        </div>

        {/* Milestone Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="peace-card"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '4px solid var(--sky-500)'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                  {m.skill}
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                    gap: '10px',
                    marginBottom: '16px',
                    background: 'var(--color-canvas-subtle)',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      General Chart
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {m.typicalRange}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--sky-600)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Down Syndrome
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sky-600)' }}>
                      {m.downSyndromeRange}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {m.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gentle Maternal Reassurance Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 30px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--sage-50)',
            border: '1px solid var(--sage-200)',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            maxWidth: '850px',
            margin: '0 auto'
          }}
        >
          <Heart size={32} className="text-sage-600" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '1.06rem', fontWeight: 700, color: 'var(--sage-700)', marginBottom: '4px' }}>
              The Mother's Peace of Mind
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Whether a child walks at 18 months or 36 months, the joy and pride in their eyes when they look up at you is identical. What matters most is steady, happy progress and love.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
