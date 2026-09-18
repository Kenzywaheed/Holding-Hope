import React from 'react';
import { Heart, Sparkles, Sun, BookOpen, Users, Compass, ArrowRight, Smile } from 'lucide-react';

export default function Hero3DSection({ onNavigatePage }) {
  const handleNav = (pageId, sectionId) => {
    if (onNavigatePage) {
      onNavigatePage(pageId, sectionId);
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background soft glow orbs */}
      <div className="bg-ambient-orb-1" />
      <div className="bg-ambient-orb-2" />

      <div className="container-peace">
        <div className="hero-grid-container">
          {/* Main Column: Maternal Inspiration & Core Introduction */}
          <div className="hero-left-column">
            {/* Soft badge */}
            <div className="hero-badge-wrap">
              <span className="peace-badge peace-badge-sage animate-breath">
                <Sun size={14} className="text-honey-500" />
                A Sanctuary of Hope & Understanding
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Embraced with Love, <br />
              <span className="hero-headline-accent">Guided by Grace.</span>
            </h1>

            {/* Mobile-Only Prominent Hero Artwork: Instant visual warmth on phones */}
            <div className="hero-image-mobile" aria-hidden="true">
              <div className="hero-halo-glow-mobile" />
              <img
                src="/mother.png"
                alt="Mother lovingly holding her child with Down Syndrome"
                className="animate-float hero-mother-artwork-mobile"
              />
            </div>

            {/* Peaceful subtext - Shortened and comfortable to read */}
            <p className="hero-subtext">
              Every child with Down Syndrome is a gift—a unique light of joy and boundless potential. 
              Step by step, discover how mothers nurture, teach, and celebrate every milestone with gentle confidence.
            </p>

            {/* Action Buttons with Direct Page Navigation */}
            <div className="hero-cta-buttons">
              <button
                onClick={() => handleNav(2, 'mothers-guide')}
                className="btn-peaceful btn-peaceful-primary hero-btn"
              >
                <Heart size={18} />
                <span>Mother's Teaching Journey</span>
              </button>

              <button
                onClick={() => handleNav(4, 'knowledge-base')}
                className="btn-peaceful btn-peaceful-secondary hero-btn"
              >
                <Sparkles size={18} />
                <span>Explore Medical Facts</span>
              </button>
            </div>

            {/* Quick Stat Pill Highlights - Responsive 3-Column Row */}
            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <div className="hero-stat-num hero-stat-sage">
                  47
                </div>
                <div className="hero-stat-label">
                  Chromosomes
                </div>
                <div className="hero-stat-sub">
                  Trisomy 21 = chr 21
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-num hero-stat-sky">
                  1 in 1,000
                </div>
                <div className="hero-stat-label">
                  Global Births
                </div>
                <div className="hero-stat-sub">
                  WHO estimate
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-num hero-stat-honey">
                  60+ Years
                </div>
                <div className="hero-stat-label">
                  Life Expectancy
                </div>
                <div className="hero-stat-sub">
                  Up from 25 in 1983
                </div>
              </div>
            </div>

            {/* Source Citation */}
            <div className="hero-citation">
              <span>Sources: WHO, CDC, US Congressional Records (2025)</span>
            </div>
          </div>

          {/* Desktop Right Column: Clean Mother & Child Artwork */}
          <div className="hero-image-desktop">
            <div className="hero-halo-glow-desktop" />
            <img
              src="/mother.png"
              alt="Mother lovingly holding her child with Down Syndrome"
              className="animate-float hero-mother-artwork-desktop"
            />
          </div>
        </div>

        {/* Learning Journey Launchpad Cards: Comfortable Choices for the Mother */}
        <div className="hero-launchpad-section">
          <div className="hero-launchpad-header">
            <span className="peace-badge peace-badge-honey" style={{ marginBottom: '8px' }}>
              <Compass size={13} />
              YOUR COMFORTABLE LEARNING PATH
            </span>
            <h2 className="hero-launchpad-title">
              Where Would You Like to Start Today?
            </h2>
            <p className="hero-launchpad-desc">
              Choose a gentle step. Learn at your own pace without feeling rushed or overwhelmed.
            </p>
          </div>

          <div className="hero-launchpad-grid">
            {/* Card 1: Teach & Play */}
            <div 
              className="launchpad-card launchpad-card-teach"
              onClick={() => handleNav(2, 'mothers-guide')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(2, 'mothers-guide')}
            >
              <div className="launchpad-icon-wrap launchpad-icon-teach">
                <BookOpen size={24} />
              </div>
              <div className="launchpad-step-tag">Step 2 of 5</div>
              <h3 className="launchpad-card-title">Teach & Play Together</h3>
              <p className="launchpad-card-desc">
                Simple everyday games, speech tips, motor exercises, and visual schedule builders.
              </p>
              <div className="launchpad-card-action">
                <span>Start Teaching Guide</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Card 2: Daily Care & Haven */}
            <div 
              className="launchpad-card launchpad-card-care"
              onClick={() => handleNav(3, 'mothers-toolkit')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(3, 'mothers-toolkit')}
            >
              <div className="launchpad-icon-wrap launchpad-icon-care">
                <Heart size={24} />
              </div>
              <div className="launchpad-step-tag">Step 3 of 5</div>
              <h3 className="launchpad-card-title">Daily Care & Haven</h3>
              <p className="launchpad-card-desc">
                First 12 baby signs, gentle feeding guidance, soothing sanctuary, and appointment tools.
              </p>
              <div className="launchpad-card-action">
                <span>Open Mother's Haven</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Card 3: Medical Facts */}
            <div 
              className="launchpad-card launchpad-card-facts"
              onClick={() => handleNav(4, 'knowledge-base')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(4, 'knowledge-base')}
            >
              <div className="launchpad-icon-wrap launchpad-icon-facts">
                <Sparkles size={24} />
              </div>
              <div className="launchpad-step-tag">Step 4 of 5</div>
              <h3 className="launchpad-card-title">Medical Facts Made Simple</h3>
              <p className="launchpad-card-desc">
                Digestible health insights, myth-busting flip cards, and inspiring trailblazer stories.
              </p>
              <div className="launchpad-card-action">
                <span>Explore Health Facts</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Card 4: Support & Community */}
            <div 
              className="launchpad-card launchpad-card-support"
              onClick={() => handleNav(5, 'resources')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(5, 'resources')}
            >
              <div className="launchpad-icon-wrap launchpad-icon-support">
                <Users size={24} />
              </div>
              <div className="launchpad-step-tag">Step 5 of 5</div>
              <h3 className="launchpad-card-title">Support & Community</h3>
              <p className="launchpad-card-desc">
                Parent circles, pediatric hotlines, recommended books, and compassionate networks.
              </p>
              <div className="launchpad-card-action">
                <span>Find Support</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 50px;
          padding-bottom: 50px;
          overflow: hidden;
        }

        .hero-grid-container {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          align-items: center;
          gap: clamp(32px, 4vw, 56px);
          margin-bottom: 54px;
        }

        .hero-badge-wrap {
          margin-bottom: 16px;
        }

        .hero-headline {
          font-size: clamp(2.3rem, 4.2vw, 3.3rem);
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.18;
        }

        .hero-headline-accent {
          color: var(--sage-500);
        }

        .hero-subtext {
          font-size: 1.08rem;
          color: var(--text-secondary);
          margin-bottom: 26px;
          max-width: 530px;
          line-height: 1.65;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 520px;
        }

        .hero-stat-card {
          background: white;
          border-radius: var(--radius-md);
          padding: 13px 12px;
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .hero-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
          border-color: rgba(82, 121, 111, 0.25);
        }

        .hero-stat-num {
          font-size: 1.35rem;
          font-weight: 800;
          font-family: 'Quicksand', sans-serif;
          line-height: 1.2;
          margin-bottom: 3px;
        }

        .hero-stat-sage { color: var(--sage-600); }
        .hero-stat-sky { color: var(--sky-600); }
        .hero-stat-honey { color: var(--honey-600); }

        .hero-stat-label {
          font-size: 0.82rem;
          color: var(--text-primary);
          font-weight: 700;
          line-height: 1.3;
        }

        .hero-stat-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.3;
          margin-top: 2px;
        }

        .hero-citation {
          margin-top: 12px;
          font-size: 0.76rem;
          color: var(--text-muted);
          font-style: italic;
          max-width: 520px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Desktop Image Styling */
        .hero-image-desktop {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .hero-mother-artwork-desktop {
          position: relative;
          z-index: 1;
          width: auto;
          max-width: 400px;
          max-height: 480px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 42px rgba(82, 121, 111, 0.22));
          transition: var(--transition-smooth);
          -webkit-mask-image: linear-gradient(to bottom, black 88%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 88%, transparent 100%);
        }

        .hero-halo-glow-desktop {
          position: absolute;
          width: clamp(360px, 42vw, 520px);
          height: clamp(360px, 42vw, 520px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 240, 236, 0.95) 0%, rgba(254, 245, 220, 0.6) 55%, rgba(255, 255, 255, 0) 72%);
          filter: blur(48px);
          z-index: 0;
          pointer-events: none;
        }

        /* Mobile Image - Hidden on Desktop */
        .hero-image-mobile {
          display: none;
        }

        /* Learning Launchpad Section */
        .hero-launchpad-section {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-soft);
          padding: 36px 32px;
        }

        .hero-launchpad-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 28px auto;
        }

        .hero-launchpad-title {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .hero-launchpad-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .hero-launchpad-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
        }

        .launchpad-card {
          border-radius: var(--radius-lg);
          padding: 22px 20px;
          border: 1px solid var(--border-soft);
          background: var(--color-canvas);
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .launchpad-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
          background: #ffffff;
        }

        .launchpad-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .launchpad-icon-teach { background: #edf7f1; color: #3d6d56; }
        .launchpad-icon-care { background: #fdf2eb; color: #b85333; }
        .launchpad-icon-facts { background: #edf4fb; color: #2b5c8f; }
        .launchpad-icon-support { background: #f6f2fb; color: #6e5494; }

        .launchpad-step-tag {
          font-size: 0.70rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .launchpad-card-title {
          font-size: 1.08rem;
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .launchpad-card-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .launchpad-card-action {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--sage-600);
          margin-top: auto;
        }

        .launchpad-card:hover .launchpad-card-action {
          color: var(--sage-700);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1023px) {
          .hero-section {
            padding-top: 30px;
            padding-bottom: 40px;
          }

          .hero-grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 36px;
          }

          .hero-left-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 680px;
            margin: 0 auto;
          }

          .hero-image-desktop {
            display: none !important;
          }

          .hero-image-mobile {
            display: flex !important;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 10px auto 18px auto;
          }

          .hero-mother-artwork-mobile {
            position: relative;
            z-index: 1;
            width: auto;
            max-width: 215px;
            max-height: 275px;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 14px 30px rgba(82, 121, 111, 0.22));
            -webkit-mask-image: linear-gradient(to bottom, black 87%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 87%, transparent 100%);
          }

          .hero-halo-glow-mobile {
            position: absolute;
            width: 240px;
            height: 240px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(232, 240, 236, 0.95) 0%, rgba(254, 245, 220, 0.65) 55%, rgba(255, 255, 255, 0) 72%);
            filter: blur(32px);
            z-index: 0;
            pointer-events: none;
          }

          .hero-headline {
            font-size: clamp(2rem, 5.2vw, 2.6rem);
            margin-bottom: 12px;
          }

          .hero-subtext {
            font-size: 1rem;
            margin-bottom: 20px;
          }

          .hero-cta-buttons {
            justify-content: center;
            margin-bottom: 24px;
          }

          .hero-stats-grid {
            margin: 0 auto;
            width: 100%;
          }

          .hero-citation {
            justify-content: center;
            text-align: center;
          }

          .hero-launchpad-section {
            padding: 24px 20px;
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: clamp(1.8rem, 6.8vw, 2.25rem);
            line-height: 1.22;
          }

          .hero-subtext {
            font-size: 0.94rem;
            line-height: 1.58;
            padding: 0 4px;
          }

          .hero-mother-artwork-mobile {
            max-width: 190px;
            max-height: 250px;
          }

          .hero-halo-glow-mobile {
            width: 210px;
            height: 210px;
            filter: blur(26px);
          }

          .hero-cta-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 10px;
            margin-bottom: 22px;
          }

          .hero-btn {
            width: 100%;
            padding: 11px 18px;
            font-size: 0.92rem;
          }

          .hero-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
            width: 100%;
            padding: 0 2px;
          }

          .hero-stat-card {
            padding: 10px 4px;
            border-radius: var(--radius-sm);
          }

          .hero-stat-num {
            font-size: clamp(1.1rem, 4vw, 1.28rem);
          }

          .hero-stat-label {
            font-size: clamp(0.70rem, 2.4vw, 0.76rem);
          }

          .hero-stat-sub {
            font-size: clamp(0.60rem, 1.9vw, 0.66rem);
          }

          .hero-launchpad-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
