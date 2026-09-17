import React, { useState } from 'react';
import { Search, X, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';
import { knowledgeData } from '../data/knowledgeData';
import { teachingData } from '../data/teachingData';
import { activitiesData } from '../data/activitiesData';
import { differencesData } from '../data/differencesData';
import { mythsData } from '../data/mythsData';
import { mothersToolkitData } from '../data/mothersToolkitData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search Results aggregation
  const results = [];

  if (normalizedQuery.length > 1) {
    // Search Mama's Haven / Toolkit
    mothersToolkitData.signs.forEach(s => {
      if (s.word.toLowerCase().includes(normalizedQuery) || s.gesture.toLowerCase().includes(normalizedQuery) || s.category.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: "Baby Sign Language",
          title: `Sign: ${s.word}`,
          snippet: s.gesture,
          link: '#mothers-toolkit'
        });
      }
    });

    mothersToolkitData.feedingToolkit.forEach(f => {
      if (f.title.toLowerCase().includes(normalizedQuery) || f.subtitle.toLowerCase().includes(normalizedQuery) || f.whyImportant.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: "Oral-Motor & Feeding",
          title: f.title,
          snippet: f.subtitle,
          link: '#mothers-toolkit'
        });
      }
    });

    mothersToolkitData.specialistGuide.specialistQuestions.forEach(sq => {
      sq.questions.forEach(q => {
        if (q.toLowerCase().includes(normalizedQuery) || sq.specialist.toLowerCase().includes(normalizedQuery)) {
          results.push({
            type: `Doctor Prep: ${sq.specialist.split(' ')[0]}`,
            title: `Question: ${q.slice(0, 45)}...`,
            snippet: q,
            link: '#mothers-toolkit'
          });
        }
      });
    });

    mothersToolkitData.affirmations.forEach(af => {
      if (af.quote.toLowerCase().includes(normalizedQuery) || af.theme.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: "Mama's Affirmation",
          title: af.theme,
          snippet: af.quote,
          link: '#mothers-toolkit'
        });
      }
    });

    // Search Knowledge Base
    knowledgeData.geneticTypes.forEach(g => {
      if (g.name.toLowerCase().includes(normalizedQuery) || g.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: 'Medical & Genetics',
          title: g.name,
          snippet: g.description,
          link: '#knowledge-base'
        });
      }
    });

    knowledgeData.physicalTraits.forEach(p => {
      if (p.trait.toLowerCase().includes(normalizedQuery) || p.explanation.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: 'Physical Traits',
          title: p.trait,
          snippet: p.explanation,
          link: '#knowledge-base'
        });
      }
    });

    // Search Teaching Data
    teachingData.corePrinciples.forEach(cp => {
      if (cp.title.toLowerCase().includes(normalizedQuery) || cp.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: "Mother's Teaching Principle",
          title: cp.title,
          snippet: cp.description,
          link: '#mothers-guide'
        });
      }
    });

    teachingData.teachingDomains.forEach(td => {
      td.strategies.forEach(st => {
        if (st.name.toLowerCase().includes(normalizedQuery) || st.description.toLowerCase().includes(normalizedQuery)) {
          results.push({
            type: `Teaching: ${td.title}`,
            title: st.name,
            snippet: st.description,
            link: '#mothers-guide'
          });
        }
      });
    });

    // Search Activities
    activitiesData.forEach(act => {
      if (act.title.toLowerCase().includes(normalizedQuery) || act.benefit.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: 'Home Activity',
          title: act.title,
          snippet: `Benefit: ${act.benefit}`,
          link: '#activity-planner'
        });
      }
    });

    // Search Spotlights
    differencesData.realWorldSpotlights.forEach(sp => {
      if (sp.name.toLowerCase().includes(normalizedQuery) || sp.achievement.toLowerCase().includes(normalizedQuery) || sp.story.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: 'Inspirational Spotlight',
          title: sp.name,
          snippet: sp.achievement,
          link: '#differences'
        });
      }
    });

    // Search Myths
    mythsData.forEach(m => {
      if (m.myth.toLowerCase().includes(normalizedQuery) || m.fact.toLowerCase().includes(normalizedQuery)) {
        results.push({
          type: 'Myth vs Fact',
          title: m.myth,
          snippet: m.fact,
          link: '#myths'
        });
      }
    });
  }

  const handleSelect = (link) => {
    onClose();
    window.location.hash = link;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(41, 50, 65, 0.4)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 20px 20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid var(--border-soft)' }}>
          <Search size={22} className="text-sage-600" />
          <input
            type="text"
            placeholder="Search activities, maternal tips, genetics, traits, speech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              fontFamily: 'inherit',
              color: 'var(--text-primary)'
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '6px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div
          style={{
            overflowY: 'auto',
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingRight: '6px'
          }}
        >
          {query.trim().length <= 1 ? (
            <div style={{ padding: '30px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Sparkles size={28} className="text-sage-500" style={{ margin: '0 auto 10px', display: 'block', opacity: 0.6 }} />
              <p style={{ fontSize: '0.94rem' }}>
                Type to search across medical guides, mother-child activities, speech methods, and inspiring stories.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '14px', flexWrap: 'wrap' }}>
                {['Speech', 'Sign language', 'Hypotonia', 'Chris Nikic', 'Trisomy 21', 'Visual routine'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-soft)',
                      background: 'var(--color-canvas)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '30px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No results found for "{query}". Try another search term like "speech", "heart", or "activity".
            </div>
          ) : (
            results.map((res, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(res.link)}
                style={{
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-canvas)',
                  border: '1px solid var(--border-soft)',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--sage-500)';
                  e.currentTarget.style.backgroundColor = 'var(--sage-50)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                  e.currentTarget.style.backgroundColor = 'var(--color-canvas)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--sage-600)', textTransform: 'uppercase' }}>
                    {res.type}
                  </span>
                  <ArrowRight size={14} className="text-sage-500" />
                </div>
                <div style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {res.title}
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {res.snippet}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
