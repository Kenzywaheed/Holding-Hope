import React, { useState } from 'react';
import { mythsData } from '../data/mythsData';
import { HelpCircle, CheckCircle, RotateCw, Sparkles, Heart } from 'lucide-react';

export default function MythVsFact() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="myths" className="section-peace" style={{ backgroundColor: 'white' }}>
      <div className="container-peace">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="peace-badge peace-badge-sage" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} className="text-sage-600" />
            Clarity & Truth
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Myths vs. Evidence-Based Facts
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Dispelling societal stereotypes with science, empathy, and truth. Tap any card to flip between the widespread misconception and the reality.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '24px'
          }}
        >
          {mythsData.map(item => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className="peace-card"
                style={{
                  minHeight: '260px',
                  padding: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'var(--transition-smooth)',
                  transform: isFlipped ? 'scale(1.01)' : 'scale(1)',
                  background: isFlipped ? 'var(--sage-50)' : 'white',
                  borderColor: isFlipped ? 'var(--sage-300)' : 'var(--border-soft)'
                }}
                title="Click to flip card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className={`peace-badge ${isFlipped ? 'peace-badge-sage' : 'peace-badge-honey'}`}>
                      {isFlipped ? '✓ The Truth' : '✗ Common Myth'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <RotateCw size={13} />
                      <span>Flip</span>
                    </div>
                  </div>

                  {!isFlipped ? (
                    <div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <HelpCircle size={22} className="text-honey-600" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                          "{item.myth}"
                        </h3>
                      </div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                        Category: {item.category}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <CheckCircle size={22} className="text-sage-600" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <h3 style={{ fontSize: '1.14rem', color: 'var(--sage-700)', lineHeight: 1.4 }}>
                          Medical & Human Reality
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                        {item.fact}
                      </p>
                    </div>
                  )}
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.05)', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                  {isFlipped ? 'Tap to view the misconception' : 'Tap to read the factual reality →'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
