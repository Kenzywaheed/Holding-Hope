import React from 'react';
import { 
  Home, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

export const PAGES = [
  {
    id: 1,
    hash: 'welcome',
    label: 'Welcome',
    shortLabel: 'Welcome',
    subtitle: 'Sanctuary & Roadmap',
    icon: Home,
    color: 'var(--sage-600)',
    bgLight: 'var(--sage-50)'
  },
  {
    id: 2,
    hash: 'teach',
    label: 'Teach & Play',
    shortLabel: 'Teach & Play',
    subtitle: 'Daily Teaching & Activities',
    icon: BookOpen,
    color: '#3d6d56',
    bgLight: '#edf7f1'
  },
  {
    id: 3,
    hash: 'care',
    label: 'Daily Care & Haven',
    shortLabel: 'Daily Care',
    subtitle: 'Sanctuary, Signs & Feeding',
    icon: Heart,
    color: '#b85333',
    bgLight: '#fdf2eb'
  },
  {
    id: 4,
    hash: 'facts',
    label: 'Medical Facts',
    shortLabel: 'Medical Facts',
    subtitle: 'Clear Health & Myth Busting',
    icon: Sparkles,
    color: '#2b5c8f',
    bgLight: '#edf4fb'
  },
  {
    id: 5,
    hash: 'support',
    label: 'Support & Community',
    shortLabel: 'Support',
    subtitle: 'Hotlines & Circles',
    icon: Users,
    color: '#6e5494',
    bgLight: '#f6f2fb'
  }
];

const MAMA_AFFIRMATIONS = [
  "Take a deep breath, Mama. You are the heartbeat of your child's world.",
  "Every small sign, word, and smile you nurture is a monumental triumph.",
  "There is no rush. Your child learns best surrounded by your patience and love.",
  "Understanding replaces fear with confidence. You are learning together.",
  "You are never alone on this path. A loving community walks right beside you."
];

export default function PagePaginationBar({ currentPage, onPageChange }) {
  const activePageData = PAGES.find(p => p.id === currentPage) || PAGES[0];

  return (
    <nav 
      aria-label="Learning Journey Navigation"
      className="page-nav-bar-container"
    >
      <div className="container-peace">
        <div className="page-nav-inner">
          {/* Progress Indicator Label (Mobile & Tablet) */}
          <div className="mobile-page-indicator">
            <span className="mobile-step-badge">
              Step {currentPage} of 5
            </span>
            <span className="mobile-step-title">
              {activePageData.label}
            </span>
          </div>

          {/* Desktop & Tablet Navigation Tabs */}
          <div className="page-nav-tabs">
            {PAGES.map((page) => {
              const Icon = page.icon;
              const isActive = page.id === currentPage;
              const isPast = page.id < currentPage;

              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`page-tab-btn ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="page-tab-num">
                    {page.id}
                  </span>
                  <Icon size={16} className="page-tab-icon" />
                  <span className="page-tab-label">
                    {page.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .page-nav-bar-container {
          position: sticky;
          top: 68px;
          z-index: 990;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-soft);
          box-shadow: 0 4px 16px -2px rgba(41, 50, 65, 0.04);
          padding: 8px 0;
          transition: var(--transition-smooth);
        }

        .page-nav-inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-page-indicator {
          display: none;
        }

        .page-nav-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 2px 4px;
        }

        .page-nav-tabs::-webkit-scrollbar {
          display: none;
        }

        .page-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: var(--radius-full);
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-secondary);
          font-family: 'Quicksand', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }

        .page-tab-btn:hover {
          background: var(--sage-50);
          color: var(--sage-700);
        }

        .page-tab-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.06);
          color: var(--text-secondary);
        }

        .page-tab-btn.active {
          background: var(--sage-600);
          color: #ffffff;
          box-shadow: 0 3px 12px rgba(65, 97, 89, 0.28);
        }

        .page-tab-btn.active .page-tab-num {
          background: rgba(255, 255, 255, 0.28);
          color: #ffffff;
        }

        .page-tab-btn.past {
          color: var(--sage-600);
        }

        .page-tab-btn.past .page-tab-num {
          background: var(--sage-100);
          color: var(--sage-600);
        }

        @media (max-width: 860px) {
          .page-nav-bar-container {
            top: 60px;
            padding: 6px 0;
          }

          .page-nav-tabs {
            justify-content: flex-start;
            width: 100%;
            padding: 2px 6px;
          }

          .page-tab-btn {
            padding: 6px 12px;
            font-size: 0.82rem;
          }
        }

        @media (max-width: 520px) {
          .page-nav-inner {
            flex-direction: column;
            gap: 6px;
          }

          .mobile-page-indicator {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 6px;
          }

          .mobile-step-badge {
            font-size: 0.74rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--sage-700);
            background: var(--sage-100);
            padding: 3px 9px;
            border-radius: var(--radius-full);
          }

          .mobile-step-title {
            font-size: 0.84rem;
            font-weight: 700;
            color: var(--text-primary);
            font-family: 'Quicksand', sans-serif;
          }

          .page-tab-btn .page-tab-label {
            display: none;
          }

          .page-tab-btn {
            padding: 6px 12px;
          }
        }
      `}</style>
    </nav>
  );
}

/**
 * Bottom Page Navigation Controller:
 * Displays previous/next page buttons, progress dots, and comforting maternal affirmations
 */
export function BottomPagePagination({ currentPage, onPageChange }) {
  const currentIdx = currentPage - 1;
  const prevPage = currentPage > 1 ? PAGES[currentIdx - 1] : null;
  const nextPage = currentPage < 5 ? PAGES[currentIdx + 1] : null;
  const currentAffirmation = MAMA_AFFIRMATIONS[currentIdx] || MAMA_AFFIRMATIONS[0];

  return (
    <div className="bottom-pagination-wrap">
      <div className="container-peace">
        <div className="bottom-pagination-card">
          {/* Gentle Encouragement Note for the Mother */}
          <div className="bottom-mama-affirmation">
            <Heart size={16} className="mama-heart-icon" />
            <span>{currentAffirmation}</span>
          </div>

          {/* Navigation Action Buttons & Progress Dots */}
          <div className="bottom-nav-controls">
            {/* Previous Button */}
            {prevPage ? (
              <button
                onClick={() => onPageChange(prevPage.id)}
                className="btn-page-nav btn-page-prev"
                aria-label={`Go to previous page: ${prevPage.label}`}
              >
                <ChevronLeft size={18} />
                <span className="btn-nav-text">
                  <small>Back to</small>
                  <strong>{prevPage.shortLabel}</strong>
                </span>
              </button>
            ) : (
              <div style={{ width: '130px' }} className="btn-placeholder" />
            )}

            {/* Progress Dots */}
            <div className="pagination-dots-indicator" aria-label={`Step ${currentPage} of 5`}>
              {PAGES.map((page) => (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`page-dot ${page.id === currentPage ? 'active' : ''} ${page.id < currentPage ? 'completed' : ''}`}
                  title={`Go to step ${page.id}: ${page.label}`}
                  aria-label={`Step ${page.id}: ${page.label}`}
                />
              ))}
            </div>

            {/* Next or Restart Button */}
            {nextPage ? (
              <button
                onClick={() => onPageChange(nextPage.id)}
                className="btn-page-nav btn-page-next"
                aria-label={`Go to next page: ${nextPage.label}`}
              >
                <span className="btn-nav-text">
                  <small>Next Step</small>
                  <strong>{nextPage.shortLabel}</strong>
                </span>
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={() => onPageChange(1)}
                className="btn-page-nav btn-page-restart"
                aria-label="Restart journey at Welcome"
              >
                <span className="btn-nav-text">
                  <small>Completed!</small>
                  <strong>Return to Home</strong>
                </span>
                <RotateCcw size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .bottom-pagination-wrap {
          padding: 40px 0 60px 0;
          position: relative;
          z-index: 10;
        }

        .bottom-pagination-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-medium);
          padding: 24px 32px;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        .bottom-mama-affirmation {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.94rem;
          color: var(--sage-700);
          background: var(--sage-50);
          border: 1px solid var(--sage-200);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          margin-bottom: 24px;
          font-style: italic;
          line-height: 1.4;
        }

        .mama-heart-icon {
          color: var(--honey-600);
          flex-shrink: 0;
        }

        .bottom-nav-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .btn-page-nav {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-soft);
          background: #ffffff;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-decoration: none;
          min-width: 140px;
        }

        .btn-page-prev {
          color: var(--text-secondary);
          justify-content: flex-start;
          text-align: left;
        }

        .btn-page-prev:hover {
          background: var(--sage-50);
          border-color: var(--sage-300);
          color: var(--sage-700);
          transform: translateX(-3px);
        }

        .btn-page-next, .btn-page-restart {
          background: linear-gradient(135deg, var(--sage-500) 0%, var(--sage-600) 100%);
          color: #ffffff;
          border-color: transparent;
          justify-content: flex-end;
          text-align: right;
          box-shadow: 0 4px 14px rgba(82, 121, 111, 0.25);
        }

        .btn-page-next:hover, .btn-page-restart:hover {
          transform: translateX(3px);
          box-shadow: 0 6px 20px rgba(82, 121, 111, 0.35);
        }

        .btn-nav-text {
          display: flex;
          flex-direction: column;
        }

        .btn-nav-text small {
          font-size: 0.70rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.85;
          line-height: 1.2;
        }

        .btn-nav-text strong {
          font-size: 0.90rem;
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          line-height: 1.2;
        }

        .pagination-dots-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .page-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(82, 121, 111, 0.20);
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 0;
        }

        .page-dot:hover {
          background: rgba(82, 121, 111, 0.45);
          transform: scale(1.2);
        }

        .page-dot.active {
          width: 28px;
          border-radius: 8px;
          background: var(--sage-600);
        }

        .page-dot.completed {
          background: var(--sage-400);
        }

        @media (max-width: 640px) {
          .bottom-pagination-wrap {
            padding: 30px 0 50px 0;
          }

          .bottom-pagination-card {
            padding: 18px 16px;
          }

          .bottom-mama-affirmation {
            font-size: 0.82rem;
            padding: 6px 14px;
            margin-bottom: 18px;
          }

          .btn-page-nav {
            padding: 8px 12px;
            min-width: auto;
          }

          .btn-nav-text strong {
            font-size: 0.80rem;
          }

          .btn-placeholder {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
