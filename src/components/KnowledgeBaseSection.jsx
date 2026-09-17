import React, { useState } from 'react';
import { knowledgeData } from '../data/knowledgeData';
import { Dna, Activity, Heart, Sparkles, Brain, Stethoscope, Eye, CheckCircle, ShieldCheck } from 'lucide-react';

export default function KnowledgeBaseSection() {
  const [activeTab, setActiveTab] = useState('genetics'); // 'genetics', 'traits', 'health', 'intervention'

  return (
    <section id="knowledge-base" className="section-peace" style={{ backgroundColor: 'white' }}>
      <div className="container-peace">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span className="peace-badge peace-badge-sky" style={{ marginBottom: '14px' }}>
            <Dna size={14} className="text-sky-600" />
            Medical & Scientific Foundations
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            {knowledgeData.overview.title}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {knowledgeData.overview.definition}
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => setActiveTab('genetics')}
            className={`peace-tab ${activeTab === 'genetics' ? 'active' : ''}`}
          >
            Genetic Subtypes
          </button>
          <button
            onClick={() => setActiveTab('traits')}
            className={`peace-tab ${activeTab === 'traits' ? 'active' : ''}`}
          >
            Physical & Cognitive Traits
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`peace-tab ${activeTab === 'health' ? 'active' : ''}`}
          >
            Lifelong Health & Wellness
          </button>
          <button
            onClick={() => setActiveTab('intervention')}
            className={`peace-tab ${activeTab === 'intervention' ? 'active' : ''}`}
          >
            Early Intervention Pillars
          </button>
        </div>

        {/* Tab 1: Genetic Types */}
        {activeTab === 'genetics' && (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginBottom: '32px'
              }}
            >
              {knowledgeData.geneticTypes.map((type) => (
                <div
                  key={type.id}
                  className="peace-card"
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: '4px solid var(--sky-500)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span className="peace-badge peace-badge-sky">{type.prevalence}</span>
                      <Dna size={18} className="text-sky-500" />
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                      {type.name}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
                      {type.description}
                    </p>
                  </div>

                  <div
                    style={{
                      background: 'var(--sky-50)',
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.86rem',
                      color: 'var(--sky-600)',
                      fontWeight: 600
                    }}
                  >
                    💡 Key Insight: {type.keyInsight}
                  </div>
                </div>
              ))}
            </div>

            {/* Fast Facts Banner */}
            <div
              className="glass-panel"
              style={{
                padding: '24px 30px',
                borderRadius: 'var(--radius-lg)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                background: 'var(--sage-50)',
                border: '1px solid var(--sage-100)'
              }}
            >
              {knowledgeData.overview.fastFacts.map((fact, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--sage-700)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {fact.label}
                  </div>
                  <div style={{ fontSize: '0.96rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Physical & Cognitive Traits */}
        {activeTab === 'traits' && (
          <div>
            {/* Physical Traits Grid */}
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={20} className="text-sage-600" />
              Physical Characteristics Explained Gently
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '40px'
              }}
            >
              {knowledgeData.physicalTraits.map((t, idx) => (
                <div
                  key={idx}
                  className="peace-card"
                  style={{ padding: '24px' }}
                >
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--sage-700)', marginBottom: '8px' }}>
                    {t.trait}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {t.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Cognitive Profile Matrix */}
            <div
              className="peace-card"
              style={{ padding: '32px', background: 'var(--color-canvas-subtle)' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Brain size={20} className="text-honey-500" />
                {knowledgeData.cognitiveProfile.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginBottom: '24px' }}>
                {knowledgeData.cognitiveProfile.summary}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Strengths */}
                <div style={{ background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-soft)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--sage-700)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={16} />
                    Cognitive Superpowers
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {knowledgeData.cognitiveProfile.strengths.map((s, idx) => (
                      <div key={idx}>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{s.title}: </strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{s.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Areas & Supports */}
                <div style={{ background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-soft)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--honey-600)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Heart size={16} />
                    Areas Requiring Loving Support
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {knowledgeData.cognitiveProfile.growthAreas.map((g, idx) => (
                      <div key={idx}>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{g.title}: </strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{g.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Health & Wellness */}
        {activeTab === 'health' && (
          <div>
            <div style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              Routine preventive pediatric screenings empower children with Down Syndrome to lead energetic, joyful, and healthy lives.
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                gap: '20px'
              }}
            >
              {knowledgeData.healthGuidelines.map((item, idx) => (
                <div
                  key={idx}
                  className="peace-card"
                  style={{
                    padding: '24px',
                    borderLeft: '4px solid var(--sage-500)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.14rem', color: 'var(--text-primary)' }}>
                      {item.system}
                    </h4>
                    <Stethoscope size={18} className="text-sage-500" />
                  </div>

                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--sage-700)',
                      background: 'var(--sage-100)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: '12px'
                    }}
                  >
                    Recommended: {item.screening}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Early Intervention Pillars */}
        {activeTab === 'intervention' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {knowledgeData.earlyInterventionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="peace-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="peace-badge peace-badge-sage" style={{ marginBottom: '14px' }}>
                    {pillar.focus}
                  </span>

                  <h3 style={{ fontSize: '1.24rem', marginBottom: '10px' }}>
                    {pillar.name}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {pillar.description}
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--honey-50)',
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--honey-100)',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <strong style={{ color: 'var(--honey-600)' }}>Maternal Integration: </strong>
                  {pillar.maternalRole}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
