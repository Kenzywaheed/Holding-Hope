import React, { useState } from 'react';
import { teachingData } from '../data/teachingData';
import { Heart, Sparkles, HeartHandshake, Eye, Clock, Music, CheckCircle, BookOpen, Quote, ChevronRight, Share2, AlertCircle } from 'lucide-react';

export default function MothersGuideSection() {
  const [activeTab, setActiveTab] = useState('domains'); // 'principles', 'domains', 'stories'
  const [selectedDomain, setSelectedDomain] = useState('speech');
  const [triedMethods, setTriedMethods] = useState({});
  const [copiedMethod, setCopiedMethod] = useState(null);

  const toggleTried = (name) => {
    setTriedMethods(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleShare = (name, domainTitle) => {
    const shareText = `Holding Hope Guide: ${name} (${domainTitle})`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText} - Explore more at http://localhost:5173/#mothers-guide`);
      setCopiedMethod(name);
      setTimeout(() => setCopiedMethod(null), 2500);
    }
  };

  const getPrincipleIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={22} className="text-honey-500" />;
      case 'HeartHandshake': return <HeartHandshake size={22} className="text-sage-500" />;
      case 'Eye': return <Eye size={22} className="text-sky-500" />;
      case 'Clock': return <Clock size={22} className="text-lavender-500" />;
      case 'Music': return <Music size={22} className="text-honey-500" />;
      default: return <Sparkles size={22} />;
    }
  };

  const currentDomainData = teachingData.teachingDomains.find(d => d.id === selectedDomain);

  return (
    <section id="mothers-guide" className="section-peace" style={{ backgroundColor: 'var(--color-canvas-subtle)', paddingTop: '64px', paddingBottom: '70px' }}>
      <div className="container-peace">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 30px' }}>
          <span
            className="peace-badge peace-badge-honey"
            style={{
              marginBottom: '14px',
              color: '#b85333',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            <Heart size={14} style={{ color: '#b85333' }} aria-hidden="true" />
            A MOTHER'S GUIDING HEART
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              marginBottom: '12px',
              lineHeight: 1.25,
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}
          >
            A Mother's Heart,<br />
            A Child's Bloom
          </h2>

          {/* Subtle Visual Accent */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              margin: '0 auto 16px',
              opacity: 0.85
            }}
            aria-hidden="true"
          >
            <span style={{ width: '28px', height: '1.5px', backgroundColor: 'var(--honey-500)', borderRadius: '2px' }} />
            <HeartHandshake size={18} style={{ color: 'var(--honey-600)' }} />
            <span style={{ width: '28px', height: '1.5px', backgroundColor: 'var(--honey-500)', borderRadius: '2px' }} />
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
              maxWidth: '680px',
              margin: '0 auto 20px'
            }}
          >
            {teachingData.header.subtitle}
          </p>

          {/* Inspirational Quote Box */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '18px 26px',
              borderRadius: '16px',
              fontStyle: 'italic',
              color: '#243833',
              fontSize: '1.02rem',
              lineHeight: 1.68,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              border: '1px solid rgba(82, 121, 111, 0.14)',
              borderLeft: '5px solid var(--sage-300)',
              boxShadow: '0 4px 16px rgba(41, 50, 65, 0.04)',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            <Quote size={22} style={{ color: 'var(--sage-400)', flexShrink: 0 }} aria-hidden="true" />
            <blockquote style={{ margin: 0, padding: 0 }}>
              "{teachingData.header.quote}"
            </blockquote>
          </div>
        </div>

        {/* Small Navigation Label */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <span
            style={{
              fontSize: '0.84rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--sage-700)'
            }}
          >
            Explore the Journey:
          </span>
        </div>

        {/* Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Explore the Journey"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          <button
            role="tab"
            aria-selected={activeTab === 'domains'}
            onClick={() => setActiveTab('domains')}
            className={`peace-tab ${activeTab === 'domains' ? 'active' : ''}`}
          >
            Teaching Domains & Action Steps
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'principles'}
            onClick={() => setActiveTab('principles')}
            className={`peace-tab ${activeTab === 'principles' ? 'active' : ''}`}
          >
            Core Maternal Principles
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'stories'}
            onClick={() => setActiveTab('stories')}
            className={`peace-tab ${activeTab === 'stories' ? 'active' : ''}`}
          >
            Mother's Reflection Journal
          </button>
        </div>

        {/* Tab 1: Teaching Domains */}
        {activeTab === 'domains' && (
          <div>
            {/* Intro paragraph & Caregiver Note */}
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 24px' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '6px' }}>
                Every child grows at their own pace. Here are gentle, practical methods you can try at home — no pressure, no comparison. Choose a domain to begin.
              </p>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Written from a mother's perspective, but these methods work for any caregiver.
              </p>
            </div>

            {/* Domain Sub-tabs with Strong Active State & Keyboard Nav */}
            <div
              role="tablist"
              aria-label="Developmental Domains"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '32px',
                flexWrap: 'wrap'
              }}
            >
              {teachingData.teachingDomains.map((domain, index) => {
                const isActive = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    role="tab"
                    id={`domain-tab-${domain.id}`}
                    aria-selected={isActive}
                    aria-controls={`domain-panel-${domain.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setSelectedDomain(domain.id)}
                    onKeyDown={(e) => {
                      const domains = teachingData.teachingDomains;
                      if (e.key === 'ArrowRight') {
                        const next = domains[(index + 1) % domains.length].id;
                        setSelectedDomain(next);
                        document.getElementById(`domain-tab-${next}`)?.focus();
                      } else if (e.key === 'ArrowLeft') {
                        const prev = domains[(index - 1 + domains.length) % domains.length].id;
                        setSelectedDomain(prev);
                        document.getElementById(`domain-tab-${prev}`)?.focus();
                      }
                    }}
                    style={{
                      padding: '10px 22px',
                      borderRadius: 'var(--radius-full)',
                      border: isActive ? '1px solid var(--sage-600)' : '1px solid rgba(82, 121, 111, 0.22)',
                      background: isActive ? 'var(--sage-600)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--text-primary)',
                      fontWeight: isActive ? 700 : 600,
                      cursor: 'pointer',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'var(--transition-smooth)',
                      boxShadow: isActive ? '0 4px 14px rgba(65, 97, 89, 0.22)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <span>{domain.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Current Domain Content */}
            {currentDomainData && (
              <div
                id={`domain-panel-${currentDomainData.id}`}
                role="tabpanel"
                aria-labelledby={`domain-tab-${currentDomainData.id}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                  gap: '24px',
                  alignItems: 'stretch'
                }}
              >
                {currentDomainData.strategies.map((strategy, idx) => (
                  <div
                    key={strategy.name}
                    className="peace-card"
                    style={{
                      padding: '26px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      background: '#ffffff',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      boxShadow: 'var(--shadow-soft)'
                    }}
                  >
                    <div>
                      {/* Top Row: Method Pill + Age Range Tag */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                        <span
                          className="peace-badge peace-badge-sage"
                          style={{
                            fontWeight: 700,
                            color: '#223832',
                            background: 'var(--sage-100)'
                          }}
                        >
                          Method {idx + 1}
                        </span>
                        {strategy.ageRange && (
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              color: '#b85333',
                              background: 'var(--honey-100)',
                              padding: '3px 10px',
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid rgba(231, 111, 81, 0.2)'
                            }}
                          >
                            {strategy.ageRange}
                          </span>
                        )}
                      </div>

                      {/* Subtitle placed directly under METHOD pill as small italic tag */}
                      <div style={{ fontSize: '0.82rem', color: '#536479', fontStyle: 'italic', fontWeight: 500, marginBottom: '12px' }}>
                        {currentDomainData.focus}
                      </div>

                      {/* Method Headline H3 */}
                      <h3 style={{ fontSize: '1.24rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)', lineHeight: 1.35 }}>
                        {strategy.name}
                      </h3>

                      {/* Why it works line */}
                      {strategy.whyItWorks && (
                        <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--sage-700)', fontWeight: 600, marginBottom: '12px', lineHeight: 1.5 }}>
                          {strategy.whyItWorks}
                        </p>
                      )}

                      {/* Description */}
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '16px' }}>
                        {strategy.description}
                      </p>

                      {/* Safety Note if present */}
                      {strategy.safetyNote && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            background: '#fff9f0',
                            border: '1px solid rgba(244, 162, 97, 0.3)',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: '16px',
                            fontSize: '0.82rem',
                            color: '#9c4221',
                            fontWeight: 600
                          }}
                        >
                          <AlertCircle size={15} style={{ color: '#9c4221', flexShrink: 0 }} aria-hidden="true" />
                          <span>{strategy.safetyNote}</span>
                        </div>
                      )}

                      {/* Try This at Home Box (Warmer tint, larger checkmark, bold H4) */}
                      <div
                        style={{
                          background: '#f2f7f4',
                          borderRadius: 'var(--radius-md)',
                          padding: '16px 18px',
                          border: '1px solid rgba(82, 121, 111, 0.22)',
                          marginBottom: '16px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <CheckCircle size={18} style={{ color: 'var(--sage-600)', flexShrink: 0 }} aria-hidden="true" />
                          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--sage-800)', margin: 0 }}>
                            Try This at Home:
                          </h4>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {strategy.actionSteps.map((step, sIdx) => (
                            <li key={sIdx} style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--sage-600)', fontWeight: 700 }} aria-hidden="true">•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Action Row: Save/Mark as tried & Share */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(82, 121, 111, 0.1)',
                        marginTop: 'auto'
                      }}
                    >
                      <button
                        onClick={() => toggleTried(strategy.name)}
                        className="btn-peaceful btn-peaceful-pill"
                        style={{
                          padding: '5px 12px',
                          fontSize: '0.8rem',
                          background: triedMethods[strategy.name] ? 'var(--sage-100)' : 'transparent',
                          border: '1px solid var(--border-soft)',
                          color: triedMethods[strategy.name] ? 'var(--sage-700)' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        <Heart size={13} fill={triedMethods[strategy.name] ? 'var(--sage-600)' : 'none'} aria-hidden="true" />
                        <span>{triedMethods[strategy.name] ? 'Tried with Love' : 'Mark as Tried'}</span>
                      </button>

                      <button
                        onClick={() => handleShare(strategy.name, currentDomainData.title)}
                        className="btn-peaceful btn-peaceful-pill"
                        style={{
                          padding: '5px 10px',
                          fontSize: '0.8rem',
                          background: 'transparent',
                          border: '1px solid var(--border-soft)',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          cursor: 'pointer'
                        }}
                        title={`Share ${strategy.name}`}
                        aria-label={`Share ${strategy.name}`}
                      >
                        <Share2 size={13} aria-hidden="true" />
                        <span>{copiedMethod === strategy.name ? 'Copied!' : 'Share'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* A7: Gentle Shared Note at Bottom */}
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(82, 121, 111, 0.18)',
                  color: '#3d4d5c',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--honey-500)', flexShrink: 0 }} aria-hidden="true" />
                <span>Skip today if your child is sick, teething, or overtired — try again tomorrow.</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Core Maternal Principles */}
        {activeTab === 'principles' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {teachingData.corePrinciples.map((item) => (
              <div
                key={item.number}
                className="peace-card"
                style={{
                  padding: '30px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '20px',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(82, 121, 111, 0.08)',
                    fontFamily: 'Quicksand'
                  }}
                >
                  {item.number}
                </div>

                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--sage-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {getPrincipleIcon(item.icon)}
                </div>

                <h3 style={{ fontSize: '1.24rem', marginBottom: '12px' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.68 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Mother's Reflection Journal */}
        {activeTab === 'stories' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '28px'
            }}
          >
            {teachingData.mothersJournal.map((entry) => (
              <div
                key={entry.title}
                className="peace-card"
                style={{
                  padding: '32px',
                  background: 'white',
                  borderTop: '4px solid var(--sage-500)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="peace-badge peace-badge-lavender" style={{ marginBottom: '14px' }}>
                    Heart to Heart
                  </span>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                    {entry.title}
                  </h3>

                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px' }}>
                    {entry.author}
                  </div>

                  <div
                    style={{
                      fontStyle: 'italic',
                      color: 'var(--sage-700)',
                      fontSize: '0.96rem',
                      background: 'var(--sage-50)',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '18px',
                      lineHeight: 1.6
                    }}
                  >
                    "{entry.quote}"
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {entry.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
