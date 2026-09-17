import React, { useState, useEffect, useRef } from 'react';
import { mothersToolkitData } from '../data/mothersToolkitData';
import {
  Heart, Sparkles, Volume2, CheckCircle2, Copy, Check, RefreshCw,
  Calendar, Stethoscope, MessageSquare, Baby, Smile, Star,
  Share2, AlertCircle, Info, ChevronLeft, ChevronRight, Wind, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MothersToolkitSection() {
  // Main Active Tab
  const [activeTab, setActiveTab] = useState('sanctuary'); // 'sanctuary', 'signs', 'feeding', 'specialist'

  // Tab 1: Sanctuary States
  const [affirmationIdx, setAffirmationIdx] = useState(0);
  const [copiedPermission, setCopiedPermission] = useState(null);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Inhale'); // Inhale, Hold, Exhale
  const [breathSeconds, setBreathSeconds] = useState(4);
  const breathTimerRef = useRef(null);

  // Tab 2: Sign Language States
  const [selectedSignCategory, setSelectedSignCategory] = useState('All');
  const [masteredSigns, setMasteredSigns] = useState(() => {
    try {
      const saved = localStorage.getItem('ds_mastered_signs');
      return saved ? JSON.parse(saved) : ['more', 'milk'];
    } catch {
      return ['more', 'milk'];
    }
  });
  const [speakingWord, setSpeakingWord] = useState(null);

  // Tab 4: Specialist States
  const [selectedAgeSchedule, setSelectedAgeSchedule] = useState(0);
  const [selectedSpecialistIdx, setSelectedSpecialistIdx] = useState(0);
  const [copiedQuestions, setCopiedQuestions] = useState(false);
  const [clinicNotes, setClinicNotes] = useState(() => {
    try {
      return localStorage.getItem('ds_mama_clinic_notes') || '';
    } catch {
      return '';
    }
  });
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  // --- Breathwork Timer Effect ---
  useEffect(() => {
    if (!isBreathing) {
      if (breathTimerRef.current) clearInterval(breathTimerRef.current);
      setBreathPhase('Inhale');
      setBreathSeconds(4);
      return;
    }

    let currentPhase = 'Inhale';
    let currentSeconds = 4;

    breathTimerRef.current = setInterval(() => {
      currentSeconds -= 1;
      if (currentSeconds <= 0) {
        if (currentPhase === 'Inhale') {
          currentPhase = 'Hold';
          currentSeconds = 4;
        } else if (currentPhase === 'Hold') {
          currentPhase = 'Exhale';
          currentSeconds = 4;
        } else {
          currentPhase = 'Inhale';
          currentSeconds = 4;
        }
      }
      setBreathPhase(currentPhase);
      setBreathSeconds(currentSeconds);
    }, 1000);

    return () => {
      if (breathTimerRef.current) clearInterval(breathTimerRef.current);
    };
  }, [isBreathing]);

  // Save Mastered Signs
  const toggleMasteredSign = (signId) => {
    setMasteredSigns(prev => {
      const exists = prev.includes(signId);
      const updated = exists ? prev.filter(id => id !== signId) : [...prev, signId];
      try {
        localStorage.setItem('ds_mastered_signs', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      if (!exists) {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#f4a261', '#52796f', '#e76f51', '#99c6ed']
        });
      }
      return updated;
    });
  };

  // Text-To-Speech for Signs
  const speakWord = (word, prompt) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingWord(word);
      const utterance = new SpeechSynthesisUtterance(prompt || word);
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      utterance.onend = () => setSpeakingWord(null);
      utterance.onerror = () => setSpeakingWord(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Navigate Affirmations
  const handlePrevAffirmation = () => {
    setAffirmationIdx((prev) => (prev - 1 + mothersToolkitData.affirmations.length) % mothersToolkitData.affirmations.length);
  };

  const handleNextAffirmation = () => {
    setAffirmationIdx((prev) => (prev + 1) % mothersToolkitData.affirmations.length);
  };

  // Copy Permission Slip
  const handleCopyPermission = (slip) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`✨ ${slip.title} ✨\n${slip.subtitle}\n"${slip.description}"\n— Holding Hope Mama's Sanctuary`);
      setCopiedPermission(slip.id);
      setTimeout(() => setCopiedPermission(null), 2000);
    }
  };

  // Copy Specialist Questions
  const handleCopyQuestions = (specialistName, questions) => {
    if (navigator.clipboard) {
      const text = `Questions for ${specialistName}:\n` + questions.map((q, i) => `${i + 1}. ${q}`).join('\n');
      navigator.clipboard.writeText(text);
      setCopiedQuestions(true);
      setTimeout(() => setCopiedQuestions(false), 2000);
    }
  };

  // Save Clinic Notes
  const handleSaveNotes = (val) => {
    setClinicNotes(val);
    try {
      localStorage.setItem('ds_mama_clinic_notes', val);
      setNoteSavedFeedback(true);
      setTimeout(() => setNoteSavedFeedback(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  // Filtered Signs
  const filteredSigns = selectedSignCategory === 'All'
    ? mothersToolkitData.signs
    : mothersToolkitData.signs.filter(s => s.category === selectedSignCategory);

  const signCategories = ['All', 'Everyday Needs', 'Safety & Feelings', 'Family & Love', 'Play & Connection'];

  const currentAffirmation = mothersToolkitData.affirmations[affirmationIdx];
  const currentSpecialist = mothersToolkitData.specialistGuide.specialistQuestions[selectedSpecialistIdx];
  const currentScreening = mothersToolkitData.specialistGuide.screeningSchedule[selectedAgeSchedule];

  return (
    <section
      id="mothers-toolkit"
      className="section-peace"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '70px',
        paddingBottom: '80px',
        borderTop: '1px solid var(--border-soft)',
        borderBottom: '1px solid var(--border-soft)'
      }}
    >
      <div className="container-peace">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
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
            MAMA'S HAVEN & PRACTICAL TOOLKIT
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              marginBottom: '14px',
              lineHeight: 1.25,
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}
          >
            Every Day, With Warmth & Confidence
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            Thoughtfully created for mothers navigating early communication, low muscle tone feeding, doctor visits, and the emotional load of caregiving.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Mother's Toolkit Tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <button
            role="tab"
            aria-selected={activeTab === 'sanctuary'}
            onClick={() => setActiveTab('sanctuary')}
            className={`peace-tab ${activeTab === 'sanctuary' ? 'active' : ''}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Wind size={16} />
            <span>Mama's Sanctuary</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'signs'}
            onClick={() => setActiveTab('signs')}
            className={`peace-tab ${activeTab === 'signs' ? 'active' : ''}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Baby size={16} />
            <span>First Signs & Words ({masteredSigns.length}/12)</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'feeding'}
            onClick={() => setActiveTab('feeding')}
            className={`peace-tab ${activeTab === 'feeding' ? 'active' : ''}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Smile size={16} />
            <span>Oral-Motor & Feeding</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'specialist'}
            onClick={() => setActiveTab('specialist')}
            className={`peace-tab ${activeTab === 'specialist' ? 'active' : ''}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Stethoscope size={16} />
            <span>Doctor Visit Prep</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: MAMA'S SANCTUARY (Breathwork, Affirmations & Permission Slips)
           ========================================================================= */}
        {activeTab === 'sanctuary' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Top Grid: Breathwork Orb on Left, Daily Affirmation Card on Right */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                gap: '28px',
                alignItems: 'stretch'
              }}
            >
              {/* Breathwork Orb */}
              <div
                className="peace-card"
                style={{
                  padding: '32px',
                  background: 'linear-gradient(145deg, #f9fdfa 0%, #ffffff 100%)',
                  border: '1px solid rgba(82, 121, 111, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="peace-badge peace-badge-sage" style={{ marginBottom: '12px' }}>
                    <Wind size={13} />
                    One Minute for Mama
                  </span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Calming Breathwork Orb
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 24px' }}>
                    When caregiving feels heavy, take 60 seconds to reset your nervous system. Inhale peace, release worry.
                  </p>
                </div>

                {/* Animated Visual Orb */}
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    margin: '12px auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: isBreathing
                        ? (breathPhase === 'Inhale'
                            ? 'radial-gradient(circle, rgba(163, 199, 178, 0.6) 0%, rgba(242, 247, 244, 0.2) 70%)'
                            : breathPhase === 'Hold'
                            ? 'radial-gradient(circle, rgba(244, 162, 97, 0.5) 0%, rgba(254, 235, 182, 0.2) 70%)'
                            : 'radial-gradient(circle, rgba(153, 198, 237, 0.5) 0%, rgba(227, 239, 249, 0.2) 70%)')
                        : 'radial-gradient(circle, rgba(163, 199, 178, 0.35) 0%, rgba(242, 247, 244, 0.1) 70%)',
                      transform: isBreathing
                        ? (breathPhase === 'Inhale' ? 'scale(1.28)' : breathPhase === 'Hold' ? 'scale(1.25)' : 'scale(0.88)')
                        : 'scale(1)',
                      transition: 'transform 3.8s ease-in-out, background 1s ease',
                      filter: 'blur(10px)'
                    }}
                  />

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '2px solid rgba(82, 121, 111, 0.25)',
                      boxShadow: '0 8px 24px rgba(82, 121, 111, 0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: isBreathing
                        ? (breathPhase === 'Inhale' ? 'scale(1.15)' : breathPhase === 'Hold' ? 'scale(1.12)' : 'scale(0.92)')
                        : 'scale(1)',
                      transition: 'transform 3.8s ease-in-out'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: breathPhase === 'Inhale' ? 'var(--sage-700)' : breathPhase === 'Hold' ? '#b85333' : 'var(--sky-600)',
                        fontFamily: 'Quicksand, sans-serif'
                      }}
                    >
                      {isBreathing ? breathPhase : 'Ready'}
                    </span>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {isBreathing ? `${breathSeconds}s` : '4-4-4 rhythm'}
                    </span>
                  </div>
                </div>

                {/* Breath Controls */}
                <button
                  onClick={() => setIsBreathing(!isBreathing)}
                  className="btn-peaceful btn-peaceful-primary"
                  style={{ width: '100%', maxWidth: '240px' }}
                >
                  <Wind size={16} />
                  <span>{isBreathing ? 'Pause Breathing' : 'Start 1-Minute Breath'}</span>
                </button>
              </div>

              {/* Daily Affirmation Card */}
              <div
                className="peace-card"
                style={{
                  padding: '32px',
                  background: 'linear-gradient(145deg, #fffdf8 0%, #ffffff 100%)',
                  border: '1px solid rgba(244, 162, 97, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="peace-badge peace-badge-honey">
                      <Sparkles size={13} />
                      {currentAffirmation.theme}
                    </span>
                  </div>

                  <div
                    style={{
                      background: 'rgba(254, 247, 220, 0.45)',
                      padding: '24px 22px',
                      borderRadius: 'var(--radius-md)',
                      borderLeft: '4px solid var(--honey-500)',
                      marginBottom: '20px'
                    }}
                  >
                    <blockquote
                      style={{
                        margin: 0,
                        fontSize: '1.18rem',
                        lineHeight: 1.65,
                        fontFamily: 'Quicksand, sans-serif',
                        fontWeight: 600,
                        color: '#2b2a27',
                        fontStyle: 'italic'
                      }}
                    >
                      "{currentAffirmation.quote}"
                    </blockquote>
                    <div style={{ marginTop: '12px', fontSize: '0.85rem', color: '#b85333', fontWeight: 700 }}>
                      — {currentAffirmation.author}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handlePrevAffirmation}
                    className="btn-peaceful btn-peaceful-secondary"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    aria-label="Previous affirmation"
                  >
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </button>

                  <button
                    onClick={handleNextAffirmation}
                    className="btn-peaceful btn-peaceful-secondary"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    aria-label="Next affirmation"
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Guilt-Free Permission Slips */}
            <div>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--sage-700)'
                  }}
                >
                  Maternal Permission Slips
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '4px', color: 'var(--text-primary)' }}>
                  Give Yourself Grace Without Apology
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '20px'
                }}
              >
                {mothersToolkitData.permissionSlips.map((slip) => (
                  <div
                    key={slip.id}
                    className="peace-card"
                    style={{
                      padding: '24px',
                      background: '#ffffff',
                      border: '1px solid var(--border-soft)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span
                          className={`peace-badge peace-badge-${slip.color}`}
                          style={{ fontSize: '0.76rem', padding: '4px 10px' }}
                        >
                          {slip.tag}
                        </span>
                        <ShieldCheck size={16} style={{ color: 'var(--sage-500)' }} />
                      </div>

                      <h4 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                        {slip.title}
                      </h4>
                      <div style={{ fontSize: '0.86rem', fontStyle: 'italic', color: 'var(--sage-700)', fontWeight: 600, marginBottom: '10px' }}>
                        "{slip.subtitle}"
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {slip.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyPermission(slip)}
                      className="btn-peaceful btn-peaceful-pill"
                      style={{
                        marginTop: '16px',
                        fontSize: '0.78rem',
                        padding: '6px 12px',
                        background: 'transparent',
                        border: '1px solid var(--border-soft)',
                        alignSelf: 'flex-start',
                        color: copiedPermission === slip.id ? 'var(--sage-700)' : 'var(--text-secondary)'
                      }}
                    >
                      {copiedPermission === slip.id ? <Check size={13} /> : <Share2 size={13} />}
                      <span>{copiedPermission === slip.id ? 'Copied Slip!' : 'Save / Share Slip'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: FIRST SIGNS & WORDS FLASHCARD DECK (Makaton / Baby Sign)
           ========================================================================= */}
        {activeTab === 'signs' && (
          <div>
            {/* Header & SLP Note */}
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 28px' }}>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '10px' }}>
                Babies and toddlers with Down Syndrome understand language months before their mouth muscles can vocalize words. Signs give them an instant voice, dramatically reducing frustration and tantrums.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--sage-50)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(82, 121, 111, 0.18)',
                  fontSize: '0.88rem',
                  color: 'var(--sage-800)',
                  fontWeight: 600
                }}
              >
                <Star size={15} style={{ color: 'var(--honey-500)' }} />
                <span>You've mastered {masteredSigns.length} of 12 signs together! Tap the star to celebrate.</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '32px',
                flexWrap: 'wrap'
              }}
            >
              {signCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedSignCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    border: selectedSignCategory === cat ? '1px solid var(--sage-600)' : '1px solid var(--border-soft)',
                    background: selectedSignCategory === cat ? 'var(--sage-600)' : '#ffffff',
                    color: selectedSignCategory === cat ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Signs Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                gap: '24px'
              }}
            >
              {filteredSigns.map((sign) => {
                const isMastered = masteredSigns.includes(sign.id);
                return (
                  <div
                    key={sign.id}
                    className="peace-card"
                    style={{
                      padding: '24px',
                      background: '#ffffff',
                      border: isMastered ? '2px solid rgba(82, 121, 111, 0.35)' : '1px solid var(--border-soft)',
                      boxShadow: isMastered ? '0 8px 24px rgba(82, 121, 111, 0.1)' : 'var(--shadow-soft)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '2rem', lineHeight: 1 }}>{sign.emoji}</span>
                          <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                              {sign.word}
                            </h3>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                              {sign.category}
                            </span>
                          </div>
                        </div>

                        {/* Mastered Star Toggle */}
                        <button
                          onClick={() => toggleMasteredSign(sign.id)}
                          style={{
                            background: isMastered ? 'var(--honey-100)' : 'var(--color-canvas)',
                            border: isMastered ? '1px solid rgba(244, 162, 97, 0.4)' : '1px solid var(--border-soft)',
                            color: isMastered ? '#b85333' : 'var(--text-muted)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            transition: 'var(--transition-smooth)'
                          }}
                          title={isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
                        >
                          <Star size={13} fill={isMastered ? '#b85333' : 'none'} />
                          <span>{isMastered ? 'Mastered!' : 'Mark Learned'}</span>
                        </button>
                      </div>

                      {/* Gesture Instructions Box */}
                      <div
                        style={{
                          background: 'var(--sage-50)',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '14px',
                          border: '1px solid rgba(82, 121, 111, 0.15)'
                        }}
                      >
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sage-800)', textTransform: 'uppercase', marginBottom: '4px' }}>
                          How to Sign:
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.55 }}>
                          {sign.gesture}
                        </p>
                      </div>

                      {/* Scenario */}
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                        <strong>When to try:</strong> {sign.scenario}
                      </p>

                      {/* Speech Therapist Tip */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          background: 'rgba(254, 247, 220, 0.5)',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.82rem',
                          color: '#824218',
                          lineHeight: 1.45,
                          marginBottom: '16px'
                        }}
                      >
                        <Info size={15} style={{ flexShrink: 0, marginTop: '2px', color: '#b85333' }} />
                        <div>
                          <strong>SLP Tip:</strong> {sign.slpTip}
                        </div>
                      </div>
                    </div>

                    {/* Pronounce & Practice Button */}
                    <button
                      onClick={() => speakWord(sign.word, sign.spokenPrompt)}
                      className="btn-peaceful btn-peaceful-pill"
                      style={{
                        width: '100%',
                        fontSize: '0.85rem',
                        padding: '8px 14px',
                        background: speakingWord === sign.word ? 'var(--sky-100)' : 'white',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Volume2 size={15} style={{ color: 'var(--sky-600)' }} />
                      <span>{speakingWord === sign.word ? 'Speaking...' : `Listen: "${sign.spokenPrompt}"`}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: ORAL-MOTOR & GENTLE FEEDING COMPANION
           ========================================================================= */}
        {activeTab === 'feeding' && (
          <div>
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px' }}>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Low muscle tone (hypotonia) gently affects jaw stability, lip closure, and tongue retraction. These pediatrician and speech-therapist backed strategies make mealtime a safe, joyous time of bonding.
              </p>
            </div>

            {/* Grid of Feeding Modules */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                gap: '28px'
              }}
            >
              {mothersToolkitData.feedingToolkit.map((item) => (
                <div
                  key={item.id}
                  className="peace-card"
                  style={{
                    padding: '28px',
                    background: '#ffffff',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Badge & Title */}
                    <span className={`peace-badge peace-badge-${item.color}`} style={{ marginBottom: '12px' }}>
                      {item.badge}
                    </span>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px' }}>
                      {item.subtitle}
                    </div>

                    {/* Why Important */}
                    <div
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '18px',
                        background: 'var(--color-canvas)',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid var(--sage-400)'
                      }}
                    >
                      {item.whyImportant}
                    </div>

                    {/* Action Steps */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--sage-800)', marginBottom: '10px' }}>
                        Gentle Practice Steps:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.actionSteps.map((step, sIdx) => (
                          <li key={sIdx} style={{ fontSize: '0.86rem', color: 'var(--text-primary)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--sage-600)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Therapist Quote Footer */}
                  <div
                    style={{
                      paddingTop: '14px',
                      borderTop: '1px solid var(--border-soft)',
                      fontSize: '0.84rem',
                      fontStyle: 'italic',
                      color: 'var(--sage-700)',
                      fontWeight: 600
                    }}
                  >
                    "{item.therapistQuote}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: PEDIATRIC SPECIALIST VISIT PREP & CLINIC NOTEPAD
           ========================================================================= */}
        {activeTab === 'specialist' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* Split View: Left is Recommended Screening Timetable, Right is Specialist Questions & Notes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                gap: '28px'
              }}
            >
              {/* Screening Timeline */}
              <div
                className="peace-card"
                style={{
                  padding: '28px',
                  background: '#ffffff',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Calendar size={18} style={{ color: 'var(--sky-600)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>
                    Essential Screening Timeline
                  </h3>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                  Based on American Academy of Pediatrics (AAP) and UK Down Syndrome Health Surveillance recommendations.
                </p>

                {/* Age selector pills */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {mothersToolkitData.specialistGuide.screeningSchedule.map((sch, idx) => (
                    <button
                      key={sch.age}
                      onClick={() => setSelectedAgeSchedule(idx)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        border: selectedAgeSchedule === idx ? '1px solid var(--sky-600)' : '1px solid var(--border-soft)',
                        background: selectedAgeSchedule === idx ? 'var(--sky-600)' : '#ffffff',
                        color: selectedAgeSchedule === idx ? '#ffffff' : 'var(--text-secondary)'
                      }}
                    >
                      {sch.age}
                    </button>
                  ))}
                </div>

                {/* Screening List for selected age */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {currentScreening.screenings.map((sc, scIdx) => (
                    <div
                      key={scIdx}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--sky-50)',
                        border: '1px solid rgba(91, 146, 196, 0.2)'
                      }}
                    >
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {sc.test}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {sc.reason}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Question Generator */}
              <div
                className="peace-card"
                style={{
                  padding: '28px',
                  background: '#ffffff',
                  border: '1px solid var(--border-soft)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MessageSquare size={18} style={{ color: 'var(--honey-600)' }} />
                      <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>
                        "Ask the Doctor" Questions
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopyQuestions(currentSpecialist.specialist, currentSpecialist.questions)}
                      className="btn-peaceful btn-peaceful-pill"
                      style={{
                        padding: '6px 12px',
                        fontSize: '0.78rem',
                        background: 'transparent',
                        border: '1px solid var(--border-soft)',
                        color: copiedQuestions ? 'var(--sage-700)' : 'var(--text-secondary)'
                      }}
                    >
                      {copiedQuestions ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedQuestions ? 'Copied All!' : 'Copy Questions'}</span>
                    </button>
                  </div>

                  {/* Specialist Selector */}
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {mothersToolkitData.specialistGuide.specialistQuestions.map((sp, idx) => (
                      <button
                        key={sp.specialist}
                        onClick={() => setSelectedSpecialistIdx(idx)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: selectedSpecialistIdx === idx ? '1px solid var(--honey-600)' : '1px solid var(--border-soft)',
                          background: selectedSpecialistIdx === idx ? 'var(--honey-100)' : '#ffffff',
                          color: selectedSpecialistIdx === idx ? '#b85333' : 'var(--text-secondary)'
                        }}
                      >
                        {sp.specialist.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                    Recommended questions for {currentSpecialist.specialist}:
                  </h4>

                  <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentSpecialist.questions.map((q, qIdx) => (
                      <li key={qIdx} style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        {q}
                      </li>
                    ))}
                  </ol>
                </div>

                <div style={{ marginTop: '20px', fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Tip: Copy these questions right into your Notes app or print them before heading to the clinic!
                </div>
              </div>
            </div>

            {/* Persistent Clinic Notepad */}
            <div
              className="peace-card"
              style={{
                padding: '24px 28px',
                background: '#faf9f6',
                border: '1px solid rgba(82, 121, 111, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    Mama's Pocket Clinic Notepad
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Auto-saved on your browser so you never forget doctor instructions or upcoming questions.
                  </span>
                </div>
                {noteSavedFeedback && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--sage-600)', fontWeight: 700 }}>
                    Saved securely!
                  </span>
                )}
              </div>

              <textarea
                value={clinicNotes}
                onChange={(e) => handleSaveNotes(e.target.value)}
                placeholder="Write notes here... (e.g. Ear check date, new dosage, OT homework ideas, questions to ask next Monday)"
                rows={4}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-soft)',
                  fontFamily: 'inherit',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  resize: 'vertical',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-primary)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
