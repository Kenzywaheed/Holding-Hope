import React, { useState } from 'react';
import { activitiesData } from '../data/activitiesData';
import { Sparkles, Clock, Compass, CheckCircle2, Lightbulb, Filter } from 'lucide-react';

export default function ActivityGenerator() {
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedFocus, setSelectedFocus] = useState('all');

  const ageOptions = [
    { value: 'all', label: 'All Ages' },
    { value: 'infant', label: 'Infant (0-1y)' },
    { value: 'toddler', label: 'Toddler (1-3y)' },
    { value: 'preschool', label: 'Preschool (3-6y)' },
    { value: 'school', label: 'School Age (6+y)' }
  ];

  const focusOptions = [
    { value: 'all', label: 'All Focus Areas' },
    { value: 'speech', label: 'Speech & Language' },
    { value: 'motor', label: 'Motor & Strength' },
    { value: 'sensory', label: 'Sensory & Calming' },
    { value: 'independence', label: 'Daily Self-Help' }
  ];

  const filteredActivities = activitiesData.filter(act => {
    const ageMatch = selectedAge === 'all' || act.ageGroup === selectedAge;
    const focusMatch = selectedFocus === 'all' || act.focusArea === selectedFocus;
    return ageMatch && focusMatch;
  });

  return (
    <section id="activity-planner" className="section-peace">
      <div className="container-peace">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="peace-badge peace-badge-sage" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} className="text-sage-600" />
            Home Play & Learning
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '14px' }}>
            Mother's Interactive Activity Planner
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Simple, joyful, step-by-step activities designed for loving living room moments. Filter by your child's age and developmental focus.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          className="glass-panel"
          style={{
            padding: '20px 24px',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Age Group Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '6px' }}>
              Age Group:
            </span>
            {ageOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setSelectedAge(opt.value)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedAge === opt.value ? 'var(--sage-500)' : 'var(--border-soft)',
                  background: selectedAge === opt.value ? 'var(--sage-500)' : 'white',
                  color: selectedAge === opt.value ? 'white' : 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Focus Area Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '6px' }}>
              Focus:
            </span>
            {focusOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setSelectedFocus(opt.value)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedFocus === opt.value ? 'var(--honey-500)' : 'var(--border-soft)',
                  background: selectedFocus === opt.value ? 'var(--honey-500)' : 'white',
                  color: selectedFocus === opt.value ? 'white' : 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '24px'
          }}
        >
          {filteredActivities.map(act => (
            <div
              key={act.id}
              className="peace-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: act.focusArea === 'speech' ? '4px solid var(--sky-500)' :
                           act.focusArea === 'motor' ? '4px solid var(--sage-500)' :
                           act.focusArea === 'sensory' ? '4px solid var(--lavender-500)' :
                           '4px solid var(--honey-500)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className={`peace-badge ${
                    act.focusArea === 'speech' ? 'peace-badge-sky' :
                    act.focusArea === 'motor' ? 'peace-badge-sage' :
                    act.focusArea === 'sensory' ? 'peace-badge-lavender' :
                    'peace-badge-honey'
                  }`}>
                    {act.focusArea.toUpperCase()}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} />
                    <span>{act.duration}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.24rem', marginBottom: '10px' }}>
                  {act.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--sage-700)', fontWeight: 600, marginBottom: '16px' }}>
                  🎯 Benefit: {act.benefit}
                </p>

                {/* Materials Pill List */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    What You'll Need:
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {act.materials.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        style={{
                          fontSize: '0.8rem',
                          background: 'var(--color-canvas-subtle)',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Step-by-Step Play:
                  </div>
                  <ol style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {act.steps.map((step, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Gentle Mother's Tip */}
              <div
                style={{
                  background: 'var(--honey-50)',
                  border: '1px solid var(--honey-100)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start'
                }}
              >
                <Lightbulb size={18} className="text-honey-600" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                  <strong style={{ fontStyle: 'normal', color: 'var(--honey-600)' }}>Maternal Tip: </strong>
                  {act.motherTip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
