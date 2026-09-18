import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { PAGES } from './components/PagePaginationBar';
import Hero3DSection from './components/Hero3DSection';
import MothersGuideSection from './components/MothersGuideSection';
import MothersToolkitSection from './components/MothersToolkitSection';
import ActivityGenerator from './components/ActivityGenerator';
import KnowledgeBaseSection from './components/KnowledgeBaseSection';
import DifferencesSection from './components/DifferencesSection';
import MilestoneCompass from './components/MilestoneCompass';
import MythVsFact from './components/MythVsFact';
import RoutineBuilder from './components/RoutineBuilder';
import SupportResources from './components/SupportResources';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    // Check initial URL hash
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const found = PAGES.find(p => p.hash === hash);
    return found ? found.id : 1;
  });

  // Listen to popstate / hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const found = PAGES.find(p => p.hash === hash);
      if (found) {
        setCurrentPage(found.id);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId, sectionId = null) => {
    setCurrentPage(pageId);
    const targetPage = PAGES.find(p => p.id === pageId);
    if (targetPage) {
      window.history.replaceState(null, '', `#${targetPage.hash}`);
    }

    // Scroll to top or specific target section
    setTimeout(() => {
      if (sectionId) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);
  };

  return (
    <div className="min-h-screen app-layout-container">
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigatePage={handlePageChange}
      />

      {/* Floating Serene Navigation */}
      <Navbar 
        onOpenSearch={() => setSearchOpen(true)} 
        currentPage={currentPage}
        onNavigatePage={handlePageChange}
      />

      {/* Main Content Sections Organized by Page */}
      <main className="main-content-area">
        {/* =========================================================================
            PAGE 1: Welcome & Roadmap (Hero + Child Artwork + Launchpad)
            ========================================================================= */}
        {currentPage === 1 && (
          <div className="page-fade-in" key="page-1">
            <Hero3DSection onNavigatePage={handlePageChange} />
          </div>
        )}

        {/* =========================================================================
            PAGE 2: Teach & Play Together (Mother's Guide + Activities + Routine)
            ========================================================================= */}
        {currentPage === 2 && (
          <div className="page-fade-in" key="page-2">
            {/* 1. Mother's Teaching Journey: Speech, Gross Motor, Fine Motor, Social */}
            <MothersGuideSection />

            {/* 2. Interactive Home Activity Planner */}
            <ActivityGenerator />

            {/* 3. Visual Daily Schedule Maker */}
            <RoutineBuilder />
          </div>
        )}

        {/* =========================================================================
            PAGE 3: Daily Care & Mama's Haven (Sanctuary, Signs, Feeding, Appointments)
            ========================================================================= */}
        {currentPage === 3 && (
          <div className="page-fade-in" key="page-3">
            {/* 1. Mother's Haven & Daily Toolkit */}
            <MothersToolkitSection />

            {/* 2. Compassionate Milestone Compass */}
            <MilestoneCompass />
          </div>
        )}

        {/* =========================================================================
            PAGE 4: Medical Facts Made Simple (Knowledge Base, Myths & Facts, Trailblazers)
            ========================================================================= */}
        {currentPage === 4 && (
          <div className="page-fade-in" key="page-4">
            {/* 1. Medical Knowledge Base */}
            <KnowledgeBaseSection />

            {/* 2. Interactive Myth vs Fact Flip Cards */}
            <MythVsFact />

            {/* 3. Celebrating Individual Differences & Trailblazers */}
            <DifferencesSection />
          </div>
        )}

        {/* =========================================================================
            PAGE 5: Support & Community (Hotlines, Support Groups, Reading)
            ========================================================================= */}
        {currentPage === 5 && (
          <div className="page-fade-in" key="page-5">
            {/* 1. Support Networks & Recommended Reading */}
            <SupportResources />
          </div>
        )}


      </main>

      {/* Peaceful Footer */}
      <Footer onNavigatePage={handlePageChange} />

      <style>{`
        .app-layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--color-canvas);
        }

        .main-content-area {
          flex: 1;
          padding-top: 64px;
        }

        .page-fade-in {
          animation: pageFadeIn 0.35s ease-out forwards;
        }

        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
